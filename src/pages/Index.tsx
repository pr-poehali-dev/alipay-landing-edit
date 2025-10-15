import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [alipayId, setAlipayId] = useState("");
  const [amount, setAmount] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: `Пополнение ${amount}₽ на Alipay ID: ${alipayId}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                <Icon name="Zap" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AliPay Fast
              </span>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#replenish" className="text-gray-300 hover:text-white transition-colors">
                Пополнение
              </a>
              <a href="#instructions" className="text-gray-300 hover:text-white transition-colors">
                Инструкция
              </a>
              <a href="#support" className="text-gray-300 hover:text-white transition-colors">
                Поддержка
              </a>
              <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                FAQ
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section id="hero" className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Мгновенное пополнение Alipay
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Быстрые платежи без комиссии. Перевод за 60 секунд.
          </p>
        </section>

        <section id="replenish" className="mb-16">
          <Card className="max-w-2xl mx-auto border-purple-500/20 bg-black/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Форма пополнения
              </CardTitle>
              <CardDescription className="text-gray-400">
                Заполните данные для мгновенного перевода
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="alipayId" className="text-gray-300">
                    Alipay ID
                  </Label>
                  <Input
                    id="alipayId"
                    placeholder="Введите ваш Alipay ID"
                    value={alipayId}
                    onChange={(e) => setAlipayId(e.target.value)}
                    className="bg-black/50 border-purple-500/30 text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-gray-300">
                    Сумма пополнения (₽)
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="1000"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-black/50 border-purple-500/30 text-white"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[500, 1000, 3000, 5000].map((preset) => (
                    <Button
                      key={preset}
                      type="button"
                      variant="outline"
                      onClick={() => setAmount(preset.toString())}
                      className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-500/30 hover:from-purple-500/30 hover:to-cyan-500/30"
                    >
                      {preset}₽
                    </Button>
                  ))}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold py-6 text-lg"
                >
                  <Icon name="Zap" className="mr-2" size={20} />
                  Пополнить сейчас
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        <section id="instructions" className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Как это работает
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: "UserPlus",
                title: "1. Введите данные",
                description: "Укажите ваш Alipay ID и сумму пополнения",
              },
              {
                icon: "CreditCard",
                title: "2. Оплатите",
                description: "Выберите удобный способ оплаты через СБП",
              },
              {
                icon: "CheckCircle2",
                title: "3. Получите деньги",
                description: "Средства поступят на счет за 60 секунд",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="border-purple-500/20 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm hover:scale-105 transition-transform"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mb-4 mx-auto">
                    <Icon name={step.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-center text-white">{step.title}</CardTitle>
                  <CardDescription className="text-center text-gray-400">
                    {step.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section id="support" className="mb-16">
          <Card className="max-w-4xl mx-auto border-purple-500/20 bg-black/40 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Чат поддержки
              </CardTitle>
              <CardDescription className="text-gray-400">
                Наши операторы онлайн 24/7
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-black/60 rounded-xl p-6 mb-4 h-96 overflow-y-auto space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Icon name="Headphones" className="text-white" size={16} />
                  </div>
                  <div className="bg-purple-900/40 rounded-2xl p-4 max-w-md">
                    <p className="text-white">
                      Здравствуйте! Чем могу помочь?
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Введите сообщение..."
                  className="bg-black/50 border-purple-500/30 text-white"
                />
                <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="faq" className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Часто задаваемые вопросы
          </h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {[
              {
                question: "Как быстро приходят деньги?",
                answer: "Средства поступают на ваш счет Alipay в течение 60 секунд после подтверждения платежа.",
              },
              {
                question: "Какие есть комиссии?",
                answer: "Мы не берем комиссию за перевод. Вы платите только ту сумму, которую хотите пополнить.",
              },
              {
                question: "Какие способы оплаты доступны?",
                answer: "Мы принимаем оплату через Систему быстрых платежей (СБП) от всех российских банков.",
              },
              {
                question: "Есть ли минимальная сумма?",
                answer: "Минимальная сумма пополнения составляет 500₽.",
              },
              {
                question: "Как связаться с поддержкой?",
                answer: "Вы можете написать в чат поддержки на этой странице. Наши операторы работают 24/7.",
              },
            ].map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-purple-500/20 bg-black/40 backdrop-blur-sm px-6 mb-2 rounded-xl"
              >
                <AccordionTrigger className="text-white hover:text-purple-400">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>

      <footer className="border-t border-white/10 backdrop-blur-sm bg-black/20 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 AliPay Fast. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
