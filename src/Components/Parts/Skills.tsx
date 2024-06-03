import Timeline from "../Timeline";

const Skills = () => {
  return (
    <div className=" parts__layout" id="skillPart">
      <Timeline number={2} />
      <div className="rating">
        <div className="skill">
          <div className="logo logo__react"></div>
          <div className="progressBar progressBar--react"></div>
          <p>React: 2/5</p>
        </div>
        <div className="skill">
          <div className="logo logo__html"></div>
          <div className="progressBar progressBar--html"></div>
          <p>HTML: 4/5</p>
        </div>
        <div className="skill">
          <div className="logo logo__css"></div>
          <div className="progressBar progressBar--css"></div>
          <p>CSS: 3/5</p>
        </div>
        <div className="skill">
          <div className="logo logo__scss"></div>
          <div className="progressBar progressBar--scss"></div>
          <p>SASS: 3/5</p>
        </div>
        <div className="skill">
          <div className="logo logo__javascript"></div>
          <div className="progressBar progressBar--javascript"></div>
          <p>JavaScript: 2/5</p>
        </div>
        <div className="skill">
          <div className="logo logo__java"></div>
          <div className="progressBar progressBar--java"></div>
          <p>Java: 1/5</p>
        </div>
        <div className="skill">
          <div className="logo logo__powershell"></div>
          <div className="progressBar progressBar--powershell"></div>
          <p>Powershell: 2/5</p>
        </div>
        <div className="skill">
          <div className="logo logo__c-sharp"></div>
          <div className="progressBar progressBar--c-sharp"></div>
          <p>C#: 3/5</p>
        </div>
        <div className="skill">
          <div className="logo logo__php"></div>
          <div className="progressBar progressBar--php"></div>
          <p>PHP: 3/5</p>
        </div>
        <div className="skill">
          <div className="logo logo__sql"></div>
          <div className="progressBar progressBar--sql"></div>
          <p>SQL: 2/5</p>
        </div>
        <div className="skill">
          <div className="logo logo__python"></div>
          <div className="progressBar progressBar--python"></div>
          <p>PYTHON: 2/5</p>
        </div>
        <div className="skill">
          <div className="logo logo__node"></div>
          <div className="progressBar progressBar--node"></div>
          <p>NODE JS: 3/5</p>
        </div>
        <div className="skill">
          <div className="logo logo__git"></div>
          <div className="progressBar progressBar--git"></div>
          <p>GIT: 2/5</p>
        </div>
      </div>
    </div>
  );
};
export default Skills;
