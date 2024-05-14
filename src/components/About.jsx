import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>About us</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[17px] text-white leading-[30px] text-center"
      >
        MacroM Group is a multi-asset international investment company which
        specialize in navigating the intricate landscape of global markets
        particularly in Europe and Africa with interests spanning a range of
        asset classes in various sectors such as Technology, Finance and Real
        Estate.
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[17px] text-white leading-[30px] text-center"
      >
        We pride ourselves on our team of experienced specialists, each
        proficient in their respective domains. This expertise enables us to
        discern the most promising investment strategies and approaches to
        curate the best solutions.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[17px] text-white leading-[30px] text-center"
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
