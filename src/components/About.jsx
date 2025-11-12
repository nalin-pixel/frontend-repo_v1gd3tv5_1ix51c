export default function About() {
  return (
    <section id="about" className="relative bg-black py-20">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
          <p className="text-zinc-300 mt-4 leading-relaxed">
            I'm a data analyst with a focus on building reliable data pipelines, creating impactful dashboards, and translating complex patterns into simple narratives that guide business decisions.
          </p>
          <ul className="mt-6 space-y-2 text-zinc-300">
            <li>• 4+ years experience across e‑commerce and SaaS</li>
            <li>• Strong collaboration with product, marketing, and finance teams</li>
            <li>• Comfortable with ambiguous, fast‑moving problems</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm text-zinc-400">Recent Wins</p>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-4">
              <p className="text-emerald-300">Increased conversion by 7% by redesigning onboarding based on funnel analysis.</p>
            </div>
            <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-4">
              <p className="text-emerald-300">Reduced reporting time by 60% by automating weekly KPI pack.</p>
            </div>
            <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-4">
              <p className="text-emerald-300">Launched sales dashboard adopted by 8 teams globally.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
