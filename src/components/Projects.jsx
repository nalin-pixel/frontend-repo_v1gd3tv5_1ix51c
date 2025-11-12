import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Retail Sales Dashboard",
    desc: "Power BI dashboard with cohort analysis and region-wise performance.",
    tags: ["Power BI", "SQL", "DAX"],
    link: "#"
  },
  {
    title: "Customer Churn Analysis",
    desc: "Python + SQL workflow identifying churn drivers and segments.",
    tags: ["Python", "Pandas", "SQL"],
    link: "#"
  },
  {
    title: "Marketing Mix Modeling",
    desc: "Tableau story exploring channel ROI and saturation curves.",
    tags: ["Tableau", "Stats"],
    link: "#"
  },
  {
    title: "A/B Test Evaluation",
    desc: "Designed and analyzed online experiment, uplift and significance.",
    tags: ["Experimentation", "Python"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Highlighted Projects</h2>
            <p className="text-zinc-400 mt-2">A selection of dashboards, deep-dives, and analyses.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-emerald-400 hover:text-emerald-300">See all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-white font-medium text-lg">{p.title}</h3>
                  <p className="text-zinc-400 text-sm mt-1">{p.desc}</p>
                </div>
                <ExternalLink className="text-zinc-400 group-hover:text-white" size={18} />
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map(t => (
                  <span key={t} className="text-xs text-emerald-300/90 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
