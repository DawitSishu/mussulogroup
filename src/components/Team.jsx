import { team } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin as LinkedInIcon } from "react-icons/fa";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Team = () => {
  const fadeIn = {
    hidden: { x: -100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.75,
        delay: 0.1,
      },
    },
  };

  return (
    <div>
      <div className="flex justify-center">
        <h3 className={styles.sectionHeadText}>The Team</h3>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center mt-10">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeIn}
              initial="hidden"
              animate="show"
            >
              <div className="max-w-sm mx-4 my-4" style={{ width: "350px" }}>
                <div className="shadow-md rounded-lg overflow-hidden">
                  <img
                    className="w-full h-40 object-cover object-center"
                    src={member.img}
                    alt={member.name}
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{member.name}</h2>
                    <p className="text-sm mb-2">{member.loc}</p>
                    <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded flex items-center justify-center">
                      Contact <LinkedInIcon className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Team, "team");
