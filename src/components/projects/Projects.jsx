import { useRef } from "react";
import "./projects.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}

const Projects = () => {

  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="projects"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }} >
          <h2>Project 1</h2>
          <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel similique maxime eveniet ut, sed asperiores magnam sint dolore natus quia facere</p>
          <button>More</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }} >
          <h2>Project 1</h2>
          <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel similique maxime eveniet ut, sed asperiores magnam sint dolore natus quia facere</p>
          <button>More</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }} >
          <h2>Project 1</h2>
          <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel similique maxime eveniet ut, sed asperiores magnam sint dolore natus quia facere</p>
          <button>More</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }} >
          <h2>Project 1</h2>
          <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel similique maxime eveniet ut, sed asperiores magnam sint dolore natus quia facere</p>
          <button>More</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;