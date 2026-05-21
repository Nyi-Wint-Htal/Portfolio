import type { LucideIcon } from "lucide-react";

type SkillCardProps = {
  subheading: string;
  description: string;
  Icon: LucideIcon;
};

const SkillCard = ({ Icon, subheading, description }: SkillCardProps) => {
  return (
    <div className="relative">
      <Icon className="absolute size-13 opacity-5 -translate-y-2 -translate-x-8" />
      <div>
        <h3 className="subheadingStyle">{subheading}</h3>
        <p className="max-w-107.75 max-h-26.25 mt-1 font-light text-[14px] font-[Open_Sans]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
