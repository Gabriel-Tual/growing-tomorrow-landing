export type Language = "en" | "fr" | "es";

export const languageLabels: Record<Language, string> = {
  en: "EN",
  fr: "FR",
  es: "ES",
};

export const translations: Record<Language, Record<string, any>> = {
  en: {
    header: { cta: "Get in Touch" },
    hero: {
      tagline: "Regenerative Systems Catalyst",
      title1: "Scale Up",
      title2: "Regeneration",
      subtitle: "Solving the speed issue through collaboration, community and action, at all scales.",
      cta: "Discover How",
    },
    process: {
      label: "The Process",
      title: "How Change Happens",
      emulate: {
        title: "Emulate",
        subtitle: "Build the Movement",
        description: "We create content, curate communities and make sure that regeneration is embodied through our stories.",
      },
      connect: {
        title: "Connect",
        subtitle: "Bridge the Gap",
        description: "Creating connections to accelerate impact between different worlds, actively acting as a translating agent for all the doers.",
      },
      do: {
        title: "Do",
        subtitle: "Make it Happen",
        description: "Where strategy meets soil. Turning connections into concrete projects, pilots into programs, and ideas into impact. The magic is just beginning.",
      },
      knowMore: "Know More",
    },
    offers: {
      label: "How We Grow",
      title: "Three Pathways to Regeneration",
      food: {
        title: "Growing Food",
        subtitle: "For Farmers",
        description: "A dedicated track for farmers' needs, from training and technical support to market access and offtake agreements.",
      },
      connection: {
        title: "Growing Connection",
        subtitle: "For Projects",
        description: "A relationship service to accelerate your regenerative projects by connecting you with the right partners, together.",
      },
      landscape: {
        title: "Growing Landscape",
        subtitle: "For Regions",
        description: "Strategic support to create landscape-level regeneration projects that transform entire territories.",
      },
      learnMore: "Learn more →",
    },
    landscape: {
      label: "Our Ecosystem",
      title: "The Living Landscape",
      subtitle: "Click on any element to explore how our three pathways work together to regenerate territories.",
      landscapeLabel: "The Landscape",
      communityLabel: "The Community",
      farmsLabel: "The Farms",
    },
    pathway: {
      label: "The Framework",
      title: "The Regeneration Pathway",
      subtitle: "Four essential elements that unlock the transition to regenerative agriculture. Each step builds on the last, creating a pathway from curiosity to transformation.",
      inspiration: {
        title: "Inspiration",
        description: "Farmers need to see with their own eyes successes from others operating in the same context. Real stories from real practitioners break through skepticism and ignite the spark of possibility.",
      },
      knowledge: {
        title: "Knowledge",
        description: "Access to firsthand training or a qualified agronomist who knows how to plan and execute regeneratively. Moving from inspiration to action requires the right knowledge at the right time.",
      },
      capital: {
        title: "Capital",
        description: "Funding for potential yield gaps and investment in transition. The financial bridge that allows farmers to take the leap without risking their livelihoods.",
      },
      market: {
        title: "Market",
        description: "Certainty that people want your products. Without market access, all efforts are wasted. We connect regenerative producers with conscious buyers ready to pay for quality.",
      },
    },
    about: {
      label: "Founder",
      name: "Gabriel Tual",
      bio1: "Regenerative systems catalyst with a decade of experience bridging the worlds of sustainable agriculture, impact investment, and food innovation.",
      bio2: "From moderating sessions with Koen van Seijen at Investing in Regenerative Agriculture to building RegenAg communities across Barcelona, I've facilitated over 200 meaningful connections between farmers, funders, and founders.",
      bio3: "Previously worked on landscape-scale regeneration projects in Southern Europe, helped launch regenerative supply chains, and advised impact funds on their agricultural portfolios. Now focused on accelerating the transition by removing the friction between those who want to regenerate and those who can help.",
      quote: "\"The transition won't happen in isolation. We need translators, connectors, and catalysts. That's where I come in.\"",
    },
    testimonials: {
      label: "Voices from the Field",
      title: "What Collaborators Say",
    },
    cta: {
      title: "Ready to Grow Tomorrow?",
      subtitle: "Whether you're a farmer seeking connection, an investor looking for impact, or an innovator with regenerative ideas—let's talk.",
      button: "Book a 30-min Call",
    },
    footer: {
      tagline: "Scaling regeneration through connection.",
      companyPage: "Company Page →",
      copyright: "Growing Tomorrow. Cultivating change.",
    },
  },
  fr: {
    header: { cta: "Nous Contacter" },
    hero: {
      tagline: "Catalyseur de Systèmes Régénératifs",
      title1: "Accélérer la",
      title2: "Régénération",
      subtitle: "Résoudre le problème de vitesse grâce à la collaboration, la communauté et l'action, à toutes les échelles.",
      cta: "Découvrir Comment",
    },
    process: {
      label: "Le Processus",
      title: "Comment le Changement Opère",
      emulate: {
        title: "Incarner",
        subtitle: "Construire le Mouvement",
        description: "Nous créons du contenu, animons des communautés et veillons à ce que la régénération soit incarnée à travers nos histoires.",
      },
      connect: {
        title: "Connecter",
        subtitle: "Créer des Ponts",
        description: "Créer des connexions pour accélérer l'impact entre différents mondes, en agissant activement comme agent de traduction pour tous les acteurs.",
      },
      do: {
        title: "Agir",
        subtitle: "Passer à l'Action",
        description: "Là où la stratégie rencontre le sol. Transformer les connexions en projets concrets, les pilotes en programmes, et les idées en impact.",
      },
      knowMore: "En Savoir Plus",
    },
    offers: {
      label: "Comment Nous Cultivons",
      title: "Trois Voies vers la Régénération",
      food: {
        title: "Cultiver l'Alimentation",
        subtitle: "Pour les Agriculteurs",
        description: "Un parcours dédié aux besoins des agriculteurs, de la formation et du support technique à l'accès au marché et aux contrats d'achat.",
      },
      connection: {
        title: "Cultiver les Liens",
        subtitle: "Pour les Projets",
        description: "Un service de mise en relation pour accélérer vos projets régénératifs en vous connectant avec les bons partenaires.",
      },
      landscape: {
        title: "Cultiver le Paysage",
        subtitle: "Pour les Régions",
        description: "Un accompagnement stratégique pour créer des projets de régénération à l'échelle du paysage qui transforment des territoires entiers.",
      },
      learnMore: "En savoir plus →",
    },
    landscape: {
      label: "Notre Écosystème",
      title: "Le Paysage Vivant",
      subtitle: "Cliquez sur n'importe quel élément pour explorer comment nos trois voies travaillent ensemble pour régénérer les territoires.",
      landscapeLabel: "Le Paysage",
      communityLabel: "La Communauté",
      farmsLabel: "Les Fermes",
    },
    pathway: {
      label: "Le Cadre",
      title: "Le Parcours de Régénération",
      subtitle: "Quatre éléments essentiels qui débloquent la transition vers l'agriculture régénérative. Chaque étape s'appuie sur la précédente.",
      inspiration: {
        title: "Inspiration",
        description: "Les agriculteurs doivent voir de leurs propres yeux les succès d'autres qui opèrent dans le même contexte. Des histoires réelles brisent le scepticisme.",
      },
      knowledge: {
        title: "Connaissance",
        description: "Accès à une formation directe ou à un agronome qualifié qui sait planifier et exécuter de manière régénérative.",
      },
      capital: {
        title: "Capital",
        description: "Financement pour les écarts de rendement potentiels et l'investissement dans la transition. Le pont financier qui permet aux agriculteurs de franchir le pas.",
      },
      market: {
        title: "Marché",
        description: "La certitude que les gens veulent vos produits. Sans accès au marché, tous les efforts sont vains.",
      },
    },
    about: {
      label: "Fondateur",
      name: "Gabriel Tual",
      bio1: "Catalyseur de systèmes régénératifs avec une décennie d'expérience reliant les mondes de l'agriculture durable, de l'investissement à impact et de l'innovation alimentaire.",
      bio2: "De la modération de sessions avec Koen van Seijen à la construction de communautés RegenAg à Barcelone, j'ai facilité plus de 200 connexions significatives entre agriculteurs, financeurs et fondateurs.",
      bio3: "Auparavant, j'ai travaillé sur des projets de régénération à l'échelle du paysage en Europe du Sud, aidé à lancer des chaînes d'approvisionnement régénératives et conseillé des fonds d'impact. Maintenant concentré sur l'accélération de la transition.",
      quote: "\"La transition ne se fera pas de manière isolée. Nous avons besoin de traducteurs, de connecteurs et de catalyseurs. C'est là que j'interviens.\"",
    },
    testimonials: {
      label: "Voix du Terrain",
      title: "Ce que Disent les Collaborateurs",
    },
    cta: {
      title: "Prêt à Cultiver Demain ?",
      subtitle: "Que vous soyez agriculteur cherchant des connexions, investisseur en quête d'impact, ou innovateur avec des idées régénératives — parlons-en.",
      button: "Réserver un Appel de 30 min",
    },
    footer: {
      tagline: "Accélérer la régénération par la connexion.",
      companyPage: "Page Entreprise →",
      copyright: "Growing Tomorrow. Cultiver le changement.",
    },
  },
  es: {
    header: { cta: "Contáctanos" },
    hero: {
      tagline: "Catalizador de Sistemas Regenerativos",
      title1: "Escalar la",
      title2: "Regeneración",
      subtitle: "Resolviendo el problema de velocidad a través de la colaboración, la comunidad y la acción, a todas las escalas.",
      cta: "Descubrir Cómo",
    },
    process: {
      label: "El Proceso",
      title: "Cómo Ocurre el Cambio",
      emulate: {
        title: "Emular",
        subtitle: "Construir el Movimiento",
        description: "Creamos contenido, animamos comunidades y nos aseguramos de que la regeneración se encarne a través de nuestras historias.",
      },
      connect: {
        title: "Conectar",
        subtitle: "Tender Puentes",
        description: "Crear conexiones para acelerar el impacto entre diferentes mundos, actuando activamente como agente de traducción para todos los actores.",
      },
      do: {
        title: "Actuar",
        subtitle: "Hacerlo Realidad",
        description: "Donde la estrategia se encuentra con el suelo. Convirtiendo conexiones en proyectos concretos, pilotos en programas e ideas en impacto.",
      },
      knowMore: "Saber Más",
    },
    offers: {
      label: "Cómo Cultivamos",
      title: "Tres Caminos hacia la Regeneración",
      food: {
        title: "Cultivar Alimentos",
        subtitle: "Para Agricultores",
        description: "Un camino dedicado a las necesidades de los agricultores, desde formación y soporte técnico hasta acceso al mercado y acuerdos de compra.",
      },
      connection: {
        title: "Cultivar Conexiones",
        subtitle: "Para Proyectos",
        description: "Un servicio de relaciones para acelerar tus proyectos regenerativos conectándote con los socios adecuados.",
      },
      landscape: {
        title: "Cultivar el Paisaje",
        subtitle: "Para Regiones",
        description: "Apoyo estratégico para crear proyectos de regeneración a escala paisajística que transforman territorios enteros.",
      },
      learnMore: "Saber más →",
    },
    landscape: {
      label: "Nuestro Ecosistema",
      title: "El Paisaje Vivo",
      subtitle: "Haz clic en cualquier elemento para explorar cómo nuestros tres caminos trabajan juntos para regenerar territorios.",
      landscapeLabel: "El Paisaje",
      communityLabel: "La Comunidad",
      farmsLabel: "Las Granjas",
    },
    pathway: {
      label: "El Marco",
      title: "El Camino de la Regeneración",
      subtitle: "Cuatro elementos esenciales que desbloquean la transición hacia la agricultura regenerativa. Cada paso se construye sobre el anterior.",
      inspiration: {
        title: "Inspiración",
        description: "Los agricultores necesitan ver con sus propios ojos los éxitos de otros que operan en el mismo contexto. Historias reales rompen el escepticismo.",
      },
      knowledge: {
        title: "Conocimiento",
        description: "Acceso a formación directa o a un agrónomo cualificado que sepa planificar y ejecutar de manera regenerativa.",
      },
      capital: {
        title: "Capital",
        description: "Financiamiento para posibles brechas de rendimiento e inversión en la transición. El puente financiero que permite a los agricultores dar el salto.",
      },
      market: {
        title: "Mercado",
        description: "Certeza de que la gente quiere tus productos. Sin acceso al mercado, todos los esfuerzos son en vano.",
      },
    },
    about: {
      label: "Fundador",
      name: "Gabriel Tual",
      bio1: "Catalizador de sistemas regenerativos con una década de experiencia conectando los mundos de la agricultura sostenible, la inversión de impacto y la innovación alimentaria.",
      bio2: "Desde moderar sesiones con Koen van Seijen hasta construir comunidades RegenAg en Barcelona, he facilitado más de 200 conexiones significativas entre agricultores, inversores y fundadores.",
      bio3: "Anteriormente trabajé en proyectos de regeneración a escala paisajística en el sur de Europa, ayudé a lanzar cadenas de suministro regenerativas y asesoré fondos de impacto. Ahora enfocado en acelerar la transición.",
      quote: "\"La transición no sucederá de forma aislada. Necesitamos traductores, conectores y catalizadores. Ahí es donde entro yo.\"",
    },
    testimonials: {
      label: "Voces del Campo",
      title: "Lo que Dicen los Colaboradores",
    },
    cta: {
      title: "¿Listo para Cultivar el Mañana?",
      subtitle: "Ya seas agricultor buscando conexiones, inversor en busca de impacto, o innovador con ideas regenerativas — hablemos.",
      button: "Reservar una Llamada de 30 min",
    },
    footer: {
      tagline: "Acelerando la regeneración a través de la conexión.",
      companyPage: "Página de Empresa →",
      copyright: "Growing Tomorrow. Cultivando el cambio.",
    },
  },
};
