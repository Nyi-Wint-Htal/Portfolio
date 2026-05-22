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
      <FontAwesomeIcon icon={icon} className={`text-[100px] ${className}`} />
      <p className="font-[Montserrat] text-xl font-light tracking-[0.1854em] mt-4.25">
        {label}
      </p>
    </div>
  );
};

export default Logo;
