import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="flex flex-col items-center text-center gap-6 pt-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-32 h-32 bg-white rounded-full p-1 shadow-xl shadow-blue-200/50"
      >
        <img
          src="/profile.png"
          alt="Gabriel Palma"
          className="w-full h-full object-cover rounded-full"
        />
      </motion.div>

      <div className="max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-black text-blue-900 tracking-tight mb-4"
        >
          Olá, eu sou o Gabriel Palma.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-blue-600/80 font-medium leading-relaxed"
        >
          Unindo a disciplina do basquete com a lógica da tecnologia. 
          Explore meu percurso acadêmico e meus projetos no ensino técnico.
        </motion.p>
      </div>
    </section>
  );
}
