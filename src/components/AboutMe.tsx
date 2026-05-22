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
import { faFlagUsa, faBroom } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";

const AboutMe = () => {
  return (
    <section className="h-735 bg-[radial-gradient(circle,#ffffff_0%,#f3f3f3_45%,#d4d4d4_100%)]">
      <section id="about-me" className="pt-35">
        <div className="flex flex-col items-center text-center">
          <h3 className="headerStyle">ABOUT ME</h3>
          <p className="font-[Open_Sans] font-normal text-[15px] w-190.75 h-11.75 mt-17.75">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quasi
            pariatur id! Praesentium dignissimos dolorum aliquam, sapiente
            reiciendis architecto nobis voluptas odit sunt, porro labore
          </p>
          <h6 className="border-r-2 border-l-2 py-0.5 px-10 font-semibold text-[15px] mt-16.75">
            EXPLORE
          </h6>
          <img src={customHr} alt="" className="w-50 mt-21.25" />
        </div>
        <div className="grid grid-cols-2 gap-x-35 gap-y-24 mx-auto max-w-4xl max-h-93.25 mt-27">
          <SkillCard
            Icon={PencilRulerIcon}
            subheading="DESIGN"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero expedita in fugit cumque placeat quod sit? Officiis"
          />
          <SkillCard
            Icon={WrenchIcon}
            subheading="DEVELOPMENT"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero expedita in fugit cumque placeat quod sit? Officiis"
          />
          <div className="col-span-2 mx-auto w-1/2">
            <SkillCard
              Icon={MonitorCogIcon}
              subheading="MAINTENANCE"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero expedita in fugit cumque placeat quod sit? Officiis"
            />
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src={customHr} alt="" className="w-50 mt-21.25" />
        </div>
      </section>
      <section id="skills" className="pt-30">
        <div className="flex flex-col items-center text-center">
          <h3 className="headerStyle">SKILLS</h3>
        </div>
        <div>
          <div className="grid grid-cols-1 max-w-3xl mx-auto">
            <h3 className="subheading2Style">USING NOW:</h3>
          </div>
          <div className="grid grid-cols-4 max-w-3xl mx-auto gap-x-20 mt-18.75 gap-y-20.5">
            <Logo className="text-[#e34f26]" icon={faHtml5} label="HTML" />
            <Logo className="text-[#1572b6]" icon={faCss3Alt} label="CSS3" />
            <Logo className="text-[#f7df1e]" icon={faJs} label="JAVASCRIPT" />
            <Logo className="text-[#61dafb]" icon={faReact} label="REACT" />
            <Logo className="text-[#000000]" icon={faGithub} label="GITHUB" />
            <Logo className="text-[#f05032]" icon={faGitAlt} label="GIT" />
          </div>
          <div className="grid grid-cols-1 max-w-3xl mx-auto mt-25.5">
            <h3 className="subheading2Style">LEARNING:</h3>
          </div>
          <div className="grid grid-cols-4 max-w-3xl mx-auto gap-x-20 mt-18.75 gap-y-20.5">
            <Logo className="text-[#61dafb]" icon={faReact} label="REACT" />
            <Logo className="text-[#000000]" icon={faGithub} label="GITHUB" />
            <Logo className="text-[#f05032]" icon={faGitAlt} label="GIT" />
            <div className="flex flex-col text-center items-center justify-center">
              <img
                src={typescriptLogo}
                alt=""
                className="object-contain h-25"
              />
              <p className="font-[Montserrat] text-xl font-light tracking-[0.1854em] mt-4.25">
                TYPESCRIPT
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 max-w-3xl mx-auto mt-18.5">
            <h3 className="subheading2Style">OTHER SKILLS:</h3>
          </div>
          <div className="grid grid-cols-4 max-w-3xl mx-auto gap-x-20 mt-18.75 gap-y-20.5">
            <Logo
              className="text-[#1f4e9d]"
              icon={faFlagUsa}
              label="ENGLISHC1"
            />
            <Logo className="text-[#f89820]" icon={faJava} label="JAVA" />
            <Logo className="text-[#3776ab]" icon={faPython} label="PYTHON" />
            <Logo className="text-[#555555]" icon={faBroom} label="CLEANING" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutMe;
