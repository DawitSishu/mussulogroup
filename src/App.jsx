import { BrowserRouter, Form } from "react-router-dom";
import React from "react";

const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Experience = React.lazy(() => import("./components/Experience"));
const Hero = React.lazy(() => import("./components/Hero"));
const Navbar = React.lazy(() => import("./components/Navbar"));
const Team = React.lazy(() => import("./components/Team"));
const Projects = React.lazy(() => import("./components/Projects"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 black-gradient">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Team />
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
