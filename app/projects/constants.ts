// constants.ts
import { Project } from "./interfaces";
export const projects: Project[] = [
  {
    num: "01",
    category: "frontend",
    title: "VI Computer Science Week",
    description:
      "Official Website of the Computer Science Week organized by the Professional School of Computer Science",
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
      "Landing Page for the projects of the Human-Computer Interaction course",
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
      "Mobile application with AI for personalized vocational guidance.",
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
      "Scalable student enrollment management system for the National University of San Agustín (UNSA), based on microservices.",
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
      "Exercise monitoring system with OpenCV, NumPy, C++, and Python.",
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
      "Social network for students and professors with posts, messaging, and following.",
    stack: [{ name: "React" }, { name: "SpringBoot" }, { name: "MySql" }, { name: "JUnit" }, { name: "SonarCloud" },],
    images: ["/assets/project6a.png", "/assets/project6b.png"],
    live: "https://github.com/i-am-sergio/universe_social_network_web_app", 
    github: "https://github.com/i-am-sergio/universe_social_network_web_app",
  },
  {
    num: "07",
    category: "Software Tool",
    title: "TeamTrack: Program Comprehension and Team Collaboration",
    description:
      "Collaboration tool for Git repositories with AI, chat, and code visualization.",
    stack: [{ name: "RemixJs" }, { name: "Git" }, {name: "SocketIO"}, {name: "GeminiAI"}],
    images: ["/assets/project7a.png", "/assets/project7b.png"],
    live: "#",
    github: "#",
  },
  {
    num: "08",
    category: "Video Game",
    title: "VR Space Survival",
    description:
      "VR survival and strategy game for Oculus Metaquest 2 with natural interfaces.",
    stack: [{ name: "Unity" }, { name: "C#" }, { name: "VR" }],
    images: ["/assets/project8a.png", "/assets/project8b.png"],
    live: "https://github.com/i-am-sergio/TryNotDie", 
    github: "https://github.com/i-am-sergio/TryNotDie",
  },
];