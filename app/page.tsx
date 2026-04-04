import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,255,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,0,255,0.15),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(0,150,255,0.15),transparent_50%)] blur-3xl" />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Crescimento previsível
          <br /> com dados e performance
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-xl text-white/70"
        >
          Data, automação e tráfego pago trabalhando juntos pra escalar sua operação.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10"
        >
          <Button className="text-lg px-8 py-6 rounded-2xl bg-white text-black hover:bg-white/90 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Quero escalar
          </Button>
        </motion.div>
      </section>

      {/* Cards Section */}
      <section className="relative z-10 grid md:grid-cols-3 gap-8 px-6 pb-32 max-w-6xl mx-auto">

        {["Data & BI", "Automação", "Tráfego Pago"].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all shadow-[0_0_30px_rgba(0,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,0,255,0.2)]"
          >
            <h3 className="text-xl font-semibold mb-4">{item}</h3>
            <p className="text-white/60">
              Soluções focadas em performance e crescimento escalável.
            </p>
          </motion.div>
        ))}

      </section>

      {/* Floating Glow Elements */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl top-10 left-10"
      />

      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10"
      />

    </div>
  );
}
