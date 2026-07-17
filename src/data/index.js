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
} from "lucide-react";

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
