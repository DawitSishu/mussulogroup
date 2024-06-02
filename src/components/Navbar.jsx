import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { useLanguage } from "../utils/LanguageContext";

const navLinks = {
  en: [
    { id: "about", title: "About" },
    { id: "portfolio", title: "Portfolio" },
    { id: "projects", title: "Projects" },
    { id: "team", title: "Team" },
    { id: "contact", title: "Contact" },
  ],
  pt: [
    { id: "about", title: "Sobre" },
    { id: "portfolio", title: "Portfólio" },
    { id: "projects", title: "Projetos" },
    { id: "team", title: "Equipe" },
    { id: "contact", title: "Contato" },
  ],
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const scrollToSection = (id) => {
    const yOffset = window.innerWidth < 640 ? -100 : -70;
    const element = document.getElementById(id);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks[language].map((link) =>
        document.getElementById(link.id)
      );
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActive(section.id);
          }
        }
      });
    };

    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        scrollToSection(hash);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [language]);

  return (
    <nav className="px-4 sm:px-10 w-full flex items-center py-5 fixed top-0 z-20 black-gradient">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{ height: "45px", width: "95px" }}
          />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10 flex-grow justify-center">
          {navLinks[language].slice(0, 4).map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.id ? "text-white" : "GoldColored"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.id);
                scrollToSection(link.id);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="hidden sm:flex items-center">
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex  mr-auto justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {language === "en" ? "English" : "Português"}
              </button>
            </div>
            {dropdownOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => {
                      toggleLanguage("en");
                      setDropdownOpen(!dropdownOpen);
                    }}
                  >
                    English
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => {
                      toggleLanguage("pt");
                      setDropdownOpen(!dropdownOpen);
                    }}
                  >
                    Português
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="ml-44">
            <div
              className={`${
                active === navLinks[language][4].id
                  ? "text-white"
                  : "GoldColored"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(navLinks[language][4].id);
                scrollToSection(navLinks[language][4].id);
              }}
            >
              <a href={`#${navLinks[language][4].id}`}>
                {navLinks[language][4].title}
              </a>
            </div>
          </div>
        </div>

        <div className="sm:hidden flex justify-end items-center flex-grow">
          <div className="mr-20">
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {language === "en" ? "English" : "Português"}
                </button>
              </div>
              {dropdownOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      onClick={() => {
                        toggleLanguage("en");
                        setDropdownOpen(!dropdownOpen);
                      }}
                    >
                      English
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      onClick={() => {
                        toggleLanguage("pt");
                        setDropdownOpen(!dropdownOpen);
                      }}
                    >
                      Português
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0
          mx-4 my-2 min-w-[140px]`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks[language].map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.id ? "text-white" : "GoldColored"
                  } font-poppins hover:text-white text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.id);
                    scrollToSection(link.id);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
