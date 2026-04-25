import { motion } from 'motion/react';

export function About() {
  return (
    <section id="sobre" className="bg-white/40 backdrop-blur-md rounded-[3rem] p-8 md:p-12 border border-white/50 shadow-xl shadow-blue-100">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <span className="w-12 h-1 bg-blue-400 rounded-full" />
          <h2 className="text-2xl font-black text-blue-900">Sobre Mim</h2>
        </div>
        
        <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-40 h-40 bg-white rounded-full p-1 shadow-xl shadow-blue-200/50 mx-auto md:mx-0"
      >
        <img
          src="https://i.imgur.com/KSwU0gr.png"
          alt="Gabriel Palma"
          className="w-full h-full object-cover rounded-full"
        />
      </motion.div>
        
        <div className="space-y-6 text-blue-800/80 leading-relaxed font-medium">
          <p>
            Meu nome é Gabriel Palma da Silva, tenho 17 anos e nasci no dia 20 de fevereiro de 2009, em Caxias do Sul, no Rio Grande do Sul. 
            Mudei-me para Florianópolis quando completei 1 ano de idade.
          </p>
          <p>
            Atualmente estudo na Escola Sesi, após concluir o 9º ano no Colégio Santa Terezinha nos Ingleses. 
            Sou uma pessoa quieta, gosto da academia, de jogar basquete e de praticar artes marciais (boxe e jiu-jitsu), 
            esportes que comecei a aprender aos 7 anos.
          </p>
          <p>
            Vivo com minha mãe e minha avó desde os 2 anos. Minha família é uma grande base para mim, assim como meus amigos, 
            que sempre me apoiam e incentivam a seguir em frente.
          </p>
          <p>
            Minhas expectativas para o futuro incluem trabalhar em home office, morar sozinho e construir minha própria família. 
            Sou apaixonado por tecnologia e vejo no estudo constante o caminho para alcançar meus objetivos.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="bg-white/60 px-6 py-3 rounded-2xl shadow-sm border border-white/40">
             <span className="text-[10px] font-black text-blue-300 uppercase block">Aniversário</span>
             <span className="text-blue-900 font-bold">20/02/2009</span>
          </div>
          <div className="bg-white/60 px-6 py-3 rounded-2xl shadow-sm border border-white/40">
             <span className="text-[10px] font-black text-blue-300 uppercase block">Esportes</span>
             <span className="text-blue-900 font-bold">Basquete, Boxe, Jiu-jitsu</span>
          </div>
          <div className="bg-white/60 px-6 py-3 rounded-2xl shadow-sm border border-white/40">
             <span className="text-[10px] font-black text-blue-300 uppercase block">Filiação</span>
             <span className="text-blue-900 font-bold">SESI SENAI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
