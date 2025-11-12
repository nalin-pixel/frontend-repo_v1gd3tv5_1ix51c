import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-white font-semibold tracking-wide">
          <span className="text-emerald-400">DA</span> • Portfolio
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <div className="w-px h-5 bg-white/10 mx-2" />
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="#contact" className="hover:text-white transition" aria-label="Email">
            <Mail size={18} />
          </a>
        </nav>
        <button className="md:hidden text-zinc-300" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 text-zinc-300">
            <a onClick={() => setOpen(false)} href="#about" className="hover:text-white">About</a>
            <a onClick={() => setOpen(false)} href="#skills" className="hover:text-white">Skills</a>
            <a onClick={() => setOpen(false)} href="#projects" className="hover:text-white">Projects</a>
            <a onClick={() => setOpen(false)} href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
