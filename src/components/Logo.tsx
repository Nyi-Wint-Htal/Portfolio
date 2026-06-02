import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type LogoProps = {
  icon: IconDefinition;
  label: string;
  className?: string;
};

const Logo = ({ icon, label, className = "" }: LogoProps) => {
  return (
    <div className="flex flex-col items-center">
      <FontAwesomeIcon
        icon={icon}
        className={`text-[64px] md:text-[100px] ${className}`}
      />
      <p className="mt-4.25 max-w-full wrap-break-word text-center font-[Montserrat] text-sm font-light tracking-[0.12em] md:text-xl md:tracking-[0.1854em]">
        {label}
      </p>
    </div>
  );
};

export default Logo;
