import {
  ampss2,
  ampss3,
  ampss4,
  eccss1,
  eccss2,
  eccss3,
  eccss4,
  eccss5,
  ttsss1,
  ttsss2,
  ttsss3,
  ttsss4,
  ttsss5,
  tfesss1,
  tfesss2,
  tfesss3,
  tfesss4,
  tfesss5,
  tfesss6,
  tfesss7,
  vkpgss1,
  vkpgss2,
  vkpgss3,
  vkpgss4,
} from "../assets/projectsImages";

export const ProjectCards = [
  {
    id: "astra",
    featuredProject: true,
    projectStatus: "Live Demo",
    projectCategory: "Music Player",
    projectTitle: "Astra - Music Streaming Platform",
    projectDescription:
      "Built a responsive music streaming application featuring playlist management, intuitive navigation, seamless playback controls, and reusable React components. Designed to deliver a clean user experience while maintaining scalable architecture",
    projectTags: ["React", "Tailwind CSS", "JavaScript", "Vite"],
    projectPrimaryButton: "View Live",
    projectPrimaryLink: "https://astramusicplay.netlify.app/",
    projectSecondaryButton: "View Case Study",
    projectSecondaryLink: "/projects/case-study/astra",
    projectThumbnail: ampss2,
    caseStudySectionHeroBadge: "APPLICATION WALKTHROUGH",
    caseStudySectionHeroTitle: "Inside Astra Music",
    caseStudySectionHeroDescription:
      "Explore the core interfaces that power the music streaming experience, from album discovery and playlist management to seamless audio playback.",

    caseStudySection: [
      {
        title: "Music Discovery & Browse Interface",
        description:
          "Created a modern browsing experience where users can explore albums through responsive music cards, artwork previews, artist information, and intuitive navigation inspired by popular streaming platforms.",
        bullets: [
          "Responsive album card grid",
          "Hover interactions for music cards",
          "Integrated search interface",
          "Clean navigation and sidebar layout",
        ],
        image: ampss2,
        reverse: false,
      },
      {
        title: "Playlist Management Dashboard",
        description:
          "Built a dedicated playlist interface displaying saved songs, album details, playback status, and track information in an organized table. The layout focuses on readability while providing quick access to favorite music.",
        bullets: [
          "Structured playlist table",
          "Active track highlighting",
          "Album and duration information",
          "Simple playback controls",
        ],
        image: ampss3,
        reverse: true,
      },
      {
        title: "Persistent Audio Player Interface",
        description:
          "Implemented a fixed bottom music player that remains accessible across the application, displaying currently playing tracks alongside playback controls and a responsive progress bar for a familiar streaming experience.",
        bullets: [
          "Persistent bottom player",
          "Playback progress indicator",
          "Current track information",
          "Responsive control layout",
        ],
        image: ampss4,
        reverse: false,
      },
    ],
    projectImages: [
      {
        id: 2,
        source: ampss2,
      },
      {
        id: 3,
        source: ampss3,
      },
      {
        id: 4,
        source: ampss4,
      },
    ],
  },

  {
    id: "thefadestore",
    projectStatus: "Live Demo",
    projectCategory: "E-Commerce store",
    featuredProject: true,
    projectTitle: "Modern Fashion E-Commerce Experience",
    projectDescription:
      "Developed a responsive fashion e-commerce platform with dynamic product browsing, category filtering, shopping cart management, and client-side routing. Focused on reusable components, smooth shopping interactions.",
    projectTags: [
      "React",
      "Tailwind CSS",
      "Zustand",
      "React Router",
      "FakeStore API",
    ],
    projectPrimaryButton: "View Live",
    projectPrimaryLink: "https://tfadestore.netlify.app/",
    projectSecondaryButton: "View Case Study",
    projectSecondaryLink: "/projects/case-study/thefadestore",
    projectThumbnail: tfesss1,
    caseStudySectionHeroBadge: "SHOPPING EXPERIENCE",
    caseStudySectionHeroTitle: "Inside The Fade Store",
    caseStudySectionHeroDescription:
      "Discover the complete shopping journey, including product browsing, filtering, cart management, and a responsive modern storefront.",
    caseStudySection: [
      {
        title: "Modern Landing Experience",
        description:
          "Designed a clean storefront landing page that immediately highlights the brand through bold typography, minimalist navigation, and a prominent hero banner. The layout focuses on guiding visitors toward exploring the product catalog with a distraction-free shopping experience.",
        bullets: [
          "Minimalist hero section",
          "Responsive navigation bar",
          "Clear call-to-action buttons",
          "Premium brand-focused layout",
        ],
        image: tfesss1,
        reverse: false,
      },
      {
        title: "Category-Based Product Discovery",
        description:
          "Implemented an intuitive category browsing interface that allows users to quickly navigate between different product collections. Large visual cards improve discoverability while keeping the shopping experience organized and easy to explore.",
        bullets: [
          "Visual category cards",
          "Collection-based navigation",
          "Responsive category grid",
          "Simplified product discovery",
        ],
        image: tfesss2,
        reverse: true,
      },
      {
        title: "Dynamic Product Catalog",
        description:
          "Built product listing pages powered by external API data, displaying products with images, pricing, ratings, and category information. The catalog provides a scalable structure capable of handling multiple collections while maintaining consistent card layouts.",
        bullets: [
          "API-powered product listings",
          "Product ratings and pricing",
          "Responsive product grid",
          "Category-specific collections",
        ],
        image: tfesss3,
        reverse: false,
      },
      {
        title: "Detailed Product Showcase",
        description:
          "Created dedicated product pages where users can view complete product information before making a purchase. Each page combines high-quality imagery, pricing, descriptions, customer ratings, and purchase actions into a focused shopping interface.",
        bullets: [
          "Individual product pages",
          "Detailed product information",
          "Add-to-cart functionality",
          "Purchase confirmation feedback",
        ],
        image: tfesss4,
        reverse: true,
      },
      {
        title: "Shopping Cart & Checkout",
        description:
          "Developed a shopping cart system that enables users to review selected items, adjust quantities, calculate totals, and prepare orders for checkout. The clean summary panel provides complete pricing transparency throughout the purchase process.",
        bullets: [
          "Cart management system",
          "Quantity adjustment controls",
          "Automatic order calculations",
          "Checkout summary interface",
        ],
        image: tfesss5,
        reverse: false,
      },
    ],
    projectImages: [
      {
        id: 1,
        source: tfesss1,
      },
      {
        id: 2,
        source: tfesss2,
      },
      {
        id: 3,
        source: tfesss3,
      },
      {
        id: 4,
        source: tfesss4,
      },
      {
        id: 5,
        source: tfesss5,
      },
      {
        id: 6,
        source: tfesss6,
      },
      {
        id: 7,
        source: tfesss7,
      },
    ],
  },

  {
    id: "taskflow",
    projectStatus: "Live Demo",
    projectCategory: "Task Management",
    projectTitle: "Task Management & Productivity Tracker",
    featuredProject: true,
    projectDescription:
      "Built a responsive task management application enabling users to create, organize, update, and delete daily tasks with ease. Focused on intuitive interactions, efficient state management, and a clean interface that improves productivity across devices.",
    projectTags: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Local Storage",
      "Redux Toolkit",
    ],
    projectPrimaryButton: "View Live",
    projectPrimaryLink: "https://taskflowtodos.netlify.app/",
    projectSecondaryButton: "View Case Study",
    projectSecondaryLink: "/projects/case-study/taskflow",
    projectThumbnail: ttsss1,
    caseStudySectionHeroBadge: "PRODUCTIVITY WORKFLOW",
    caseStudySectionHeroTitle: "Inside TaskFlow",
    caseStudySectionHeroDescription:
      "A walkthrough of the task management system, showcasing organization tools, progress tracking, and productivity-focused interactions.",
    caseStudySection: [
      {
        title: "Task Management Dashboard",
        description:
          "Designed a centralized dashboard that gives users a clear overview of their productivity. The interface combines task statistics, completion progress, category filters, and quick actions into a clean workspace that makes task management simple and efficient.",
        bullets: [
          "Productivity overview dashboard",
          "Task statistics and progress tracking",
          "Category-based navigation",
          "Dark & light theme support",
        ],
        image: ttsss1,
        reverse: false,
      },
      {
        title: "Task Creation Workflow",
        description:
          "Built an intuitive task creation modal that allows users to organize their work with titles, descriptions, categories, priorities, and optional due dates. The streamlined form minimizes friction while capturing all essential task information.",
        bullets: [
          "Quick task creation modal",
          "Priority and category selection",
          "Optional due date support",
          "Simple and focused form design",
        ],
        image: ttsss2,
        reverse: true,
      },
      {
        title: "Organized Task List",
        description:
          "Implemented a structured task list where users can easily review active work, organize tasks with categories and priorities, and sort items for better productivity. The interface keeps important information visible without overwhelming the user.",
        bullets: [
          "Clean task card layout",
          "Priority and category badges",
          "Task sorting options",
          "Focused productivity workspace",
        ],
        image: ttsss3,
        reverse: false,
      },
      {
        title: "Progress Tracking & Completion",
        description:
          "Integrated real-time task completion tracking that automatically updates dashboard statistics and visual progress indicators. Completed tasks are clearly distinguished, helping users monitor their productivity at a glance.",
        bullets: [
          "Automatic completion tracking",
          "Live dashboard statistics",
          "Visual progress indicator",
          "Completed task management",
        ],
        image: ttsss4,
        reverse: true,
      },
      {
        title: "Instant Task Feedback",
        description:
          "Enhanced the user experience with responsive feedback through completion notifications and smooth interface updates. Every interaction provides immediate confirmation, making the application feel fast, reliable, and polished.",
        bullets: [
          "Success toast notifications",
          "Instant UI updates",
          "Responsive user interactions",
          "Improved task management workflow",
        ],
        image: ttsss5,
        reverse: false,
      },
    ],
    projectImages: [
      {
        id: 1,
        source: ttsss1,
      },
      {
        id: 2,
        source: ttsss2,
      },
      {
        id: 3,
        source: ttsss3,
      },
      {
        id: 4,
        source: ttsss4,
      },
      {
        id: 5,
        source: ttsss5,
      },
    ],
  },

  {
    id: "exchangex",
    featuredProject: true,
    projectStatus: "Live Demo",
    projectCategory: "Currency Converter",
    projectTitle: "Real-Time Currency Exchange Calculator",
    projectDescription:
      "Developed a real-time currency conversion application supporting multiple international currencies with accurate exchange rate calculations, intuitive user interactions, and responsive design.",
    projectTags: ["React", "Tailwind CSS", "Exchange Rate API", "JavaScript"],
    projectPrimaryButton: "View Live",
    projectPrimaryLink: "https://exchangexcc.netlify.app/",
    projectSecondaryButton: "View Case Study",
    projectSecondaryLink: "/projects/case-study/exchangex",
    projectThumbnail: eccss1,
    caseStudySectionHeroBadge: "CONVERSION ENGINE",
    caseStudySectionHeroTitle: "Inside ExchangeX",
    caseStudySectionHeroDescription:
      "Explore the interfaces behind the real-time currency converter, including live exchange rates, global currency selection, and utility features.",
    caseStudySection: [
      {
        title: "Modern Currency Conversion Experience",
        description:
          "Built a clean and intuitive landing interface focused on fast currency conversion with real-time exchange rates. The layout emphasizes clarity through modern typography, responsive spacing, and a distraction-free workflow.",
        bullets: [
          "Modern landing interface",
          "Real-time exchange rates",
          "Responsive layout",
          "Dark & light theme support",
        ],
        image: eccss1,
        reverse: false,
      },
      {
        title: "Real-Time Conversion Dashboard",
        description:
          "Developed an interactive conversion dashboard where users can select currencies, enter custom amounts, and receive accurate conversions instantly. The interface updates dynamically while maintaining a smooth user experience.",
        bullets: [
          "Live currency conversion",
          "Interactive conversion form",
          "Accurate exchange calculations",
          "Responsive dashboard layout",
        ],
        image: eccss2,
        reverse: true,
      },
      {
        title: "Global Currency Selection",
        description:
          "Integrated support for over 150 international currencies through searchable dropdowns, allowing users to quickly switch between currency pairs while keeping the interface simple and accessible.",
        bullets: [
          "150+ supported currencies",
          "Dynamic currency dropdowns",
          "Fast currency switching",
          "Simple selection workflow",
        ],
        image: eccss3,
        reverse: false,
      },
      {
        title: "Enhanced User Productivity",
        description:
          "Added quality-of-life features such as one-click copy functionality for converted values and instant visual feedback after successful actions. These small interactions improve usability and create a polished user experience.",
        bullets: [
          "Copy-to-clipboard support",
          "Instant success feedback",
          "Improved user workflow",
          "Production-ready interactions",
        ],
        image: eccss4,
        reverse: true,
      },
      {
        title: "Quick Currency Swap",
        description:
          "Implemented a one-click currency swap feature that instantly exchanges the source and destination currencies while recalculating the conversion automatically. This reduces repetitive input and streamlines frequent conversions.",
        bullets: [
          "One-click currency swap",
          "Automatic recalculation",
          "Live exchange updates",
          "Smooth state management",
        ],
        image: eccss5,
        reverse: false,
      },
    ],
    projectImages: [
      {
        id: 1,
        source: eccss1,
      },
      {
        id: 2,
        source: eccss2,
      },
      {
        id: 3,
        source: eccss3,
      },
      {
        id: 4,
        source: eccss4,
      },
      {
        id: 5,
        source: eccss5,
      },
    ],
  },

  {
    id: "vaultkey",
    featuredProject: false,
    projectStatus: "Live Demo",
    projectCategory: "Utility Tool",
    projectTitle: "Secure Password Generator Utility",
    projectDescription:
      "A responsive password generator that creates secure, customizable passwords with adjustable length and character options, helping users generate strong credentials instantly.",
    projectTags: ["React", "Tailwind CSS", "JavaScript"],
    projectPrimaryButton: "View Live",
    projectPrimaryLink: "https://randompasswordgeneratorbyjj.netlify.app/",
    projectSecondaryButton: "View Case Study",
    projectSecondaryLink: "/projects/case-study/vaultkey",
    projectThumbnail: vkpgss1,
    caseStudySectionHeroBadge: "SECURITY DASHBOARD",
    caseStudySectionHeroTitle: "Inside VaultKey",
    caseStudySectionHeroDescription:
      "Take a closer look at the password generation system, security customization options, and features designed for creating strong credentials.",
    caseStudySection: [
      {
        title: "Interactive Password Generator",
        description:
          "Developed a customizable password generation interface that creates secure passwords instantly while giving users full control over password length, character types, and security preferences. Real-time strength analysis provides immediate feedback as options change.",
        bullets: [
          "Random password generation",
          "Adjustable password length",
          "Character type selection",
          "Real-time strength indicator",
        ],
        image: vkpgss1,
        reverse: false,
      },
      {
        title: "Security Configuration Controls",
        description:
          "Built advanced configuration options allowing users to fine-tune generated passwords by excluding similar or ambiguous characters, preventing duplicates, and enabling only the character sets required for different security policies.",
        bullets: [
          "Advanced security toggles",
          "Exclude similar characters",
          "Prevent duplicate characters",
          "Custom generation rules",
        ],
        image: vkpgss2,
        reverse: true,
      },
      {
        title: "Password History & Security Guidance",
        description:
          "Implemented a password history panel that stores recently generated passwords for quick access alongside practical security recommendations. This helps users avoid password reuse while following modern security best practices.",
        bullets: [
          "Recent password history",
          "One-click password access",
          "Security recommendations",
          "Password management guidance",
        ],
        image: vkpgss3,
        reverse: false,
      },
      {
        title: "Copy & User Experience Enhancements",
        description:
          "Added quality-of-life features including one-click clipboard copying, instant confirmation notifications, dark and light themes, and responsive layouts to create a polished utility that is both practical and easy to use across devices.",
        bullets: [
          "One-click copy to clipboard",
          "Instant success notifications",
          "Dark and light mode support",
          "Responsive user interface",
        ],
        image: vkpgss4,
        reverse: true,
      },
    ],
    projectImages: [
      {
        id: 1,
        source: vkpgss1,
      },
      {
        id: 2,
        source: vkpgss2,
      },
      {
        id: 3,
        source: vkpgss3,
      },
      {
        id: 4,
        source: vkpgss4,
      },
    ],
  },
];
