type Props = {
  type: String;
};
import Badgheure_rapport from "../../assets/Rapport_SANJUAN_BADG-HEURE.pdf"

const Project__card = (props: Props) => {
  const handleContent = (type: String) => {
    if (type === "Badg-Heure") {
      return "Badg-Heure est une application web developpée à l'aide de la MERN Stack (MongoDB, Express.js, React, Node.js). Cette application a pour but de proposer un moyen de retacer les horaires de présence de chaques employé d'une entreprise. Son fonctionnement est simple, un employé arrive le matin au bureau, il ouvre Badg-Heure, se connecte, et declare sa présence à l'aide d'un bouton. Une page de retrospection lui est également proposée afin qu'il puisse consulte lui-même ses horaires. Du coté d'un employé des resourcs humaines, il peux créer des utilisaateur et peut visualiser la retrospection de chaques employés." ;
    } else if (type === "GestionB") {
      return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quas. Unde ex autem officia numquam totam nihil facere illo repellendus fugiat, hic dolore provident cupiditate debitis asperiores nulla, voluptate voluptatum.";
    } else if (type === "Other") {
      return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quas. Unde ex autem officia numquam totam nihil facere illo repellendus fugiat, hic dolore provident cupiditate debitis asperiores nulla, voluptate voluptatum.";
    }
  };
  return (
    <div className="projects__card">
      <h2>{props.type}</h2>
      <p>{handleContent(props.type)}</p>
      {props.type === "Badg-Heure" ? (<div className="buttonsLayout"><a target="_blank" href="https://github.com/Crtnsj/BADG-HEURE_front" className="buttonSource">Source : front</a> <a target="_blank" href="https://github.com/Crtnsj/BADG-HEURE_api"className="buttonSource">Source : api</a><a target="_blank" href={Badgheure_rapport }className="buttonSource">Rapport</a></div>): null}
    </div>
  );
};

export default Project__card;
