import Timeline from "../Timeline";
import SkillCard from "../Cards/Skill_card";

const Skills = () => {
  const dataIASkills = [
    { skillName: "PYTHON", rating: 4, logoName: "python", color: "#ffd849" },
    { skillName: "GIT", rating: 3, logoName: "git", color: "#f05133" },
    { skillName: "Polars", rating: 3, logoName: "polars", color: "#2278FA" },
    { skillName: "Selenium", rating: 4, logoName: "selenium", color: "#00B500" },
    { skillName: "Streamlit", rating: 3, logoName: "streamlit", color: "#FE4C4B" },
    { skillName: "Scikit Learn", rating: 2, logoName: "scikit_learn", color: "#F89A39" },
    { skillName: "SQL", rating: 3, logoName: "sql", color: "#00546b" },
  ];

  const webSkills = [
    { skillName: "React", rating: 3, logoName: "react", color: "#00dcff" },
    { skillName: "CSS", rating: 4, logoName: "css", color: "#0277bd" },
    { skillName: "JavaScript", rating: 2, logoName: "javascript", color: "#dcb900" },
    { skillName: "PHP", rating: 3, logoName: "php", color: "#777bb3" },
  ];

  return (
    <div className=" parts__layout" id="skillPart">
      <Timeline number={2} />
      <div>
        <h2>Data/IA :</h2>
        <div className="rating">
          {dataIASkills.map((skill) => (
            <SkillCard key={skill.skillName} {...skill} />
          ))}
        </div>
        <br />
        <h2>Web :</h2>
        <div className="rating">
          {webSkills.map((skill) => (
            <SkillCard key={skill.skillName} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Skills;
