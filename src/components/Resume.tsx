import { motion } from 'motion/react';
import { Download, GraduationCap, Briefcase, Code } from 'lucide-react';

export function Resume() {
  return (
    <section id="curriculo" className="flex flex-col gap-8">
      <div className="flex items-center gap-3">
         <span className="w-12 h-1 bg-blue-400 rounded-full" />
         <h2 className="text-2xl font-black text-blue-900">Meu Currículo</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/50 shadow-lg shadow-blue-100">
           <h3 className="text-blue-900 font-bold mb-4 flex items-center gap-2">
             <GraduationCap size={20} className="text-blue-400" />
             Educação
           </h3>
           <div className="space-y-4">
             <div className="p-4 bg-white/40 rounded-2xl">
                <p className="text-sm font-bold text-blue-900">Técnico em Desenvolvimento de Sistemas</p>
                <p className="text-xs text-blue-500">SENAI • 2024 - 2026</p>
             </div>
             <div className="p-4 bg-white/40 rounded-2xl">
                <p className="text-sm font-bold text-blue-900">Ensino Médio</p>
                <p className="text-xs text-blue-500">SESI • 2024 - 2026</p>
             </div>
           </div>
        </div>

        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/50 shadow-lg shadow-blue-100">
           <h3 className="text-blue-900 font-bold mb-4 flex items-center gap-2">
             <Briefcase size={20} className="text-blue-400" />
             Habilidades
           </h3>
           <div className="flex flex-wrap gap-2">
             {['Trabalho em Equipe', 'Inglês Avançado', 'SQL', 'IoT'].map(skill => (
               <span key={skill} className="px-4 py-2 bg-white/60 rounded-xl text-xs font-bold text-blue-600 border border-white/40">
                 {skill}
               </span>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}
