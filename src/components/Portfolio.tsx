import { useState } from "react";
import weather from "../assets/project-1.png";
import calculator from "../assets/project-2.png";
import todolist from "../assets/project-3.png";
import bg2 from "../assets/bg2.png";

type Tab = "all" | "coded" | "designed";

const projects = [
  {
    title: "To-Do List",
    category: "coded",
    image: todolist,
    link: "https://to-do-list-rho-taupe-53.vercel.app/",
  },
  {
    title: "Horizon Weather",
    category: "coded",
    image: weather,
    link: "https://weather-app-kappa-beige-9fpppt471h.vercel.app/",
  },
  {
    title: "Horizon Calc",
    category: "coded",
    image: calculator,
    link: "https://calculator-ashy-gamma.vercel.app/",
  },
];

const Portfolio = () => {
  const [active, setActive] = useState<Tab>("all");
  const filteredProjects =
    active === "all"
      ? projects
      : projects.filter((projects) => projects.category === active);
  return (
    <div id="portfolio" className="bg-[#1A1A1A]">
      <div
        style={{ backgroundImage: `url(${bg2})` }}
        className="flex h-56 flex-col items-center bg-cover bg-center px-5 pt-20 text-center md:h-80.25 md:pt-26.75"
      >
        <h3 className="headerStyle">PORTFOLIO</h3>
      </div>
      <div className="relative mx-auto mt-7.75 grid h-12 w-[calc(100%-40px)] max-w-xl grid-cols-3 text-center">
        <button
          onClick={() => setActive("all")}
          className={active === "all" ? "activeTabStyle" : "inactiveTabStyle"}
        >
          ALL
        </button>
        <button
          onClick={() => setActive("coded")}
          className={active === "coded" ? "activeTabStyle" : "inactiveTabStyle"}
        >
          CODED
        </button>
        <button
          onClick={() => setActive("designed")}
          className={
            active === "designed" ? "activeTabStyle" : "inactiveTabStyle"
          }
        >
          DESIGNED
        </button>
      </div>

      <div className="mt-8 bg-[#1A1A1A]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i = 0) => (
            <a
              href={project.link}
              key={i}
              className="aspect-4/3 overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover object-center overflow-y-hidden"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center bg-[#1A1A1A] px-5 py-10 text-center">
        <h4 className="fontStyle text-[18px] text-[#FFFBFB] md:text-[20px]">
          And many more to come!
        </h4>
      </div>
    </div>
  );
};

export default Portfolio;
