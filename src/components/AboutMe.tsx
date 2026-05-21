import { PencilRulerIcon } from "lucide-react";
import customHr from "../assets/hr.png";
import SkillCard from "./SkillCard";

const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="h-754.25 pt-35 bg-[radial-gradient(circle,#ffffff_0%,#f3f3f3_45%,#d4d4d4_100%)]"
    >
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
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero expedita in fugit cumque placeat quod sit? Officiis reprehenderit natus, incidunt optio fugiat vitae id ut debitis sapiente! Quibusdam, maiores laboriosam?"
        />
        <SkillCard
          Icon={PencilRulerIcon}
          subheading="DESIGN"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero expedita in fugit cumque placeat quod sit? Officiis reprehenderit natus, incidunt optio fugiat vitae id ut debitis sapiente! Quibusdam, maiores laboriosam?"
        />
        <div className="col-span-2 mx-auto w-1/2">
          <SkillCard
            Icon={PencilRulerIcon}
            subheading="DESIGN"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero expedita in fugit cumque placeat quod sit? Officiis reprehenderit natus, incidunt optio fugiat vitae id ut debitis sapiente! Quibusdam, maiores laboriosam?"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
