import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../components/Projects";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


export default function ProjectGallery() {
  const [index, setIndex] = useState(0);

  const prevProject = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextProject = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <div id="projects" className='bg-linear-to-b from-gray-950 to-indigo-950 text-white'>
      <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
        {projects.map((P, i) => {
          const pos = (i - index + projects.length) % projects.length;
          let x = pos * 150;
          let scale = 1 - Math.abs(pos) * 0.15;
          let opacity = pos === 0 ? 1 : 0.6;
          let zIndex = projects.length - Math.abs(pos);

          let animationX = pos === 0 ? 0 : (pos > 0 ? 1 : -1) * 150;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, x: animationX + 50 }}
              animate={{ opacity, scale, x }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute flex justify-center items-center"
              style={{ zIndex }}
            >
              <P />
            </motion.div>
          );
        })}

        <div className="absolute bottom-24 flex justify-center space-x-16 w-full px-4">
          <button
            onClick={prevProject}
            className="w-16 h-16 bg-black text-white rounded-full z-100 justify-center flex items-center cursor-pointer"
          ><FaArrowLeft /></button>

          <button
            onClick={nextProject}
            className="w-16 h-16 bg-black text-white rounded-full z-100 justify-center flex items-center cursor-pointer"
          ><FaArrowRight /></button>
        </div>
      </div>
    </div>

  );
}


