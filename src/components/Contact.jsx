import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import bg from "../assets/globe2.jpg";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.error(error);

      alert("Ahh, something went wrong. Please try again.");
    }
  };

  return (
    <div
      className={`w-full overflow-hidden`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="underfilter ll rr"></div>
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] p-8 rounded-2xl "
        >
          <p className={styles.heroSubText}>Get in touch</p>
          <div className="flex items-center mt-4">
            <FaEnvelope className="text-white mr-4" />
            <p className="text-white">Info@Macromgroup.com</p>
          </div>
          <div className="flex items-center mt-4">
            <FaMapMarkerAlt className="text-white mr-4" />
            <p className="text-white">124 City Road, London, EC1V 2NX</p>
          </div>
          <h3 className={styles.sectionHeadText}>Contact</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8 sm:w-full"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-black py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium w-full sm:w-1/2"
                style={{ backdropFilter: "blur(8px)" }}
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="bg-black py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium w-full sm:w-1/2"
                style={{ backdropFilter: "blur(8px)" }}
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Subject</span>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's the subject?"
                className="bg-black py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium w-full sm:w-1/2"
                style={{ backdropFilter: "blur(8px)" }}
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-black py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium w-full sm:w-1/2 sm:w-fullsss"
                style={{ backdropFilter: "blur(8px)" }}
              />
            </label>

            <button
              type="submit"
              className="violet-gradient py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
