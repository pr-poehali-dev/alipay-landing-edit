import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";
import ParticlesBackground from "@/components/ParticlesBackground";
import MouseGlow from "@/components/MouseGlow";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 relative overflow-hidden">
      <ParticlesBackground />
      <MouseGlow />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="absolute top-40 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float"></div>
      <div className="absolute top-60 left-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      
      <header className="relative border-b border-white/10 backdrop-blur-2xl bg-white/5 shadow-2xl animate-slide-up">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 animate-gradient flex items-center justify-center shadow-2xl shadow-purple-500/50 group-hover:scale-110 transition-all duration-300 animate-pulse-glow">
                <Icon name="Sparkles" className="text-white" size={28} />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                AliPay Fast
              </span>
            </div>
            <nav className="hidden md:flex gap-8">
              {['Пополнение', 'Инструкция', 'Поддержка', 'FAQ'].map((item, i) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300 font-medium relative group"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 relative z-10">
        <section id="hero" className="text-center mb-24 animate-scale-in">
          <div className="inline-block mb-6 px-8 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl hover:scale-105 transition-all duration-300 animate-float">
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              ⚡ Мгновенные переводы 24/7
            </span>
          </div>
          <h1 className="text-7xl md:text-9xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight animate-gradient">
            Пополнение<br/>Alipay
          </h1>
          <p className="text-3xl text-gray-300 max-w-3xl mx-auto font-light backdrop-blur-sm">
            Переводы за <span className="font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">60 секунд</span> без комиссии
          </p>
        </section>

        <section id="пополнение" className="mb-24 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Card className="max-w-3xl mx-auto border border-white/20 bg-white/5 backdrop-blur-2xl shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-[1.02] transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <CardHeader className="pb-8 relative">
              <CardTitle className="text-5xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                Форма пополнения
              </CardTitle>
              <CardDescription className="text-gray-400 text-xl">
                Заполните данные для мгновенного перевода
              </CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-3 group/input">
                  <Label htmlFor="alipayId" className="text-gray-300 text-lg font-medium">
                    Alipay ID
                  </Label>
                  <Input
                    id="alipayId"
                    placeholder="Введите ваш Alipay ID"
                    value={alipayId}
                    onChange={(e) => setAlipayId(e.target.value)}
                    className="bg-white/10 backdrop-blur-xl border-white/20 text-white placeholder:text-gray-500 h-16 text-lg shadow-lg focus:shadow-purple-500/50 focus:border-purple-400 transition-all duration-300 group-hover/input:bg-white/15"
                    required
                  />
                </div>
                <div className="space-y-3 group/input">
                  <Label htmlFor="amount" className="text-gray-300 text-lg font-medium">
                    Сумма пополнения (₽)
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="1000"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-white/10 backdrop-blur-xl border-white/20 text-white placeholder:text-gray-500 h-16 text-lg shadow-lg focus:shadow-cyan-500/50 focus:border-cyan-400 transition-all duration-300 group-hover/input:bg-white/15"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {[500, 1000, 3000, 5000].map((preset, i) => (
                    <Button
                      key={preset}
                      type="button"
                      variant="outline"
                      onClick={() => setAmount(preset.toString())}
                      className="bg-white/5 backdrop-blur-xl border-white/20 hover:bg-white/15 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-110 transition-all duration-300 text-white font-semibold h-14 text-lg"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {preset}₽
                    </Button>
                  ))}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 animate-gradient hover:shadow-2xl hover:shadow-purple-500/50 text-white font-bold py-8 text-2xl hover:scale-[1.03] transition-all duration-300 animate-pulse-glow"
                >
                  <Icon name="Zap" className="mr-3" size={28} />
                  Пополнить сейчас
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        <section id="инструкция" className="mb-24 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            Как это работает
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: "UserPlus",
                title: "1. Введите данные",
                description: "Укажите ваш Alipay ID и сумму пополнения",
                color: "purple"
              },
              {
                icon: "CreditCard",
                title: "2. Оплатите",
                description: "Выберите удобный способ оплаты через СБП",
                color: "pink"
              },
              {
                icon: "CheckCircle2",
                title: "3. Получите деньги",
                description: "Средства поступят на счет за 60 секунд",
                color: "cyan"
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="border border-white/20 bg-white/5 backdrop-blur-2xl shadow-2xl hover:shadow-purple-500/30 hover:scale-110 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-${step.color}-500/0 to-${step.color}-500/20 group-hover:from-${step.color}-500/10 group-hover:to-${step.color}-500/30 transition-all duration-500`}></div>
                <CardHeader className="pb-8 relative">
                  <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 flex items-center justify-center mb-6 mx-auto shadow-2xl shadow-${step.color}-500/50 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-pulse-glow`}>
                    <Icon name={step.icon as any} className="text-white" size={40} />
                  </div>
                  <CardTitle className="text-center text-white text-3xl mb-4">{step.title}</CardTitle>
                  <CardDescription className="text-center text-gray-400 text-lg leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section id="поддержка" className="mb-24 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Card className="max-w-5xl mx-auto border border-white/20 bg-white/5 backdrop-blur-2xl shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-500">
            <CardHeader>
              <CardTitle className="text-5xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                Чат поддержки
              </CardTitle>
              <CardDescription className="text-gray-400 text-xl">
                Наши операторы онлайн 24/7
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 mb-6 h-96 overflow-y-auto space-y-6 border border-white/10 shadow-inner">
                <div className="flex gap-4 animate-slide-up">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-xl shadow-purple-500/50 animate-pulse-glow">
                    <Icon name="Headphones" className="text-white" size={24} />
                  </div>
                  <div className="bg-white/10 backdrop-blur-xl rounded-3xl rounded-tl-sm p-6 max-w-md shadow-xl border border-white/20 hover:scale-105 transition-all duration-300">
                    <p className="text-white text-lg">
                      Здравствуйте! Чем могу помочь?
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Input
                  placeholder="Введите сообщение..."
                  className="bg-white/10 backdrop-blur-xl border-white/20 text-white placeholder:text-gray-500 h-16 text-lg shadow-lg focus:shadow-purple-500/50 transition-all duration-300"
                />
                <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 animate-gradient hover:shadow-2xl hover:shadow-purple-500/50 h-16 px-8 hover:scale-110 transition-all duration-300">
                  <Icon name="Send" size={24} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="faq" className="mb-24 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            Частые вопросы
          </h2>
          <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
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
                className="border border-white/20 bg-white/5 backdrop-blur-2xl px-8 rounded-3xl shadow-xl hover:shadow-purple-500/30 hover:scale-[1.02] transition-all duration-300"
              >
                <AccordionTrigger className="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text text-xl font-medium py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-lg leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>

      <footer className="relative border-t border-white/10 backdrop-blur-2xl bg-white/5 py-12 shadow-2xl">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 animate-gradient flex items-center justify-center shadow-xl">
              <Icon name="Sparkles" className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AliPay Fast
            </span>
          </div>
          <p className="text-gray-400 text-lg">© 2024 AliPay Fast. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;