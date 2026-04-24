import { motion } from 'motion/react';
import { CERTIFICATES } from '../constants';
import { Award } from 'lucide-react';

export function Certificates() {
  return (
    <section id="certificados" className="flex flex-col gap-6">
      <header className="flex flex-col gap-1 border-b border-brand-border pb-4">
        <h2 className="text-xl font-bold tracking-tight text-brand-text-main">Certificados & Extras</h2>
      </header>
      
      <div className="grid md:grid-cols-3 gap-5">
        {CERTIFICATES.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-5 bg-white border border-brand-border rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-8 h-8 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center mb-3">
              <Award size={16} />
            </div>
            <h4 className="font-bold text-sm mb-1 text-brand-text-main">{cert.name}</h4>
            <p className="text-[12px] text-brand-text-muted">{cert.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const images = [
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60",
];

export function Gallery() {
  return (
    <section id="galeria" className="flex flex-col gap-6">
      <header className="flex flex-col gap-1 border-b border-brand-border pb-4">
        <h2 className="text-xl font-bold tracking-tight text-brand-text-main">Portfólio Visual</h2>
      </header>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group relative aspect-square overflow-hidden rounded-xl bg-slate-100 border border-brand-border"
          >
            <img
              src={src}
              alt={`Trabalho ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-text-main/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
