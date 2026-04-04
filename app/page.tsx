"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <main className="bg-[#020202] text-white overflow-x-hidden relative">

      {/* CURSOR SPOTLIGHT */}
      <div
        className="pointer-events-none fixed inset-0 z-10"
        style={{
          background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, rgba(255,115,0,0.15), transparent 80%)`,
        }}
      />

      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute w-[900px] h-[900px] bg-orange-500/20 blur-[200px] -top-40 -left-40" />
        <div className="absolute w-[700px] h-[700px] bg-purple-500/20 blur-[180px] bottom-[-200px] right-[-100px]" />
      </div>

      {/* GRID */}
      <div className="fixed inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-[100px] font-black leading-[0.9]"
        >
          Seu marketing <br />
          <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            nunca mais será o mesmo
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-zinc-400 mt-6 text-lg max-w-xl"
        >
          Tecnologia, dados e automação trabalhando juntos.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-10 py-5 rounded-xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 shadow-[0_0_50px_rgba(255,100,0,0.5)]"
        >
          Começar agora
        </motion.button>
      </section>

      {/* CARDS PREMIUM */}
      <section className="py-32 px-8 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {["Tráfego", "Automação", "Dados"].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -15 }}
            className="group relative p-8 rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 overflow-hidden"
          >

            {/* glow interno */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-orange-500/20 to-purple-500/20 blur-2xl"/>

            <h3 className="text-xl font-bold mb-2 relative z-10">{item}</h3>
            <p className="text-zinc-400 text-sm relative z-10">
              Estrutura avançada para crescimento.
            </p>
          </motion.div>
        ))}

      </section>

      {/* BLOCO DIFERENCIADO */}
      <section className="py-40 relative">

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent"/>

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Não é sobre rodar anúncios.
          </h2>

          <p className="text-4xl md:text-6xl mt-6 font-black bg-gradient-to-r from-orange-400 to-purple-500 text-transparent bg-clip-text italic">
            É sobre dominar o sistema.
          </p>

        </div>
      </section>

      {/* GRID INTERATIVO */}
      <section className="py-32 px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {[1,2,3,4].map((_, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="relative p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden group"
          >

            {/* efeito brilho animado */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
              <div className="absolute w-[300px] h-[300px] bg-orange-500/30 blur-3xl -top-20 -left-20 animate-pulse"/>
            </div>

            <h3 className="text-2xl font-bold mb-3 relative z-10">
              Sistema inteligente
            </h3>

            <p className="text-zinc-400 relative z-10">
              Tudo conectado em uma única estrutura.
            </p>

          </motion.div>
        ))}

      </section>

      {/* CTA FINAL */}
      <section className="py-40 text-center">

        <h2 className="text-6xl font-black mb-10">
          Pronto para escalar?
        </h2>

        <button className="px-14 py-6 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 font-bold text-xl shadow-[0_0_60px_rgba(255,100,0,0.6)] hover:scale-110 transition">
          Começar agora
        </button>

      </section>

    </main>
  );
}
