import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "mindcheck",
    title: "MindCheck",
    category: "AI · Mobile Application",
    year: "2026",

    description:
      "An AI-based mobile application for early mental health screening using the SRQ-20 questionnaire and Artificial Neural Network.",

    longDescription:
      "MindCheck is a mobile application developed to provide an initial mental health screening experience for teenagers. The application uses the SRQ-20 questionnaire and an Artificial Neural Network with Backpropagation to analyze user responses and identify categories of mental health symptoms.",

    role: "Mobile & Machine Learning Developer",

    technologies: [
      "Flutter",
      "Flask",
      "Python",
      "MySQL",
      "Artificial Neural Network",
      "Backpropagation",
    ],

    coverImage: "/projects/mindcheck/cover.png",

    images: [
      "/projects/mindcheck/home.jpeg",
      "/projects/mindcheck/questionnaire.jpeg",
      "/projects/mindcheck/result.jpeg",
      "/projects/mindcheck/education.jpeg",
    ],

    overview:
      "I developed MindCheck as my individual final-year project to support early mental health screening for teenagers using the SRQ-20 questionnaire and an Artificial Neural Network. I built an integrated mobile application that provides AI-based screening results and educational content, with guidance from a psychologist to ensure responsible result interpretation.",
    
    problem:
      "The main challenge was turning questionnaire data into meaningful screening information without presenting the results as a medical diagnosis. This required both technical implementation and careful consideration of how users would interpret the information.",

    solution:
      "I built a Flutter application that guides users through the SRQ-20 questionnaire and sends their responses to a Flask backend for analysis using an Artificial Neural Network with Backpropagation. The application presents screening results, detected symptom categories, educational content, and examination history. I also worked with a psychologist to review the content and interpretation of the screening results.",

    myRole:
      "I independently handled system design, Flutter development, Flask API integration, MySQL database management, and ANN implementation. I also worked with a psychologist to review the screening content and result interpretation.",

    technology: [
      "Flutter",
      "Dart",
      "Python",
      "Flask",
      "MySQL",
      "Artificial Neural Network",
      "Backpropagation",
    ],

    keyFeatures: [
      "Interactive SRQ-20 questionnaire",
      "Initial mental health screening results",
      "Mental health symptom analysis",
      "Mental health educational content",
      "User screening history",
      "Artificial Neural Network with Backpropagation",
    ],

    process:
      "I designed the screening flow, developed the mobile interface and backend, then trained, evaluated, and integrated the ANN model. I tested the application and reviewed the screening content with a psychologist.",

    challenges:
      "Transitioning from rule-based logic to ANN required me to learn dataset preparation, model training, and API integration. Another important challenge was presenting the screening results clearly and responsibly, which I addressed by seeking validation and feedback from a psychologist.",

    learnings:
      "This project strengthened my understanding of end-to-end mobile development and the practical integration of machine learning into an application. I learned how to prepare and evaluate an ANN model, connect different technologies, and translate technical outputs into understandable user experiences. It also taught me the importance of domain-expert feedback, responsible AI implementation, and approaching unfamiliar technical challenges through independent learning.",

    // Add real links when available.
    githubUrl: "https://github.com/naylafauziah/mindcheck-mentalhealthscreeningapp",
    // liveUrl: "",
  },

  {
    slug: "dunia-petcare",
    title: "DuniaPetcare",
    category: "Full-stack Web Application",
    year: "2024",

    description:
      "A responsive full-stack web application for pet grooming and veterinary services, featuring online booking, appointment management, and administrative CRUD operations.",

    longDescription:
      "Dunia PetCare is a web-based platform that provides pet grooming and veterinary consultation services through an online booking system. Users can explore available services, schedule appointments, and track their booking history. The platform also includes an admin dashboard for managing services, doctors, users, and booking statuses.",

    role: "Full-stack Developer",

    technologies: [
      "React",
      "TypeScript",
      "Express.js",
      "MySQL",  
    ],

    coverImage: "/projects/dunia-petcare/cover.png",

    images: [
      "/projects/dunia-petcare/home.png",
      "/projects/dunia-petcare/booking.png",
      "/projects/dunia-petcare/services.png",
      "/projects/dunia-petcare/admin.png",
    ],

    overview:
      "I developed Dunia PetCare as an individual full-stack web project to simplify pet care bookings and service management. I built both the customer-facing website and admin dashboard, integrating booking functionality, service management, and database operations.",

    problem:
      "I wanted to provide a more organized booking experience for customers while making it easier for administrators to manage services, appointments, and user information.",

    solution:
      "I built a React and TypeScript frontend connected to an Express.js backend and MySQL database, supporting online bookings and administrative CRUD operations.",

    myRole:
      "I independently developed the frontend, backend, database, and API integration, including booking functionality, service management, and responsive UI implementation.",

    technology: [
      "React",
      "TypeScript",
      "Express.js",
      "MySQL",
    ],

    keyFeatures: [
      "Responsive service catalog",
      "Service search and filtering",
      "Online booking and appointment scheduling",
      "Booking history and status tracking",
      "Admin dashboard and CRUD management",
      "Frontend and backend integration",
    ],

    process:
      "I planned the user flows, designed the database, developed the React frontend and Express.js API, then integrated and tested the booking and management features.",

    challenges:
      "Managing frontend, backend, and database development independently was challenging, especially maintaining consistent data across CRUD and booking operations. I addressed this through incremental development and feature testing.",

    learnings:
      "Dunia PetCare gave me practical experience building a complete web application rather than focusing on the frontend alone. I strengthened my skills in React, TypeScript, REST API development, database operations, and connecting user interfaces with backend functionality. The project also improved my ability to structure development tasks, debug integration issues, and think about application requirements from both customer and administrator perspectives.",

    githubUrl: "https://github.com/naylafauziah/project-duniapetcare",
    // liveUrl: "ADD_REAL_LIVE_URL",
  },

  {
    slug: "travelwell",
    title: "TravelWell",
    category: "Mobile Application · Hotel Booking",
    year: "2025",

    description:
      "A mobile hotel booking application for Padang that allows users to browse, search, and book hotel rooms.",

    longDescription:
      "TravelWell is a hotel booking mobile application developed for Padang. The application allows users to explore available hotels, search for rooms, view categorized listings, check pricing, and complete room bookings.",

    role: "Mobile Developer",

    technologies: [
      "Flutter",
      "Dart",
      "PHP",
      "REST API",
    ],

    coverImage: "/projects/travelwell/cover.png",

    images: [
      "/projects/travelwell/home.jpeg",
      "/projects/travelwell/list.jpeg",
      "/projects/travelwell/booking.jpeg",
      "/projects/travelwell/booking2.jpeg",
    ],

    overview:
      "I developed TravelWell as an individual mobile application project to simplify hotel discovery and room reservations in Padang. I built the Flutter interface and integrated it with a PHP backend to support hotel browsing, room information, pricing, and booking functionality.",

    problem:
      "I wanted to create a convenient mobile booking experience that brings hotel information, room pricing, and reservations into one application.",

    solution:
      "I built a Flutter application integrated with a PHP backend and MySQL database through REST APIs to display hotel information and support room bookings.",

    myRole:
      "I independently developed the Flutter interface, screen navigation, hotel browsing features, booking flow, and backend API integration.",

    technology: [
      "Flutter",
      "Dart",
      "PHP",
      "REST API",
    ],

    keyFeatures: [
      "Hotel browsing",
      "Hotel and room search",
      "Room booking",
      "Real-time pricing information",
      "Categorized hotel listings",
      "API integration",
    ],

    process:
      "I started with the UI and navigation, then implemented hotel listings, search, and booking features. After connecting the Flutter application to the PHP backend, I tested the main workflows.",

    challenges:
      "Learning Flutter while integrating multiple screens and REST APIs was my main challenge. I approached it step by step, starting with static interfaces before implementing backend integration.",

    learnings:
      "TravelWell helped me build a stronger foundation in Flutter, Dart, and mobile application development. I learned how to structure mobile interfaces, manage navigation between screens, and connect an application to backend services through REST APIs. Building the project step by step also improved my debugging skills, adaptability, and confidence in learning new technologies independently.",

    githubUrl: "https://github.com/naylafauziah/hotel-app",
  },

  // {
  //   slug: "juice-one",
  //   title: "Juice One",
  //   category: "Responsive E-commerce Website",

  //   description:
  //     "A responsive e-commerce website concept for a fresh fruit juice brand with a clean and mobile-friendly interface.",

  //   longDescription:
  //     "Juice One is a responsive e-commerce website created for a fresh fruit juice brand. The project focuses on creating a clean, modern, and mobile-friendly browsing experience using HTML and CSS.",

  //   role: "Frontend Developer",

  //   technologies: [
  //     "HTML",
  //     "CSS",
  //     "Responsive Design",
  //   ],

  //   coverImage: "/projects/juice-one/cover.png",

  //   images: [
  //     "/projects/juice-one/home.png",
  //     "/projects/juice-one/products.png",
  //     "/projects/juice-one/articles.png",
  //   ],

  //   overview:
  //     "Juice One is a responsive web design project developed for a fresh fruit juice brand.",

  //   solution:
  //     "The website uses responsive HTML and CSS layouts to present product information, supporting information, and articles in a clean and mobile-friendly interface.",

  //   myRole:
  //     "Designed and implemented the responsive frontend interface using HTML and CSS.",

  //   technology: [
  //     "HTML",
  //     "CSS",
  //     "Responsive Web Design",
  //   ],

  //   keyFeatures: [
  //     "Responsive layout",
  //     "Product browsing",
  //     "Support information",
  //     "Article section",
  //     "Mobile-friendly interface",
  //   ],

  //   // githubUrl: "ADD_REAL_GITHUB_URL",
  //   // liveUrl: "ADD_REAL_LIVE_URL",
  // },

  // {
  //   slug: "gojek-ui-redesign",
  //   title: "Gojek App UI Redesign",
  //   category: "UI/UX Design",

  //   description:
  //     "A UI redesign exercise recreating key screens from the Gojek mobile application using Figma.",

  //   longDescription:
  //     "A mobile UI design project focused on recreating and redesigning several key screens from the Gojek application. The project was created in Figma as an exercise in modern mobile interface design.",

  //   role: "UI Designer",

  //   technologies: [
  //     "Figma",
  //     "UI Design",
  //     "Mobile Design",
  //   ],

  //   coverImage: "/projects/gojek-redesign/cover.png",

  //   images: [
  //     "/projects/gojek-redesign/login.png",
  //     "/projects/gojek-redesign/home.png",
  //     "/projects/gojek-redesign/food-search.png",
  //     "/projects/gojek-redesign/order-history.png",
  //   ],

  //   overview:
  //     "This project explored mobile application interface design by recreating several important user flows from the Gojek application.",

  //   myRole:
  //     "Designed the mobile interfaces in Figma and worked on recreating the visual structure of several key application screens.",

  //   technology: [
  //     "Figma",
  //     "UI Design",
  //   ],

  //   keyFeatures: [
  //     "Login page design",
  //     "Homepage design",
  //     "Food search interface",
  //     "Order history interface",
  //     "Mobile UI layout",
  //   ],

  //   // liveUrl: "ADD_FIGMA_URL",
  // },

  // {
  //   slug: "hasanah-bakery-branding",
  //   title: "Hasanah Bakery",
  //   category: "Brand Identity · Graphic Design",

  //   description:
  //     "A logo and visual identity design for Hasanah Bakery, a halal and healthy bakery brand.",

  //   longDescription:
  //     "Hasanah Bakery is a branding project created for a halal and healthy bakery brand. The project includes logo design, typography, color variations, basic brand guidelines, and visual mockups.",

  //   role: "Graphic Designer",

  //   technologies: [
  //     "Adobe Illustrator",
  //     "Brand Identity",
  //     "Logo Design",
  //   ],

  //   coverImage: "/projects/hasanah-bakery/cover.png",

  //   images: [
  //     "/projects/hasanah-bakery/logo.png",
  //     "/projects/hasanah-bakery/color-variations.png",
  //     "/projects/hasanah-bakery/brand-guideline.png",
  //     "/projects/hasanah-bakery/mockup.png",
  //   ],

  //   overview:
  //     "A visual identity project for Hasanah Bakery focused on creating a recognizable brand identity for a halal and healthy bakery.",

  //   solution:
  //     "Created a logo and supporting visual identity consisting of color variations, typography, brand guidelines, and mockups for real-world applications.",

  //   myRole:
  //     "Designed the logo and supporting brand identity assets using Adobe Illustrator.",

  //   technology: [
  //     "Adobe Illustrator",
  //     "Logo Design",
  //     "Brand Identity",
  //   ],

  //   keyFeatures: [
  //     "Logo design",
  //     "Color variations",
  //     "Typography selection",
  //     "Brand guidelines",
  //     "Real-world application mockups",
  //   ],

  //   // liveUrl: "ADD_BEHANCE_OR_PORTFOLIO_URL",
  // },
];

export function getProjectBySlug(
  slug: string
): Project | undefined {
  return projects.find(
    (project) => project.slug === slug
  );
}

export function getNextProject(
  slug: string
): Project | undefined {
  const currentIndex = projects.findIndex(
    (project) => project.slug === slug
  );

  if (currentIndex === -1) {
    return undefined;
  }

  const nextIndex =
    (currentIndex + 1) % projects.length;

  return projects[nextIndex];
}