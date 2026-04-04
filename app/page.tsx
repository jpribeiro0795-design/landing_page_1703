"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Database, 
  MessageSquareCode, 
  BarChart3, 
  Target, 
  ArrowRight, 
  CheckCircle2, 
  MousePointerClick,
  Layers,
  LineChart,
  Cpu
} from "lucide-react";

// Componente de Glow Reutilizável
const Glow = ({ className = "" }: { className?: string }) => (
  <div className={`absolute rounded-full bg-orange-600/20 blur-[120px] pointer-events-none ${className}`} />
);

// Componente de Card com Glassmorphism
const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.02 }}
    className={`relative group p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md overflow-hidden hover:border-orange-500/50 transition-all duration-500 ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="absolute -inset-px bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
    {children}
  </motion.div>
);

export default function LandingPage() {
  const whatsappLink = "https://wa.me/SEUNUMERO";

  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-orange-500/30 overflow-x-hidden">
      
      {/* Background Grid & Global Glows */}
      <div className="fixed inset-0 z-0 opacity-25" 
           style={{ backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`, size: '40px 40px', backgroundSize: '40px 40px' }} 
      />
      <Glow className="top-[-10%] left-[-10%] w-[500px] h-[500px]" />
      <Glow className="bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-orange-600/10" />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <span className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-sm font-medium mb-6 inline-block backdrop-blur-sm">
            Infraestrutura de Elite para Escala
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            Transforme <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-600 to-orange-500">Caos em Lucro</span> Previsível
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Pare de lutar com ferramentas e processos quebrados. Construímos o ecossistema digital que converte curiosos em clientes, no piloto automático.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href={whatsappLink}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(249, 115, 22, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl flex items-center gap-3 transition-all text-lg group shadow-[0_0_15px_rgba(249,115,22,0.2)]"
            >
              SOLICITAR DIAGNÓSTICO
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <span className="text-sm text-gray-500 font-mono italic">Vagas limitadas para implementação este mês.</span>
          </div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-20 w-full relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-900 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-4 aspect-video flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-t from-orange-600/10 to-transparent" />
             <BarChart3 size={80} className="text-orange-500/50 animate-pulse" />
             <div className="absolute bottom-10 left-10 text-left">
                <div className="h-2 w-32 bg-orange-500/20 rounded-full mb-2" />
                <div className="h-2 w-48 bg-orange-500/10 rounded-full" />
             </div>
          </div>
        </motion.div>
      </section>

      {/* --- PROBLEMA SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 italic uppercase tracking-widest text-orange-500">O Custo da Ineficiência</h2>
          <p className="text-gray-500">Sua empresa está sangrando dinheiro onde você não vê.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { t: "Anúncios que não convertem", d: "Você gasta fortunas em tráfego que chega em páginas lentas e amadoras. A conta não fecha.", icon: <Target className="text-orange-500" /> },
            { t: "Leads Esfriando", d: "Seu time comercial demora horas para responder. O lead esquece que você existe em minutos.", icon: <Zap className="text-orange-500" /> },
            { t: "Falta de Dados", d: "Você toma decisões baseadas no 'feeling' porque seus dados estão espalhados em planilhas confusas.", icon: <Database className="text-orange-500" /> }
          ].map((item, i) => (
            <GlassCard key={i}>
              <div className="p-3 bg-orange-500/10 rounded-lg w-fit mb-6 border border-orange-500/20">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.t}</h3>
              <p className="text-gray-400 leading-relaxed">{item.d}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* --- SERVIÇOS SECTION --- */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-orange-950/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Nossa Engenharia de <span className="text-orange-500">Crescimento</span></h2>
              <p className="text-gray-400">Soluções modulares para quem não aceita nada menos que o topo do mercado.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<MousePointerClick />} 
              title="Landing Pages Rápidas" 
              desc="Websites ultra-leves focados em conversão agressiva. Tempo de carregamento inferior a 1s para dominar o PageSpeed."
            />
            <ServiceCard 
              icon={<Layers />} 
              title="Integrações & Webhooks" 
              desc="Conectamos seu CRM, ERP e ferramentas de marketing em um sistema único que trabalha enquanto você dorme."
            />
            <ServiceCard 
              icon={<LineChart />} 
              title="Dashboards de Dados" 
              desc="Visibilidade total. KPIs em tempo real para você saber exatamente de onde vem cada centavo de lucro."
            />
            <ServiceCard 
              icon={<MessageSquareCode />} 
              title="SDR com IA" 
              desc="Automação de atendimento que qualifica leads via WhatsApp 24/7 com linguagem humana e persuasiva."
            />
            <ServiceCard 
              icon={<Cpu />} 
              title="Tráfego Pago Elite" 
              desc="Estratégias avançadas de Google e Meta Ads com foco em ROI real, não apenas métricas de vaidade."
              className="lg:col-span-2"
            />
          </div>
        </div>
      </section>

      {/* --- PROCESSO SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-20 uppercase tracking-tighter">O Caminho até a <span className="text-orange-500">Escala</span></h2>
        
        <div className="grid md:grid-cols-4 gap-4 relative">
          {[
            { n: "01", t: "Diagnóstico", d: "Mapeamos os gargalos e as minas de ouro do seu negócio." },
            { n: "02", t: "Estruturação", d: "Criamos a arquitetura técnica e visual do projeto." },
            { n: "03", t: "Implementação", d: "Deploy rápido e integrações sem atrito." },
            { n: "04", t: "Escala", d: "Otimização contínua focada em aumento de margem." }
          ].map((step, i) => (
            <div key={i} className="relative p-8 border-l border-white/10 hover:border-orange-500 transition-colors group">
              <span className="text-6xl font-black text-white/5 absolute top-4 right-4 group-hover:text-orange-500/10 transition-colors">{step.n}</span>
              <h3 className="text-2xl font-bold mb-4 text-orange-500">{step.t}</h3>
              <p className="text-gray-400">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- DIFERENCIAL SECTION --- */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center border-t border-white/5">
        <CheckCircle2 size={48} className="mx-auto text-orange-500 mb-8" />
        <h2 className="text-4xl font-bold mb-8 italic">Não vendemos serviços, entregamos um <span className="underline decoration-orange-500/50">Sistema de Lucro</span></h2>
        <div className="grid md:grid-cols-2 gap-12 text-left mt-16">
          <div className="space-y-4">
            <h4 className="text-orange-500 font-bold text-lg">X Como o mercado faz:</h4>
            <p className="text-gray-500 italic">"Site bonitinho", automações que quebram, falta de suporte técnico e foco em visual, não em vendas.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-orange-500 font-bold text-lg">✓ Como nós fazemos:</h4>
            <p className="text-gray-100">Código limpo, dados centralizados, foco obsessivo em conversão e suporte de engenharia de verdade.</p>
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="relative rounded-[3rem] bg-gradient-to-br from-orange-600 to-orange-900 p-12 md:p-24 overflow-hidden text-center shadow-[0_0_100px_rgba(249,115,22,0.2)]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-7xl font-black mb-8 text-white uppercase tracking-tighter">
              PRONTO PARA O PRÓXIMO NÍVEL?
            </h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Agende uma consultoria técnica gratuita e descubra o potencial oculto da sua operação.
            </p>
            <motion.a
              href={whatsappLink}
              whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#ea580c" }}
              className="px-12 py-6 bg-white text-orange-600 font-black rounded-2xl text-2xl shadow-2xl inline-block transition-all"
            >
              FALAR COM ESPECIALISTA
            </motion.a>
          </motion.div>
          <Glow className="top-0 right-0 w-80 h-80 bg-white/20" />
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-white/5 text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} NORTE SEVEN. Todos os direitos reservados.</p>
        <p className="mt-2 font-mono uppercase tracking-[0.3em] text-[10px]">Data-Driven Performance Engineering</p>
      </footer>
    </div>
  );
}

// Subcomponente de Card de Serviço
function ServiceCard({ icon, title, desc, className = "" }: { icon: React.ReactNode, title: string, desc: string, className?: string }) {
  return (
    <GlassCard className={className}>
      <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
        {React.cloneElement(icon as React.ReactElement, { size: 40 })}
      </div>
      <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-orange-500 transition-colors">{title}</h3>
      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{desc}</p>
      <div className="mt-8 flex items-center gap-2 text-orange-500 font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
        Saiba mais <ArrowRight size={16} />
      </div>
    </GlassCard>
  );
}
