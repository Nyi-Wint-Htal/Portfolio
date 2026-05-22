import { useState } from "react";
import weather from "../assets/project-1.png";
import calculator from "../assets/project-2.png";
import task from "../assets/project-3.png";
import bg2 from "../assets/bg2.png";

type Tab = "all" | "coded" | "designed";

const projects = [
  { title: "Weather App", category: "coded", image: weather },
  { title: "Calculator", category: "designed", image: calculator },
  { title: "Weather App", category: "designed", image: task },
  { title: "Weather App", category: "coded", image: weather },
  { title: "Weather App", category: "coded", image: weather },
  { title: "Weather App", category: "designed", image: calculator },
];

const Portfolio = () => {
  const [active, setActive] = useState<Tab>("all");
  const filteredProjects =
    active === "all"
      ? projects
      : projects.filter((projects) => projects.category === active);
  return (
    <div id="portfolio" className="h-290 bg-[#1A1A1A]">
      <div
        style={{ backgroundImage: `url(${bg2})` }}
        className="h-80.25 flex flex-col text-center items-center pt-26.75 bg-cover bg-center"
      >
        <h3 className="headerStyle">PORTFOLIO</h3>
      </div>
      <div className="grid grid-cols-3 max-w-xl mx-auto text-center w-146.75 h-12 mt-7.75 relative">
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

      <div className="max-h-200.5 overflow-y-auto mt-8 bg-[#1A1A1A]">
        <div className="grid grid-cols-3 grid-rows-2">
          {filteredProjects.map((project, i = 0) => (
            <div key={i}>
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover object-center overflow-y-hidden"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex text-center items-center justify-center h-17.5 bg-[#1A1A1A]">
        <h4 className="fontStyle text-[#FFFBFB] text-[20px]">
          And many more to come!
        </h4>
      </div>
    </div>
  );
};

export default Portfolio;
