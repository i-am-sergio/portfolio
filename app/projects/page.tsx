"use client";
import { BsArrowDownRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ModalProps } from "./interfaces";
import { projects } from "./constants";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import { RiCloseCircleFill } from "react-icons/ri";
import { EyeClosedIcon } from "lucide-react";

const Projects: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageUrl }) => {
    if (!isOpen || !imageUrl) return null;

    const [windowDimensions, setWindowDimensions] = useState({
      width: 0,
      height: 0,
    });

    useEffect(() => {
      const handleResize = () => {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      handleResize(); // Establece las dimensiones iniciales
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxWidth = windowDimensions.width * 0.8;
    const maxHeight = windowDimensions.height * 0.8;

    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative bg-white/50 rounded-lg p-4 transition-transform duration-300 scale-100">
        <button
  onClick={onClose}
  className="absolute w-10 h-10 top-2 right-2 p-0 bg-[#00ff9999] rounded-full flex items-center justify-center hover:bg-[#00ff99] transition-colors duration-200"
>
  <IoIosCloseCircle className="w-full h-full text-black/50" />
</button>
          <div className="flex justify-center items-center">
            <Image
              src={imageUrl}
              alt="Imagen agrandada"
              style={{
                maxWidth: `${maxWidth}px`,
                maxHeight: `${maxHeight}px`,
              }}
              width={1000}
              height={600}
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.0, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {project.num}
                  </div>
                  {/* Github project button */}
                  <div className="flex flex-row text-center items-center gap-x-2">
                    <Link
                      href={project.github}
                      className="w-[35px] h-[35px] transition-all duration-500 flex justify-center items-center hover:scale-[1.1]"
                      target="_blank" // Abre en una nueva pestaña
                      rel="noopener noreferrer" // Mejora la seguridad
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsGithub className="text-white text-3xl group-hover:text-accent " />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Github repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                    <Link
                      href={project.live}
                      className="w-[35px] h-[35px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-90"
                      target="_blank" // Abre en una nueva pestaña
                      rel="noopener noreferrer" // Mejora la seguridad
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsArrowDownRight className="text-primary text-xl" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live Demo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                </div>
                {/* heading */}
                <h2 className="text-[20px] xl:text-[30px] font-extrabold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {project.title}
                </h2>
                {/* project category */}
                <h2 className="text-[20px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.category} project
                </h2>
                {/* stack */}
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => (
                    <li key={index} className="text-sm text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && " ·"}
                    </li>
                  ))}
                </ul>
                {/* description */}
                <p className="text-white/60 w-full">{project.description}</p>
                {/* images */}
                <div className="flex flex-wrap justify-center w-full">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className="w-1/2 md:w-1/2 lg:w-2/5 p-1"
                      onClick={() => openModal(image)}
                    >
                      <div className={`relative w-full h-[120px] }`}>
                        <Image
                          src={image}
                          alt={`Imagen ${index + 1}`}
                          fill
                          sizes="300px"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal} imageUrl={selectedImage} />
    </section>
  );
};

export default Projects;
