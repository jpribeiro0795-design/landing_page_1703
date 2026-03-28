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
    const msg = encodeURIComponent("Olá! Quero solicitar meu diagnóstico gratuito de marketing e entender como a IA e a nova gestão de tráfego podem alavancar minha operação.");
    window.open(`https://wa.me/5561992189494?text=${msg}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#020202] text-slate-300 selection:bg-orange-500/30 font-sans scroll-smooth overflow-x-hidden">
      
      {/* PLANO DE FUNDO TECH GRID & BRILHO */}
      <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none" 
           style={{backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px'}}>
      </div>
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-orange-600/10 blur-[150px] -top-[300px] -left-[200px] animate-pulse" />
      </div>

      {/* BARRA DE NAVEGAÇÃO */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 backdrop-blur-2xl bg-black/60 border-b border-white/5' : 'py-8 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-tr from-orange-600 to-orange-400 rounded-lg rotate-3 group-hover:rotate-12 transition-all duration-500 shadow-[0_0_15px_rgba(234,88,12,0.3)]" />
            <span className="text-sm font-black tracking-[0.2em] text-white uppercase italic">Sua Operação</span>
          </div>
          <button onClick={handleWhatsApp} className="text-[10px] font-black hover:text-orange-500 transition-colors uppercase tracking-[0.2em] border border-white/10 px-5 py-2 rounded-full hover:border-orange-500/50">
            Diagnóstico Grátis
          </button>
        </div>
      </nav>

      {/* SEÇÃO HERO */}
      <section className="relative pt-44 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-[10px] font-black tracking-[0.3em] mb-10 uppercase">
             Infraestrutura de Alta Performance
          </div>
          
          <h1 className="text-5xl md:text-[90px] font-black text-white leading-[0.95] tracking-tighter mb-10 uppercase">
            TRANSFORME CAOS EM <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 text-transparent bg-clip-text italic">
              LUCRO PREVISÍVEL.
            </span>
          </h1>

          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Integramos Gestão Profissional de Tráfego, Triagem por Inteligência Artificial e Dashboards de Dados para dominar seu mercado.
          </p>

          <div className="flex flex-col items-center gap-4">
            <button onClick={handleWhatsApp} className="group relative bg-white text-black px-10 py-5 rounded-xl font-black text-lg transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)] uppercase">
              LIBERAR MEU DIAGNÓSTICO
              <div className="absolute inset-0 rounded-xl border-2 border-orange-500 scale-100 group-hover:scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </button>
            <span className="text-xs text-zinc-600 font-bold uppercase tracking-widest">Receba uma análise técnica da sua estrutura atual.</span>
          </div>
        </div>
      </section>

      {/* SEÇÃO: O GARGALO (PROBLEMAS) */}
      <section className="py-24 px-8 bg-zinc-950/30 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase">O Marketing que voa às cegas</h2>
            <p className="text-zinc-500 font-medium">Sua empresa está perdendo dinheiro nestes 3 pontos cruciais:</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {t: "Anúncios sem Rumo", d: "Verba queimada em campanhas que geram 'curiosos', não compradores. Falta de otimização focada em conversão.", i: "01"},
              {t: "Lead Esfriando", d: "Cada minuto sem resposta reduz a conversão em 80%. O comercial humano não consegue escalar a triagem imediata.", i: "02"},
              {t: "Dados Dispersos", d: "Você não sabe qual anúncio gerou lucro real. Falta de atribuição técnica (UTM/Pixel) para decidir onde investir.", i: "03"}
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-orange-500/30 transition-all">
                <span className="text-orange-600 font-black text-4xl italic opacity-20 group-hover:opacity-100 transition-opacity">{item.i}</span>
                <h3 className="text-white font-black mt-4 mb-3 uppercase tracking-tighter text-xl">{item.t}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO EXCLUSIVA: TRÁFEGO PAGO DE ALTA PERFORMANCE */}
      <section className="py-28 px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(234,88,12,0.1)]">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
              Gestão Profissional de <br /><span className="text-orange-500 italic">Tráfego Pago</span>
            </h2>
            <p className="text-zinc-500 mb-10 leading-relaxed">Não somos apenas "apertadores de botões". Criamos estratégias de anúncios (Google, Meta, TikTok) que encontram o seu cliente ideal, com o menor custo possível. Focamos em <strong className="text-white">volume qualificado</strong> para alimentar sua nova estrutura de IA.</p>
            
            <button onClick={handleWhatsApp} className="text-xs font-black text-white hover:text-orange-500 transition-colors uppercase tracking-[0.2em] border border-white/10 px-8 py-3 rounded-xl hover:border-orange-500/50">
              Quero Anúncios Que Vendem
            </button>
          </div>
          
          <div className="bg-zinc-900 border border-white/5 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-600/10 blur-3xl rounded-full" />
            <h4 className="text-white font-bold uppercase text-xs mb-6 tracking-widest text-zinc-500">Processo de Escala</h4>
            <div className="space-y-5">
              {[
                {t: "Auditoria de Contas", d: "Revisão técnica de pixels, conversões e públicos."},
                {t: "Estratégia de Funil", d: "Campanhas para Frio, Morno e Quente (Remarketing)."},
                {t: "Teste A/B de Criativos", d: "Encontramos a imagem/vídeo que mais converte."},
                {t: "Otimização Diária", d: "Ajuste de lances e públicos focado no lucro real."}
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                   <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 shrink-0" />
                   <div>
                     <h5 className="text-white font-bold uppercase text-sm">{item.t}</h5>
                     <p className="text-zinc-500 text-xs">{item.d}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO: SOLUÇÃO (PILARES TECNOLÓGICOS) */}
      <section className="py-24 px-8 bg-zinc-950/20 border-t border-white/5">
        <div className="max-w-6xl mx-auto bg-zinc-900/50 border border-white/5 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/5 blur-3xl rounded-full" />
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-orange-500 font-black text-[10px] uppercase tracking-[0.4em] mb-6">A Nova Infraestrutura</div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-none mb-8 uppercase tracking-tighter">
                Sistemas de <br /><span className="text-orange-500 italic">Marketing</span> <br /> Inteligentes.
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                   <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                   <div>
                     <h4 className="text-white font-bold uppercase text-sm">Assistente SDR com IA</h4>
                     <p className="text-zinc-500 text-sm">IA que qualifica leads 24/7 e agenda reuniões direto no seu calendário.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                   <div>
                     <h4 className="text-white font-bold uppercase text-sm">Painel de Inteligência de Dados</h4>
                     <p className="text-zinc-500 text-sm">Conectamos Google, Meta e CRM em uma única tela para você ver o lucro real.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0" />
                   <div>
                     <h4 className="text-white font-bold uppercase text-sm">Infraestrutura de Crescimento</h4>
                     <p className="text-zinc-500 text-sm">Webhooks, API de Conversão e Rastreamento avançado para o algoritmo focar em quem compra.</p>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               {[
                 {t: "Lucro Real", v: "4.8x"}, {t: "Tempo de Resposta", v: "-90%"},
                 {t: "Custo por Lead", v: "-35%"}, {t: "Agendamentos", v: "+120%"}
               ].map((stat, i) => (
                 <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-2xl text-center hover:bg-white/[0.08] transition-colors">
                    <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1">{stat.t}</p>
                    <p className="text-2xl font-black text-white">{stat.v}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DO PROCESSO */}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-white mb-16 text-center uppercase italic tracking-tighter">Como funciona o Diagnóstico</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {s: "01", t: "Solicitação", d: "Você preenche os dados básicos da sua operação atual."},
            {s: "02", t: "Análise Técnica", d: "Revisamos seu tráfego, rastreamento e funil de vendas."},
            {s: "03", t: "Relatório de Perdas", d: "Entregamos um PDF mostrando onde você está perdendo dinheiro."},
            {s: "04", t: "Plano de Escala", d: "Apresentamos a estratégia (Tráfego + IA) que resolve seus gargalos."}
          ].map((step, i) => (
            <div key={i} className="relative">
              <div className="text-orange-500 font-black text-xs mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">{step.s}</span>
                ————
              </div>
              <h3 className="text-white font-black uppercase text-sm mb-2">{step.t}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHAMADA FINAL (CTA) */}
      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-600 to-orange-800 rounded-[3rem] p-12 md:p-20 text-center shadow-[0_0_80px_rgba(234,88,12,0.2)]">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 uppercase leading-none italic">
            PRONTO PARA O <br /> PRÓXIMO NÍVEL?
          </h2>
          <p className="text-white/80 font-bold mb-10 uppercase tracking-widest text-sm italic">Sem compromisso. Apenas dados e estratégia.</p>
          <button onClick={handleWhatsApp} className="bg-black text-white px-12 py-6 rounded-2xl font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-2xl uppercase">
            SOLICITAR MEU DIAGNÓSTICO
          </button>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-zinc-700 text-[9px] font-black uppercase tracking-[0.6em]">
        Brasília — Estrutura Inteligente com Tráfego, IA & Dados. © 2026
      </footer>
    </main>
  );
}
