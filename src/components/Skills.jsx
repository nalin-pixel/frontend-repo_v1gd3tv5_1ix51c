import { Database, BarChart3, LineChart, PieChart, Table, SlidersHorizontal, FileSpreadsheet } from "lucide-react";

const skills = [
  { icon: Database, name: "SQL", desc: "Queries, joins, window funcs, modeling" },
  { icon: FileSpreadsheet, name: "Excel", desc: "Power Query, Pivot, advanced formulas" },
  { icon: BarChart3, name: "Power BI", desc: "DAX, data modeling, interactive dashboards" },
  { icon: PieChart, name: "Tableau", desc: "Visual analytics, KPIs, storytelling" },
  { icon: LineChart, name: "Python", desc: "Pandas, NumPy, matplotlib, Seaborn" },
  { icon: Table, name: "Data Cleaning", desc: "ETL, data quality, profiling" },
  { icon: SlidersHorizontal, name: "A/B Testing", desc: "Experiment design, inference" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-black py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Core Skills</h2>
        <p className="text-zinc-400 mt-2">Tools and techniques I use to answer business questions.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {skills.map(({ icon: Icon, name, desc }) => (
            <div key={name} className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-emerald-500/20 p-2 text-emerald-400">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-white font-medium">{name}</h3>
                  <p className="text-zinc-400 text-sm">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
