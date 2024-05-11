import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Projects = () => {
  return (
    <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <h1 className={`${styles.sectionHeadText} text-center`}>Projects</h1>
      <h6
        className={`sm:text-[18px] text-[14px] text-secondary text-center tracking-wider mt-2 text-white`}
      >
        We take on the initiative of creating our own in-house projects when we
        spot opportunities.
      </h6>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
