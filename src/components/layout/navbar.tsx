export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-white" />

          <h1 className="text-2xl font-bold tracking-tight">
            SpendLens
          </h1>
        </div>

        <button className="bg-white text-black px-5 py-2.5 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
          Start Audit
        </button>
      </div>
    </nav>
  );
}