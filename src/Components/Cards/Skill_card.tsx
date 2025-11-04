interface SkillCardProps {
  skillName: string;
  rating: number;
  logoName: string;
  color: string;
}

const SkillCard = ({ skillName, rating, logoName, color }: SkillCardProps) => {
  const width = 100 - (5 - rating) * 20;
  return (
    <div className="skill">
      <div className="logo" style={{ backgroundImage: `url("../src/assets/logo_${logoName}.png")` }}></div>
      <div className="progressBar" style={{ "--bar-color": color, "--bar-width": `${width}%` } as React.CSSProperties}></div>
      <p>
        {skillName}: {rating}/5
      </p>
    </div>
  );
};

export default SkillCard;
