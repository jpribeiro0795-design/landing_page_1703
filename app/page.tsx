"use client"; // Necessário para usar funções de clique e interatividade

export default function Home() {
  
  // Função para redirecionar para o WhatsApp
  const handleContact = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar um diagnóstico gratuito com a DataFlow.");
    window.open(`https://wa.me/SEUNUMERO?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-orange-500/30">

      {/* BACKGROUND COM MOVIMENTO SUTIL */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-orange-500/20 blur-[150px] -top-[200px] -left-[100px] animate-pulse" />
        <div className="absolute w-[600px] h-[600px] bg-orange-600/10 blur-[150px] -bottom-[200px] -right-[100px]" />
      </div>

      {/* NAVBAR FIXA COM EFEITO GLASSMORPHISM */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-white/5 px-8 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-black bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text tracking-tighter">
            DataFlow
          </h1>
          <button 
            onClick={handleContact}
            className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] active:scale-95 text-sm"
          >
            Agendar diagnóstico
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="text-center px-6 py-32 max-w-4xl mx-auto relative">
        <div className="inline-block px-4 py-1.5 mb-6 border border-orange-500/30 rounded-full bg-orange-500/5 text-orange-400 text-xs font-bold uppercase tracking-widest">
           Inteligência de Dados
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight">
          Pare de tomar decisões
          <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 text-transparent bg-clip-text">
            no escuro
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Criamos dashboards inteligentes e automações com IA que mostram
          exatamente onde sua empresa está perdendo dinheiro e onde pode crescer.
        </p>
        <button 
          onClick={handleContact}
          className="bg-orange-500 hover:bg-orange-600 hover:scale-105 transition-all transform px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-orange-500/20 active:scale-95"
        >
          Solicitar demonstração agora
        </button>
      </section>

      {/* PROBLEMA (DARKER SECTION) */}
      <section className="py-24 px-6 bg-zinc-950/50 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            A maioria das empresas tem dados, mas não tem clareza
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed italic">
            "Informações espalhadas em planilhas e sistemas desconectados
            fazem empresas perderem oportunidades todos os dias."
          </p>
        </div>
      </section>

      {/* BENEFÍCIOS COM HOVER ANIMADO */}
      <section className="grid md:grid-cols-3 gap-8 px-8 py-24 max-w-6xl mx-auto">
        {[
          { title: "Clareza total", desc: "Todos os indicadores importantes do seu negócio organizados em um único painel visual." },
          { title: "Automação inteligente", desc: "Reduza trabalho manual com automações e análises feitas por inteligência artificial." },
          { title: "Crescimento previsível", desc: "Tome decisões baseadas em dados reais e escale sua empresa com segurança." }
        ].map((item, index) => (
          <div key={index} className="group bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/[0.08] hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-xl font-bold mb-4 text-orange-400 group-hover:text-orange-300 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 text-center">
        <p className="text-gray-500 text-sm mb-4">© 2026 DataFlow — Inteligência para decisões de negócio</p>
        <div className="flex justify-center gap-6 text-gray-600 text-xs uppercase font-bold tracking-widest">
          <a href="#" className="hover:text-orange-500 transition">Linkedin</a>
          <a href="#" className="hover:text-orange-500 transition">Instagram</a>
          <a href="#" className="hover:text-orange-500 transition">Contato</a>
        </div>
      </footer>
    </main>
  );
}
