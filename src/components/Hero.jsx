import { styles } from "../styles";
import globe from "../assets/globe.jpeg";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto"
      style={{
        backgroundImage: `url(${globe})`,
        backgroundSize: "cover",
        backgroundPosition: "55% 65%",
        position: "relative",
      }}
    >
      <div className="overfilter"></div>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl max-auto flex
    flex-row items-start gap-5`}
      >
        <br />
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#F2B31D]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Welcome to <span className="text-[#F2B31D]">MacroM Group </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <br /> MacroM Group overarching objective is optimal performance
            whilst mitigating risk.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
