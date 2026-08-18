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
  Code2,
  BriefcaseBusiness,
  Rocket,
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
    {
      label: "X",
      href: "https://x.com/agrahari_jatin_",
    },
    // {
    //   label: "Upwork",
    //   href: "https://www.upwork.com/freelancers/~01f725fb64f435cdd9",
    // },
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
      href: "https://linkedin.com/in/jatinagrahari/",
      text: "Let's connect professionally",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/jatinagrahari",
      href: "https://github.com/jatinagrahari",
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
    role: "Web Developer",
    company: "Punyoday Trust",
    type: "Organization",
    period: "July 2023 — Jan 2026",
    bullets: [
      "Independently owned end-to-end maintenance and troubleshooting of a production React website for 2.5 years.",
      "Built form-based data collection workflows used across 15+ events and organizational activities.",
      "Shipped 20+ feature updates and content changes directly from organizational requirements.",
      "Integrated EmailJS to automate email delivery on form submissions, including auto-reply confirmations for users.",
    ],
    summary:
      "Maintained and continuously improved a production React website, handling feature development, troubleshooting, form-based workflows, API integrations, and content updates directly from organizational requirements.",
    stack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Email JS",
      "REST APIs",
      "Git",
      "GitHub",
      "Vite",
    ],
  },
  {
    role: "Full Stack Engineer Intern",
    company: "Neuron.ai",
    type: "Company",
    period: "Jan 2022 — March 2023",
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

export const ExperienceCards = [
  {
    icon: Code2,
    title: "Web Development Journey",
    description:
      "My journey into web development started with HTML and CSS and gradually evolved into building modern React applications. Along the way, I explored JavaScript, state management, API integration, backend fundamentals, and databases. Every project introduced new challenges and strengthened both my technical skills and problem-solving approach.",
    stack: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"],
  },
  {
    icon: BriefcaseBusiness,
    title: "Internship Experience",
    description:
      "During my internship at Neuron.ai, I contributed to ResumeHub Builder, a full-stack web application for creating and managing professional resumes. I developed React components, implemented backend logic with Node.js, integrated REST APIs, worked with Firebase, and collaborated with the team to deliver production-ready features.",
    stack: ["React", "Node.js", "REST APIs", "Firebase", "Git"],
  },
  {
    icon: Rocket,
    title: "Independent Projects",
    description:
      "Outside my internship, I continue building independent projects to apply new concepts and improve my development workflow. These projects have helped me strengthen my understanding of frontend architecture, responsive design, API integration, and full-stack application development while writing cleaner, more maintainable code.",
    stack: ["React", "Tailwind CSS", "MongoDB", "Express.js", "GitHub"],
  },
];
