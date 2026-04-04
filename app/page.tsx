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

// 1. Componente Glow
const Glow = ({ className = "" }: { className?: string }) => (
  <div className={`absolute rounded-full bg-orange-600/20 blur-[120px] pointer-events-none ${className}`} />
);

// 2. Componente GlassCard
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

// 3. Subcomponente ServiceCard (Definido antes do uso para evitar erros de referência)
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

// 4. Componente Principal
export default function LandingPage() {
  const whatsappLink = "https://wa.me/SEUNUMERO";

  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-orange-500/30 overflow-x-hidden">
      
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 opacity-25 pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`, 
             backgroundSize: '40px 40px' 
           }} 
      />
      
      <Glow className="top-[-10%] left-[-10%] w-[500px] h-[500px]" />
      <Glow className="bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-orange-600/10" />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <span className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-sm font-medium mb-6 inline-block">
            Infraestrutura de Elite
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            Transforme <span className="text-orange-500">Caos em Lucro</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Escalamos sua operação digital com engenharia de dados e automação agressiva.
          </p>
          <a href={whatsappLink} className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)]">
            SOLICITAR DIAGNÓSTICO
          </a>
        </motion.div>
      </section>

      {/* Problemas */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <GlassCard>
            <Target className="text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Anúncios Fracos</h3>
            <p className="text-gray-400">Tráfego que não converte e queima seu caixa.</p>
          </GlassCard>
          <GlassCard>
            <Zap className="text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Leads Esfriando</h3>
            <p className="text-gray-400">Demora no atendimento mata sua venda.</p>
          </GlassCard>
          <GlassCard>
            <Database className="text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Sem Dados</h3>
            <p className="text-gray-400">Decisões no escuro sem métricas reais.</p>
          </GlassCard>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Nossos <span className="text-orange-500">Serviços</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard icon={<MousePointerClick />} title="Landing Pages" desc="Foco total em velocidade e conversão." />
          <ServiceCard icon={<MessageSquareCode />} title="SDR com IA" desc="Qualificação automática no WhatsApp." />
          <ServiceCard icon={<LineChart />} title="Dashboards" desc="Controle total do seu ROI." />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <div className="bg-gradient-to-br from-orange-600 to-orange-900 p-12 rounded-[3rem]">
          <h2 className="text-4xl md:text-6xl font-black mb-8">VAMOS ESCALAR?</h2>
          <a href={whatsappLink} className="px-10 py-5 bg-white text-orange-600 font-bold rounded-2xl text-xl">
            FALAR COM ESPECIALISTA
          </a>
        </div>
      </section>

      <footer className="py-12 text-center text-gray-600 border-t border-white/5 mt-12">
        <p>© 2026 DATAFLOW. All rights reserved.</p>
      </footer>
    </div>
  );
}
