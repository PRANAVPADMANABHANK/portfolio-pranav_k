import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  angular,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  firebase,
  git,
  figma,
  docker,
  meta,
  mitzLogo,
  brototype,
  selfEmployed,
  shopify,
  blogApp,
  recipeBook,
  gigConnect,
  threejs,
  tcsIon
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "Angular Developer",
    icon: creator,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "SASS ",
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
    name: "Angular",
    icon: angular,
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
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  }
];

const experiences = [
  {
    title: "Product Engineer",
    company_name: "MIZTECH AI MINDS",
    icon: mitzLogo,
    iconBg: "#fff",
    date: "Oct 2023 - Present",
    points: [
      "As a valued member of OpzHive's(https://opzhive.com) core team, contributed as an Angular frontend developer for OpzHive's flagship product, driving the implementation of innovative solutions and ensuring top-tier user experiences.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Enhanced product with SEO-optimized SSR implementation.",
      "Implemented micro frontend approach for enhanced modularity and scalability."
    ],
  },
  {
    title: "MERN Stack Development Intern",
    company_name: "BROTOTYPE",
    icon: brototype,
    iconBg: "black",
    date: "Oct 2022 - Sept 2023",
    points: [
      "Gained hands-on experience in developing full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Receiving regular feedback and guidance from working professionals in the tech industry.",
      "Completing weekly tasks and projects that challenge and enhance your skills and knowledge. ",
      "Successfully completed two major projects along with several minor projects.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "SELF EMPLOYED",
    icon: selfEmployed,
    iconBg: "#fff",
    date: "Jun 2021 - Sept 2022",
    points: [
      "Developed outdoor project management solutions, enhancing efficiency in outdoor activities and resource management.",
      "Managed client projects, gaining hands-on experience.",
    ],
  },
  {
    title: "TCS iON Career Edge - Internship",
    company_name: "TATA CONSULTANCY SERVICE",
    icon: tcsIon,
    iconBg: "#fff",
    date: "JuL 2021 - Nov 2021",
    points: [
      "successfully completing TCS iON Career Edge - Young Professional a course that covers , Communication Skills │ Presentation Skills│ Soft Skills │ Career Guidance Framework │ Resume Writing │ Group Discussion Skills│ Interview Skills │ Business Etiquette │ Effective Email Writing │ Telephone Etiquette │ Accounting Fundamentals │ IT Foundational Skills │ Overview of Artificial Intelligence",
    ],
  }
];


const projects = [
  {
    name: "Recipe Book",
    description:
      "Recipe Book is an Angular Application that allows customers to browse and purchase food online. The application features a user-friendly interface. Used industrial coding standards. Implemented reusable components. Implemented Lazy loading. Application leverages SSR and SSG.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
    ],
    image: recipeBook,
    source_code_link: "https://github.com/PRANAVPADMANABHANK/courseProject-angular",
    // live_link: "https://smart-crystal-facility-management-india.com/"
  },
  {
    name: "GigConnect",
    description: "GigConnect is a online freelance platform that facilitates seamless communication between clients and skilled freelancers, enabling clients to submit work requests and provide revision feedback for an efficient and collaborative workflow",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "text-green-500",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "text-green-500",
      },
      {
        name: "express",
        color: "text-red-500",
      },
      {
        name: "jwt",
        color: "text-yellow-500",
      },
      {
        name: "socket.io",
        color: "blue-text-gradient",
      },
    ],
    image: gigConnect,
    source_code_link: "https://github.com/PRANAVPADMANABHANK/GigConnect",
    // live_link: "https://binge-chat.netlify.app"
  },
  {
    name: "Blog App",
    description:
      "A web application that helps users to publish blogs efficiently using MongoDB, Express.js, React.js, and Node.js. Allows creating, updating, and deleting tasks with real-time updates and a user-friendly interface.  Redux is implemented for efficient state management across the application",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "text-yellow-600",
      },
    ],
    image: blogApp,
    source_code_link: "https://github.com/PRANAVPADMANABHANK/MERN-Blog-App",
    // live_link: "https://watch-club.onrender.com/"
  },
];

export { services, technologies, experiences, projects };
