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
      "Quero estruturar minha operação com tráfego, automação e IA."
    );
    window.open(`https://wa.me/5561992189494?text=${msg}`, "_blank");
  };

  return (
    <main className="bg-[#020202] text-white font-sans overflow-x-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="fixed inset-0 -z-10">
        <div className="absolute w-[700px] h-[700px] bg-orange-600/10 blur-[160px] -top-[200px] -left-[200px]" />
        <div className="absolute w-[500px] h-[500px] bg-orange-500/10 blur-[140px] bottom-[-150px] right-[-100px]" />
      </div>

      {/* NAV */}
      <nav className={`fixed w-full z-50 transition-all ${scrolled ? "bg-black/50 backdrop-blur-xl py-4 border-b border-white/5" : "py-8"}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <span className="text-sm font-black tracking-[0.2em] uppercase text-white">
            Sua Operação
          </span>

          <button onClick={handleWhatsApp} className="text-xs border border-white/10 px-5 py-2 rounded-full hover:border-orange-500 transition">
            Diagnóstico
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-44 pb-32 px-6 text-center max-w-6xl mx-auto">
        <span className="text-xs tracking-[0.3em] text-orange-400 uppercase">
          Infraestrutura de crescimento
        </span>

        <h1 className="text-5xl md:text-[80px] font-black leading-[0.95] mt-6 mb-8">
          Transforme sua operação em uma{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 italic">
            máquina previsível
          </span>
        </h1>

        <p className="text-zinc-400 max-w-xl mx-auto text-lg mb-10">
          Tráfego pago, automação, IA e dados trabalhando juntos
          para gerar crescimento real.
        </p>

        <button onClick={handleWhatsApp} className="bg-white text-black px-10 py-5 rounded-xl font-bold hover:scale-105 transition">
          Solicitar diagnóstico
        </button>
      </section>

      {/* PROBLEMA */}
      <section className="py-24 px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-zinc-200">
          A maioria das empresas cresce no caos
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Tráfego sem direção",
            "Leads sem resposta",
            "Dados sem controle",
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur">
              <p className="text-zinc-400">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRANSIÇÃO */}
      <section className="text-center py-32">
        <p className="text-3xl md:text-4xl font-black text-white">
          O problema não é o tráfego
        </p>
        <p className="text-orange-500 text-3xl md:text-4xl font-black italic mt-4">
          é a falta de estrutura
        </p>
      </section>

      {/* SOLUÇÃO */}
      <section className="py-24 px-8 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-12">
          Uma infraestrutura completa de crescimento
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Tráfego Pago",
            "Páginas",
            "Integrações",
            "SDR com IA",
            "Dashboards",
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-orange-500/30 transition backdrop-blur">
              <h3 className="font-bold text-white">{item}</h3>
            </div>
          ))}

        </div>
      </section>

      {/* SERVIÇOS (CARA DE PRODUTO) */}
      <section className="py-32 px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {[
          {
            t: "Aquisição previsível",
            d: "Google Ads e Meta focados em lucro real",
          },
          {
            t: "Páginas que convertem",
            d: "Velocidade e estrutura para vender",
          },
          {
            t: "Processos automáticos",
            d: "Integrações que eliminam tarefas manuais",
          },
          {
            t: "SDR com IA",
            d: "Resposta e qualificação imediata",
          },
          {
            t: "Clareza de dados",
            d: "Decisões baseadas em números reais",
          },
        ].map((item, i) => (
          <div key={i} className="group p-10 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-orange-500/40 transition backdrop-blur relative overflow-hidden">

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-orange-500/5 transition" />

            <h3 className="text-xl font-bold mb-3">{item.t}</h3>
            <p className="text-zinc-400 text-sm">{item.d}</p>

          </div>
        ))}

      </section>

      {/* MÉTRICAS */}
      <section className="py-24 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {["+ROI", "-CPL", "+Conversão", "-Tempo"].map((m, i) => (
            <div key={i}>
              <p className="text-3xl font-black text-white">{m}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESSO */}
      <section className="py-24 px-8 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Como funciona</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {["Diagnóstico", "Estrutura", "Implementação", "Otimização"].map((s, i) => (
            <div key={i}>
              <p className="text-orange-500 mb-2">0{i + 1}</p>
              <p className="text-zinc-400">{s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 text-center">
        <h2 className="text-5xl font-black mb-8">
          Pronto para escalar de verdade?
        </h2>

        <button onClick={handleWhatsApp} className="bg-orange-600 px-12 py-6 rounded-2xl font-bold hover:scale-105 transition">
          Solicitar diagnóstico
        </button>
      </section>

      <footer className="text-center text-zinc-600 py-10 text-xs">
        © 2026 — Infraestrutura digital inteligente
      </footer>
    </main>
  );
}
