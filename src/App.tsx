import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { SubjectAreas } from './components/SubjectAreas';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased text-blue-900 selection:bg-blue-100 relative overflow-x-hidden">
      {/* Background Clouds decoration */}
      <div className="fixed top-20 left-[10%] w-32 h-16 bg-white/40 blur-2xl rounded-full animate-float" />
      <div className="fixed top-40 right-[15%] w-48 h-24 bg-white/30 blur-3xl rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="fixed bottom-20 left-[20%] w-40 h-20 bg-white/40 blur-2xl rounded-full animate-float" style={{ animationDelay: '2s' }} />

      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-20 flex flex-col gap-24 relative z-10">
        <Hero />
        <About />
        <Resume />
        <SubjectAreas />
      </main>

      <footer className="py-10 text-center text-blue-400 text-xs font-medium uppercase tracking-widest">
        &copy; 2026 • Meu Portfólio Escolar
      </footer>
    </div>
  );
}
