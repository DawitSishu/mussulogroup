import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, staggerContainer } from "../utils/motion";
import { useInView } from "react-intersection-observer";

const EXPGrid = ({ serv, servidx, inView }) => {
  const isImageLeft = servidx % 2 === 0;
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const imageVariants = {
    hidden: { opacity: 0, x: isImageLeft ? "-100%" : "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: isImageLeft ? "100%" : "-100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start py-4 md:py-6 space-y-4 md:space-y-0 md:space-x-4">
      <motion.div
        className={`w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0 ${
          isImageLeft ? "order-1" : "order-2"
        } md:mr-4`}
        initial="hidden"
        animate={controls}
        variants={imageVariants}
      >
        <motion.img
          src={serv.icon}
          alt={serv.title}
          className="w-52 h-52 md:w-60 md:h-60 rounded-full object-cover"
          variants={imageVariants}
        />
      </motion.div>
      <motion.div
        className={`w-full md:w-1/2 flex flex-col justify-center md:ml-8 ${
          isImageLeft ? "order-2" : "order-1"
        }`}
        initial="hidden"
        animate={controls}
        variants={textVariants}
      >
        <div>
          <h3 className="text-white text-[35px] font-bold mb-2">{serv.date}</h3>
          <h3 className="text-white text-[24px] font-bold mb-2">
            {serv.title}
          </h3>
          <p className="text-secondary text-[16px] font-semibold mb-4">
            {serv.company_name}
          </p>
        </div>
        <ul className="list-disc ml-5 space-y-2">
          {serv.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, 
    triggerOnce: true, 
  });

  return (
    <div
      ref={ref}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Portfolio</h2>
      </motion.div>

      <motion.div
        className="mt-20 flex flex-col"
        animate={inView ? "visible" : "hidden"}
        
      >
        {experiences.map((experience, index) => (
          <EXPGrid
            key={`experience-${index}`}
            servidx={index}
            serv={experience}
            inView={inView}
          />
        ))}
      </motion.div> 
    </div>
  );
};
export default SectionWrapper(Experience, "portfolio");
