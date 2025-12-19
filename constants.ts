
import React from 'react';
import type { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'SAINT ANTÖNIEN',
    category: 'Switzerland Alps',
    year: '2023',
    description: 'Mauris malesuada, est et amet augue accumsan tincidunt. Maecenas tincidunt, velit at porttitor pulvinar, tortor eros facilisis est.',
    tags: [],
    imageUrl: 'https://source.unsplash.com/p-oI_z34d1s/600x800',
    fullImageUrl: 'https://source.unsplash.com/p-oI_z34d1s/1920x1080',
  },
  {
    id: 2,
    title: 'NAGANO PREFECTURE',
    category: 'Japan Alps',
    year: '2023',
    description: 'Vivamus Blanda, est et amet augue accumsan tincidunt. Maecenas tincidunt, velit at porttitor pulvinar, tortor eros facilisis est.',
    tags: [],
    imageUrl: 'https://source.unsplash.com/q3I_e13sM0I/600x800',
    fullImageUrl: 'https://source.unsplash.com/q3I_e13sM0I/1920x1080',
  },
  {
    id: 3,
    title: 'MARRAKECH MERZOUGA',
    category: 'Sahara Desert - Morocco',
    year: '2022',
    description: 'Praesent congue, est et amet augue accumsan tincidunt. Maecenas tincidunt, velit at porttitor pulvinar, tortor eros facilisis est.',
    tags: [],
    imageUrl: 'https://source.unsplash.com/Pqk_1KBC_nQ/600x800',
    fullImageUrl: 'https://source.unsplash.com/Pqk_1KBC_nQ/1920x1080',
  },
  {
    id: 4,
    title: 'YOSEMITE NATIONAL PARK',
    category: 'Sierra Nevada - United States',
    year: '2022',
    description: 'Aenean egestas, est et amet augue accumsan tincidunt. Maecenas tincidunt, velit at porttitor pulvinar, tortor eros facilisis est.',
    tags: [],
    imageUrl: 'https://source.unsplash.com/62_P2a2pWpA/600x800',
    fullImageUrl: 'https://source.unsplash.com/62_P2a2pWpA/1920x1080',
  },
  {
    id: 5,
    title: 'LOS LANCES BEACH',
    category: 'Tarifa - Spain',
    year: '2021',
    description: 'Nullam luctus, est et amet augue accumsan tincidunt. Maecenas tincidunt, velit at porttitor pulvinar, tortor eros facilisis est.',
    tags: [],
    imageUrl: 'https://source.unsplash.com/sxggdECi6s4/600x800',
    fullImageUrl: 'https://source.unsplash.com/sxggdECi6s4/1920x1080',
  },
   {
    id: 6,
    title: 'FITZ ROY',
    category: 'Patagonia - Argentina',
    year: '2021',
    description: 'Cras dapibus, est et amet augue accumsan tincidunt. Maecenas tincidunt, velit at porttitor pulvinar, tortor eros facilisis est.',
    tags: [],
    imageUrl: 'https://source.unsplash.com/uyX3qA9glWc/600x800',
    fullImageUrl: 'https://source.unsplash.com/uyX3qA9glWc/1920x1080',
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