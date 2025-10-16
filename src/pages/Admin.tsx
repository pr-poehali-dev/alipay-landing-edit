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
import ParticlesBackground from "@/components/ParticlesBackground";
import MouseGlow from "@/components/MouseGlow";

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
      case "pending": return "bg-amber-500";
      case "processing": return "bg-blue-500";
      case "completed": return "bg-emerald-500";
      case "rejected": return "bg-rose-500";
      default: return "bg-slate-500";
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
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
        <ParticlesBackground />
        <MouseGlow />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        <Card className="w-full max-w-md border border-white/20 bg-white/5 backdrop-blur-2xl shadow-2xl shadow-purple-500/30 relative z-10 animate-scale-in">
          <CardHeader>
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mb-4 mx-auto shadow-xl shadow-purple-500/50 animate-pulse-glow">
              <Icon name="Shield" className="text-white" size={32} />
            </div>
            <CardTitle className="text-4xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent text-center">
              Вход в админку
            </CardTitle>
            <CardDescription className="text-gray-400 text-center text-lg">
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
                className="bg-white/10 backdrop-blur-xl border-white/20 text-white placeholder:text-gray-500 h-14 text-lg shadow-lg focus:shadow-purple-500/50"
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:shadow-2xl hover:shadow-purple-500/50 text-white h-14 text-lg hover:scale-[1.02] transition-all"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 relative overflow-hidden">
      <ParticlesBackground />
      <MouseGlow />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <header className="relative border-b border-white/10 backdrop-blur-2xl bg-white/5 shadow-2xl animate-slide-up">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-xl shadow-purple-500/50 group-hover:scale-110 transition-all duration-300 animate-pulse-glow">
                <Icon name="Shield" className="text-white" size={28} />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                Админ-панель
              </span>
            </div>
            <Button
              variant="outline"
              onClick={() => setIsAuthenticated(false)}
              className="border-white/20 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 shadow-lg hover:scale-105 transition-all"
            >
              <Icon name="LogOut" className="mr-2" size={18} />
              Выйти
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          {[
            { label: "Всего заказов", value: orders.length, icon: "ShoppingCart", gradient: "from-violet-400 to-purple-400" },
            { label: "В ожидании", value: orders.filter(o => o.status === "pending").length, icon: "Clock", gradient: "from-amber-400 to-orange-400" },
            { label: "Завершено", value: orders.filter(o => o.status === "completed").length, icon: "CheckCircle2", gradient: "from-emerald-400 to-green-400" },
            { label: "Выручка", value: `${orders.filter(o => o.status === "completed").reduce((sum, o) => sum + o.amount, 0)}₽`, icon: "DollarSign", gradient: "from-cyan-400 to-blue-400" },
          ].map((stat, index) => (
            <Card key={index} className="border border-white/20 bg-white/5 backdrop-blur-2xl shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                    <p className="text-4xl font-bold text-white mt-2">{stat.value}</p>
                  </div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-xl`}>
                    <Icon name={stat.icon as any} className="text-white" size={28} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border border-white/20 bg-white/5 backdrop-blur-2xl shadow-2xl shadow-purple-500/30 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <CardHeader>
            <CardTitle className="text-3xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Управление заказами
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg">
                <TabsTrigger value="all" className="data-[state=active]:bg-white/20 text-white">Все</TabsTrigger>
                <TabsTrigger value="pending" className="data-[state=active]:bg-white/20 text-white">Ожидают</TabsTrigger>
                <TabsTrigger value="processing" className="data-[state=active]:bg-white/20 text-white">В обработке</TabsTrigger>
                <TabsTrigger value="completed" className="data-[state=active]:bg-white/20 text-white">Завершены</TabsTrigger>
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
    <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="border-white/20 hover:bg-white/10">
            <TableHead className="text-gray-300 font-semibold">ID</TableHead>
            <TableHead className="text-gray-300 font-semibold">Alipay ID</TableHead>
            <TableHead className="text-gray-300 font-semibold">Сумма</TableHead>
            <TableHead className="text-gray-300 font-semibold">Дата</TableHead>
            <TableHead className="text-gray-300 font-semibold">Статус</TableHead>
            <TableHead className="text-gray-300 font-semibold">Действия</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id} className="border-white/20 hover:bg-white/10 transition-all duration-300">
              <TableCell className="text-white font-semibold">{order.id}</TableCell>
              <TableCell className="text-gray-300">{order.alipayId}</TableCell>
              <TableCell className="text-white font-bold">{order.amount}₽</TableCell>
              <TableCell className="text-gray-400">{order.date}</TableCell>
              <TableCell>
                <Badge className={`${getStatusColor(order.status)} text-white shadow-lg`}>
                  {getStatusText(order.status)}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  {order.status !== "completed" && (
                    <Button
                      size="sm"
                      onClick={() => onUpdateStatus(order.id, "completed")}
                      className="bg-emerald-500 hover:bg-emerald-600 shadow-lg hover:scale-110 transition-transform"
                    >
                      <Icon name="Check" size={16} />
                    </Button>
                  )}
                  {order.status === "pending" && (
                    <Button
                      size="sm"
                      onClick={() => onUpdateStatus(order.id, "processing")}
                      className="bg-blue-500 hover:bg-blue-600 shadow-lg hover:scale-110 transition-transform"
                    >
                      <Icon name="Clock" size={16} />
                    </Button>
                  )}
                  {order.status !== "rejected" && (
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => onUpdateStatus(order.id, "rejected")}
                      className="shadow-lg hover:scale-110 transition-transform"
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
    </div>
  );
};

export default Admin;