import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About us</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        MacroM Group is a multi-asset international investment company which
        specialize in navigating the intricate landscape of global markets
        particularly in Europe and Africa with interests spanning a range of
        asset classes in various sectors such as Technology, Finance and Real
        Estate.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        We pride ourselves on our team of experienced specialists, each
        proficient in their respective domains. This expertise enables us to
        discern the most promising investment strategies and approaches to
        curate the best solutions.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Beyond traditional investment avenues, MacroM possess a keen eye for
        identifying opportunistic opportunities. Whether it's uncovering
        undervalued assets ripe for growth or breathing new life into
        underperforming ventures, we are adept at capitalizing on market
        inefficiencies. Moreover, we confidently venture into pioneering new
        projects and innovations within our areas of expertise.
      </motion.p>
    </div>
  );
};

export default SectionWrapper(About, "about");
