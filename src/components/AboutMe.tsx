import { MonitorCogIcon, PencilRulerIcon, WrenchIcon } from "lucide-react";
import customHr from "../assets/hr.png";
import typescriptLogo from "../assets/typescript.svg";
import SkillCard from "./SkillCard";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGithub,
  faJava,
  faPython,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faFlagUsa } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";

const AboutMe = () => {
  return (
    <section className="bg-[radial-gradient(circle,#ffffff_0%,#f3f3f3_45%,#d4d4d4_100%)]">
      <section id="about-me" className="px-5 pt-20 md:pt-35">
        <div className="flex flex-col items-center text-center">
          <h3 className="headerStyle">ABOUT ME</h3>
          <p className="mt-10 max-w-3xl font-[Open_Sans] text-[15px] font-normal leading-7 md:mt-17.75">
            I'm Phoenix, a Computer Science student passionate about web
            development, programming, and creating interactive digital
            experiences. Currently learning JavaScript, TypeScript, React, and
            modern frontend technologies while building projects to improve my
            skills every day.
          </p>
          <h6 className="mt-10 border-r-2 border-l-2 px-10 py-0.5 text-[15px] font-semibold md:mt-16.75">
            EXPLORE
          </h6>
          <img
            src={customHr}
            alt=""
            className="mt-14 w-40 md:mt-21.25 md:w-50"
          />
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-12 md:mt-27 md:grid-cols-2 md:gap-x-20 md:gap-y-20 lg:gap-x-35 lg:gap-y-24">
          <SkillCard
            Icon={PencilRulerIcon}
            subheading="DESIGN"
            description="Creating clean and modern user interfaces with a focus on simplicity, responsiveness, and user experience."
          />
          <SkillCard
            Icon={WrenchIcon}
            subheading="DEVELOPMENT"
            description="Building interactive web applications using JavaScript, TypeScript, React, HTML, and CSS while continuously improving my coding skills."
          />
          <div className="md:col-span-2 md:mx-auto md:w-1/2">
            <SkillCard
              Icon={MonitorCogIcon}
              subheading="MAINTENANCE"
              description="Improving, debugging, and maintaining projects to ensure smooth performance, clean code, and better user experience."
            />
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src={customHr}
            alt=""
            className="mt-14 w-40 md:mt-21.25 md:w-50"
          />
        </div>
      </section>
      <section id="skills" className="px-5 pt-20 pb-24 md:pt-30 md:pb-35">
        <div className="flex flex-col items-center text-center">
          <h3 className="headerStyle">SKILLS</h3>
        </div>
        <div>
          <div className="grid grid-cols-1 max-w-3xl mx-auto">
            <h3 className="subheading2Style">USING NOW:</h3>
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 md:mt-18.75 md:grid-cols-4 md:gap-x-20 md:gap-y-20.5">
            <Logo className="text-[#e34f26]" icon={faHtml5} label="HTML" />
            <Logo className="text-[#1572b6]" icon={faCss3Alt} label="CSS3" />
            <Logo className="text-[#f7df1e]" icon={faJs} label="JAVASCRIPT" />
            <Logo className="text-[#61dafb]" icon={faReact} label="REACT" />
            <Logo className="text-[#000000]" icon={faGithub} label="GITHUB" />
            <Logo className="text-[#f05032]" icon={faGitAlt} label="GIT" />
          </div>
          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 md:mt-25.5">
            <h3 className="subheading2Style">LEARNING:</h3>
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 md:mt-18.75 md:grid-cols-4 md:gap-x-20 md:gap-y-20.5">
            <Logo className="text-[#61dafb]" icon={faReact} label="REACT" />
            <Logo className="text-[#000000]" icon={faGithub} label="GITHUB" />
            <Logo className="text-[#f05032]" icon={faGitAlt} label="GIT" />
            <div className="flex flex-col text-center items-center justify-center">
              <img
                src={typescriptLogo}
                alt=""
                className="h-18 object-contain md:h-25"
              />
              <p className="mt-4.25 wrap-break-word font-[Montserrat] text-sm font-light tracking-[0.12em] md:text-xl md:tracking-[0.1854em]">
                TYPESCRIPT
              </p>
            </div>
          </div>
          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 md:mt-18.5">
            <h3 className="subheading2Style">OTHER SKILLS:</h3>
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 md:mt-18.75 md:grid-cols-4 md:gap-x-20 md:gap-y-20.5">
            <Logo
              className="text-[#1f4e9d]"
              icon={faFlagUsa}
              label="ENGLISHC1"
            />
            <Logo className="text-[#f89820]" icon={faJava} label="JAVA" />
            <Logo className="text-[#3776ab]" icon={faPython} label="PYTHON" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutMe;
