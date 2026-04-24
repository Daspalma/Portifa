import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SUBJECTS } from '../constants';
import { ChevronRight, ChevronDown, Laptop, BookOpen } from 'lucide-react';
import { cn } from '../lib/utils';

export function SubjectAreas() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  
  // Separação das matérias por categoria
  const generalSubjects = [
    SUBJECTS.mathematics,
    SUBJECTS.nature,
    SUBJECTS.humanities,
    SUBJECTS.languages
  ];

  const technicalSubjects = [
    SUBJECTS.iot,
    SUBJECTS.database,
    SUBJECTS.modeling
  ];

  const renderSubjectList = (list: any[], icon: any, title: string) => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 px-6 mb-2">
        <span className="p-2 bg-blue-100 rounded-lg text-blue-500">
          {icon}
        </span>
        <h3 className="font-black text-blue-900 uppercase tracking-widest text-sm">{title}</h3>
      </div>
      
      {list.map((subject) => {
        const isOpen = selectedId === subject.id;
        return (
          <div key={subject.id} className="relative">
            <button
              onClick={() => setSelectedId(isOpen ? null : subject.id)}
              className={cn(
                "w-full flex items-center justify-between p-6 rounded-[2.5rem] transition-all duration-300 border shadow-sm",
                isOpen 
                  ? "bg-blue-600 text-white border-blue-500 shadow-blue-200" 
                  : "bg-white/80 text-blue-900 border-white/50 hover:bg-white hover:translate-x-1"
              )}
            >
              <span className="font-bold text-lg">{subject.name}</span>
              {isOpen ? <ChevronDown size={24} /> : <ChevronRight size={24} className="opacity-40" />}
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 flex flex-col gap-3 mt-2">
                    {subject.activities.map((activity: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white/50 backdrop-blur-sm p-6 rounded-[2rem] border border-white/40 shadow-sm flex flex-col gap-3"
                      >
                        <div>
                          <h4 className="font-bold text-blue-900 mb-1">{activity.title}</h4>
                          <p className="text-blue-700 text-sm leading-relaxed">{activity.description}</p>
                        </div>
                        
                        {activity.link && (
                          <a 
                            href={activity.link} 
                            target="_blank" 
                            rel="noreferrer"
                            className="w-fit flex items-center gap-2 text-[10px] font-bold text-blue-500 bg-blue-50 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors"
                          >
                            Ver Atividade <ChevronRight size={12} />
                          </a>
                        )}

                        <div className="pt-3 border-t border-blue-100/50">
                          <span className="text-[10px] font-bold text-blue-300 uppercase block mb-1">Competências</span>
                          <p className="text-xs italic text-blue-500">{activity.justification}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );

  return (
    <section id="materias" className="flex flex-col gap-12">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-black text-blue-900 mb-2">Meu Aprendizado</h2>
        <p className="text-blue-500 text-sm font-medium">Explore as atividades divididas por área de conhecimento.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Coluna Geral */}
        {renderSubjectList(generalSubjects, <BookOpen size={18} />, "Base Comum (BNCC)")}

        {/* Coluna Técnica */}
        {renderSubjectList(technicalSubjects, <Laptop size={18} />, "Formação Técnica")}
      </div>
    </section>
  );
}
