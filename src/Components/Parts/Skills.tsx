import Timeline from "../Timeline";

const Skills = () => {
  return (
    <div className=" parts__layout" id="skillPart">
      <Timeline number={2} />
      <div className="rating">
        <div className="skill">
          <div className="logo logo__react">
          </div>
          <div className="progressBar progressBar--react"></div>
          <p>React</p>
        </div>
        <div className="skill">
          <div className="logo logo__html">
          </div>
          <div className="progressBar progressBar--html"></div>
          <p>React</p>
        </div>
        <div className="skill">
          <div className="logo logo__css">
          </div>
          <div className="progressBar progressBar--css"></div>
          <p>React</p>
        </div>
        <div className="skill">
          <div className="logo logo__scss">
          </div>
          <div className="progressBar progressBar--scss"></div>
          <p>React</p>
        </div>
        <div className="skill">
          <div className="logo logo__javascript">
          </div>
          <div className="progressBar progressBar--javascript"></div>
          <p>React</p>
        </div>
        <div className="skill">
          <div className="logo logo__java">
          </div>
          <div className="progressBar progressBar--java"></div>
          <p>React</p>
        </div>
        <div className="skill">
          <div className="logo logo__powershell">
          </div>
          <div className="progressBar progressBar--powershell"></div>
          <p>React</p>
        </div>
      </div>
    </div>
  );
};
export default Skills;
