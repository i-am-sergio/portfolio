"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "VI Computer Science Week",
    description:
      "Pagina Oficial de la Semana de la Computacion organizada por la Escuela Profesional de Ciencias de la Computación",
    stack: [{ name: "React" }, { name: "Javascript" }, { name: "TailwindCSS" }],
    image: "/assets/project1a.png",
    live: "https://i-am-sergio.github.io/react-web-epcc/",
    github: "https://github.com/i-am-sergio/react-web-epcc",
  },
  {
    num: "02",
    category: "frontend",
    title: "Human Computer Interaction Projects",
    description:
      "Landing Page de los proyectos de la materia de Interaccion Humano Computador",
    stack: [{ name: "React" }, { name: "Javascript" }, { name: "TailwindCSS" }],
    image: "/assets/project2.png",
    live: "https://i-am-sergio.github.io/human-computer-interaction/",
    github: "https://github.com/i-am-sergio/human-computer-interaction",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  interface SwiperInstance {
    activeIndex: number;
  }

  const handleSlideChange = (swiper: SwiperInstance) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && " ·"}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 668px) 100vw, (max-width: 1100px) 50vw, 460px"
                        priority
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
