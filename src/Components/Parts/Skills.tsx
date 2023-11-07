import Timeline from "../Timeline";

const Skills = () => {
  return (
    <div className="skills parts__layout" id="skillPart">
      <Timeline number={2} />
      <div className="rating">
        <div className="skill">
          <div className="logo logo__react">5</div>
          <p>React</p>
        </div>
        <div className="skill">
          <div className="logo logo__html">8</div>
          <p>HTML</p>
        </div>

        <div className="skill">
          <div className="logo logo__css">7</div>
          <p>CSS</p>
        </div>

        <div className="skill">
          <div className="logo logo__scss">7</div>
          <p>SASS</p>
        </div>
      </div>
    </div>
  );
};
export default Skills;
