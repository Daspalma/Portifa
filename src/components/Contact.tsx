import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulação do envio
    setTimeout(() => {
      alert(`Mensagem enviada com sucesso! \nNome: ${formData.name}`);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contato" className="flex flex-col gap-10 py-10">
      <div className="bg-white rounded-2xl border border-brand-border p-8 lg:p-12 shadow-sm flex flex-col lg:flex-row gap-16">
        <div className="flex-1">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-[10px] uppercase font-bold mb-4">Contato</span>
          <h2 className="text-4xl font-bold text-brand-text-main mb-8 tracking-tight">Vamos construir <br /> algo incrível?</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-brand-text-muted">
              <Mail size={18} className="text-brand-primary" />
              <span className="text-sm font-medium">gabriel_palma-silva@estudante.com</span>
            </div>
            <div className="flex items-center gap-4 text-brand-text-muted">
              <MapPin size={18} className="text-brand-primary" />
              <span className="text-sm font-medium">Santa Catarina, Brasil</span>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Seu Nome</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-50 border border-brand-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
                placeholder="Ex: Lucas Silva"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Seu E-mail</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-50 border border-brand-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
                placeholder="exemplo@email.com"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Mensagem</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-slate-50 border border-brand-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all resize-none"
                placeholder="No que posso ajudar?"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full py-4 bg-brand-primary text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>
        </div>
      </div>
      
      <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-slate-400 font-bold">
        <p>&copy; 2024 LUCAS SILVA. PORTFÓLIO ACADÊMICO.</p>
        <p>CONSTRUÍDO COM REACT & TAILWIND</p>
      </div>
    </section>
  );
}
