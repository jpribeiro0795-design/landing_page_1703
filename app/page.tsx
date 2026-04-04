"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Quero estruturar minha operação com IA e tráfego.");
    window.open(`https://wa.me/5561992189494?text=${msg}`, "_blank");
  };

  return (
    <main className="bg-[#020202] text-white overflow-x-hidden">

      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute w-[900px] h-[900px] bg-orange-500/20 blur-[180px] -top-40 -left-40 animate-pulse"/>
        <div className="absolute w-[700px] h-[700px] bg-purple-500/20 blur-[160px] bottom-[-200px] right-[-100px] animate-pulse"/>
      </div>

      {/* GRID */}
      <div className="fixed inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* NAV */}
      <nav className={`fixed w-full z-50 transition ${scrolled ? "backdrop-blur-xl bg-black/40 border-b border-white/10 py-4" : "py-8"}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between">
          <span className="font-black tracking-widest">DATAFLOW</span>
          <button onClick={handleWhatsApp} className="px-5 py-2 rounded-full border border-white/20 hover:border-orange-500 transition">
            Diagnóstico
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-44 pb-32 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-[90px] font-black leading-[0.9]"
        >
          Transforme tráfego em{" "}
          <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            lucro previsível
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-zinc-400 max-w-xl mx-auto mt-6 text-lg"
        >
          Tráfego pago, automação e IA conectados em um sistema único.
        </motion.p>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleWhatsApp}
          className="mt-10 px-10 py-5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl font-bold shadow-[0_0_40px_rgba(255,100,0,0.4)]"
        >
          Solicitar diagnóstico
        </motion.button>
      </section>

      {/* CARDS GLASS */}
      <section className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-8 pb-32">
        {["Tráfego sem direção", "Leads perdidos", "Dados bagunçados"].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-orange-500/40 transition shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            <h3 className="text-lg font-bold mb-2">{item}</h3>
            <p className="text-zinc-400 text-sm">
              Problema estrutural que impede crescimento consistente.
            </p>
          </motion.div>
        ))}
      </section>

      {/* SOLUÇÃO */}
      <section className="py-32 text-center">
        <h2 className="text-5xl font-black mb-20">
          Uma estrutura completa
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-8">
          {[
            "Google Ads & Meta Ads",
            "Landing Pages",
            "Integrações",
            "SDR com IA",
            "Dashboards",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl hover:shadow-[0_0_40px_rgba(255,100,0,0.3)] transition"
            >
              <h3 className="font-bold text-xl">{item}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES (CARA DE SAAS) */}
      <section className="py-32 px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {[
          {t: "Aquisição previsível", d: "Google e Meta otimizados para lucro"},
          {t: "Páginas rápidas", d: "Alta conversão e carregamento instantâneo"},
          {t: "Automação total", d: "Integrações eliminam processos manuais"},
          {t: "IA comercial", d: "Responde e qualifica leads automaticamente"},
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-500 transition relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition"/>
            <h3 className="text-2xl font-bold mb-3">{item.t}</h3>
            <p className="text-zinc-400">{item.d}</p>
          </motion.div>
        ))}

      </section>

      {/* CTA */}
      <section className="py-40 text-center">
        <h2 className="text-6xl font-black mb-10">
          Escale com previsibilidade
        </h2>

        <button
          onClick={handleWhatsApp}
          className="px-14 py-6 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 font-bold text-xl shadow-[0_0_60px_rgba(255,100,0,0.5)] hover:scale-105 transition"
        >
          Começar agora
        </button>
      </section>

    </main>
  );
}
