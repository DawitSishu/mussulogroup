import React, { useEffect, useRef } from "react";
import { team } from "../constants";
import { FaLinkedin as LinkedInIcon } from "react-icons/fa";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
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
    <div>
      <div className="flex justify-center">
        <h3 className={styles.sectionHeadText}>The Team</h3>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center mt-10" ref={ref}>
          {team.map((member, idx) => (
            <div
              key={idx}
              className="max-w-sm mx-4 my-4 team-member"
              style={{ width: "350px" }}
            >
              <div className="shadow-md rounded-lg overflow-hidden">
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{member.name}</h2>
                  <p className="text-sm mb-2">{member.loc}</p>
                  <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded flex items-center justify-center">
                    Contact <LinkedInIcon className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Team, "team");
