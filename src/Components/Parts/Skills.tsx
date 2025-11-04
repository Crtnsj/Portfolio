import Timeline from "../Timeline";
import SkillCard from "../Cards/Skill_card";

import python_logo from "../../assets/logo_python.png";
import git_logo from "../../assets/logo_git.png";
import polars_logo from "../../assets/logo_polars.png";
import selenium_logo from "../../assets/logo_selenium.png";
import streamlit_logo from "../../assets/logo_streamlit.png";
import scikit_learn_logo from "../../assets/logo_scikit_learn.png";
import sql_logo from "../../assets/logo_sql.png";
import react_logo from "../../assets/logo_react.png";
import css_logo from "../../assets/logo_css.png";
import javascript_logo from "../../assets/logo_javascript.png";
import php_logo from "../../assets/logo_php.png";

const Skills = () => {
  const dataIASkills = [
    { skillName: "PYTHON", rating: 4, logo: python_logo, color: "#ffd849" },
    { skillName: "GIT", rating: 3, logo: git_logo, color: "#f05133" },
    { skillName: "Polars", rating: 3, logo: polars_logo, color: "#2278FA" },
    { skillName: "Selenium", rating: 4, logo: selenium_logo, color: "#00B500" },
    { skillName: "Streamlit", rating: 3, logo: streamlit_logo, color: "#FE4C4B" },
    { skillName: "Scikit Learn", rating: 2, logo: scikit_learn_logo, color: "#F89A39" },
    { skillName: "SQL", rating: 3, logo: sql_logo, color: "#00546b" },
  ];

  const webSkills = [
    { skillName: "React", rating: 3, logo: react_logo, color: "#00dcff" },
    { skillName: "CSS", rating: 4, logo: css_logo, color: "#0277bd" },
    { skillName: "JavaScript", rating: 2, logo: javascript_logo, color: "#dcb900" },
    { skillName: "PHP", rating: 3, logo: php_logo, color: "#777bb3" },
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
