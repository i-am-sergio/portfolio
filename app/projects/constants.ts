// constants.ts
import { Project } from "./interfaces";
export const projects: Project[] = [
  {
    num: "01",
    category: "frontend",
    title: "VI Computer Science Week",
    description:
      "Pagina Oficial de la Semana de la Computacion organizada por la Escuela Profesional de Ciencias de la Computación",
    stack: [{ name: "React" }, { name: "Javascript" }, { name: "TailwindCSS" }],
    images: ["/assets/project1a.png", "/assets/project1b.png"],
    live: "https://i-am-sergio.github.io/react-web-epcc/",
    github: "https://github.com/i-am-sergio/react-web-epcc",
  },
  {
    num: "02",
    category: "frontend",
    title: "IHC Projects Landing Page",
    description:
      "Landing Page de los proyectos de la materia de Interaccion Humano Computador",
    stack: [{ name: "React" }, { name: "Javascript" }, { name: "TailwindCSS" }],
    images: ["/assets/project2a.png", "/assets/project2b.png"],
    live: "https://i-am-sergio.github.io/human-computer-interaction/",
    github: "https://github.com/i-am-sergio/human-computer-interaction",
  },
  {
    num: "03",
    category: "Mobile App",
    title: "AI Expert System for Vocational Guidance",
    description:
      "Aplicación móvil con IA para orientación vocacional personalizada.",
    stack: [{ name: "React Native" }, { name: "Js" }, { name: "skfuzzy" }],
    images: [
      "/assets/project3a.png",
      "/assets/project3b.png",
      // "/assets/project3c.png",
    ],
    live: "https://github.com/i-am-sergio/ai-expert-system-vocational-guidance",
    github:
      "https://github.com/i-am-sergio/ai-expert-system-vocational-guidance",
  },
  {
    num: "04",
    category: "Backend",
    title: "Student Enrollment Management System",
    description:
      "Sistema de gestión de matrículas escalable para la Universidad Nacional de San Agustín (UNSA), basado en microservicios.",
    stack: [
      { name: ".NET" },
      { name: "Docker" },
      { name: "Jenkins" },
      { name: "Microservices" },
      { name: "DDD" },
    ],
    images: ["/assets/project4a.png", "/assets/project4b.png"],
    live: "https://github.com/ShinjiMC/Enrollment-Management-System-UNSA",
    github: "https://github.com/ShinjiMC/Enrollment-Management-System-UNSA",
  },
  {
    num: "05",
    category: "Computer Vision",
    title: "Exercise Monitoring System - OpenCV",
    description:
      "Sistema de monitoreo de ejercicios con OpenCV, NumPy, C++ y Python.",
    stack: [
      { name: "OpenCV" },
      { name: "Tensorflow" },
      { name: "Qt" },
      { name: "C++" },
      { name: "Python" },
    ],
    images: ["/assets/project5a.png", "/assets/project5b.png"],
    live: "https://github.com/i-am-sergio/exercise-monitoring-system-opencv",
    github: "https://github.com/i-am-sergio/exercise-monitoring-system-opencv",
  },
  {
    num: "06",
    category: "Web Application",
    title: "UNIverse: Social Network Web Application",
    description:
      "Red social para estudiantes y profesores con publicaciones, mensajería y seguimiento.",
    stack: [{ name: "React" }, { name: "SpringBoot" }, { name: "MySql" }, { name: "JUnit" }, { name: "SonarCloud" },],
    images: ["/assets/project6a.png", "/assets/project6b.png"],
    live: "https://github.com/i-am-sergio/universe_social_network_web_app", 
    github: "https://github.com/i-am-sergio/universe_social_network_web_app",
  },
];
