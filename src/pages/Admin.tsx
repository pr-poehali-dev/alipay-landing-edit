import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Order {
  id: string;
  alipayId: string;
  amount: number;
  status: "pending" | "processing" | "completed" | "rejected";
  date: string;
}

const Admin = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "ORD-001",
      alipayId: "user@example.com",
      amount: 5000,
      status: "pending",
      date: "2024-10-16 14:30",
    },
    {
      id: "ORD-002",
      alipayId: "test@alipay.com",
      amount: 3000,
      status: "processing",
      date: "2024-10-16 13:15",
    },
    {
      id: "ORD-003",
      alipayId: "customer@mail.ru",
      amount: 10000,
      status: "completed",
      date: "2024-10-16 12:00",
    },
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsAuthenticated(true);
    }
  };

  const updateOrderStatus = (orderId: string, newStatus: Order["status"]) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "pending": return "bg-yellow-500";
      case "processing": return "bg-blue-500";
      case "completed": return "bg-green-500";
      case "rejected": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusText = (status: Order["status"]) => {
    switch (status) {
      case "pending": return "Ожидает";
      case "processing": return "В обработке";
      case "completed": return "Завершен";
      case "rejected": return "Отклонен";
      default: return status;
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-purple-500/20 bg-black/40 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-3xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Вход в админку
            </CardTitle>
            <CardDescription className="text-gray-400">
              Введите пароль для доступа к панели управления
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-black/50 border-purple-500/30 text-white"
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
              >
                Войти
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                <Icon name="Shield" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Админ-панель
              </span>
            </div>
            <Button
              variant="outline"
              onClick={() => setIsAuthenticated(false)}
              className="border-purple-500/30 text-white hover:bg-purple-500/20"
            >
              <Icon name="LogOut" className="mr-2" size={16} />
              Выйти
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Всего заказов", value: orders.length, icon: "ShoppingCart", color: "purple" },
            { label: "В ожидании", value: orders.filter(o => o.status === "pending").length, icon: "Clock", color: "yellow" },
            { label: "Завершено", value: orders.filter(o => o.status === "completed").length, icon: "CheckCircle2", color: "green" },
            { label: "Выручка", value: `${orders.filter(o => o.status === "completed").reduce((sum, o) => sum + o.amount, 0)}₽`, icon: "DollarSign", color: "cyan" },
          ].map((stat, index) => (
            <Card key={index} className="border-purple-500/20 bg-black/40 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                    <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 flex items-center justify-center`}>
                    <Icon name={stat.icon as any} className="text-white" size={24} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-purple-500/20 bg-black/40 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Управление заказами
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="bg-black/50 border border-purple-500/20">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="pending">Ожидают</TabsTrigger>
                <TabsTrigger value="processing">В обработке</TabsTrigger>
                <TabsTrigger value="completed">Завершены</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <OrdersTable 
                  orders={orders} 
                  onUpdateStatus={updateOrderStatus}
                  getStatusColor={getStatusColor}
                  getStatusText={getStatusText}
                />
              </TabsContent>
              
              <TabsContent value="pending" className="mt-6">
                <OrdersTable 
                  orders={orders.filter(o => o.status === "pending")} 
                  onUpdateStatus={updateOrderStatus}
                  getStatusColor={getStatusColor}
                  getStatusText={getStatusText}
                />
              </TabsContent>
              
              <TabsContent value="processing" className="mt-6">
                <OrdersTable 
                  orders={orders.filter(o => o.status === "processing")} 
                  onUpdateStatus={updateOrderStatus}
                  getStatusColor={getStatusColor}
                  getStatusText={getStatusText}
                />
              </TabsContent>
              
              <TabsContent value="completed" className="mt-6">
                <OrdersTable 
                  orders={orders.filter(o => o.status === "completed")} 
                  onUpdateStatus={updateOrderStatus}
                  getStatusColor={getStatusColor}
                  getStatusText={getStatusText}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

interface OrdersTableProps {
  orders: Order[];
  onUpdateStatus: (orderId: string, status: Order["status"]) => void;
  getStatusColor: (status: Order["status"]) => string;
  getStatusText: (status: Order["status"]) => string;
}

const OrdersTable = ({ orders, onUpdateStatus, getStatusColor, getStatusText }: OrdersTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-purple-500/20 hover:bg-purple-500/10">
          <TableHead className="text-gray-300">ID</TableHead>
          <TableHead className="text-gray-300">Alipay ID</TableHead>
          <TableHead className="text-gray-300">Сумма</TableHead>
          <TableHead className="text-gray-300">Дата</TableHead>
          <TableHead className="text-gray-300">Статус</TableHead>
          <TableHead className="text-gray-300">Действия</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id} className="border-purple-500/20 hover:bg-purple-500/5">
            <TableCell className="text-white font-medium">{order.id}</TableCell>
            <TableCell className="text-gray-300">{order.alipayId}</TableCell>
            <TableCell className="text-white font-semibold">{order.amount}₽</TableCell>
            <TableCell className="text-gray-400">{order.date}</TableCell>
            <TableCell>
              <Badge className={`${getStatusColor(order.status)} text-white`}>
                {getStatusText(order.status)}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex gap-2">
                {order.status !== "completed" && (
                  <Button
                    size="sm"
                    onClick={() => onUpdateStatus(order.id, "completed")}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Icon name="Check" size={16} />
                  </Button>
                )}
                {order.status === "pending" && (
                  <Button
                    size="sm"
                    onClick={() => onUpdateStatus(order.id, "processing")}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Icon name="Clock" size={16} />
                  </Button>
                )}
                {order.status !== "rejected" && (
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => onUpdateStatus(order.id, "rejected")}
                  >
                    <Icon name="X" size={16} />
                  </Button>
                )}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Admin;
