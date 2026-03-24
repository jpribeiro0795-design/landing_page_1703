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
    const msg = encodeURIComponent("Olá! Vi como funciona a triagem por IA no site e quero um diagnóstico da minha operação.");
    window.open(`https://wa.me/5561992189494?text=${msg}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#020202] text-slate-200 selection:bg-orange-500/30 font-sans scroll-smooth">
      
      {/* GRID TECH DE FUNDO */}
      <div className="fixed inset-0 -z-10 opacity-[0.03]" 
           style={{backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px'}}>
      </div>

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute w-[1000px] h-[1000px] bg-orange-600/10 blur-[180px] -top-[400px] -left-[300px] animate-pulse" />
        <div className="absolute w-[800px] h-[800px] bg-orange-500/5 blur-[150px] bottom-[-200px] right-[-100px]" />
      </div>

      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 backdrop-blur-2xl bg-black/60 border-b border-white/5' : 'py-8 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-tr from-orange-600 to-orange-400 rounded-xl rotate-3 group-hover:rotate-12 transition-all duration-500 shadow-[0_0_20px_rgba(234,88,12,0.3)]" />
            <span className="text-xl font-black tracking-tighter text-white uppercase italic tracking-[0.2em]">Sua Operação</span>
          </div>
          <button onClick={handleWhatsApp} className="text-xs font-black hover:text-orange-500 transition-colors uppercase tracking-[0.3em] border border-white/10 px-6 py-2 rounded-full hover:border-orange-500/50">
            Consultoria Individual
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-52 pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/5 text-orange-400 text-[10px] font-black tracking-[0.3em] mb-10 uppercase">
             Infraestrutura Vercel + Grok AI
          </div>
          
          <h1 className="text-6xl md:text-[100px] font-black text-white leading-[0.9] tracking-tighter mb-10">
            QUALIFIQUE SEUS LEADS <br />
            <span className="bg-gradient-to-b from-orange-300 via-orange-500 to-orange-800 text-transparent bg-clip-text italic uppercase">
              EM TEMPO REAL.
            </span>
          </h1>

          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
            Integramos dashboards preditivos e triagem inteligente por IA. <br />
            O lead entra no site, a IA qualifica e o agendamento chega no seu WhatsApp.
          </p>

          <button onClick={handleWhatsApp} className="group relative bg-white text-black px-12 py-6 rounded-2xl font-black text-lg transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            LIBERAR MEU DIAGNÓSTICO
            <div className="absolute inset-0 rounded-2xl border-2 border-orange-500 scale-100 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </button>
        </div>
      </section>

      {/* SEÇÃO: O GARGALO */}
      <section className="py-32 px-8 bg-zinc-950/20 border-y border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight uppercase leading-none">
              Onde sua <br /> operação está <br /><span className="text-orange-500 italic">travada?</span>
            </h2>
            <div className="space-y-6">
               {[
                 {t: "Vazamento de Leads", d: "Seu tráfego cai no site e você não sabe quem é qualificado e quem é apenas curioso. Nós resolvemos isso na entrada."},
                 {t: "Demora no Atendimento", d: "Cada minuto de espera reduz a conversão em 80%. Nossa IA atende em milissegundos."},
                 {t: "Falta de Atribuição", d: "Saiba exatamente qual anúncio gerou o lead que fechou a venda, através de dashboards integrados."}
               ].map((item, i) => (
                 <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                    <h3 className="text-orange-400 font-bold mb-2 uppercase tracking-tighter">{item.t}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="relative p-1 bg-gradient-to-tr from-orange-600/20 to-transparent rounded-[40px]">
            <div className="bg-[#0a0a0a] p-8 md:p-12 rounded-[38px] border border-white/10 shadow-2xl">
               <div className="flex justify-between mb-8 items-center">
                  <div className="text-[10px] text-gray-500 uppercase font-black">Sistema de Atribuição Ativo</div>
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
               </div>
               <div className="space-y-6">
                  <div className="flex justify-between text-xs font-bold"><span className="text-gray-400">ROI ATUAL</span><span className="text-orange-500">485%</span></div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full"><div className="h-full w-[85%] bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.4)]" /></div>
                  <div className="grid grid-cols-2 gap-4 mt-10">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                      <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-1">Leads Filtrados</p>
                      <p className="text-xl font-black text-white">1.240</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                      <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-1">Custo/Lead</p>
                      <p className="text-xl font-black text-orange-400">R$ 4,12</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO: SDR AI (TRIAGEM NO SITE) */}
      <section className="py-32 px-8 bg-white text-black rounded-[4rem] mx-4 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
           <div className="relative z-10">
              <div className="text-orange-600 font-black text-[10px] uppercase tracking-[0.4em] mb-6">Filtro de Inteligência</div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8 uppercase">
                IA que filtra o <br /> <span className="text-orange-600 italic">curioso</span> do <br /> <span className="underline decoration-black">comprador.</span>
              </h2>
              <p className="text-zinc-600 text-lg mb-10 font-medium">
                Sua empresa não precisa de mais leads, precisa de leads mais qualificados. 
                Nossa IA processa o interesse do visitante e só entrega o contato no seu WhatsApp quando ele está pronto para comprar.
              </p>
              <button onClick={handleWhatsApp} className="bg-black text-white px-10 py-5 rounded-2xl font-black text-lg hover:shadow-2xl transition-all active:scale-95 uppercase italic">
                Ver demonstração
              </button>
           </div>
           
           <div className="relative">
              <div className="bg-zinc-100 p-8 rounded-[3rem] border border-zinc-200 shadow-2xl relative z-10">
                 <div className="flex gap-2 mb-6"><div className="w-2 h-2 rounded-full bg-zinc-300"/><div className="w-2 h-2 rounded-full bg-zinc-300"/></div>
                 <div className="space-y-4">
                    <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm text-sm border border-zinc-100 font-medium text-zinc-800">
                      Visitante: "Quero saber o preço do serviço."
                    </div>
                    <div className="bg-orange-500 p-4 rounded-2xl rounded-br-none shadow-md text-sm text-white font-bold ml-6">
                      SDR AI: "Entendo! Antes de falarmos de valores, sua empresa hoje fatura acima de R$ 50k ou está em fase de estruturação?"
                    </div>
                    <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm text-sm border border-zinc-100 font-medium text-zinc-800">
                      Visitante: "Faturamos R$ 80k."
                    </div>
                    <div className="bg-black p-4 rounded-2xl rounded-br-none shadow-md text-sm text-white font-bold ml-6">
                      SDR AI: "Perfeito. Você tem o perfil ideal. Estou enviando seu caso agora para o consultor no WhatsApp..."
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* METODOLOGIA */}
      <section className="py-32 px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-black text-white mb-24 tracking-tighter uppercase italic">O Fluxo da Escala</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {t: "Triagem Front-end", d: "IA no site (Grok + Vercel) para qualificação imediata do tráfego pago."},
            {t: "Data Dashboard", d: "Integração total de métricas para você enxergar o lucro real da operação."},
            {t: "Conexão WhatsApp", d: "O lead qualificado cai direto na mão do seu comercial, pronto para o fechamento."}
          ].map((item, i) => (
            <div key={i} className="p-10 bg-zinc-900/40 border border-white/5 rounded-[2rem] text-left hover:border-orange-500/30 transition-all">
               <div className="w-12 h-12 bg-orange-500 rounded-full mb-8 flex items-center justify-center font-black text-black">{i+1}</div>
               <h3 className="text-xl font-bold text-white mb-4 uppercase">{item.t}</h3>
               <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-40 px-8 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-500 to-orange-700 rounded-[4rem] p-12 md:p-24 shadow-[0_0_100px_rgba(234,88,12,0.2)]">
          <h2 className="text-5xl md:text-[80px] font-black text-white tracking-tighter mb-10 uppercase leading-none italic">
            SEU PRÓXIMO <br /> NÍVEL É AQUI.
          </h2>
          <button onClick={handleWhatsApp} className="bg-black text-white px-16 py-8 rounded-full font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-2xl">
            AGENDAR CONSULTORIA
          </button>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-gray-700 text-[9px] font-black uppercase tracking-[0.6em]">
        Brasília — Escala Inteligente com IA & Dados.
      </footer>
    </main>
  );
}
