import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-16">
        <div className="max-w-2xl">
          <p className="text-emerald-400 text-sm tracking-widest uppercase mb-4">Data Analyst Portfolio</p>
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight">
            Turning data into clear, actionable insights
          </h1>
          <p className="mt-4 text-zinc-300">
            I analyze complex datasets, build dashboards, and communicate findings that drive decisions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-md bg-emerald-500 text-white font-medium hover:bg-emerald-400 transition">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-md bg-white/10 text-white font-medium hover:bg-white/20 transition">Get in touch</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
    </section>
  );
}
