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
      "We offer financial and business advice to individuals, corporates and the public sector entities.  We carefully select the best investment products that are suitable for various risk profiles. The Group looks to continuously expand and collaborate other corporates to form partnerships to grow our expertise and venture opportunities.",
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
      "Real Estate Developments",
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

export { experiences, navLinks, team };
