export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-purple-600 opacity-30 blur-[200px] top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-blue-600 opacity-30 blur-[200px] bottom-[-100px] right-[-100px] animate-pulse" />
      </div>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 text-transparent bg-clip-text">
          Sua operação<br />travando?
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-10">
          Páginas lentas, processos manuais e dados bagunçados estão custando dinheiro — todos os dias.
        </p>

        <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 font-semibold text-lg shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:scale-105 transition">
          Quero automatizar agora
        </button>

      </section>

      {/* SERVICES */}
      <section className="grid md:grid-cols-3 gap-6 px-6 pb-32 max-w-6xl mx-auto">

        {[
          {
            title: "Páginas rápidas",
            desc: "Sites que carregam instantaneamente e não fazem o cliente desistir."
          },
          {
            title: "Integrações",
            desc: "Tudo conectado. Sem copiar e colar manual nunca mais."
          },
          {
            title: "Dashboards",
            desc: "Seus números organizados pra você tomar decisão rápida."
          },
          {
            title: "SDR com IA",
            desc: "Respostas automáticas que não deixam lead esfriar."
          },
          {
            title: "Google Ads",
            desc: "Campanhas que trazem gente pronta pra comprar."
          },
          {
            title: "Meta Ads",
            desc: "Anúncios que param o scroll e geram clique."
          }
        ].map((item, i) => (
          <div
            key={i}
            className="group p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-purple-500 transition hover:scale-[1.02]"
          >
            <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition">
              {item.title}
            </h3>
            <p className="text-gray-400">
              {item.desc}
            </p>
          </div>
        ))}

      </section>

      {/* CTA FINAL */}
      <section className="text-center pb-32 px-6">

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ou você resolve isso agora<br />ou continua perdendo dinheiro
        </h2>

        <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 text-xl font-semibold shadow-[0_0_50px_rgba(139,92,246,0.7)] hover:scale-105 transition">
          Falar comigo
        </button>

      </section>

    </main>
  );
}
