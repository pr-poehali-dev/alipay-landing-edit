import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-sky-50 to-cyan-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNhNzhiZmEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
      
      <header className="relative border-b border-white/40 backdrop-blur-xl bg-white/30 shadow-lg">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-400 to-cyan-400 flex items-center justify-center shadow-xl shadow-violet-300/50">
                <Icon name="Sparkles" className="text-white" size={26} />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
                AliPay Fast
              </span>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#replenish" className="text-slate-700 hover:text-violet-600 transition-colors font-medium">
                Пополнение
              </a>
              <a href="#instructions" className="text-slate-700 hover:text-violet-600 transition-colors font-medium">
                Инструкция
              </a>
              <a href="#support" className="text-slate-700 hover:text-violet-600 transition-colors font-medium">
                Поддержка
              </a>
              <a href="#faq" className="text-slate-700 hover:text-violet-600 transition-colors font-medium">
                FAQ
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 relative z-10">
        <section id="hero" className="text-center mb-20">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/60 shadow-lg">
            <span className="text-sm font-semibold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
              ⚡ Мгновенные переводы 24/7
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-500 to-cyan-500 bg-clip-text text-transparent leading-tight">
            Пополнение Alipay
          </h1>
          <p className="text-2xl text-slate-600 max-w-2xl mx-auto font-light">
            Переводы за 60 секунд без комиссии
          </p>
        </section>

        <section id="replenish" className="mb-20">
          <Card className="max-w-2xl mx-auto border border-white/60 bg-white/40 backdrop-blur-2xl shadow-2xl shadow-violet-200/50">
            <CardHeader className="pb-8">
              <CardTitle className="text-4xl bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
                Форма пополнения
              </CardTitle>
              <CardDescription className="text-slate-600 text-lg">
                Заполните данные для мгновенного перевода
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="alipayId" className="text-slate-700 text-base font-medium">
                    Alipay ID
                  </Label>
                  <Input
                    id="alipayId"
                    placeholder="Введите ваш Alipay ID"
                    value={alipayId}
                    onChange={(e) => setAlipayId(e.target.value)}
                    className="bg-white/60 backdrop-blur-md border-white/60 text-slate-800 h-14 text-lg shadow-lg focus:shadow-violet-300/50 transition-shadow"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="amount" className="text-slate-700 text-base font-medium">
                    Сумма пополнения (₽)
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="1000"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-white/60 backdrop-blur-md border-white/60 text-slate-800 h-14 text-lg shadow-lg focus:shadow-violet-300/50 transition-shadow"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {[500, 1000, 3000, 5000].map((preset) => (
                    <Button
                      key={preset}
                      type="button"
                      variant="outline"
                      onClick={() => setAmount(preset.toString())}
                      className="bg-white/50 backdrop-blur-md border-white/60 hover:bg-white/70 hover:shadow-lg hover:scale-105 transition-all text-slate-700 font-semibold h-12"
                    >
                      {preset}₽
                    </Button>
                  ))}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white font-semibold py-7 text-xl shadow-2xl shadow-violet-300/50 hover:shadow-violet-400/60 hover:scale-[1.02] transition-all"
                >
                  <Icon name="Zap" className="mr-2" size={24} />
                  Пополнить сейчас
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        <section id="instructions" className="mb-20">
          <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
            Как это работает
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                className="border border-white/60 bg-white/40 backdrop-blur-2xl shadow-xl shadow-violet-200/30 hover:shadow-2xl hover:shadow-violet-300/50 hover:scale-105 transition-all group"
              >
                <CardHeader className="pb-6">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-400 to-cyan-400 flex items-center justify-center mb-6 mx-auto shadow-xl shadow-violet-300/50 group-hover:scale-110 transition-transform">
                    <Icon name={step.icon as any} className="text-white" size={36} />
                  </div>
                  <CardTitle className="text-center text-slate-800 text-2xl">{step.title}</CardTitle>
                  <CardDescription className="text-center text-slate-600 text-base leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section id="support" className="mb-20">
          <Card className="max-w-4xl mx-auto border border-white/60 bg-white/40 backdrop-blur-2xl shadow-2xl shadow-violet-200/50">
            <CardHeader>
              <CardTitle className="text-4xl bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
                Чат поддержки
              </CardTitle>
              <CardDescription className="text-slate-600 text-lg">
                Наши операторы онлайн 24/7
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-white/30 backdrop-blur-md rounded-3xl p-6 mb-6 h-96 overflow-y-auto space-y-4 border border-white/40 shadow-inner">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icon name="Headphones" className="text-white" size={20} />
                  </div>
                  <div className="bg-white/70 backdrop-blur-md rounded-3xl rounded-tl-sm p-5 max-w-md shadow-lg border border-white/60">
                    <p className="text-slate-800">
                      Здравствуйте! Чем могу помочь?
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <Input
                  placeholder="Введите сообщение..."
                  className="bg-white/60 backdrop-blur-md border-white/60 text-slate-800 h-14 shadow-lg"
                />
                <Button className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 shadow-xl h-14 px-6 hover:scale-105 transition-transform">
                  <Icon name="Send" size={22} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="faq" className="mb-20">
          <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
            Часто задаваемые вопросы
          </h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
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
                className="border border-white/60 bg-white/40 backdrop-blur-2xl px-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <AccordionTrigger className="text-slate-800 hover:text-violet-600 text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>

      <footer className="relative border-t border-white/40 backdrop-blur-xl bg-white/30 py-10 shadow-lg">
        <div className="container mx-auto px-4 text-center text-slate-600">
          <p className="text-lg">© 2024 AliPay Fast. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
