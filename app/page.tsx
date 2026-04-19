import HeroImage from "@/components/hero-image";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface selection:bg-primary/20">
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 space-y-8 animate-slow-fade">
            <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-accent border border-accent/30 rounded-full uppercase">
              20 Years of Software Development
            </span>
            <h1 className="text-6xl font-extrabold tracking-tight text-neutral-dark leading-[1.1]">
              Yicong Lin
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-semibold">
              Bridging AI Innovation with Robust Software Architecture
            </p>
            <p className="text-lg text-secondary leading-relaxed max-w-2xl">
              Leverage 20 years of experience to transform technical complexity into streamlined, production-ready AI products.<br/>
              Specialized in architecting robust full-stack ecosystems from performance-critical systems.
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                View Projects
              </button>
              <button className="border-2 border-slate-200 text-neutral-dark px-8 py-4 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95">
                Read My Story
              </button>
            </div>
          </div>

          <div className="relative">
            <HeroImage />
          </div>
        </div>
      </section>
    </main>
  );
}
