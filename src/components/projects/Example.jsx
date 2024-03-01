// Photos from https://citizenofnowhe.re/lines-of-the-city
import "./example.css";
// importa una imagen png
import AboutImg from "../../assets/profile.jpg";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="example-section">
      <div ref={ref}>
        <img className="example-img" src={AboutImg} alt="A London skyscraper" />
      </div>
      <motion.h2 className="example-h2" style={{ y }}>{`#001`}</motion.h2>
    </section>
  );
}

export default function Example() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {[1, 2, 3, 4, 5].map((image) => (
        <Image />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}