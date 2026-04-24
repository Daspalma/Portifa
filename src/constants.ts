import { SubjectData, Certificate } from './types';

/**
 * EDIÇÃO DE DADOS:
 * Altere as informações abaixo para personalizar seu portfólio.
 */

export const SUBJECTS: SubjectData = {
  mathematics: {
    id: 'matematica',
    name: 'Matemática',
    activities: [
      { 
        title: 'Atividade 1: Jogo Gamificado', 
        description: 'Desenvolvi um jogo original com atividades gamificadas utilizando os conceitos de análise combinatória e teoria das probabilidades, inspirado no filme Quebrando a Banca.', 
        justification: 'Habilidades: C5 H30 e H31.',
        link: 'https://canva.link/nit8rloceoqdnk1'
      },
      { 
        title: 'Atividade 2: Quebrando a Banca', 
        description: 'Fomos realizar uma atividade referente ao filme Quebrando a Banca.', 
        justification: 'Aplicação prática de probabilidade.',
        link: 'https://docs.google.com/document/d/1pgJxVOYN4yjQ24UmDhTkdJP1NAljCQ_XmJr5lAyABwY/edit?usp=sharing'
      },
    ]
  },
  nature: {
    id: 'natureza',
    name: 'Ciências da Natureza',
    activities: [
      { 
        title: 'Atividade 1: Relatório de Disputa', 
        description: 'Fiz em meu caderno um relatório explicando o que aconteceu na disputa da última aula.', 
        justification: 'Habilidades: C1 H1 C2, H7 H9 H11 H12',
        link: 'https://docs.google.com/document/d/1Zp2BTvWnEwu82YsxHu9q5YRczE-zTXdSsb3cXEvBKKc/edit?usp=sharing'
      },
      { 
        title: 'Atividade 2: Evolucionismo', 
        description: 'Estudei as ideias evolucionistas, os principais cientistas que trabalharam nessa área e alguns conceitos dentro do evolucionismo.', 
        justification: 'Habilidades: C3 - H15 e H18',
        link: 'https://docs.google.com/document/d/1f87I8TFF9OtxmvKVdm3FcsorjQuhGpoVEO3GJaNKlUg/edit?usp=sharing'
      },
      { 
        title: 'Atividade 3: Combustão e Dependência Energética', 
        description: 'Apresentação sobre Combustão e o problema da dependência energética.', 
        justification: 'Habilidades: C1 - H1 - C2- H9 - H11',
        link: 'https://canva.link/06tp7i0le3fixex'
      },
    ]
  },
  humanities: {
    id: 'humanas',
    name: 'Ciências Humanas',
    activities: [
      { 
        title: 'Atividade 1: Capa de Jornal de Época', 
        description: 'Desenvolvi a capa de um jornal standard de época, seguindo o tamanho, o estilo e o padrão característicos do começo do século XX.', 
        justification: 'Recriação histórica e design.',
        link: 'https://canva.link/a08985gafsjnt7x'
      },
      { 
        title: 'Atividade 2: Propaganda Soviética', 
        description: 'Procurei um cartaz de propaganda soviético produzido entre os anos de 1914 e 1945, selecionei um exemplo desse período e criei uma arte no Canva com o cartaz centralizado. Em seguida, desenvolvi uma interpretação da arte escolhida.', 
        justification: 'Habilidades: C4 C6',
        link: 'https://docs.google.com/document/d/1RXSc3FfEnczx1rQEQD7vgC15bkiEgTIsAf7LRMursJM/edit?tab=t.0'
      },
      { 
        title: 'Atividade 3: Linha do Tempo Tecnológica', 
        description: 'Desenvolvi uma linha do tempo de difusão tecnológica e industrial que indicava quando e onde determinada tecnologia foi implantada ou difundida.', 
        justification: 'Habilidades: C2 H22',
        link: 'https://canva.link/kdymmm9ra1w5jmg'
      },
    ]
  },
  languages: {
    id: 'linguagens',
    name: 'Linguagens',
    activities: [
      { 
        title: 'Atividade 1: A Paixão segundo G.H.', 
        description: 'Analisamos a obra A Paixão segundo G.H. solicitada como leitura obrigatória na Universidade Federal de Santa Catarina.', 
        justification: 'Habilidades: H4 e H22',
        link: 'https://canva.link/ux8hr2gdiy3d542'
      },
      { 
        title: 'Atividade 2: Realismo e Composições Artísticas', 
        description: 'Produzi trabalhos individuais e coletivos, explorando materiais e técnicas ligados ao universo das composições artísticas e das práticas corporais.', 
        justification: 'Habilidades Avaliadas: H4 e H22',
        link: 'https://wordwall.net/pt/resource/108612366/realismo'
      },
    ]
  },
  iot: {
    id: 'iot',
    name: 'IoT',
    activities: [
      { 
        title: 'Pitch de Formação Técnica', 
        description: 'Apresentação em vídeo (Pitch) sobre o desafio Gran Prix, detalhando o projeto integrador e as competências desenvolvidas na formação técnica de Desenvolvimento de Sistemas.', 
        justification: 'Habilidades: Comunicação, Pensamento Crítico e Resolução de Problemas.',
        link: 'https://drive.google.com/file/d/1l62emfUYDejs_JN91NUZ-ceeDTzHywD3/view?usp=sharing'
      },
    ]
  },
  database: {
    id: 'banco-de-dados',
    name: 'Banco de Dados',
    activities: [
      { 
        title: 'Pitch de Formação Técnica', 
        description: 'Apresentação em vídeo (Pitch) sobre o desafio Gran Prix, detalhando o projeto integrador e as competências desenvolvidas na formação técnica de Desenvolvimento de Sistemas.', 
        justification: 'Habilidades: Comunicação, Pensamento Crítico e Resolução de Problemas.',
        link: 'https://drive.google.com/file/d/1l62emfUYDejs_JN91NUZ-ceeDTzHywD3/view?usp=sharing'
      },
    ]
  },
  modeling: {
    id: 'modelagem',
    name: 'Modelagem de Sistemas',
    activities: [
      { 
        title: 'Pitch de Formação Técnica', 
        description: 'Apresentação em vídeo (Pitch) sobre o desafio Gran Prix, detalhando o projeto integrador e as competências desenvolvidas na formação técnica de Desenvolvimento de Sistemas.', 
        justification: 'Habilidades: Comunicação, Pensamento Crítico e Resolução de Problemas.',
        link: 'https://drive.google.com/file/d/1l62emfUYDejs_JN91NUZ-ceeDTzHywD3/view?usp=sharing'
      },
    ]
  }
};

export const CERTIFICATES: Certificate[] = [
  { name: 'Cibersegurança para Iniciantes', description: 'Princípios de proteção de dados.' },
  { name: 'Cloud Practitioner (Simulado)', description: 'Fundamentos de computação em nuvem.' },
];
