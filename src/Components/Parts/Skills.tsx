import Timeline from "../Timeline";

const Skills = () => {
  return (
    <div className=" parts__layout" id="skillPart">
      <Timeline number={2} />
      <div className="rating">
        <div className="skill">
          <div className="logo logo__react">
            5<span>*</span>
          </div>
          <p>React</p>
        </div>
        <div className="skill">
          <div className="logo logo__html">
            8<span>*</span>
          </div>
          <p>HTML</p>
        </div>

        <div className="skill">
          <div className="logo logo__css">
            7<span>*</span>
          </div>
          <p>CSS</p>
        </div>

        <div className="skill">
          <div className="logo logo__scss">
            7<span>*</span>
          </div>
          <p>SASS</p>
        </div>
        <div className="skill">
          <div className="logo logo__javascript">
            5<span>*</span>
          </div>
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <div className="logo logo__java">
            2<span>*</span>
          </div>
          <p>Java</p>
        </div>
        <div className="skill">
          <div className="logo logo__powershell">
            5<span>*</span>
          </div>
          <p>Powershell</p>
        </div>
      </div>
      <p className="complementaryNote">*Niveau de compétance sur 10</p>
    </div>
  );
};
export default Skills;
