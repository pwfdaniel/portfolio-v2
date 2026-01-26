// Transformed career history data adapted from legacy portfolio format
// Only the fields needed for the About page work.experiences section are mapped.
// Images here are not yet added because original data lacks sizing; adjust width/height if you later want to surface them in the UI.

export interface LegacyCareerEntry {
  year: string; // timeframe
  slug: string;
  company: string;
  title: string; // role
  description: string; // long description
  tools: string[];
  url?: string;
  color?: string;
  mainImg?: string;
  images?: string[];
  beforeAfter?: Array<{
    before: string;
    after: string;
    description: string;
  }>;
  marketingImgs?: string[];
}

// Original array pasted manually from user input (trimmed comments for clarity)
export const careerHistory: LegacyCareerEntry[] = [
  {
    year: "Dec 2023 - Present",
    slug: "proworkflow",
    company: "Proworkflow",
    title: "UX Designer and Frontend Developer",
    description:
      "I joined the team to help lead the design and frontend efforts for their next generation of project management tools. It’s been a fun challenge—I get to jump between Figma mockups to validate ideas with the team, and then hop into the codebase to make sure those designs come to life exactly as intended.",
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
    mainImg: "/assets/images/proworkflow-main.png",
    images: [
      "/assets/images/proworkflow-1.png",
      "/assets/images/proworkflow-2.png",
      "/assets/images/proworkflow-3.png",
    ],
    beforeAfter: [
      {
        before: "/assets/images/before-after/proworkflow/PWF_B_01.png",
        after: "/assets/images/before-after/proworkflow/PWF_A_01.png",
        description: "Projects List Page",
      },
      {
        before: "/assets/images/before-after/proworkflow/PWF_B_02.png",
        after: "/assets/images/before-after/proworkflow/PWF_A_02.png",
        description: "Project Kanban Page",
      },
      {
        before: "/assets/images/before-after/proworkflow/PWF_B_03.png",
        after: "/assets/images/before-after/proworkflow/PWF_A_03.png",
        description: "Project Details Page",
      },
      {
        before: "/assets/images/before-after/proworkflow/PWF_B_04.png",
        after: "/assets/images/before-after/proworkflow/PWF_A_04.png",
        description: "Gantt Chart Module",
      },
    ],
    marketingImgs: [
      "/assets/images/mkt/proworkflow/File8.png",
      "/assets/images/mkt/proworkflow/File9.png",
      "/assets/images/mkt/proworkflow/File10.png",
      "/assets/images/mkt/proworkflow/File11.png",
      "/assets/images/mkt/proworkflow/File12.png",
      "/assets/images/mkt/proworkflow/File13.png",
      "/assets/images/mkt/proworkflow/File14.png",
      "/assets/images/mkt/proworkflow/File15.png",
      "/assets/images/mkt/proworkflow/File16.png",
      "/assets/images/mkt/proworkflow/File17.png",
      "/assets/images/mkt/proworkflow/File18.png",
      "/assets/images/mkt/proworkflow/File19.png",
      "/assets/images/mkt/proworkflow/File20.png",
      "/assets/images/mkt/proworkflow/File21.png",
      "/assets/images/mkt/proworkflow/File22.png",
      "/assets/images/mkt/proworkflow/File23.png",
      "/assets/images/mkt/proworkflow/File23-2.png",
      "/assets/images/mkt/proworkflow/File24.jpg",
      "/assets/images/mkt/proworkflow/File25.jpg",
      "/assets/images/mkt/proworkflow/File26.jpg",
      "/assets/images/mkt/proworkflow/File27.jpg",
    ],
  },
  {
    slug: "urban-intelligence",
    year: "Mar 2023 - Dec 2023",
    company: "Urban Intelligence",
    title: "UI/UX Designer and Fullstack Developer",
    description:
      "I acted as the 'translator' between the design and dev worlds here. I spent my time revamping web apps with interactive maps and complex dashboards, while building out a component library to keep things consistent. I even got my hands dirty on the backend with Node and Postgres to make sure the data flow was as smooth as the UI.",
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
    mainImg: "/assets/images/ui-main.png",
    images: [
      "/assets/images/ui-1.png",
      "/assets/images/ui-2.png",
      "/assets/images/ui-3.png",
    ],
    beforeAfter: [
      {
        before: "/assets/images/before-after/ui/01_B.png",
        after: "/assets/images/before-after/ui/01_A.png",
        description: "Hazard Details",
      },
      {
        before: "/assets/images/before-after/ui/02_B.png",
        after: "/assets/images/before-after/ui/02_A.png",
        description: "Property Accessibility",
      },
      {
        before: "/assets/images/before-after/ui/03_B.png",
        after: "/assets/images/before-after/ui/03_A.png",
        description: "Add Hazard Layer",
      },
      {
        before: "/assets/images/before-after/ui/04_B.png",
        after: "/assets/images/before-after/ui/04_A.png",
        description: "Add Asset Layer",
      },
    ],
    marketingImgs: [
      "/assets/images/mkt/ui/01.png",
      "/assets/images/mkt/ui/02.png",
      "/assets/images/mkt/ui/03.png",
      "/assets/images/mkt/ui/04.png",
      "/assets/images/mkt/ui/05.png",
      "/assets/images/mkt/ui/06.png",
    ],
  },
  {
    slug: "phocas",
    year: "Oct 2021 - Mar 2023",
    company: "Phocas Software",
    title: "Software Developer",
    description:
      "Working in a fast-paced Agile environment, I helped build micro-frontend apps for over 30,000 users. My focus was on turning complex data into easy-to-read charts and dashboards. It was a great lesson in how to collaborate closely with product owners and other devs to keep a massive platform running smoothly.",
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
    mainImg: "/assets/images/phocas-main.png",
    images: [
      "/assets/images/phocas-1.png",
      "/assets/images/phocas-2.png",
      "/assets/images/phocas-3.png",
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
    mainImg: "/assets/images/tripod-digital-main.png",
    images: [
      "/assets/images/tripod-digital-1.png",
      "/assets/images/tripod-digital-2.png",
      "/assets/images/tripod-digital-3.png",
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
    mainImg: "/assets/images/motorly-main.png",
    images: [
      "/assets/images/motorly-1.png",
      "/assets/images/motorly-2.png",
      "/assets/images/motorly-3.png",
    ],
  },
  {
    slug: "joinery-scene",
    year: "Jan 2016 - Oct 2021",
    company: "Joinery Scene",
    title: "Product Designer",
    description:
      "This is where my journey into coding actually began. While designing physical furniture, I realized our process between the showroom and the factory had a few speed bumps. To fix it, I wrote my first 'real' algorithm—a tool that pulled order details directly from Excel and translated them into our 3D modeling software. It allowed clients to add much more detail to their orders and created a much smoother handoff to the factory. This app became a key part of how the company scaled its production, and for me, it was the 'lightbulb moment' that sparked my transition into the world of web development.",
    tools: ["microvellum", "autocad", "excel", "photoshop", "javascript"],
    url: "https://www.joineryscene.co.nz/",
    color: "#ae9773",
    mainImg: "/assets/images/joinery-scene-main.png",
    images: [
      "/assets/images/joinery-scene-1.png",
      "/assets/images/joinery-scene-2.png",
      "/assets/images/joinery-scene-3.png",
    ],
  },
  {
    slug: "promob",
    year: "Aug 2012 - Dec 2015",
    company: "Promob",
    title: "Project Analyst",
    description:
      "I started as a designer and eventually found myself leading a team of eight. We built interior design software for over 200 clients. It was my first real dive into managing deadlines, supporting a team through technical hurdles, and bridging the gap between sales and production.",
    tools: ["photoshop", "autocad", "excel", "project"],
    url: "https://promob.com/",
    color: "#6038e8",
    mainImg: "/assets/images/promob-main.png",
    images: [
      "/assets/images/promob-1.png",
      "/assets/images/promob-2.png",
      "/assets/images/promob-3.png",
    ],
  },
  {
    slug: "intelligent-table",
    year: "Nov 2009 - May 2012",
    company: "Intelligent Table",
    title: "Product Designer",
    description:
      "I began as an intern and later led the product design team, serving architects and designers with tailored solutions for custom design furniture. I created new products, optimized existing ones with Adobe Inventor, and facilitated collaboration between the manufacturing staff and design team for quality control.",
    tools: ["photoshop", "autocad", "excel"],
    url: "https://www.intable.com.br/",
    color: "#f58634",
    mainImg: "/assets/images/promob-main.png",
    images: [
      "/assets/images/ui-1.png",
      "/assets/images/ui-2.png",
      "/assets/images/ui-3.png",
    ],
  },
  {
    slug: "aecom",
    year: "Nov 2008 - Dec 2009",
    company: "AECOM",
    title: "Drafter",
    description:
      "Created and modified technical drawings using AutoCAD, adhering to engineering standards. Collaborated with engineers and geologists for visual representations.",
    tools: ["photoshop", "autocad"],
    url: "https://aecom.com/",
    color: "#000000",
    mainImg: "/assets/images/aecom-main.png",
    images: [
      "/assets/images/aecom-1.png",
      "/assets/images/aecom-2.png",
      "/assets/images/aecom-3.png",
    ],
  },
];

// Helper transform to match About.work.experiences structure
export const mappedCareerHistory = careerHistory.map((entry) => ({
  company: entry.company,
  timeframe: entry.year,
  role: entry.title,
  achievements: [entry.description], // Single long description as one achievement; can be split later
  tools: entry.tools,
  images: [], // Intentionally left empty; adapt if you want to surface images (need width/height ratios)
}));
