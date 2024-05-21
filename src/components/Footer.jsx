import React from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { styles } from "../styles";

const Footer = () => {
  return (
    <footer className="text-white py-8 " style={{ backgroundColor: "black" }}>
      <div className="foot-contain mx-auto px-4">
        <div className="contact-info">
          <p className={`${styles.heroSubText} GoldColored`}>Get in touch</p>
          <div className="flex items-center mt-4">
            <FaEnvelope className="text-white mr-4" />
            <p className="text-white">Info@Macromgroup.com</p>
          </div>
          <div className="flex items-center mt-4">
            <FaMapMarkerAlt className="text-white mr-4" />
            <p className="text-white">124 City Road, London, EC1V 2NX</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom mt-8">
        <p className="text-white text-center">
          &copy; {new Date().getFullYear()}
          {"  "}
          <span className="GoldColored">MacroM Group</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
