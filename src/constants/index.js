import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  alt,
  finan,
  real,
  tech,
} from "../assets";

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
    id:"team",
    title:"Team"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
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
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Dish Catalogue Api",
    description:
      "Meal app - A web app that displays an array of meals from our API. Users can leave comments, share their recipes, and savor the diverse flavors from around the globe.",

    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Rest API",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://github.com/Zel-hub7/DishCatalog-API/blob/dev/meal.png?raw=true",
    source_code_link: "https://zel-hub7.github.io/DishCatalog-API/dist/",
  },
  {
    name: "African Tech Congress",
    description:
      "A comprehensive Tech congress Web application where various developers and tech people from whole africa interact and schedule their meeting.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://github.com/Zel-hub7/Capstone-project1/raw/master/Img/desktop.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "Dictionary App",
    description:
      "Discover, learn, and pronounce words effortlessly with our comprehensive dictionary app. Access detailed definitions and listen to correct pronunciations to enrich your language skills.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://github.com/Zel-hub7/Dictionary-App/blob/main/original.png?raw=true",
    source_code_link: "https://zel-hub7.github.io/Dictionary-App//",
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

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  navLinks,
  team,
};
