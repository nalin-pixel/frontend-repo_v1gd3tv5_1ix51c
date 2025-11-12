import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-10 text-center text-zinc-500">
          © {new Date().getFullYear()} • Data Analyst Portfolio • Built with care
        </div>
      </footer>
    </div>
  );
}

export default App;
