import React, { useEffect, useRef } from "react";
import { team as teamEn, teamPt } from "../constants";
import { FaLinkedin as LinkedInIcon } from "react-icons/fa";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLanguage } from "../utils/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const { language } = useLanguage();
  const team = language === "en" ? teamEn : teamPt;

  const ref = useRef();

  useEffect(() => {
    const elements = ref.current.querySelectorAll(".team-member");

    elements.forEach((element, idx) => {
      gsap.fromTo(
        element,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.75,
          delay: 0.1 * idx,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <h3 className={`${styles.sectionHeadText} text-center`}>
        {language === "en" ? "The Team" : "A Equipe"}
      </h3>
      <div className="flex flex-wrap justify-center mt-10" ref={ref}>
        {team.map((member, idx) => (
          <div
            key={idx}
            className="max-w-sm mx-4 my-4 team-member"
            style={{ width: "350px" }}
          >
            <div className="shadow-md rounded-lg overflow-hidden">
              <div className="p-4 text-center">
                <h2 className="text-xl font-bold mb-2">{member.name}</h2>
                <p className="text-sm mb-2">{member.loc}</p>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded flex items-center justify-center mx-auto">
                  {language === "en" ? "Contact" : "Contato"} <LinkedInIcon className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Team, "team");
