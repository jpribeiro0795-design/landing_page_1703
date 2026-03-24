"use client";

import React, { useEffect, useState } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContact = () => {
    // Substitua pelo seu link real do WhatsApp ou Calendly
    window.open(`https://wa.me/SEUNUMERO`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#050505] text-slate-200 selection:bg-orange-500/30 font-sans">
      
      {/* GLOW DE FUNDO DINÂMICO */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] bg-orange-600/10 blur-[180px] -top-[300px] -left-[200px] animate-pulse" />
        <div className="absolute w-[600px] h-[600px] bg-orange-500/5 blur-[150px] bottom-0 right-0" />
      </div>

      {/* NAVBAR FLUTUANTE */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 backdrop-blur-xl border-b border-white/10 bg-black/40' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
              <span className="font-black text-black text-xl">D</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">DataFlow</span>
          </div>
          
          <button onClick={handleContact} className="bg-white text-black hover:bg-orange-500 hover:text-white px-6 py-2.5 rounded-full font-bold transition-all active:scale-95 text-sm shadow-lg shadow-white/5">
            Falar com Especialista
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-bold tracking-widest mb-8 animate-bounce">
            ⚡ O FUTURO DA GESTÃO CHEGOU
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[1] tracking-tighter mb-8">
            Transforme dados brutos em <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 text-transparent bg-clip-text">
              lucro previsível.
            </span>
          </h1>

          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Diagnóstico profundo de tráfego, dashboards personalizados e <br className="hidden md:block" /> 
            SDRs com IA para não deixar nenhum lead esfriar.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button onClick={handleContact} className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-orange-500/20 transition-all flex items-center justify-center gap-2 group">
              Agendar Diagnóstico Gratuito
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE DOR (O VAZAMENTO) */}
      <section className="py-24 px-8 border-y border-white/5 bg-zinc-950/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Sua empresa está com "vazamento" de capital?</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              A maioria dos negócios perde 30% do faturamento por falta de rastreio. Nós tapamos os buracos da sua operação com inteligência de ponta.
            </p>
            <ul className="space-y-4">
              {["Leads esquecidos no CRM", "Tráfego sem atribuição", "Decisões no 'feeling'", "Processos manuais lentos"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="text-orange-500">✔</span> {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* SIMULAÇÃO DE DASHBOARD VISUAL */}
          <div className="relative group p-1 bg-gradient-to-br from-white/10 to-transparent rounded-3xl">
            <div className="relative bg-zinc-900 p-8 rounded-[22px] border border-white/5 shadow-2xl">
               <div className="flex gap-2 mb-8"><div className="w-2 h-2 rounded-full bg-red-500"/><div className="w-2 h-2 rounded-full bg-orange-500"/></div>
               <div className="space-y-6">
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[80%] bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest">ROI Mensal</p>
                      <p className="text-2xl font-black text-orange-400">5.4x</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest">Leads Atendidos</p>
                      <p className="text-2xl font-black text-white">99.8%</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDR AI - O DIFERENCIAL */}
      <section className="py-32 px-8 text-center bg-black relative">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 inline-block p-4 bg-orange-500/10 rounded-2xl border border-orange-500/20">
            <span className="text-3xl">🤖</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">Primeiro contato em 15s</h2>
          <p className="text-gray-400 text-xl mb-12">
            Implementamos SDRs baseados em IA que qualificam e agendam reuniões 24h por dia. O lead não esfria, a venda não para.
          </p>
          <div className="bg-white/5 border border-white/10 p-4 rounded-2xl inline-flex items-center gap-4 text-left shadow-2xl">
             <div className="w-10 h-10 rounded-full bg-orange-500 flex flex-shrink-0 items-center justify-center font-bold text-black text-xs shadow-lg shadow-orange-500/30">AI</div>
             <p className="text-sm text-gray-300 italic max-w-xs">"Olá! Identifiquei um gargalo no seu funil de tráfego. Podemos ajustar isso hoje?"</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL DE IMPACTO */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-orange-500 to-orange-700 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(249,115,22,0.3)]">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter italic">ESCALE COM DADOS</h2>
          <p className="text-orange-100 text-lg mb-12 max-w-xl mx-auto font-medium">
            Diagnóstico gratuito para empresas que buscam clareza total e processos inteligentes.
          </p>
          <button onClick={handleContact} className="bg-black text-white hover:bg-zinc-900 px-12 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 active:scale-95 shadow-2xl">
            Quero meu diagnóstico gratuito
          </button>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-gray-600 text-sm">
        © 2026 DataFlow — Inteligência de Negócios.
      </footer>
    </main>
  );
}
