import { BrowserRouter, Form } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar } from "./components";
import Team from "./components/Team";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> */}
        <Navbar />
        <Hero />
        {/* </div> */}
        <About />
        <Experience />
        <Team />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
