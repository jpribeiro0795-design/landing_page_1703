"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      "Olá! Quero solicitar meu diagnóstico gratuito."
    );
    window.open(`https://wa.me/5561992189494?text=${msg}`, "_blank");
  };

  return (
    <main className="bg-[#020202] text-white overflow-x-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute w-[700px] h-[700px] bg-orange-500/20 blur-[160px] -top-40 -left-40" />
        <div className="absolute w-[600px] h-[600px] bg-orange-600/10 blur-[140px] bottom-0 right-0" />
      </div>

      {/* NAV */}
      <nav className={`fixed w-full z-50 transition ${scrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/10 py-4" : "py-6"}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
          <span className="font-black tracking-widest text-sm">DATAFLOW</span>
          <button
            onClick={handleWhatsApp}
            className="text-xs border border-white/20 px-4 py-2 rounded-full hover:border-orange-500 transition"
          >
            Diagnóstico
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-28 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          TRANSFORME CAOS EM <br />
          <span className="text-orange-500 italic drop-shadow-[0_0_20px_rgba(255,115,0,0.6)]">
            LUCRO PREVISÍVEL
          </span>
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Páginas rápidas, automação com IA, dashboards e tráfego pago
          trabalhando juntos para gerar vendas todos os dias.
        </p>

        <button
          onClick={handleWhatsApp}
          className="bg-orange-500 px-10 py-4 rounded-xl font-bold text-black 
          hover:scale-105 transition 
          shadow-[0_0_30px_rgba(255,115,0,0.5)]"
        >
          SOLICITAR DIAGNÓSTICO
        </button>
      </section>

      {/* PROBLEMAS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            "Anúncios que não convertem",
            "Leads esfriando sem resposta",
            "Falta de visão clara dos dados",
          ].map((text, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 
              hover:border-orange-500/40 transition 
              hover:shadow-[0_0_30px_rgba(255,115,0,0.2)]"
            >
              <p className="text-gray-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-24 px-6">
        <h2 className="text-center text-4xl font-black mb-16">
          SOLUÇÕES
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            "Landing Pages Rápidas",
            "Integrações & Webhooks",
            "Dashboards de Dados",
            "SDR com IA",
            "Tráfego Pago (Google & Meta)",
          ].map((service, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 
              hover:border-orange-500/40 transition 
              hover:shadow-[0_0_40px_rgba(255,115,0,0.25)] group"
            >
              <h3 className="font-bold text-lg mb-3 group-hover:text-orange-500 transition">
                {service}
              </h3>
              <p className="text-gray-400 text-sm">
                Estrutura pensada para gerar resultado real, não só estética.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESSO */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6 text-center">
          {["Diagnóstico", "Estrutura", "Implementação", "Escala"].map((step, i) => (
            <div key={i}>
              <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/30">
                {i + 1}
              </div>
              <p className="text-gray-400 text-sm">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-orange-500 to-orange-700 p-16 rounded-3xl shadow-[0_0_80px_rgba(255,115,0,0.4)]">
          <h2 className="text-4xl font-black mb-6">
            PRONTO PRA ESCALAR?
          </h2>

          <button
            onClick={handleWhatsApp}
            className="bg-black px-10 py-4 rounded-xl font-bold 
            hover:scale-105 transition"
          >
            COMEÇAR AGORA
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-600 text-xs">
        © 2026 Dataflow
      </footer>
    </main>
  );
}
