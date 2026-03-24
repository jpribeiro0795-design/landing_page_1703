"use client";

import React, { useEffect, useState } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Olá! Vim pelo site e gostaria de um diagnóstico gratuito da minha operação de dados.");
    window.open(`https://wa.me/5561992189494?text=${msg}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#020202] text-slate-200 selection:bg-orange-500/30 font-sans scroll-smooth">
      
      {/* MALHA DE FUNDO (GRID TECH) */}
      <div className="fixed inset-0 -z-10 opacity-[0.03]" 
           style={{backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px'}}>
      </div>

      {/* GLOWS DE AMBIENTE */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute w-[1000px] h-[1000px] bg-orange-600/10 blur-[180px] -top-[400px] -left-[300px] animate-pulse" />
        <div className="absolute w-[800px] h-[800px] bg-orange-500/5 blur-[150px] bottom-[-200px] right-[-100px]" />
      </div>

      {/* NAVBAR MINIMALISTA */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 backdrop-blur-2xl bg-black/60 border-b border-white/5' : 'py-8 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-tr from-orange-600 to-orange-400 rounded-xl rotate-3 group-hover:rotate-12 transition-all duration-500 shadow-[0_0_20px_rgba(234,88,12,0.3)]" />
            <span className="text-xl font-black tracking-tighter text-white uppercase italic">Sua Marca</span>
          </div>
          <button onClick={handleWhatsApp} className="hidden md:block text-sm font-bold hover:text-orange-500 transition-colors uppercase tracking-widest border-b border-orange-500/0 hover:border-orange-500 pb-1">
            Falar com Especialista
          </button>
        </div>
      </nav>

      {/* LINHA GUIA DE SCROLL (CENTRAL) */}
      <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-orange-500/20 to-transparent -z-10 hidden lg:block" />

      {/* HERO SECTION - O IMPACTO */}
      <section className="relative pt-52 pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/5 text-orange-400 text-[10px] font-black tracking-[0.3em] mb-10 uppercase">
             Consultoria de Inteligência & Escala
          </div>
          
          <h1 className="text-6xl md:text-[110px] font-black text-white leading-[0.9] tracking-tighter mb-10">
            PARE DE DECIDIR <br />
            <span className="bg-gradient-to-b from-orange-300 via-orange-500 to-orange-800 text-transparent bg-clip-text italic uppercase">
              NO ESCURO.
            </span>
          </h1>

          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
            Transformamos o caos de dados da sua empresa em dashboards preditivos e automações de atendimento com IA.
          </p>

          <button onClick={handleWhatsApp} className="group relative bg-white text-black px-12 py-6 rounded-2xl font-black text-lg transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            SOLICITAR DIAGNÓSTICO GRATUITO
            <div className="absolute inset-0 rounded-2xl border-2 border-orange-500 scale-100 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </button>
        </div>
      </section>

      {/* SEÇÃO 01: O GARGALO (DOR) */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -left-10 top-0 text-orange-500/20 text-9xl font-black select-none">01</div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight uppercase leading-none">
              Onde o seu <br /> dinheiro está <br /><span className="text-orange-500 italic">vazando?</span>
            </h2>
            <div className="space-y-6">
               {[
                 {t: "Tráfego sem Atribuição", d: "Pare de investir em canais que não trazem retorno real."},
                 {t: "Leads Esquecidos", d: "Sua equipe demora a atender e o lead esfria. Nós automatizamos isso."},
                 {t: "Decisões Cegas", d: "Sem dados centralizados, você está apenas 'tentando' crescer."}
               ].map((item, i) => (
                 <div key={i} className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-orange-500/[0.02] hover:border-orange-500/20 transition-all">
                    <h3 className="text-orange-400 font-bold mb-2 uppercase tracking-tighter">{item.t}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
                 </div>
               ))}
            </div>
          </div>
          
          {/* SIMULADOR DE DASHBOARD (VISUAL) */}
          <div className="relative p-1 bg-gradient-to-tr from-orange-600/20 to-transparent rounded-[40px]">
            <div className="bg-[#0a0a0a] p-8 md:p-12 rounded-[38px] border border-white/10 shadow-2xl relative overflow-hidden">
               <div className="flex justify-between mb-12">
                  <div className="h-2 w-24 bg-white/10 rounded-full" />
                  <div className="flex gap-2"><div className="w-2 h-2 rounded-full bg-orange-500 animate-ping" /><div className="w-2 h-2 rounded-full bg-orange-500" /></div>
               </div>
               <div className="space-y-8">
                  <div className="text-5xl font-black text-white leading-none">R$ 142.500<span className="text-orange-500 text-xl font-medium ml-2">↑</span></div>
                  <div className="h-[200px] flex items-end gap-3">
                    {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                      <div key={i} style={{height: `${h}%`}} className="flex-1 bg-orange-500/20 border-t border-orange-500/40 rounded-t-lg group-hover:bg-orange-500/40 transition-all duration-700" />
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 02: SDR AI (O FUTURO) */}
      <section className="py-32 px-8 bg-white text-black rounded-[4rem] mx-4 overflow-hidden relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
           <div>
              <div className="text-orange-600 font-black text-xs uppercase tracking-[0.4em] mb-6">Velocidade é Venda</div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8 uppercase">
                IA que atende <br /> em <span className="text-orange-600 italic">segundos.</span>
              </h2>
              <p className="text-zinc-600 text-xl mb-10 font-medium">
                Implementamos robôs de atendimento que qualificam o lead no exato momento em que ele clica no anúncio. Sem espera, sem erro humano.
              </p>
              <button onClick={handleWhatsApp} className="bg-black text-white px-10 py-5 rounded-2xl font-black text-lg hover:shadow-2xl transition-all active:scale-95 uppercase italic">
                Ver como funciona
              </button>
           </div>
           
           {/* CHAT SIMULATION */}
           <div className="space-y-4">
              <div className="bg-zinc-100 p-6 rounded-3xl rounded-bl-none border border-zinc-200 shadow-sm max-w-[80%]">
                 <p className="text-sm font-bold text-zinc-800">Cliente: "Tenho interesse no serviço."</p>
              </div>
              <div className="bg-black p-6 rounded-3xl rounded-br-none shadow-xl max-w-[80%] ml-auto text-white">
                 <p className="text-sm font-medium">SDR AI: "Olá! Analisei sua estrutura e notei um gargalo na conversão de leads frios. Podemos agendar um diagnóstico para amanhã às 14h?"</p>
                 <div className="mt-4 flex gap-2">
                    <div className="h-1.5 w-1.5 bg-orange-500 rounded-full animate-bounce" />
                    <div className="h-1.5 w-1.5 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <div className="h-1.5 w-1.5 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* SEÇÃO 03: ESTRUTURA (O MÉTODO) */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-6xl font-black text-white mb-20 tracking-tighter uppercase italic underline decoration-orange-500 underline-offset-8">A Operação</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {n: "01", t: "Diagnóstico", d: "Auditoria completa na sua fonte de tráfego e estrutura comercial."},
            {n: "02", t: "Dashboards", d: "Visualização em tempo real de cada centavo investido vs. faturado."},
            {n: "03", t: "Escala Automática", d: "Implementação de IA para tracionar o atendimento e liberar seu tempo."}
          ].map((item, i) => (
            <div key={i} className="group p-10 bg-zinc-900/50 border border-white/5 rounded-[3rem] hover:border-orange-500/40 transition-all duration-500 relative">
               <div className="text-orange-500/30 font-black text-6xl mb-6 group-hover:text-orange-500 transition-colors">{item.n}</div>
               <h3 className="text-2xl font-bold text-white mb-4 uppercase">{item.t}</h3>
               <p className="text-gray-500 leading-relaxed font-medium">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ - QUEBRA DE OBJEÇÕES */}
      <section className="py-32 px-8 bg-zinc-950/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center text-white mb-16 uppercase italic">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {[
              {q: "Preciso de um faturamento mínimo?", a: "Recomendamos para empresas que já investem em tráfego e querem otimizar o ROI."},
              {q: "Quanto tempo para implementar?", a: "O diagnóstico é imediato. A estrutura completa leva entre 15 a 30 dias."},
              {q: "A IA substitui meu vendedor?", a: "Não. Ela qualifica o lead para que seu vendedor foque apenas em fechar vendas quentes."}
            ].map((item, i) => (
              <details key={i} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <summary className="p-6 cursor-pointer font-bold text-white list-none flex justify-between items-center group-open:bg-orange-500/10">
                  {item.q}
                  <span className="text-orange-500 group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="p-6 text-gray-400 border-t border-white/5 bg-black/20">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL - O FECHAMENTO */}
      <section className="py-40 px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-12 uppercase leading-none">
            PRONTO PARA <br /><span className="text-orange-500">DOMINAR SEUS DADOS?</span>
          </h2>
          <button onClick={handleWhatsApp} className="bg-orange-500 hover:bg-orange-600 text-white px-16 py-8 rounded-full font-black text-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_20px_60px_rgba(234,88,12,0.4)]">
            QUERO MEU DIAGNÓSTICO AGORA
          </button>
          <p className="mt-8 text-gray-600 font-bold uppercase tracking-[0.2em] text-sm">Respostas em menos de 5 minutos</p>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-gray-700 text-[10px] font-black uppercase tracking-[0.5em]">
        © 2026 Inteligência de Dados — Brasília, DF.
      </footer>
    </main>
  );
}
