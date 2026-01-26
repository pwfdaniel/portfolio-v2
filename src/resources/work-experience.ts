export interface BeforeAfterEntry {
  before: string;
  after: string;
  description: string;
}
export interface CareerHistoryEntry {
  year: string;
  slug: string;
  company: string;
  title: string;
  description: string;
  tools: string[];
  url?: string;
  color: string;
  mainImg: string;
  images?: string[];
  beforeAfter?: BeforeAfterEntry[];
  marketingImgs?: string[];
}

export const careerHistory: CareerHistoryEntry[] = [
  {
    year: "Dec 2023 - Present",
    slug: "proworkflow",
    company: "Proworkflow",
    title: "UX Designer and Frontend Developer",
    description:
      "I joined Proworkflow to lead the design and actively contribute to the frontend development of their new Project Management, Time Tracker, Quote, and Invoice web and mobile apps. My role involved creating mockups from scratch to validate designs with decision-makers, as well as working hands-on with the frontend team to implement the designs, ensuring a pixel-perfect implementation.",
    tools: [
      "react",
      "typescript",
      "graphql",
      "material-ui",
      "tailwind",
      "playwright",
      "figma",
    ],
    url: "https://proworkflow.com/",
    color: "#FF5733",
    mainImg: "/images/projects/proworkflow-main.png",
    images: [
      "/images/projects/proworkflow-1.png",
      "/images/projects/proworkflow-2.png",
      "/images/projects/proworkflow-3.png",
    ],
    beforeAfter: [
      {
        before: "/images/projects/before-after/proworkflow/PWF_B_01.png",
        after: "/images/projects/before-after/proworkflow/PWF_A_01.png",
        description: "Projects List Page",
      },
      {
        before: "/images/projects/before-after/proworkflow/PWF_B_02.png",
        after: "/images/projects/before-after/proworkflow/PWF_A_02.png",
        description: "Project Kanban Page",
      },
      {
        before: "/images/projects/before-after/proworkflow/PWF_B_03.png",
        after: "/images/projects/before-after/proworkflow/PWF_A_03.png",
        description: "Project Details Page",
      },
      {
        before: "/images/projects/before-after/proworkflow/PWF_B_04.png",
        after: "/images/projects/before-after/proworkflow/PWF_A_04.png",
        description: "Gantt Chart Module",
      },
    ],
    marketingImgs: [
      "/images/projects/mkt/proworkflow/File8.png",
      "/images/projects/mkt/proworkflow/File9.png",
      "/images/projects/mkt/proworkflow/File10.png",
      "/images/projects/mkt/proworkflow/File11.png",
      "/images/projects/mkt/proworkflow/File12.png",
      "/images/projects/mkt/proworkflow/File13.png",
      "/images/projects/mkt/proworkflow/File14.png",
      "/images/projects/mkt/proworkflow/File15.png",
      "/images/projects/mkt/proworkflow/File16.png",
      "/images/projects/mkt/proworkflow/File17.png",
      "/images/projects/mkt/proworkflow/File18.png",
      "/images/projects/mkt/proworkflow/File19.png",
      "/images/projects/mkt/proworkflow/File20.png",
      "/images/projects/mkt/proworkflow/File21.png",
      "/images/projects/mkt/proworkflow/File22.png",
      "/images/projects/mkt/proworkflow/File23.png",
      "/images/projects/mkt/proworkflow/File23-2.png",
      "/images/projects/mkt/proworkflow/File24.jpg",
      "/images/projects/mkt/proworkflow/File25.jpg",
      "/images/projects/mkt/proworkflow/File26.jpg",
      "/images/projects/mkt/proworkflow/File27.jpg",
    ],
  },
  {
    slug: "urban-intelligence",
    year: "Mar 2023 - Dec 2023",
    company: "Urban Intelligence",
    title: "UI/UX Designer and Fullstack Developer",
    description:
      "I acted as the bridge between design and development in revamping web applications. This included integrating interactive maps, custom layers, and multi-dashboards. I ensured brand compliance, designed wireframes, and crafted prototypes with Figma. Simultaneously, I built a component library and web apps with a strong emphasis on design precision. On the backend, I utilized Node and Express for a RESTful API, alongside AWS services and Postgres databases.",
    tools: [
      "react",
      "typescript",
      "material-ui",
      "emotion-css",
      "storybook",
      "jest",
      "node",
      "express",
      "postgres",
      "figma",
    ],
    url: "https://www.urbanintelligence.co.nz/",
    color: "#336791",
    mainImg: "/images/projects/ui-main.png",
    images: [
      "/images/projects/ui-1.png",
      "/images/projects/ui-2.png",
      "/images/projects/ui-3.png",
    ],
    beforeAfter: [
      {
        before: "/images/projects/before-after/ui/01_B.png",
        after: "/images/projects/before-after/ui/01_A.png",
        description: "Hazard Details",
      },
      {
        before: "/images/projects/before-after/ui/02_B.png",
        after: "/images/projects/before-after/ui/02_A.png",
        description: "Property Accessibility",
      },
      {
        before: "/images/projects/before-after/ui/03_B.png",
        after: "/images/projects/before-after/ui/03_A.png",
        description: "Add Hazard Layer",
      },
      {
        before: "/images/projects/before-after/ui/04_B.png",
        after: "/images/projects/before-after/ui/04_A.png",
        description: "Add Asset Layer",
      },
    ],
    marketingImgs: [
      "/images/projects/mkt/ui/01.png",
      "/images/projects/mkt/ui/02.png",
      "/images/projects/mkt/ui/03.png",
      "/images/projects/mkt/ui/04.png",
      "/images/projects/mkt/ui/05.png",
      "/images/projects/mkt/ui/06.png",
    ],
  },
  {
    slug: "phocas",
    year: "Oct 2021 - Mar 2023",
    company: "Phocas Software",
    title: "Software Developer",
    description:
      "In my role as a front-end developer, I wholeheartedly adopted the Agile methodology to translate designs into dynamic micro front-end applications catering to over 30,000 users. These applications aimed to enhance business insights through interactive dashboards and charts. My work involved close collaboration with development managers, product owners, designers, and fellow developers at every stage of the development process.",
    tools: [
      "react",
      "typescript",
      "redux",
      "material-ui",
      "emotion-css",
      "storybook",
      "jest",
    ],
    url: "https://www.phocassoftware.com/",
    color: "#07b8d6",
    mainImg: "/images/projects/phocas-main.png",
    images: [
      "/images/projects/phocas-1.png",
      "/images/projects/phocas-2.png",
      "/images/projects/phocas-3.png",
    ],
  },
  {
    slug: "tripod-digital",
    year: "Mar 2021 - Sep 2021",
    company: "Tripod Digital",
    title: "Frontend Developer / UI/UX Designer",
    description:
      "I served as both the designer and developer for an AR experience creator, where I defined the design system and user flow to enhance the product's usability. I created interactive prototypes to showcase the product's features and functionalities, facilitating the smooth creation of augmented realities through a front-end application powered by Firebase cloud functions.",
    tools: ["react", "typescript", "sass", "figma"],
    url: "https://tripod-digital.co.nz/",
    color: "#15aca3",
    mainImg: "/images/projects/mixr.png",
    images: [
      // "/images/projects/tripod-digital-1.png",
      // "/images/projects/tripod-digital-2.png",
      // "/images/projects/tripod-digital-3.png",
    ],
  },
  {
    slug: "motorly",
    year: "Mar 2021 - Sep 2021",
    company: "Motorly",
    title: "Frontend Developer / UI/UX Designer",
    description:
      "My role was instrumental in shaping the design system and user flow using Figma and implementing the front-end development, with a primary focus on creating a seamless and user-friendly interface for a vehicle search and comparison tool.",
    tools: ["nextjs", "react", "css-modules", "firebase", "figma"],
    url: "https://www.motorly.co.nz/",
    color: "#FF0042",
    mainImg: "/images/projects/motorly.png",
    images: [
      // "/images/projects/motorly-1.png",
      // "/images/projects/motorly-2.png",
      // "/images/projects/motorly-3.png",
    ],
  },
];

// Backwards compatibility export (simplified list for existing components)
export const workExperience = careerHistory.map((ch) => ({
  slug: ch.slug,
  title: ch.company,
  slogan: ch.title,
  img: ch.mainImg,
  color: ch.color,
}));
