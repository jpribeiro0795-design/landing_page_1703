export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-orange-500/20 blur-[200px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-orange-400/10 blur-[200px] bottom-[-200px] right-[-200px]" />
      </div>


      {/* NAVBAR */}

      <nav className="flex justify-between items-center px-8 py-6 max-w-6xl mx-auto">

        <h1 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
          DataFlow
        </h1>

        <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg font-semibold transition">
          Agendar diagnóstico
        </button>

      </nav>



      {/* HERO */}

      <section className="text-center px-6 py-32 max-w-4xl mx-auto">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">

          Pare de tomar decisões
          <span className="block bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
            no escuro
          </span>

        </h1>

        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Criamos dashboards inteligentes e automações com IA que mostram
          exatamente onde sua empresa está perdendo dinheiro e onde pode crescer.
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 hover:scale-105 transition transform px-10 py-4 rounded-xl font-semibold shadow-xl">
          Solicitar demonstração
        </button>

      </section>



      {/* PROBLEMA */}

      <section className="py-24 px-6 bg-zinc-900">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-8">
            A maioria das empresas tem dados, mas não tem clareza
          </h2>

          <p className="text-gray-400 text-lg">
            Informações espalhadas em planilhas, sistemas desconectados
            e relatórios difíceis de entender fazem empresas perderem
            oportunidades de crescimento todos os dias.
          </p>

        </div>

      </section>



      {/* BENEFÍCIOS */}

      <section className="grid md:grid-cols-3 gap-8 px-8 py-24 max-w-6xl mx-auto">

        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-orange-500 transition">

          <h3 className="text-xl font-semibold mb-4 text-orange-400">
            Clareza total
          </h3>

          <p className="text-gray-400">
            Todos os indicadores importantes do seu negócio
            organizados em um único painel visual.
          </p>

        </div>



        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-orange-500 transition">

          <h3 className="text-xl font-semibold mb-4 text-orange-400">
            Automação inteligente
          </h3>

          <p className="text-gray-400">
            Reduza trabalho manual com automações e análises
            feitas por inteligência artificial.
          </p>

        </div>



        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-orange-500 transition">

          <h3 className="text-xl font-semibold mb-4 text-orange-400">
            Crescimento previsível
          </h3>

          <p className="text-gray-400">
            Tome decisões baseadas em dados reais
            e escale sua empresa com segurança.
          </p>

        </div>

      </section>



      {/* COMO FUNCIONA */}

      <section className="py-28 px-6 bg-zinc-900">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-16">
            Como funciona
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            <div>

              <h3 className="text-orange-400 font-semibold mb-3">
                1. Diagnóstico
              </h3>

              <p className="text-gray-400">
                Analisamos seus dados e identificamos
                gargalos de crescimento.
              </p>

            </div>


            <div>

              <h3 className="text-orange-400 font-semibold mb-3">
                2. Implementação
              </h3>

              <p className="text-gray-400">
                Criamos dashboards e automações
                adaptadas ao seu negócio.
              </p>

            </div>


            <div>

              <h3 className="text-orange-400 font-semibold mb-3">
                3. Escala
              </h3>

              <p className="text-gray-400">
                Você ganha clareza para tomar decisões
                estratégicas e crescer mais rápido.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* CTA */}

      <section className="text-center py-32 px-6">

        <h2 className="text-4xl font-bold mb-8">
          Quer entender onde sua empresa pode crescer mais?
        </h2>

        <button className="bg-orange-500 hover:bg-orange-600 px-12 py-5 rounded-xl font-semibold text-lg shadow-xl transition">
          Agendar diagnóstico gratuito
        </button>

      </section>



      {/* FOOTER */}

      <footer className="border-t border-white/10 py-10 text-center text-gray-500 text-sm">
        © 2026 DataFlow — Inteligência para decisões de negócio
      </footer>

    </main>
  )
}