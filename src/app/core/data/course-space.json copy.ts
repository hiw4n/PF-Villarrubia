export let courseSpace = [
  {
    id: 1,
    name: 'Navegación en la Galaxia',
    start_date: '2024-09-01',
    end_date: '2024-11-01',
    students: [1, 2, 3],
    enrollment_date: '2024-08-15',
    schedule: 'Fecha Estelar 4321.0 - 4321.9',
    teacher_id: 1,
    teacher_name: 'Capitán James Nebula',
    short_description:
      'Domina el arte de la navegación galáctica a través de lecciones teóricas y simulaciones prácticas.',
    long_description:
      'Este curso está diseñado para futuros navegantes espaciales que deseen dominar las complejidades de los viajes galácticos. Bajo la guía del Capitán James Nebula, un explorador espacial experimentado con más de dos décadas de experiencia en navegación interestelar, los estudiantes aprenderán a usar eficazmente mapas estelares, navegar por las diversas regiones del espacio y comprender los principios físicos y teóricos que rigen los viajes intergalácticos. El curso combina conocimientos teóricos con simulaciones prácticas, asegurando que los estudiantes estén bien preparados para misiones espaciales reales. Al final del curso, los participantes serán capaces de trazar rutas a través de regiones inexploradas del espacio, evitar peligros cósmicos comunes y optimizar rutas para la eficiencia de combustible y la gestión del tiempo.',
    image: 'course1.png',
    difficulty_level: 'Intermedio',
    duration_hours: 40,
    course_materials: [
      {
        type: 'Libro de texto',
        title: 'Esenciales de la Navegación Galáctica',
        author: 'Astro Publishing',
        url: 'https://example.com/esenciales-navegacion-galactica',
      },
      {
        type: 'Video',
        title: 'Navegando las Estrellas',
        url: 'https://example.com/navegando-las-estrellas',
      },
    ],
    recommended_books: [
      {
        title: 'La Brújula Cósmica: Guía del Navegante',
        author: 'Zara Quasar',
        isbn: '978-1-23456-789-0',
      },
      {
        title: 'Rutas Interestelares: Mapeando lo Desconocido',
        author: 'Dr. Orion Starfield',
        isbn: '978-0-98765-432-1',
      },
      {
        title: 'Rutas Cuánticas y sus Aplicaciones',
        author: 'Luna Eclipse',
        isbn: '978-3-45678-912-3',
      },
    ],
    topics_covered: [
      'Lectura de mapas estelares',
      'Herramientas de navegación interestelar',
      'Optimización de rutas en viajes espaciales',
      'Evitar peligros cósmicos',
    ],
    syllabus: {
      week_1: {
        title: 'Introducción a la Navegación Galáctica',
        content: [
          'Visión general de la galaxia y los principales sistemas estelares',
          'Comprensión de los mapas estelares y sus componentes',
          'Introducción a las herramientas utilizadas en la navegación interestelar',
        ],
      },
      week_2: {
        title: 'Teorías y Técnicas de Navegación',
        content: [
          'Fundamentos teóricos de la navegación espacial',
          'Pozos gravitacionales y su impacto en los viajes espaciales',
          'Uso de catapultas gravitacionales para viajes eficientes',
        ],
      },
      week_3: {
        title: 'Cartografía Estelar Práctica',
        content: [
          'Ejercicios prácticos con mapas estelares',
          'Navegación simulada a través de sistemas estelares conocidos',
          'Introducción a las técnicas de navegación cuántica',
        ],
      },
      week_4: {
        title: 'Peligros Cósmicos y Cómo Evitarlos',
        content: [
          'Identificación y navegación a través de campos de asteroides',
          'Evitación de agujeros negros y otras anomalías espaciales',
          'Protocolos de emergencia para fallos de navegación',
        ],
      },
      week_5: {
        title: 'Optimización Avanzada de Rutas',
        content: [
          'Eficiencia de combustible en viajes de larga distancia',
          'Gestión del tiempo en viajes interestelares',
          'Optimización de rutas para evitar peligros cósmicos',
        ],
      },
      week_6: {
        title: 'Proyecto Final: Cartografía de una Región Inexplorada',
        content: [
          'Los estudiantes aplicarán lo que han aprendido trazando un curso a través de una región simulada inexplorada del espacio, teniendo en cuenta todos los factores cubiertos en el curso.',
        ],
      },
    },
    prerequisites: [
      'Astronomía Básica',
      'Introducción a los Viajes Espaciales',
    ],
    assessment_methods: [
      'Cuestionarios',
      'Simulaciones Prácticas de Navegación',
      'Proyecto Final',
    ],
    max_students: 25,
    available_slots: 22,
    language: 'Estándar Galáctico',
    credits: 3,
    certification: true,
    review_score: 4.7,
    reviews: [
      {
        student_id: 1,
        rating: 5,
        comment:
          'Un curso excelente para entender los fundamentos de la navegación galáctica.',
      },
      {
        student_id: 3,
        rating: 4.5,
        comment:
          'Desafiante pero gratificante, excelentes simulaciones prácticas.',
      },
    ],
    related_courses: [2, 6],
    course_level: 'Intermedio',
    student_ratings: [
      {
        student_id: 1,
        rating: 5,
        comment: 'La mejor experiencia educativa intergaláctica que he tenido.',
      },
      {
        student_id: 2,
        rating: 4,
        comment:
          'Buena cobertura de los temas, pero algunas simulaciones fueron difíciles.',
      },
    ],
  },
  {
    id: 2,
    name: 'Exploración de Planetas Exóticos',
    start_date: '2024-10-01',
    end_date: '2024-12-15',
    students: [4, 5, 7, 9],
    enrollment_date: '2024-09-15',
    schedule: 'Fecha Estelar 4325.3 - 4328.6',
    teacher_id: 8,
    teacher_name: 'Exploradora Luna Stardust',
    short_description:
      'Descubre los secretos de planetas no mapeados en nuestro curso práctico de exploración planetaria.',
    long_description:
      'Prepárate para ser parte de la vanguardia de la exploración espacial aprendiendo a manejar ambientes desconocidos y extremos en este curso detallado. Bajo la experta tutela de la Exploradora Luna Stardust, explorarás técnicas de supervivencia, recolección de datos y análisis de muestras planetarias que te capacitarán para liderar misiones en nuevos mundos. Este curso es esencial para aquellos que aspiran a expandir los límites conocidos del espacio habitable y descubrir nuevos recursos.',
    image: 'course2.png',
    difficulty_level: 'Avanzado',
    duration_hours: 60,
    course_materials: [
      {
        type: 'Libro de texto',
        title: 'Fundamentos de la Geología Planetaria',
        author: 'Geo Tech Publications',
        url: 'https://example.com/fundamentos-geologia',
      },
      {
        type: 'Video',
        title: 'Técnicas de Muestreo en Planetas Exóticos',
        url: 'https://example.com/tecnicas-muestreo',
      },
    ],
    recommended_books: [
      {
        title: 'Cartografía de Nuevos Mundos',
        author: 'Mara Quantum',
        isbn: '978-3-65901-234-6',
      },
      {
        title: 'Ecología de Planetas No Habitados',
        author: 'Dr. Eli Nebulus',
        isbn: '978-0-76543-210-9',
      },
    ],
    topics_covered: [
      'Preparación de expediciones',
      'Navegación y mapeo planetario',
      'Análisis de biosferas extraterrestres',
      'Técnicas de muestreo avanzado',
    ],
    syllabus: {
      week_1: {
        title: 'Introducción a la Exploración Planetaria',
        content: [
          'Revisión de la historia y teoría de la exploración planetaria',
          'Estudio de casos de expediciones pasadas',
          'Principios de navegación y cartografía planetaria',
        ],
      },
      week_2: {
        title: 'Técnicas de Supervivencia en Entornos Hostiles',
        content: [
          'Adaptación a condiciones extremas',
          'Uso de tecnología de soporte vital en terreno',
          'Simulacros de emergencia planetaria',
        ],
      },
      week_3: {
        title: 'Recolección y Análisis de Muestras',
        content: [
          'Metodologías de muestreo de suelos y atmósferas',
          'Técnicas de análisis en laboratorio móvil',
          'Documentación y conservación de muestras',
        ],
      },
      week_4: {
        title: 'Evaluación de Habitabilidad y Recursos',
        content: [
          'Identificación de recursos vitales',
          'Análisis de potencial habitable',
          'Planificación de colonias futuras',
        ],
      },
      week_5: {
        title: 'Proyecto Final: Planificación de una Misión Exploratoria',
        content: [
          'Selección de un planeta objetivo basado en datos recopilados',
          'Diseño de la ruta de exploración y logística de la misión',
          'Presentación del plan de misión para revisión por pares',
        ],
      },
    },
    prerequisites: ['Introducción a la Astrobiología', 'Geología Básica'],
    assessment_methods: [
      'Exámenes escritos',
      'Presentaciones de proyectos',
      'Evaluaciones prácticas en simuladores',
    ],
    max_students: 30,
    available_slots: 25,
    language: 'Estándar Galáctico',
    credits: 4,
    certification: true,
    review_score: 4.9,
    reviews: [
      {
        student_id: 4,
        rating: 5,
        comment:
          'Una experiencia transformadora que me ha preparado para ser pionero en nuevos mundos.',
      },
      {
        student_id: 7,
        rating: 4.8,
        comment:
          'Muy desafiante, pero increíblemente gratificante. Las simulaciones son de primer nivel.',
      },
    ],
    related_courses: [1, 3],
    course_level: 'Avanzado',
    student_ratings: [
      {
        student_id: 9,
        rating: 5,
        comment:
          'El curso superó todas mis expectativas con su profundidad y aplicación práctica.',
      },
    ],
  },
  {
    id: 3,
    name: 'Astroingeniería Avanzada',
    start_date: '2024-09-15',
    end_date: '2024-12-15',
    students: [2, 4, 6],
    enrollment_date: '2024-08-20',
    schedule: 'Fecha Estelar 4332.0 - 4336.0',
    teacher_id: 3,
    teacher_name: 'Ingeniero Leo Starcrafter',
    short_description:
      'Construye y mantén estructuras espaciales utilizando las últimas tecnologías en astroingeniería.',
    long_description:
      'Este curso sumerge a los estudiantes en los principios avanzados y aplicaciones prácticas de la ingeniería espacial. A través de una combinación de teoría detallada y extensos proyectos prácticos, los participantes aprenderán sobre la construcción de naves espaciales, estaciones espaciales y la infraestructura necesaria para futuras colonias en otros planetas. Bajo la tutela del Ingeniero Leo Starcrafter, los estudiantes no solo adquirirán conocimientos técnicos, sino también habilidades prácticas en el uso de herramientas de astroingeniería en entornos de microgravedad.',
    image: 'course3.png',
    difficulty_level: 'Avanzado',
    duration_hours: 60,
    course_materials: [
      {
        type: 'Libro de texto',
        title: 'Fundamentos de Astroingeniería',
        author: 'Ingeniería Espacial S.L.',
        url: 'https://example.com/fundamentos-astroingenieria',
      },
    ],
    recommended_books: [
      {
        title: 'Construcción de Estructuras Espaciales',
        author: 'Dr. Helia Orbitson',
        isbn: '978-3-85901-234-5',
      },
    ],
    topics_covered: [
      'Diseño estructural en el espacio',
      'Mantenimiento y reparación de naves espaciales',
      'Simulaciones de construcción espacial',
    ],
    syllabus: {
      week_1: {
        title: 'Introducción a la Astroingeniería',
        content: [
          'Principios básicos de la ingeniería espacial',
          'Historia y evolución de la construcción espacial',
          'Revisión de herramientas y materiales modernos',
        ],
      },
      week_2: {
        title: 'Diseño y Simulación de Naves Espaciales',
        content: [
          'Técnicas avanzadas de modelado y simulación',
          'Estudios de caso sobre naves espaciales icónicas',
          'Proyectos de diseño en equipo',
        ],
      },
      week_3: {
        title: 'Mantenimiento y Logística Espacial',
        content: [
          'Estrategias de mantenimiento para estaciones espaciales',
          'Logística de suministros y recursos en el espacio',
          'Prácticas de seguridad y protocolos de emergencia',
        ],
      },
      week_4: {
        title: 'Proyecto Final: Diseño de una Estación Espacial',
        content: [
          'Aplicación de conocimientos en un proyecto integral',
          'Diseño y planificación de una estación espacial operativa',
          'Presentación del proyecto a un panel de expertos',
        ],
      },
    },
    prerequisites: ['Física Aplicada', 'Introducción a la Ingeniería'],
    assessment_methods: [
      'Exámenes',
      'Proyectos de diseño',
      'Presentaciones finales',
    ],
    max_students: 20,
    available_slots: 18,
    language: 'Estándar Galáctico',
    credits: 4,
    certification: true,
    review_score: 4.8,
    reviews: [
      {
        student_id: 2,
        rating: 5,
        comment:
          'Curso imprescindible para cualquier aspirante a ingeniero espacial.',
      },
      {
        student_id: 4,
        rating: 4.5,
        comment:
          'Los proyectos prácticos fueron increíblemente enriquecedores.',
      },
    ],
    related_courses: [1, 4],
    course_level: 'Avanzado',
    student_ratings: [
      {
        student_id: 6,
        rating: 4.9,
        comment: 'La combinación de teoría y práctica fue perfecta.',
      },
    ],
  },
  {
    id: 4,
    name: 'Tácticas de Supervivencia Cósmica',
    start_date: '2024-10-05',
    end_date: '2024-12-20',
    students: [3, 8, 10],
    enrollment_date: '2024-09-20',
    schedule: 'Fecha Estelar 4333.0 - 4338.0',
    teacher_id: 4,
    teacher_name: 'Comandante Sarah Galaxy',
    short_description:
      'Aprende a sobrevivir en los entornos más hostiles del cosmos con técnicas avanzadas de supervivencia.',
    long_description:
      'En este curso, los estudiantes se entrenarán para manejar situaciones extremas en ambientes espaciales, incluyendo vacío espacial, planetas con atmósferas tóxicas y campos de asteroides. Guiados por la Comandante Sarah Galaxy, una veterana en misiones de alto riesgo, los participantes desarrollarán habilidades críticas que van desde la creación de refugios temporales hasta la reparación de trajes espaciales en condiciones de emergencia. El curso está diseñado no solo para enseñar tácticas de supervivencia, sino también para fortalecer la resiliencia mental y física necesaria para enfrentar y superar desafíos imprevistos en el espacio.',
    image: 'course4.png',
    difficulty_level: 'Avanzado',
    duration_hours: 45,
    course_materials: [
      {
        type: 'Video',
        title: 'Supervivencia en el Vacío del Espacio',
        url: 'https://example.com/supervivencia-vacio',
      },
    ],
    recommended_books: [
      {
        title: 'Manual de Campo para la Supervivencia Planetaria',
        author: 'Rex Starwalker',
        isbn: '978-1-98765-432-2',
      },
    ],
    topics_covered: [
      'Creación de hábitats de emergencia',
      'Reparación y mantenimiento de equipo de supervivencia',
      'Navegación y orientación en terrenos desconocidos',
    ],
    syllabus: {
      week_1: {
        title: 'Fundamentos de la Supervivencia Cósmica',
        content: [
          'Principios básicos de supervivencia en el espacio',
          'Uso de equipos de supervivencia estándar',
          'Estrategias de adaptación a entornos hostiles',
        ],
      },
      week_2: {
        title: 'Hábitats y Refugios de Emergencia',
        content: [
          'Construcción de refugios temporales en planetas y asteroides',
          'Gestión de recursos vitales en condiciones de emergencia',
          'Simulaciones de construcción de hábitats en entornos controlados',
        ],
      },
      week_3: {
        title: 'Técnicas Avanzadas de Supervivencia',
        content: [
          'Reparación de trajes espaciales y otros equipos esenciales',
          'Técnicas de primeros auxilios específicas para accidentes espaciales',
          'Estrategias de escape y rescate en situaciones de crisis',
        ],
      },
      week_4: {
        title: 'Simulacro de Supervivencia Extrema',
        content: [
          'Ejercicio práctico de supervivencia en un entorno simulado de alta peligrosidad',
          'Evaluación de habilidades de supervivencia y toma de decisiones bajo presión',
          'Debriefing y análisis de las tácticas de supervivencia empleadas',
        ],
      },
    },
    prerequisites: [
      'Fundamentos de la Exploración Espacial',
      'Condicionamiento Físico para Astronautas',
    ],
    assessment_methods: [
      'Pruebas prácticas',
      'Evaluación continua',
      'Proyecto final de supervivencia',
    ],
    max_students: 15,
    available_slots: 12,
    language: 'Estándar Galáctico',
    credits: 3,
    certification: true,
    review_score: 4.9,
    reviews: [
      {
        student_id: 3,
        rating: 5,
        comment:
          'Un curso desafiante que te prepara para lo inesperado en el espacio.',
      },
      {
        student_id: 10,
        rating: 4.8,
        comment:
          'Las simulaciones de supervivencia fueron increíblemente realistas y útiles.',
      },
    ],
    related_courses: [1, 3],
    course_level: 'Avanzado',
    student_ratings: [
      {
        student_id: 8,
        rating: 4.9,
        comment:
          'Excelente entrenamiento para situaciones críticas, totalmente recomendado para futuros exploradores.',
      },
    ],
  },
  {
    id: 5,
    name: 'Comunicaciones Intergalácticas',
    start_date: '2024-10-10',
    end_date: '2024-12-05',
    students: [5, 11, 13],
    enrollment_date: '2024-09-25',
    schedule: 'Fecha Estelar 4340.0 - 4345.0',
    teacher_id: 5,
    teacher_name: 'Doctora Hila Signal',
    short_description:
      'Domina las tecnologías de comunicación espacial para mantener conectados a los exploradores de la galaxia.',
    long_description:
      'Este curso intensivo proporciona a los estudiantes una comprensión profunda de las tecnologías de comunicación que son críticas para las operaciones intergalácticas. Dirigido por la Doctora Hila Signal, una pionera en comunicaciones cuánticas, los participantes aprenderán sobre la transmisión de datos a través de vastas distancias espaciales, el manejo de señales en entornos interferentes y las últimas innovaciones en criptografía espacial. A través de lecciones teóricas y muchos ejercicios prácticos, los estudiantes estarán preparados para diseñar y mantener sistemas de comunicación que puedan operar eficazmente en el entorno espacial.',
    image: 'course5.png',
    difficulty_level: 'Avanzado',
    duration_hours: 50,
    course_materials: [
      {
        type: 'Libro de texto',
        title: 'Principios de Comunicaciones Cuánticas',
        author: 'Quantum Comm Ltd.',
        url: 'https://example.com/principios-comunicaciones',
      },
      {
        type: 'Video',
        title: 'Criptografía en Comunicaciones Espaciales',
        url: 'https://example.com/criptografia-comunicaciones',
      },
    ],
    recommended_books: [
      {
        title: 'Redes de Comunicación en la Exploración Espacial',
        author: 'Signal Tech Corp',
        isbn: '978-3-85901-235-2',
      },
    ],
    topics_covered: [
      'Tecnologías de comunicación avanzadas',
      'Criptografía aplicada a las comunicaciones espaciales',
      'Gestión de señales y interferencias en el espacio',
    ],
    syllabus: {
      week_1: {
        title: 'Fundamentos de las Comunicaciones Espaciales',
        content: [
          'Historia y evolución de las comunicaciones espaciales',
          'Conceptos básicos de transmisión y recepción de señales',
          'Introducción a las redes de comunicación espacial',
        ],
      },
      week_2: {
        title: 'Criptografía y Seguridad',
        content: [
          'Principios de la criptografía en comunicaciones',
          'Técnicas modernas de encriptación y su aplicación en el espacio',
          'Casos de estudio sobre brechas de seguridad y cómo se gestionaron',
        ],
      },
      week_3: {
        title: 'Tecnologías de Comunicación Avanzadas',
        content: [
          'Últimos avances en comunicaciones cuánticas',
          'Implementación de tecnologías de comunicación en misiones espaciales',
          'Desafíos y soluciones en la comunicación interplanetaria',
        ],
      },
      week_4: {
        title: 'Proyecto de Comunicación Intergaláctica',
        content: [
          'Planificación y diseño de un sistema de comunicación para una misión intergaláctica',
          'Simulaciones de despliegue y operación',
          'Presentación de proyectos y revisión por expertos',
        ],
      },
    },
    prerequisites: [
      'Física y Matemáticas Avanzadas',
      'Introducción a las Redes',
    ],
    assessment_methods: [
      'Exámenes teóricos',
      'Proyectos de implementación',
      'Simulaciones prácticas',
    ],
    max_students: 20,
    available_slots: 17,
    language: 'Estándar Galáctico',
    credits: 4,
    certification: true,
    review_score: 4.9,
    reviews: [
      {
        student_id: 5,
        rating: 5,
        comment:
          'El curso me proporcionó una sólida comprensión de las comunicaciones espaciales avanzadas.',
      },
      {
        student_id: 11,
        rating: 4.8,
        comment:
          'Los ejercicios prácticos fueron esenciales para entender la teoría.',
      },
    ],
    related_courses: [2, 6],
    course_level: 'Avanzado',
    student_ratings: [
      {
        student_id: 13,
        rating: 4.7,
        comment: 'Increíble detalle en la enseñanza de criptografía espacial.',
      },
    ],
  },
  {
    id: 6,
    name: 'Diplomacia Intergaláctica',
    start_date: '2024-11-01',
    end_date: '2025-01-31',
    students: [7, 12, 15],
    enrollment_date: '2024-10-15',
    schedule: 'Fecha Estelar 4346.0 - 4350.0',
    teacher_id: 6,
    teacher_name: 'Embajador Rex Galaxion',
    short_description:
      'Navega los complejos desafíos de la diplomacia en un universo multiespecie.',
    long_description:
      'Este curso prepara a los estudiantes para manejar las sutilezas de la diplomacia en un contexto intergaláctico. Guiados por el Embajador Rex Galaxion, un experto en negociaciones extraterrestres, los participantes aprenderán a diseñar tratados, manejar conflictos interestelares y fomentar la paz y la cooperación entre diversas civilizaciones espaciales. A través de simulaciones interactivas, estudios de caso y ejercicios de rol, los estudiantes se convertirán en diplomáticos capaces de influir en las políticas a escala galáctica.',
    image: 'course6.png',
    difficulty_level: 'Avanzado',
    duration_hours: 50,
    course_materials: [
      {
        type: 'Libro de texto',
        title: 'Fundamentos de la Diplomacia Intergaláctica',
        author: 'Diplomatic Arts Publishing',
        url: 'https://example.com/fundamentos-diplomacia',
      },
      {
        type: 'Video',
        title: 'Negociaciones y Tratados Intergalácticos',
        url: 'https://example.com/negociaciones-tratados',
      },
    ],
    recommended_books: [
      {
        title:
          'La Política de las Estrellas: Manejo de Conflictos Intergalácticos',
        author: 'Tia Nova',
        isbn: '978-3-65001-234-7',
      },
      {
        title: 'Diplomacia en la Era Espacial: Un Manual',
        author: 'Kai Orion',
        isbn: '978-0-98765-432-3',
      },
    ],
    topics_covered: [
      'Estrategias de negociación',
      'Resolución de conflictos',
      'Creación de alianzas intergalácticas',
    ],
    syllabus: {
      week_1: {
        title: 'Introducción a la Diplomacia Intergaláctica',
        content: [
          'Conceptos básicos de la diplomacia espacial',
          'Historia de las relaciones intergalácticas',
          'Principios de comunicación intercultural',
        ],
      },
      week_2: {
        title: 'Técnicas de Negociación',
        content: [
          'Metodologías avanzadas de negociación',
          'Simulaciones de tratados de paz',
          'Análisis de negociaciones pasadas y su impacto',
        ],
      },
      week_3: {
        title: 'Gestión de Crisis y Conflictos',
        content: [
          'Estrategias para manejar desacuerdos y tensiones',
          'Roles de juegos de guerra diplomática',
          'Creación de protocolos para situaciones de crisis',
        ],
      },
      week_4: {
        title: 'Diplomacia Práctica y Simulaciones',
        content: [
          'Participación en misiones diplomáticas simuladas',
          'Evaluación de las tácticas de influencia y persuasión',
          'Debate sobre ética y responsabilidad en la diplomacia',
        ],
      },
    },
    prerequisites: ['Historia Galáctica', 'Comunicación Avanzada'],
    assessment_methods: [
      'Participación en simulaciones',
      'Evaluaciones escritas sobre casos de estudio',
      'Proyecto final de negociación',
    ],
    max_students: 30,
    available_slots: 28,
    language: 'Estándar Galáctico',
    credits: 4,
    certification: true,
    review_score: 4.8,
    reviews: [
      {
        student_id: 7,
        rating: 5,
        comment:
          'Una formación excepcional que me ha preparado para liderar en el ámbito diplomático.',
      },
      {
        student_id: 15,
        rating: 4.7,
        comment:
          'Los ejercicios prácticos y las simulaciones fueron invaluables para mi aprendizaje.',
      },
    ],
    related_courses: [2, 5],
    course_level: 'Avanzado',
    student_ratings: [
      {
        student_id: 12,
        rating: 4.9,
        comment: 'Profundamente informativo y increíblemente práctico.',
      },
    ],
  },
  {
    id: 7,
    name: 'Tecnologías de Propulsión Espacial',
    start_date: '2024-11-15',
    end_date: '2025-02-10',
    students: [1, 6, 14],
    enrollment_date: '2024-10-30',
    schedule: 'Fecha Estelar 4351.0 - 4355.0',
    teacher_id: 7,
    teacher_name: 'Ingeniero Mara Pulse',
    short_description:
      'Explora las fronteras de la propulsión espacial y aprende a diseñar sistemas que definirán el futuro de los viajes intergalácticos.',
    long_description:
      'Este curso avanzado ofrece una visión profunda de los sistemas de propulsión que impulsan las naves a través del cosmos. A cargo de la Ingeniero Mara Pulse, una innovadora en tecnología de propulsión, los estudiantes se sumergirán en la física de la propulsión, explorando desde sistemas de cohetes convencionales hasta tecnologías experimentales como la propulsión iónica y la antimateria. Los participantes tendrán la oportunidad de diseñar y simular sus propios sistemas de propulsión, evaluando su eficacia en escenarios reales y simulados.',
    image: 'course7.png',
    difficulty_level: 'Experto',
    duration_hours: 70,
    course_materials: [
      {
        type: 'Libro de texto',
        title: 'Dinámica de la Propulsión Espacial',
        author: 'Advanced Propulsion Labs',
        url: 'https://example.com/dinamica-propulsion',
      },
      {
        type: 'Video',
        title: 'Innovaciones en Propulsión Espacial',
        url: 'https://example.com/innovaciones-propulsion',
      },
    ],
    recommended_books: [
      {
        title: 'Física de Cohetes y Propulsión',
        author: 'Dr. Leo Thruster',
        isbn: '978-3-65902-234-8',
      },
      {
        title: 'Propulsión Avanzada para Viajes Interplanetarios',
        author: 'Tia Comet',
        isbn: '978-0-76543-212-3',
      },
    ],
    topics_covered: [
      'Principios básicos de la propulsión espacial',
      'Diseño y simulación de motores de cohetes',
      'Evaluación de sistemas de propulsión alternativos',
    ],
    syllabus: {
      week_1: {
        title: 'Fundamentos de la Propulsión',
        content: [
          'Revisión histórica de la tecnología de propulsión',
          'Conceptos básicos y ecuaciones fundamentales',
          'Tipos de motores y sus aplicaciones espaciales',
        ],
      },
      week_2: {
        title: 'Propulsión Convencional y Avanzada',
        content: [
          'Estudio detallado de motores de cohetes químicos',
          'Introducción a la propulsión eléctrica y nuclear',
          'Comparación de eficiencias y aplicaciones',
        ],
      },
      week_3: {
        title: 'Innovaciones y Futuro de la Propulsión',
        content: [
          'Últimas investigaciones en propulsión iónica y de plasma',
          'Desarrollo de tecnologías de antimateria y warp drives',
          'Impacto ambiental y sostenibilidad de sistemas de propulsión',
        ],
      },
      week_4: {
        title: 'Proyecto de Diseño de Propulsión',
        content: [
          'Diseño de un sistema de propulsión para una misión específica',
          'Simulaciones de rendimiento y análisis de viabilidad',
          'Presentación y crítica de diseños propuestos',
        ],
      },
    },
    prerequisites: ['Física Avanzada', 'Ingeniería Mecánica Aplicada'],
    assessment_methods: [
      'Exámenes teóricos',
      'Proyectos de diseño',
      'Simulaciones y análisis de rendimiento',
    ],
    max_students: 15,
    available_slots: 13,
    language: 'Estándar Galáctico',
    credits: 5,
    certification: true,
    review_score: 4.9,
    reviews: [
      {
        student_id: 1,
        rating: 5,
        comment:
          'Este curso ha ampliado mi comprensión de lo que es posible en la tecnología de propulsión.',
      },
      {
        student_id: 14,
        rating: 4.8,
        comment:
          'Los proyectos y las simulaciones fueron desafiantes y extremadamente informativos.',
      },
    ],
    related_courses: [3, 5],
    course_level: 'Experto',
    student_ratings: [
      {
        student_id: 6,
        rating: 5,
        comment:
          'Una experiencia increíble que ha profundizado mi amor por la ingeniería espacial.',
      },
    ],
  },
  {
    id: 8,
    name: 'Exploración de Exoplanetas',
    start_date: '2024-11-20',
    end_date: '2025-02-20',
    students: [8, 10, 16],
    enrollment_date: '2024-11-05',
    schedule: 'Fecha Estelar 4356.0 - 4360.0',
    teacher_id: 8,
    teacher_name: 'Doctora Elara Moonwalker',
    short_description:
      'Descubre y estudia nuevos mundos más allá de nuestro sistema solar.',
    long_description:
      'El curso de Exploración de Exoplanetas lleva a los estudiantes en un viaje a través del cosmos para descubrir y analizar mundos fuera de nuestro sistema solar. Dirigido por la Doctora Elara Moonwalker, una renombrada astrónoma y exploradora planetaria, este curso cubre todo desde la detección de exoplanetas hasta las técnicas avanzadas para analizar su atmósfera y potencial habitabilidad. A través de conferencias, laboratorios prácticos y observaciones telescopicas, los estudiantes ganarán una comprensión profunda de cómo identificar y estudiar estos planetas distantes.',
    image: 'course8.png',
    difficulty_level: 'Intermedio',
    duration_hours: 45,
    course_materials: [
      {
        type: 'Libro de texto',
        title: 'Mundos Más Allá: Una Introducción a los Exoplanetas',
        author: 'Cosmic Visions Ltd.',
        url: 'https://example.com/mundos-mas-alla',
      },
      {
        type: 'Video',
        title: 'Técnicas de Detección de Exoplanetas',
        url: 'https://example.com/tecnicas-deteccion',
      },
    ],
    recommended_books: [
      {
        title: 'Ecología de Exoplanetas',
        author: 'Dr. Stella Nebula',
        isbn: '978-1-23456-789-1',
      },
      {
        title: 'Atmósferas de Otros Mundos',
        author: 'Prof. Orion Skygazer',
        isbn: '978-0-98765-432-2',
      },
    ],
    topics_covered: [
      'Métodos de detección de exoplanetas',
      'Análisis de atmósferas planetarias',
      'Evaluación de la habitabilidad',
    ],
    syllabus: {
      week_1: {
        title: 'Fundamentos de la Exploración de Exoplanetas',
        content: [
          'Introducción a los exoplanetas',
          'Historia y métodos de detección',
          'Revisión de las principales misiones exoplanetarias',
        ],
      },
      week_2: {
        title: 'Observación y Detección',
        content: [
          'Uso de telescopios y espectrógrafos',
          'Prácticas de observación nocturna',
          'Análisis de datos de observación',
        ],
      },
      week_3: {
        title: 'Análisis de Habitabilidad',
        content: [
          'Estudio de atmósferas exoplanetarias',
          'Modelos de clima planetario',
          'Simulaciones de ecosistemas extraterrestres',
        ],
      },
      week_4: {
        title: 'Proyecto de Investigación Exoplanetaria',
        content: [
          'Selección de un exoplaneta para estudio detallado',
          'Recopilación y análisis de datos',
          'Presentación de hallazgos y discusión',
        ],
      },
    },
    prerequisites: ['Astronomía Básica', 'Física Planetaria'],
    assessment_methods: [
      'Pruebas escritas',
      'Informes de laboratorio',
      'Presentación de proyectos',
    ],
    max_students: 20,
    available_slots: 18,
    language: 'Estándar Galáctico',
    credits: 4,
    certification: true,
    review_score: 4.7,
    reviews: [
      {
        student_id: 8,
        rating: 5,
        comment: 'Un curso fascinante que abre una ventana a nuevos mundos.',
      },
      {
        student_id: 16,
        rating: 4.9,
        comment:
          'Las sesiones prácticas y las observaciones nocturnas fueron lo más destacado para mí.',
      },
    ],
    related_courses: [7, 9],
    course_level: 'Intermedio',
    student_ratings: [
      {
        student_id: 10,
        rating: 4.8,
        comment:
          'Aprendí técnicas increíbles para la detección de planetas fuera de nuestro sistema solar.',
      },
    ],
  },
  {
    id: 9,
    name: 'Bioingeniería de Ecosistemas Espaciales',
    start_date: '2024-12-01',
    end_date: '2025-03-01',
    students: [12, 15, 17],
    enrollment_date: '2024-11-15',
    schedule: 'Fecha Estelar 4361.0 - 4365.0',
    teacher_id: 9,
    teacher_name: 'Doctor Bio Terra',
    short_description:
      'Diseña e implementa ecosistemas sostenibles para la vida humana en otros planetas.',
    long_description:
      'Este curso innovador introduce a los estudiantes en el campo emergente de la bioingeniería de ecosistemas espaciales. Bajo la guía del Doctor Bio Terra, un pionero en biotecnología aplicada a hábitats extraterrestres, los estudiantes aprenderán a diseñar, construir y mantener ecosistemas artificiales que soporten la vida humana en entornos espaciales. Desde la teoría hasta la implementación práctica, el curso cubre técnicas de ingeniería genética, biología sintética y manejo de recursos biológicos, preparando a los estudiantes para contribuir a futuras misiones de colonización planetaria.',
    image: 'course9.png',
    difficulty_level: 'Experto',
    duration_hours: 60,
    course_materials: [
      {
        type: 'Libro de texto',
        title: 'Principios de Bioingeniería para Hábitats Espaciales',
        author: 'LifeTech Innovations',
        url: 'https://example.com/principios-bioingenieria',
      },
      {
        type: 'Video',
        title: 'Construyendo Ecosistemas en el Espacio',
        url: 'https://example.com/construyendo-ecosistemas',
      },
    ],
    recommended_books: [
      {
        title: 'Biotecnología Espacial Aplicada',
        author: 'Genes Galactic Ltd.',
        isbn: '978-1-98765-432-4',
      },
      {
        title: 'Ecosistemas Artificiales para la Colonización Planetaria',
        author: 'EcoSpace Solutions',
        isbn: '978-0-99876-543-2',
      },
    ],
    topics_covered: [
      'Ingeniería genética para aplicaciones espaciales',
      'Diseño de sistemas cerrados de vida',
      'Gestión de recursos biológicos en el espacio',
    ],
    syllabus: {
      week_1: {
        title: 'Introducción a la Bioingeniería Espacial',
        content: [
          'Fundamentos de la biología sintética',
          'Historia y desarrollo de ecosistemas artificiales',
          'Ética y consideraciones prácticas en la bioingeniería',
        ],
      },
      week_2: {
        title: 'Tecnologías de Ingeniería Genética',
        content: [
          'Herramientas y técnicas de edición genética',
          'Aplicaciones de la ingeniería genética en biotecnología espacial',
          'Desarrollo de organismos adaptados a condiciones extraterrestres',
        ],
      },
      week_3: {
        title: 'Diseño de Ecosistemas Cerrados',
        content: [
          'Planificación y construcción de biosferas cerradas',
          'Simulaciones de ecosistemas y modelado de flujos de nutrientes',
          'Estudios de caso sobre ecosistemas espaciales exitosos y fallidos',
        ],
      },
      week_4: {
        title: 'Proyecto Final: Prototipo de un Ecosistema Espacial',
        content: [
          'Diseño y creación de un modelo a escala de un ecosistema espacial',
          'Pruebas de viabilidad y sostenibilidad',
          'Presentación y evaluación del proyecto',
        ],
      },
    },
    prerequisites: ['Biología Avanzada', 'Química Orgánica'],
    assessment_methods: [
      'Exámenes teóricos',
      'Informes de proyecto',
      'Evaluaciones de laboratorio',
    ],
    max_students: 20,
    available_slots: 18,
    language: 'Estándar Galáctico',
    credits: 4,
    certification: true,
    review_score: 4.8,
    reviews: [
      {
        student_id: 12,
        rating: 5,
        comment:
          'Un curso revolucionario que redefine lo que es posible en la bioingeniería.',
      },
      {
        student_id: 17,
        rating: 4.7,
        comment:
          'Los proyectos prácticos me dieron una verdadera comprensión de lo que se necesita para construir ecosistemas sostenibles en el espacio.',
      },
    ],
    related_courses: [8, 10],
    course_level: 'Experto',
    student_ratings: [
      {
        student_id: 15,
        rating: 4.9,
        comment:
          'Profundamente informativo y desafiante, este curso me preparó para contribuir a la ciencia espacial.',
      },
    ],
  },
  {
    id: 10,
    name: 'Neurociencia Espacial',
    start_date: '2025-01-05',
    end_date: '2025-04-05',
    students: [14, 18, 20],
    enrollment_date: '2024-12-20',
    schedule: 'Fecha Estelar 4366.0 - 4370.0',
    teacher_id: 10,
    teacher_name: 'Doctor Nero Synapse',
    short_description:
      'Estudia los efectos del espacio en la neurología humana y desarrolla técnicas para mitigar los impactos negativos.',
    long_description:
      'Este curso ofrece una exploración profunda de cómo el ambiente espacial afecta la función y la salud del cerebro humano. Dirigido por el Doctor Nero Synapse, un líder en el campo de la neurociencia espacial, los estudiantes investigarán temas como la adaptación cerebral a la microgravedad, el impacto de la radiación cósmica en la neurología, y las estrategias para mantener la salud cognitiva en misiones de larga duración. A través de conferencias, estudios de caso y experimentos prácticos, este curso prepara a los estudiantes para apoyar la salud mental y neurológica de los astronautas en el espacio.',
    image: 'course10.png',
    difficulty_level: 'Experto',
    duration_hours: 60,
    course_materials: [
      {
        type: 'Libro de texto',
        title: 'Neurociencia en la Frontera Final',
        author: 'BrainTech Research',
        url: 'https://example.com/neurociencia-frontera',
      },
      {
        type: 'Video',
        title: 'Adaptaciones Neurológicas en el Espacio',
        url: 'https://example.com/adaptaciones-neurologicas',
      },
    ],
    recommended_books: [
      {
        title: 'Cerebro Cósmico: Estudios de Neurociencia en el Espacio',
        author: 'Dr. Mindy Orbit',
        isbn: '978-3-65903-234-9',
      },
      {
        title: 'Psicología y Neurología Espacial: Un Enfoque Integrado',
        author: 'Prof. Star Neuron',
        isbn: '978-0-99876-544-9',
      },
    ],
    topics_covered: [
      'Efectos de la microgravedad en la neurología',
      'Impacto de la radiación en la función cerebral',
      'Estrategias de mitigación para la salud mental en el espacio',
    ],
    syllabus: {
      week_1: {
        title: 'Introducción a la Neurociencia Espacial',
        content: [
          'Visión general de la neurociencia aplicada al espacio',
          'Revisión de la anatomía y fisiología cerebral',
          'Efectos conocidos del ambiente espacial en el cerebro',
        ],
      },
      week_2: {
        title: 'Investigación y Experimentación',
        content: [
          'Metodologías de investigación en neurociencia espacial',
          'Diseño y ejecución de experimentos en simuladores de microgravedad',
          'Análisis de datos y modelado estadístico',
        ],
      },
      week_3: {
        title: 'Salud Mental y Cognitiva en Misiones Espaciales',
        content: [
          'Desafíos psicológicos de los viajes espaciales de larga duración',
          'Técnicas de intervención y soporte psicológico',
          'Desarrollo de programas de entrenamiento cognitivo adaptados al espacio',
        ],
      },
      week_4: {
        title: 'Proyecto Final: Protocolos de Salud Neurológica',
        content: [
          'Desarrollo de un protocolo integral para la gestión de la salud neurológica en una misión espacial',
          'Pruebas de protocolo en simulaciones de vuelo espacial',
          'Evaluación y optimización basada en retroalimentación',
        ],
      },
    },
    prerequisites: ['Biología Avanzada', 'Psicología General'],
    assessment_methods: [
      'Evaluaciones teóricas',
      'Informes de laboratorio',
      'Presentación de proyectos finales',
    ],
    max_students: 20,
    available_slots: 18,
    language: 'Estándar Galáctico',
    credits: 5,
    certification: true,
    review_score: 4.8,
    reviews: [
      {
        student_id: 14,
        rating: 5,
        comment:
          'Este curso ha cambiado completamente mi perspectiva sobre la importancia de la neurociencia en la exploración espacial.',
      },
      {
        student_id: 20,
        rating: 4.9,
        comment:
          'Una mirada profunda e impresionante a la neurología en condiciones extremas.',
      },
    ],
    related_courses: [7, 9],
    course_level: 'Experto',
    student_ratings: [
      {
        student_id: 18,
        rating: 5,
        comment:
          'Informativo, desafiante y perfectamente adaptado a los interesados en la medicina espacial.',
      },
    ],
  },
];
