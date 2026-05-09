
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
    name: 'Jorge Lerdo de Tejada',
    role: 'Gerente Oficina de Representación Zona Norte',
    company: 'FORBES',
    image: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    name: 'Bernardo Flores',
    role: 'Fundador',
    company: 'Bread',
    image: 'https://images.unsplash.com/photo-1530907839339-651581451f2f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    name: 'David Victoria',
    role: 'Cloud Engineering Specialist',
    company: 'AWS',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    name: 'Aris Jiménez',
    role: 'Coordinadora de Programas',
    company: 'Startup México NL',
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    name: 'Efraín Hernández Gómez',
    role: 'Director Agilidad en innovación',
    company: 'Grupo AlEn',
    image: 'https://images.unsplash.com/photo-1565106430482-8bc3ced6a781?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '6',
    name: 'Francisco Lebrija',
    role: 'Global Head of Communications and Branding',
    company: 'CEMEX',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a4e5190?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '7',
    name: 'Jose Luis Perez Renteria',
    role: 'Digital Technology Director',
    company: 'Arca Continental',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '8',
    name: 'Borja Echarri',
    role: 'Digital Strategy & Transformation Officer',
    company: 'FEMSA',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '9',
    name: 'Santiago Mayagoitia',
    role: 'Director',
    company: 'International Lean Six Sigma',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '10',
    name: 'Marco Avalos Stefani',
    role: 'Analista de datos médico deportivo',
    company: 'Rayados',
    image: 'https://images.unsplash.com/photo-1561144443-fbc04308119c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '11',
    name: 'Luis Rojas',
    role: 'Cofounder & CEO',
    company: 'TeamUp',
    image: 'https://images.unsplash.com/photo-1485081666428-4ce38f99d62d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '12',
    name: 'Antonio Rodriguez',
    role: 'Founder & CEO',
    company: 'GRUPO ENIGMA MÉXICO',
    image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '13',
    name: 'Ricardo Cevada',
    role: 'Founding & Managing Partner',
    company: 'Core AI',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '14',
    name: 'Ignacio Alvarez',
    role: 'Co-founder',
    company: 'Moneypool',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '15',
    name: 'David Elizondo',
    role: 'Manager de productos digitales de AI',
    company: 'DEACERO',
    image: 'https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '16',
    name: 'David Salinas Martinez',
    role: 'Subdirección VDC',
    company: 'GP Construcción',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '17',
    name: 'Arturo Martinez Torres',
    role: 'Innovation & Digitalization Manager',
    company: 'Grupo Quimmco',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c1025b7?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '18',
    name: 'Susan Pegueros Ibars',
    role: 'Sr. Design Engineer',
    company: 'Carrier HVAC',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '19',
    name: 'Nestor Quintero',
    role: 'Global Head Quality & CCUS Technologies',
    company: 'CEMEX',
    image: 'https://images.unsplash.com/photo-1581089781785-603411ffdad6?auto=format&fit=crop&q=80&w=800',
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
      title: "Recepcion y registro de asistentes + palabras de inicio del congreso", 
      description: "Recepción de participantes y apertura oficial del congreso OUTSIIIDERS 2026." 
    },
    { 
      id: 'd1e2',
      time: "11:30 am - 12:30 pm", 
      type: "Conferencia", 
      title: "Agentes de IA: El nuevo equipo que todo profesional del futuro va a liderar", 
      speaker: "Jorge Lerdo de Tejada - Forbes - Gerente Oficina de Representación Zona Norte", 
      description: "Una visión estratégica sobre cómo la Inteligencia Artificial está redefiniendo los límites de la industria y el liderazgo profesional." 
    },
    { 
      id: 'd1e3',
      time: "12:30 pm - 1:15 pm", 
      type: "Conferencia", 
      title: "¿Cómo se usan los datos para mejorar el rendimiento de un equipo profesional?", 
      speaker: "Marco Avalos Stefani - Rayados - Analista de datos médico deportivo", 
      description: "Exploración de la analítica de datos aplicada al alto rendimiento deportivo en el Club de Fútbol Monterrey." 
    },
    { 
      id: 'd1e4',
      time: "1:15 pm - 2:15 pm", 
      type: "Break", 
      title: "Lunch break", 
      description: "Tiempo para recargar energías y networking libre." 
    },
    { 
      id: 'd1e4b',
      time: "2:15 pm - 3:00 pm", 
      type: "Conferencia", 
      title: "¿Cómo las empresas escalan con cloud?", 
      speaker: "David Victoria - AWS", 
      description: "Análisis sobre la escalabilidad y las mejores arquitecturas en la nube para empresas modernas." 
    },
    { 
      id: 'd1e5',
      time: "3:00 pm - 7:00 pm", 
      type: "Taller", 
      title: "Curso Certificacion: White Belt Lean Six Sigma", 
      speaker: "Santiago Mayagoitia - International Lean Six Sigma", 
      description: "Certificación oficial White Belt impartida por Santiago Mayagoitia. Metodología Lean Six Sigma aplicada a la optimización de procesos e innovación.",
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
      title: "Trayectoria de emprendimiento + Problem solution fit", 
      speaker: "Luis Rojas - TeamUp - Cofounder & CEO", 
      description: "Trayectoria de emprendimiento y cómo encontrar el ajuste perfecto entre el problema y la solución." 
    },
    { 
      id: 'd2-coffee',
      time: "1:30 pm - 2:15 pm", 
      type: "Break", 
      title: "Coffee by: Noyolo", 
      description: "Disfruta de la mejor experiencia de café y brunch cortesía de Noyolo.",
      link: "https://www.instagram.com/noyolobrunch?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      highlight: true,
      highlightLabel: "Coffee by:",
      hideTypeTag: true,
      hideTime: true,
      isMini: true
    },
    { 
      id: 'd2e2',
      time: "2:00 pm - 3:00 pm", 
      type: "Break", 
      title: "Lunch break", 
      description: "Espacio diseñado para fomentar conexiones orgánicas entre emprendedores e inversionistas mientras recargamos energías." 
    },
    { 
      id: 'd2e3',
      time: "3:00 pm - 4:00 pm", 
      type: "Conferencia", 
      title: "ENIGMA: El Poder de Crear Experiencias", 
      speaker: "Antonio Rodriguez - GRUPO ENIGMA MÉXICO - Founder & CEO", 
      description: "Descubre cómo crear experiencias impactantes a través del poder de ENIGMA." 
    },
    { 
      id: 'd2e4a',
      time: "4:00 pm - 5:00 pm", 
      type: "Conferencia", 
      title: "De I2D a Builder de IA: cómo convertir problemas reales en sistemas de valor", 
      speaker: "Ricardo Cevada - Core AI - Founding & Managing Partner", 
      description: "De I2D a Builder de IA: cómo convertir problemas reales en sistemas de valor." 
    },
    { 
      id: 'd2e4b',
      time: "5:00 pm - 6:00 pm", 
      type: "Conferencia", 
      title: "¿Cómo logró Moneypool crecer y convertirse en lo que es hoy?", 
      speaker: "Ignacio Alvarez - Moneypool - Co-founder", 
      description: "La historia y estrategia detrás del crecimiento explosivo de Moneypool." 
    },
    { 
      id: 'd2e5',
      time: "6:00 pm - 7:00 pm", 
      type: "Conferencia", 
      title: "¿Cómo funcionan las aceleradoras en Latam?", 
      speaker: "Aris Jiménez - Startup México - Coordinadora de Programas en Startup México NL", 
      description: "¿Cómo funcionan las aceleradoras en Latam?" 
    },
    { 
      id: 'd2e6',
      time: "7:00 pm - 8:00 pm", 
      type: "Conferencia", 
      title: "¿Cómo se construye una marca desde cero?", 
      speaker: "Bernardo Flores - Bread - Fundador", 
      description: "Bernardo Flores nos comparte las claves estratégicas detrás de la construcción de una marca exitosa desde sus cimientos." 
    },
    { 
      id: 'd2e7',
      time: "8:00 pm", 
      type: "Break", 
      title: "Cierre de día 2 del congreso", 
      description: "Conclusión de la segunda jornada del congreso OUTSIIIDERS 2026." 
    },
  ],
  day3: [
    { 
      id: 'd3e1',
      time: "1:00 pm - 1:45 pm", 
      type: "Conferencia", 
      title: "Innovación dentro de Grupo AlEn", 
      speaker: "Efraín Hernández Gómez - Grupo AlEn - Director Agilidad en innovación", 
      description: "Efraín Hernández Gómez comparte cómo se gestiona y escala la innovación dentro de Grupo AlEn, líder en productos de limpieza." 
    },
    { 
      id: 'd3e1b',
      time: "1:45 pm - 2:30 pm", 
      type: "Conferencia", 
      title: "Outsiiider Corporativo: transformación digital e IA en una industria tradicional", 
      speaker: "David Elizondo - DEACERO - Manager de productos digitales de AI", 
      description: "Análisis de la transformación digital y la implementación de IA en la industria del acero." 
    },
    { 
      id: 'd3e2',
      time: "2:30 pm - 3:30 pm", 
      type: "Break", 
      title: "Lunch break", 
      description: "Momento clave para el contacto empresarial directo entre alumnos y reclutadores de alto nivel." 
    },
    { 
      id: 'd3e3',
      time: "3:30 pm - 4:30 pm", 
      type: "Panel", 
      title: "Mesa redonda: ¿Cómo innovar dentro de sectores establecidos?", 
      speaker: "David Salinas Martinez (GP), Arturo Martinez (Quimmco), Susan Pegueros (Carrier), Nestor Quintero (CEMEX)", 
      description: "Panel de discusión sobre estrategias de innovación en industrias maduras y sectores altamente regulados o tradicionales." 
    },
    { 
      id: 'd3e4',
      time: "4:30 pm - 5:30 pm", 
      type: "Conferencia", 
      title: "Posicionamiento de la empresa en Cemex", 
      speaker: "Francisco Lebrija - Cemex - Global Head of Communications and Branding", 
      description: "Francisco Lebrija detalla las claves estratégicas y los pilares del posicionamiento corporativo en una de las empresas de materiales de construcción más importantes del mundo." 
    },
    { 
      id: 'd3e5',
      time: "5:30 pm - 6:15 pm", 
      type: "Conferencia", 
      title: "¿Cómo se implementa innovación a gran escala?", 
      speaker: "Jose Luis Perez Renteria - Arca Continental - Digital Technology Director", 
      description: "Exploración de los procesos, metodologías y retos técnicos para llevar la innovación a una escala global en el sector de consumo y tecnología digital." 
    },
    { 
      id: 'd3e6',
      time: "6:15 pm - 7:00 pm", 
      type: "Conferencia", 
      title: "¿Cómo se impulsa la transformación digital en FEMSA?", 
      speaker: "Borja Echarri - FEMSA - Digital Strategy & Transformation Officer", 
      description: "Borja Echarri comparte la visión estratégica y el roadmap de transformación digital en FEMSA, una de las corporaciones más grandes de Latinoamérica." 
    },
    { 
      id: 'd3e7',
      time: "7:00 pm", 
      type: "Break", 
      title: "Cierre Final outsIIDers 2026", 
      description: "Clausura oficial del congreso y anuncios especiales." 
    },
  ],
};
