export default function Hero() {
  return (
    <section className="relative overflow-hidden py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 to-black" />

      <div className="relative max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/60 px-5 py-2 text-sm text-zinc-300 backdrop-blur">
          AI Spend Optimization Platform
        </div>

        <h1 className="mt-8 text-6xl md:text-8xl font-bold tracking-tight gradient-text leading-tight">
          Stop Overspending
          <br />
          on AI Tools
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-zinc-400 leading-relaxed">
          Analyze your AI stack, uncover unnecessary spending,
          and discover smarter pricing plans instantly.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
            Analyze My Stack
          </button>

          <button className="border border-zinc-700 bg-zinc-900/60 px-8 py-4 rounded-2xl text-white hover:bg-zinc-800 transition-all duration-300">
            View Example Audit
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-zinc-800 bg-zinc-950/70 backdrop-blur rounded-3xl p-6">
            <h3 className="text-4xl font-bold">$8.2k</h3>
            <p className="text-zinc-400 mt-2">
              Average annual savings
            </p>
          </div>

          <div className="border border-zinc-800 bg-zinc-950/70 backdrop-blur rounded-3xl p-6">
            <h3 className="text-4xl font-bold">40%</h3>
            <p className="text-zinc-400 mt-2">
              Reduction in AI spend
            </p>
          </div>

          <div className="border border-zinc-800 bg-zinc-950/70 backdrop-blur rounded-3xl p-6">
            <h3 className="text-4xl font-bold">5 min</h3>
            <p className="text-zinc-400 mt-2">
              Instant audit generation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}