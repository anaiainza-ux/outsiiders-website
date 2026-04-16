
import { ScheduleEvent, Speaker, JobPosting } from './types';

export const COLORS = {
  BASE_BLUE: '#000000',
  ACTION_TERRACOTTA: '#ED593B',
  CONTRAST_TURQUOISE: '#3FA5C6',
  ACCENT_YELLOW: '#FFC759',
  ACCENT_GREEN: '#4DCCBD',
  TEXT_LIGHT: '#FFFFFF',
  TEXT_DARK: '#212529',
};

export const SPEAKERS: Speaker[] = [
  {
    id: '1',
    name: 'Ponente por confirmar',
    role: 'Keynote Speaker',
    company: 'Líder de Industria',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    name: 'Ponente por confirmar',
    role: 'Keynote Speaker',
    company: 'Líder de Industria',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    name: 'Ponente por confirmar',
    role: 'Keynote Speaker',
    company: 'Líder de Industria',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    name: 'Ponente por confirmar',
    role: 'Keynote Speaker',
    company: 'Líder de Industria',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
  },
];

export const SPONSORS = {
  global: [
    { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png' },
    { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/1200px-Tesla_Motors.svg.png' },
  ],
  gold: [
    { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png' },
    { name: 'Nvidia', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/1280px-Nvidia_logo.svg.png' },
  ],
  partners: [
    { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png' },
    { name: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282020%29.svg/1200px-Intel_logo_%282020%29.svg.png' },
    { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/1200px-Oracle_logo.svg.png' },
    { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Adobe_Corporate_logo.svg/2560px-Adobe_Corporate_logo.svg.png' },
  ]
};

export const SCHEDULE_DATA: Record<string, ScheduleEvent[]> = {
  day1: [
    { 
      id: 'd1e1',
      time: "11:00 am - 11:30 am", 
      type: "Break", 
      title: "Bienvenida y Registro", 
      description: "Recepción de participantes y entrega de kits de bienvenida." 
    },
    { 
      id: 'd1e2',
      time: "11:30 am - 12:30 pm", 
      type: "Conferencia", 
      title: "Ponencia sobre IA: El Futuro de la Innovación", 
      speaker: "Ponente por confirmar", 
      description: "Una visión estratégica sobre cómo la Inteligencia Artificial está redefiniendo los límites de la ingeniería moderna." 
    },
    { 
      id: 'd1e3',
      time: "12:30 pm - 1:30 pm", 
      type: "Conferencia", 
      title: "Sports Intelligence con Rayados", 
      speaker: "Ponente por confirmar", 
      description: "Data science para la toma de decisiones." 
    },
    { 
      id: 'd1e4',
      time: "1:30 pm - 2:15 pm", 
      type: "Break", 
      title: "Lunch & Networking Break", 
      description: "Tiempo para recargar energías, convivir y conectar con otros innovadores antes del bloque intensivo." 
    },
    { 
      id: 'd1e4b',
      time: "2:15 pm - 3:00 pm", 
      type: "Conferencia", 
      title: "Ciberseguridad en IA", 
      speaker: "David Victoria - Amazon Web Services", 
      description: "Exploración de los retos y mejores prácticas de seguridad en la implementación de soluciones de Inteligencia Artificial en la nube." 
    },
    { 
      id: 'd1e5',
      time: "3:00 pm - 7:00 pm", 
      type: "Taller", 
      title: "Certificación de White Belt Six Sigma con enfoque en innovación", 
      speaker: "International White Belt Six Sigma", 
      description: "Certificación oficial impartida por International White Belt Six Sigma. Un enfoque práctico en la metodología Six Sigma aplicada a procesos de innovación.",
      link: "https://internationalleansixsigma.org/certificaciones-lean-six-sigma/",
      highlight: true
    },
    { 
      id: 'd1e6',
      time: "7:00 pm", 
      type: "Break", 
      title: "Cierre de actividades y clausura del Día 1", 
      description: "Conclusión de la primera jornada del congreso OUTSIIIDERS 2026." 
    },
  ],
  day2: [
    { 
      id: 'd2e1',
      time: "1:00 pm - 2:00 pm", 
      type: "Conferencia", 
      title: "Ponencia Emprendimiento", 
      speaker: "Ponente por confirmar", 
      description: "Una visión estratégica sobre el ecosistema emprendedor y las oportunidades actuales." 
    },
    { 
      id: 'd2e2',
      time: "2:00 pm - 3:00 pm", 
      type: "Break", 
      title: "Espacio de Networking Lunch", 
      description: "Espacio diseñado para fomentar conexiones orgánicas entre emprendedores e inversionistas mientras recargamos energías." 
    },
    { 
      id: 'd2e3',
      time: "3:00 pm - 4:00 pm", 
      type: "Taller", 
      title: "Herramientas de IA para potenciar tu emprendimiento", 
      speaker: "Tech Founder", 
      description: "Sesión práctica sobre la implementación de herramientas de vanguardia para escalar operaciones y automatizar procesos de negocio." 
    },
    { 
      id: 'd2e4',
      time: "4:00 pm - 6:00 pm", 
      type: "Panel", 
      title: "Showcase Disruptivo: Charlas Relámpago", 
      speaker: "Founders Invitados", 
      description: "4 presentaciones dinámicas de 30 minutos donde fundadores de startups innovadoras comparten sus hitos, retos y visión de futuro." 
    },
    { 
      id: 'd2e5',
      time: "6:00 pm - 7:00 pm", 
      type: "Break", 
      title: "Venture Café: Espacio de mentoría", 
      description: "Sesiones de mentoría uno a uno y café compartido con fundadores y líderes del ecosistema emprendedor." 
    },
    { 
      id: 'd2e6',
      time: "7:00 pm - 8:00 pm", 
      type: "Conferencia", 
      title: "Keynote: La mentalidad Venture", 
      speaker: "Venture Partner por confirmar", 
      description: "Explorando la psicología y estrategia detrás de las inversiones de alto riesgo y el crecimiento exponencial." 
    },
    { 
      id: 'd2e7',
      time: "8:00 pm", 
      type: "Break", 
      title: "Networking Cocktail de cierre Día 2", 
      description: "Cierre de la segunda jornada con un cocktail de networking para consolidar las alianzas formadas durante el día." 
    },
  ],
  day3: [
    { 
      id: 'd3e1',
      time: "1:00 pm - 2:30 pm", 
      type: "Conferencia", 
      title: "Innovación en el Sector Tecnológico", 
      speaker: "Líderes Tech por confirmar", 
      description: "Bloque intensivo de 2 ponencias de 45 minutos cada una, explorando las fronteras de la tecnología en grandes corporativos." 
    },
    { 
      id: 'd3e2',
      time: "2:30 pm - 3:30 pm", 
      type: "Break", 
      title: "Refreshments, Lunch & Networking", 
      description: "Momento clave para el contacto empresarial directo entre alumnos y reclutadores de alto nivel." 
    },
    { 
      id: 'd3e3',
      time: "3:30 pm - 4:30 pm", 
      type: "Panel", 
      title: "Mesa Redonda: Innovación en el Sector Industrial", 
      speaker: "CARRIER, QUIMCO, GP CONSTRUCCIÓN", 
      description: "Diálogo estratégico con gigantes industriales como CARRIER, QUIMCO y GP CONSTRUCCIÓN sobre la transformación de la manufactura y la infraestructura." 
    },
    { 
      id: 'd3e4',
      time: "4:30 pm - 5:30 pm", 
      type: "Conferencia", 
      title: "Ponencia Magistral: Key Note Speaker", 
      speaker: "Líder de Industria por confirmar", 
      description: "Una perspectiva global sobre el liderazgo y la resiliencia en los mercados industriales modernos." 
    },
    { 
      id: 'd3e5',
      time: "5:30 pm - 6:15 pm", 
      type: "Conferencia", 
      title: "Cómo sobresalir como profesionista joven", 
      speaker: "Experto en Desarrollo de Carrera", 
      description: "Sesión de alto valor enfocada en el desarrollo de carrera, branding personal y habilidades críticas para graduandos de ingeniería." 
    },
    { 
      id: 'd3e6',
      time: "6:15 pm - 7:15 pm", 
      type: "Conferencia", 
      title: "Ponencia: Innovación en el Sector Automotriz", 
      speaker: "Por definir", 
      description: "Explorando la electrificación, autonomía y nuevos materiales que están moviendo al sector automotriz global." 
    },
    { 
      id: 'd3e7',
      time: "7:15 pm", 
      type: "Break", 
      title: "Cierre Final outsIIDers 2026", 
      description: "Clausura oficial del congreso, anuncios especiales y acceso prioritario a la bolsa de trabajo para asistentes." 
    },
  ],
};

export const JOBS_DATA: JobPosting[] = [
  {
    id: 'j1',
    title: 'Software Engineer (GenAI)',
    company: 'Innovatech',
    location: 'Remote / Monterrey',
    type: 'Full-time',
    link: '#',
  },
  {
    id: 'j2',
    title: 'Product Designer (UX/UI)',
    company: 'Future UX',
    location: 'Mexico City',
    type: 'Full-time',
    link: '#',
  },
  {
    id: 'j3',
    title: 'Sustainability Consultant',
    company: 'GreenImpact',
    location: 'Hybrid',
    type: 'Internship',
    link: '#',
  },
];
