// COMPONENT: ConfigConstants
import {
  Atom,
  Workflow,
  Palette,
  PlugZap,
  Zap,
  ShieldCheck,
  Database,
  Wrench,
  Mail,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import {
  htmlLogo,
  cssLogo,
  jsLogo,
  reactLogo,
  gitLogo,
  firebaseLogo,
  framerLogo,
  mongodbLogo,
  nodejsLogo,
  reduxLogo,
} from "../assets/index";

export const siteConfig = {
  owner: "Jatin Agrahari",
  alias: "JJ",
  title: "Jatin | FrontEnd Developer",
  footerDescription:
    "Transforming ideas into responsive, performant, and production-ready React applications.",
  heroHeading: "Building Fast, Modern & Interactive Web Experiences.",
  heroDescription:
    "React developer focused on building responsive, accessible, and production-ready web applications. I turn ideas into clean interfaces with scalable architecture, smooth animations, and maintainable code.",
  email: "hello@jatinagrahari.com",
  ctaLabel: "Let's Talk",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/jatinagrahari",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jatinagrahari/",
    },
    // {
    //   label: "X",
    //   href: "https://www.upwork.com/freelancers/~01f725fb64f435cdd9",
    // },
    {
      label: "Upwork",
      href: "https://www.upwork.com/freelancers/~01f725fb64f435cdd9",
    },
  ],
};

export const navLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Experience",
    path: "/experience",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

// export const EMAIL_CONFIG = {
//   serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "",
//   templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "",
//   publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "",
// };

export const footerStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "React Router",
  "Tailwind",
  "Motion",
  "Git",
  "Vite",
  "UI/UX",
  "Redux",
  "Node.js",
];

export const expertise = [
  {
    title: "React Ecosystem",
    icon: Atom,
    description:
      "Building scalable React applications with reusable components, hooks, routing, and modern development patterns.",
    tags: ["React.js", "Hooks", "React Router", "Component Architecture"],
  },

  {
    title: "State Management",
    icon: Workflow,
    description:
      "Managing complex application state using Context API, Redux Toolkit, Zustand, and efficient data flow patterns.",
    tags: ["Redux Toolkit", "Context API", "Redux", "Zustand"],
  },

  {
    title: "Modern UI",
    icon: Palette,
    description:
      "Creating responsive, accessible interfaces with Tailwind CSS, animations, clean layouts, and reusable design systems.",
    tags: ["Tailwind CSS", "Framer Motion", "Responsive", "Accessibility"],
  },

  {
    title: "API Integration",
    icon: PlugZap,
    description:
      "Connecting frontend applications with REST APIs, authentication, Firebase, Appwrite, and third-party services.",
    tags: ["REST API", "Firebase", "Appwrite", "Axios"],
  },

  {
    title: "Performance",
    icon: Zap,
    description:
      "Optimizing web applications using lazy loading, code splitting, memoization, image optimization, and efficient rendering.",
    tags: ["Lazy Loading", "Code Splitting", "Memoization", "Optimization"],
  },

  {
    title: "Testing",
    icon: ShieldCheck,
    description:
      "Writing reliable frontend code with component testing, debugging, error handling, and quality assurance practices.",
    tags: ["Vitest", "React Testing Library", "Debugging", "Error Handling"],
  },

  {
    title: "Build Tools",
    icon: Wrench,
    description:
      "Using modern development tooling for faster builds, linting, formatting, version control, and deployment workflows.",
    tags: ["Vite", "ESLint", "Prettier", "Git"],
  },

  {
    title: "Backend Services",
    icon: Database,
    description:
      "Integrating authentication, cloud databases, storage, and backend services to build complete web applications.",
    tags: ["Firebase", "Appwrite", "Authentication", "Firestore"],
  },
];

export const Tech = [
  { name: "html", path: htmlLogo },
  { name: "css", path: cssLogo },
  { name: "js", path: jsLogo },
  { name: "react", path: reactLogo },
  { name: "git", path: gitLogo },
  { name: "firebase", path: firebaseLogo },
  { name: "framer", path: framerLogo },
  { name: "nodejs", path: nodejsLogo },
  { name: "redux", path: reduxLogo },
  { name: "mongodb", path: mongodbLogo },
];

export const contactInfo = {
  title: "Get In Touch",
  description:
    "I'm always open to interesting ideas, exciting projects, and meeting new people in tech.",
  descriptionTags: [
    "✓ Work opportunities",
    "✓ Collaboration ideas",
    "✓ General questions",
  ],
  socialLinks: [
    {
      icon: Mail,
      label: "Email",
      value: "hello@jatinagrahari.com",
      href: "mailto:hello@jatinagrahari.com",
      text: "Send me an email anytime",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/jatinagrahari/",
      href: "linkedin.com/in/jatinagrahari/",
      text: "Let's connect professionally",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/jatinagrahari",
      href: "github.com/jatinagrahari",
      text: "Check out my repositories",
    },
  ],
};

export const Quotes = [
  {
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    quote: "Make it work. Make it right. Make it fast.",
    author: "Kent Beck",
  },
  {
    quote: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
  },
  {
    quote: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman",
  },
  {
    quote: "Before software can be reusable, it first has to be usable.",
    author: "Ralph Johnson",
  },
  {
    quote: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs",
  },
  {
    quote:
      "Walking on water and developing software from a specification are easy if both are frozen.",
    author: "Edward V. Berard",
  },
  {
    quote:
      "The most important property of a program is whether it accomplishes the intention of its user.",
    author: "C. A. R. Hoare",
  },
];

export const ExperienceData = [
  {
    role: "Independent Developer",
    company: "Personal Projects & Self-Learning",
    type: "self",
    period: "2024 — Present",
    bullets: [
      "Designed and developed responsive web applications using React and modern JavaScript.",
      "Built reusable UI components with a focus on clean architecture and maintainable code.",
      "Integrated REST APIs and implemented dynamic data-driven user interfaces.",
      "Created full-stack applications while continuously exploring backend development with Node.js and MongoDB.",
    ],
    summary:
      "Building modern web applications through personal projects and continuous learning. Focused on creating responsive user interfaces, reusable component architectures, API integrations, and full-stack development while improving software engineering practices through real-world implementations.",
    stack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Git",
      "GitHub",
      "Vite",
    ],
  },
  {
    role: "Full Stack Engineer Intern",
    company: "Neuron.ai",
    type: "company",
    period: "Dec 2022 — Feb 2023",
    bullets: [
      "Built frontend components using React.js with dynamic data handling.",
      "Developed backend logic with Node.js and integrated REST APIs.",
      "Worked with database operations including data creation, retrieval, and validation.",
      "Implemented secure data handling and assisted in deployment and maintenance.",
    ],
    summary:
      "Contributed to the development of ResumeHub Builder — a full-stack web application for creating, managing, and organizing professional resumes. Built frontend components in React, developed backend logic with Node.js, integrated REST APIs, and worked with database operations including data creation, retrieval, and validation. Implemented secure data handling and assisted in deployment and maintenance.",
    stack: [
      "React.js",
      "Node.js",
      "REST APIs",
      "Firebase",
      "Database Management",
      "Git",
    ],
  },
];
