import { alt, finan, real, tech } from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "team",
    title: "Team",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    company_name:
      "Our team seek investment opportunities for tech solutions and innovations as well as taking initiative on our own in-house projects that improve and empower tech-enabled services. Our third pillar looks to digitally integrate operating businesses that lack transparency and visibility.",
    icon: tech,
    iconBg: "#383E56",
    date: "Technology",
    points: ["Tech Start ups", "Tech Innovation", "Digital transformation"],
  },
  {
    company_name:
      "We offer financial and business advice to individuals, corporates and the public sector entities.  We carefully select the best investment products that are suitable for various risk profiles. The Group looks to continuously expand and collaborate with other corporates to form partnerships to grow our expertise and venture opportunities.",
    icon: finan,
    iconBg: "#E6DEDD",
    date: "Finance",
    points: [
      "Wealth Management",
      "Investment products",
      "Corporate partnerships",
    ],
  },
  {
    company_name:
      "Invest and consult on all real estate assets classes such as residential, commercial, or corporate as well as seeking development opportunities that are feasible and fit our requirements.",
    icon: real,
    iconBg: "#383E56",
    date: "Real Estate",
    points: [
      "Real Estate Investment",
      "Real Estate Development",
      "Real Estate Consultancy",
    ],
  },
  {
    company_name: "Secondary arears of interest:",
    icon: alt,
    iconBg: "#E6DEDD",
    date: "Alternatives",
    points: [
      "Agriculture",
      " Natural Resources",
      "Energy",
      "Tourism",
      "Food ",
      "Health and wellness",
      "Construction",
    ],
  },
];

const team = [
  {
    name: "Marcello Morais",
    loc: "Group Founder and Managing Partner",
    img: real,
    link: "https://www.linkedin.com/",
  },
  {
    name: "Gabriel Diogo",
    loc: "Tech Partner",
    img: real,
    link: "https://www.linkedin.com/",
  },
  {
    name: "Ibiyemi Shittu",
    loc: "Real Estate Partner",
    img: real,
    link: "https://www.linkedin.com/",
  },
];

const experiencesPt = [
  {
    company_name:
      "Nossa equipe busca oportunidades de investimento em soluções e inovações tecnológicas, além de tomar a iniciativa em nossos próprios projetos internos que melhoram e capacitam serviços habilitados por tecnologia. Nosso terceiro pilar busca integrar digitalmente empresas operacionais que carecem de transparência e visibilidade.",
    icon: tech,
    iconBg: "#383E56",
    date: "Tecnologia",
    points: [
      "Startups de Tecnologia",
      "Inovação Tecnológica",
      "Transformação Digital",
    ],
  },
  {
    company_name:
      "Oferecemos consultoria financeira e empresarial a indivíduos, empresas e entidades do setor público. Selecionamos cuidadosamente os melhores produtos de investimento que são adequados para vários perfis de risco. O Grupo busca expandir continuamente e colaborar com outras empresas para formar parcerias e crescer nossas oportunidades de empreendimento.",
    icon: finan,
    iconBg: "#E6DEDD",
    date: "Finanças",
    points: [
      "Gestão de Patrimônio",
      "Produtos de Investimento",
      "Parcerias Corporativas",
    ],
  },
  {
    company_name:
      "Investimos e consultamos em todas as classes de ativos imobiliários, como residencial, comercial ou corporativo, além de buscar oportunidades de desenvolvimento que sejam viáveis e atendam aos nossos requisitos.",
    icon: real,
    iconBg: "#383E56",
    date: "Imobiliário",
    points: [
      "Investimento Imobiliário",
      "Desenvolvimento Imobiliário",
      "Consultoria Imobiliária",
    ],
  },
  {
    company_name: "Áreas secundárias de interesse:",
    icon: alt,
    iconBg: "#E6DEDD",
    date: "Alternativos",
    points: [
      "Agricultura",
      "Recursos Naturais",
      "Energia",
      "Turismo",
      "Alimentos",
      "Saúde e Bem-Estar",
      "Construção",
    ],
  },
];

const teamPt = [
  {
    name: "Marcello Morais",
    loc: "Fundador do Grupo e Sócio Gerente",
    img: real,
    link: "https://www.linkedin.com/",
  },
  {
    name: "Gabriel Diogo",
    loc: "Parceiro de Tecnologia",
    img: real,
    link: "https://www.linkedin.com/",
  },
  {
    name: "Ibiyemi Shittu",
    loc: "Parceiro Imobiliário",
    img: real,
    link: "https://www.linkedin.com/",
  },
];


export { experiences, navLinks, team, experiencesPt,teamPt };
