import type { LucideIcon } from "lucide-react";

type SkillCardProps = {
  subheading: string;
  description: string;
  Icon: LucideIcon;
};

const SkillCard = ({ Icon, subheading, description }: SkillCardProps) => {
  return (
    <div className="relative">
      <Icon className="iconStyle" />
      <div>
        <h3 className="subheadingStyle">{subheading}</h3>
        <p className="skillDescriptionStyle">{description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
