import { styles } from "../styles";
import globe from "../assets/globe.jpeg";
import { useLanguage } from "../utils/LanguageContext";

const Hero = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      welcome: "Welcome to",
      company: "MacroM Group",
      objective: "MacroM's Group overarching objective is optimal performance whilst mitigating risk.",
    },
    pt: {
      welcome: "Bem-vindo à",
      company: "MacroM Group",
      objective: "O objetivo geral do MacroM Group é o desempenho ideal enquanto mitiga os riscos.",
    },
  };

  return (
    <section
      className="hero-section relative w-full h-screen mx-auto"
      style={{
        backgroundImage: `url(${globe})`,
        backgroundSize: "cover",
        backgroundPosition: "center", // Default for larger screens
        position: "relative",
      }}
    >
      {/* Media query to adjust for mobile */}
      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            background-size: 200% 90% !important; /* Ensure zoomed image */
            background-position: center 100% !important; /* Ensure adjusted position */
          }
        }
      `}</style>
      
      <div className="underfilter ll rr"></div>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl max-auto flex flex-row items-start gap-5`}
      >
        <br />
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#F2B31D]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {content[language].welcome}{" "}
            <span className="text-[#F2B31D]">{content[language].company}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <br /> {content[language].objective}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
