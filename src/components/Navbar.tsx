import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Apresentação', href: '#sobre' },
  { name: 'Currículo', href: '#curriculo' },
  { name: 'Áreas', href: '#areas' },
  { name: 'Galeria', href: '#galeria' },
  { name: 'Contato', href: '#contato' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl bg-white/60 backdrop-blur-xl border border-white/40 rounded-full px-8 py-3 flex items-center justify-between z-50 shadow-lg shadow-blue-200/50">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xs">
          GP
        </div>
        <span className="font-bold text-blue-900 tracking-tight">Gabriel Palma S.</span>
      </div>

      <div className="hidden md:flex gap-6">
        {['Sobre', 'Currículo', 'Matérias'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace('í', 'i')}`}
            className="text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-0 right-0 bg-white/90 backdrop-blur-xl rounded-3xl p-6 flex flex-col gap-4 shadow-xl border border-white/50 md:hidden"
          >
             {['Sobre', 'Currículo', 'Matérias'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace('í', 'i')}`}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-blue-900"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
