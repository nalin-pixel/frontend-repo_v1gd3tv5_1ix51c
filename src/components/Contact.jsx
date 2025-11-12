import { Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative bg-black py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3">
          <Mail className="text-emerald-400" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact</h2>
        </div>
        <p className="text-zinc-400 mt-2">Have a project or a question? Let's talk.</p>

        <form onSubmit={onSubmit} className="mt-8 grid md:grid-cols-2 gap-4">
          <input
            className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-zinc-500"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            className="bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-zinc-500"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <textarea
            className="md:col-span-2 bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-zinc-500 min-h-[140px]"
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
          <button type="submit" className="md:col-span-2 inline-flex items-center gap-2 justify-center px-5 py-3 rounded-md bg-emerald-500 text-white font-medium hover:bg-emerald-400 transition">
            <Send size={18} />
            {sent ? "Sent!" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
