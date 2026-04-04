"use client";

import React, { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      "Olá! Quero automatizar minha operação e entender como vocês podem me ajudar."
    );
    window.open(`https://wa.me/5561992189494?text=${msg}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#020202] text-slate-300 font-sans overflow-x-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="fixed inset-0 -z-10">
        <div className="absolute w-[800px] h-[800px] bg-orange-600/10 blur-[150px] -top-[300px] -left-[200px]" />
      </div>

      {/* NAV */}
      <nav className={`fixed w-full z-50 transition ${scrolled ? "bg-black/60 backdrop-blur py-4" : "py-8"}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between">
          <span className="text-white font-black tracking-widest uppercase text-sm">
            Sua Operação
          </span>
          <button onClick={handleWhatsApp} className="text-xs border px-5 py-2 rounded-full hover:border-orange-500">
            Diagnóstico grátis
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-44 pb-24 text-center px-6">
        <h1 className="text-5xl md:text-[80px] font-black text-white leading-[0.95] mb-8 uppercase">
          PARE DE PERDER <br />
          <span className="text-orange-500 italic">CLIENTES TODOS OS DIAS</span>
        </h1>

        <p className="text-zinc-500 max-w-2xl mx-auto mb-10 text-lg">
          Eu construo páginas rápidas, automações e sistemas inteligentes
          que fazem seu negócio vender mais — sem depender de equipe grande.
        </p>

        <button onClick={handleWhatsApp} className="bg-white text-black px-10 py-5 rounded-xl font-bold hover:scale-105 transition">
          Quero automatizar meu negócio
        </button>
      </section>

      {/* DOR */}
      <section className="py-24 px-8 bg-zinc-950/40 border-y border-white/5">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-6 uppercase">
            Seu negócio provavelmente está assim
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            "Seu site demora e você perde leads",
            "Você demora pra responder clientes",
            "Seu time faz tarefas manuais",
            "Você não sabe o que gera resultado",
            "Dados espalhados em vários lugares",
            "Tráfego sem estrutura de conversão",
          ].map((item, i) => (
            <div key={i} className="p-6 border border-white/5 rounded-xl bg-white/[0.02]">
              <p className="text-zinc-400">{item}</p>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-orange-500 font-bold">
          Isso está te fazendo perder dinheiro todos os dias.
        </p>
      </section>

      {/* SERVIÇOS */}

      {/* PÁGINAS */}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-white mb-12 uppercase">
          Páginas que convertem
        </h2>

        <p className="text-zinc-500 mb-6">
          Se sua página é lenta ou confusa, você está pagando pra perder lead.
        </p>

        <ul className="space-y-3 text-zinc-400 mb-8">
          <li>⚡ Carregamento ultra rápido</li>
          <li>🎯 Estrutura focada em conversão</li>
          <li>🔗 Integração com automações</li>
        </ul>

        <button onClick={handleWhatsApp} className="border px-6 py-3 rounded-lg hover:border-orange-500">
          Quero uma página que converte
        </button>
      </section>

      {/* INTEGRAÇÕES */}
      <section className="py-24 px-8 bg-zinc-950/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-6 uppercase">
            Automação de processos
          </h2>

          <p className="text-zinc-500 mb-6">
            Pare de perder tempo copiando e colando informações.
          </p>

          <ul className="space-y-3 text-zinc-400 mb-8">
            <li>🔗 Sistemas conectados</li>
            <li>⚙️ Processos automáticos</li>
            <li>📩 Leads direto no CRM</li>
          </ul>

          <button onClick={handleWhatsApp} className="border px-6 py-3 rounded-lg hover:border-orange-500">
            Quero automatizar
          </button>
        </div>
      </section>

      {/* DASHBOARDS */}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-white mb-6 uppercase">
          Clareza dos seus dados
        </h2>

        <p className="text-zinc-500 mb-6">
          Você não pode crescer sem saber o que está funcionando.
        </p>

        <ul className="space-y-3 text-zinc-400 mb-8">
          <li>📊 Dados centralizados</li>
          <li>⚡ Decisão rápida</li>
          <li>📈 Visão real do negócio</li>
        </ul>

        <button onClick={handleWhatsApp} className="border px-6 py-3 rounded-lg hover:border-orange-500">
          Quero ver meus números
        </button>
      </section>

      {/* SDR IA */}
      <section className="py-24 px-8 bg-zinc-950/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-6 uppercase">
            SDR com inteligência artificial
          </h2>

          <p className="text-zinc-500 mb-6">
            Se você demora pra responder, você perde a venda.
          </p>

          <ul className="space-y-3 text-zinc-400 mb-8">
            <li>🤖 Resposta automática</li>
            <li>📅 Agendamento de reuniões</li>
            <li>🔥 Qualificação de leads</li>
          </ul>

          <button onClick={handleWhatsApp} className="border px-6 py-3 rounded-lg hover:border-orange-500">
            Quero um SDR automático
          </button>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-24 px-8 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-black text-white mb-12 uppercase">
          Como funciona
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {["Você chama", "Eu analiso", "Implemento", "Você cresce"].map((s, i) => (
            <div key={i}>
              <div className="text-orange-500 font-bold mb-2">0{i + 1}</div>
              <p className="text-zinc-400">{s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OBJEÇÕES */}
      <section className="py-24 px-8 bg-zinc-950/40 text-center">
        <h2 className="text-4xl font-black text-white mb-10 uppercase">
          Dúvidas comuns
        </h2>

        <div className="space-y-6 max-w-2xl mx-auto text-zinc-400">
          <p><strong className="text-white">É caro?</strong> Adaptado ao seu momento</p>
          <p><strong className="text-white">É complicado?</strong> Eu faço tudo</p>
          <p><strong className="text-white">Funciona?</strong> Só implemento o que faz sentido</p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 text-center">
        <h2 className="text-5xl font-black text-white mb-6 uppercase">
          Pronto pra parar de perder dinheiro?
        </h2>

        <button onClick={handleWhatsApp} className="bg-orange-600 px-10 py-5 rounded-xl font-bold hover:scale-105 transition">
          Quero começar agora
        </button>
      </section>

      <footer className="text-center text-zinc-600 py-10 text-xs">
        © 2026 — Automação & Performance
      </footer>
    </main>
  );
}
