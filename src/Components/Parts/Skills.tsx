import Timeline from "../Timeline";
import SkillCard from "../Cards/Skill_card";

const Skills = () => {
  const dataIASkills = [
    { skillName: "PYTHON", rating: 4, logo: "logo_python", color: "#ffd849" },
    { skillName: "GIT", rating: 3, logo: "logo_git", color: "#f05133" },
    { skillName: "Polars", rating: 3, logo: "logo_polars", color: "#2278FA" },
    { skillName: "Selenium", rating: 4, logo: "logo_selenium", color: "#00B500" },
    { skillName: "Streamlit", rating: 3, logo: "logo_streamlit", color: "#FE4C4B" },
    { skillName: "Scikit Learn", rating: 2, logo: "logo_scikit_learn", color: "#F89A39" },
    { skillName: "SQL", rating: 3, logo: "logo_sql", color: "#00546b" },
  ];

  const webSkills = [
    { skillName: "React", rating: 3, logo: "logo_react", color: "#00dcff" },
    { skillName: "CSS", rating: 4, logo: "logo_css", color: "#0277bd" },
    { skillName: "JavaScript", rating: 2, logo: "logo_javascript", color: "#dcb900" },
    { skillName: "PHP", rating: 3, logo: "logo_php", color: "#777bb3" },
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
