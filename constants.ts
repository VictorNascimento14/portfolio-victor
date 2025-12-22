
import React from 'react';
import type { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Cardápio Digital',
    category: 'Desenvolvimento Web',
    year: '2025',
    description: 'Este é um aplicativo moderno de pedidos de comida, focado em hambúrgueres, massas e saladas, com uma interface elegante, responsiva e suporte a tema escuro.',
    tags: ["react", "typescript", "tailwindcss", "nodejs"],
    imageUrl: '/cardapio.jpg',
    fullImageUrl: '/cardapio.jpg',
     demoUrl: 'https://cardapio-digital-xi-sepia.vercel.app/',
     githubUrl: 'https://github.com/VictorNascimento14/cardapio-digital',
  },
  {
    id: 2,
    title: 'ServicePro',
    category: 'Gestão de Serviços',
    year: '2025',
    description: 'Dashboard moderno e responsivo para gerenciamento de serviços de barbearia. Inclui agendamento, gerenciamento de clientes e análise de desempenho.',
    tags: ["react", "typescript", "tailwindcss", "nodejs", "Vite", "Clerk", "Convex"],
    imageUrl: '/servicepro.png',
    fullImageUrl: '/servicepro.png',
     demoUrl: 'https://service-pro-rust.vercel.app/',
     githubUrl: 'https://github.com/VictorNascimento14/ServicePro',
  },
  {
    id: 3,
    title: 'MediSync',
    category: 'Desenvolvimento Web fullstack',
    year: '2025',
    description: 'Gerenciamento de hospitais e clínicas com agendamento de consultas, prontuários eletrônicos e comunicação entre pacientes e profissionais de saúde. Interface intuitiva e segura para facilitar o atendimento médico. com dashboard administrativo.',
    tags: ["React", "TypeScript", "TailwindCSS", "Vite"],
    imageUrl: '/medisync2.png',
    fullImageUrl: '/medisync2.png',
     demoUrl: 'https://medisync-olive.vercel.app/',
     githubUrl: 'https://github.com/VictorNascimento14/medisync',
  },
  {
    id: 4,
    title: 'Furia Club',
    category: 'Desenvolvimento web fullstack',
    year: '2025',
    description: 'Esta plataforma oferece uma experiência imersiva de comunidade, funcionalidades pensadas para engajar, entreter e informar os torcedores da FURIA. Com design responsivo e intuitivo, o site proporciona fácil navegação e acesso rápido a conteúdos exclusivos.',
    tags: ["React", "TypeScript", "TailwindCSS", "Node.js", "Vite", "Zod", "Radix UI"],
    imageUrl: '/furiaclub.png',
    fullImageUrl: '/furiaclub.png',
     demoUrl: 'https://furiaclub.netlify.app/',
     githubUrl: 'https://github.com/VictorNascimento14/furia-club',
  },
  {
    id: 5,
    title: 'Casamento',
    category: 'Landing page convite de casamento',
    year: '2025',
    description: 'Landing page elegante e responsiva para convite de casamento, apresentando detalhes do evento, galeria de fotos e confirmação de presença. Desenvolvida com HTML, CSS e JavaScript para uma experiência envolvente.',
    tags: [],
    imageUrl: '/casamento.png',
    fullImageUrl: '/casamento.png',
     demoUrl: 'https://casamentogev.netlify.app/',
     githubUrl: 'https://github.com/VictorNascimento14/casamentogev',
  },
   {
    id: 6,
    title: 'Dashboard',
    category: 'Desenvolvimento web',
    year: '2025',
    description: 'Dashboard administrativo moderno e responsivo, com gráficos interativos e visualização de dados. Ideal para monitoramento de métricas e desempenho empresarial.',
    tags: ["html", "css", "javascript"],
    imageUrl: '/dashboard.png',
    fullImageUrl: '/dashboard.png',
     demoUrl: 'https://exemplo-dashboard.com',
     githubUrl: 'https://github.com/VictorNascimento14/Atividade-1-ProfLuan-Dashboard',
  },
];

export const PERSONAL_INFO = {
    idade: 25,
    cidade: 'Fortaleza-CE',
    telefone: '(85)98832-0963',
    email: 'victor.dev.nascimento@gmail.com',
    formacao: 'Engenharia de Software',
};

export const STATS = [
    { value: '4+', label: 'Clientes Satisfeitos' },
    { value: '10+', label: 'Projetos Concluídos' },
    { value: '1+', label: 'Experiência' },
];

export const SKILLS = [
  {
    category: 'Front-end',
    technologies: [
        { name: 'HTML / CSS', percentage: 95 },
        { name: 'JavaScript', percentage: 90 },
        { name: 'React', percentage: 85 },
        { name: 'TypeScript', percentage: 80 },
        { name: 'Flutter / Dart', percentage: 80 },
        { name: 'UI / UX Design', percentage: 70 },
    ]
  },
  {
    category: 'Back-end',
    technologies: [
        { name: 'Node.js', percentage: 75 },
        { name: 'Java', percentage: 80 },
        { name: 'API Integration', percentage: 85 },
        { name: 'Postgresql', percentage: 75 },
        { name: 'Python', percentage: 90 },
        { name: 'Git', percentage: 85 },
    ]
  }
];