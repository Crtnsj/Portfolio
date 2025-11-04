interface SkillCardProps {
  skillName: string;
  rating: number;
  logo: string;
  color: string;
}

const SkillCard = ({ skillName, rating, logo, color }: SkillCardProps) => {
  const logo_obj = new URL(`../../assets/${logo}.png`, import.meta.url).href;

  const width = 100 - (5 - rating) * 20;
  return (
    <div className="skill">
      <div className="logo" style={{ backgroundImage: `url(${logo_obj})` }}></div>
      <div className="progressBar" style={{ "--bar-color": color, "--bar-width": `${width}%` } as React.CSSProperties}></div>
      <p>
        {skillName}: {rating}/5
      </p>
    </div>
  );
};

export default SkillCard;
