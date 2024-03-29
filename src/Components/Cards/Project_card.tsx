type Props = {
  type: String;
};
import Badgheure_rapport from "../../assets/Rapport_SANJUAN_BADG-HEURE.pdf";
import GLPIGBH_rapport from "../../assets/Rapport_GLPI_GBH_censured.pdf";
import GeStionB_rapport from "../../assets/Rapport_GeStionB.pdf";
import GStockB_rapport from "../../assets/Rapport_GStockB.pdf";
import comingSoon from "../../assets/comingSoon.gif";

const Project__card = (props: Props) => {
  const handleContent = (type: String) => {
    if (type === "Badg-Heure") {
      return (
        <p>
          Badg-Heure est une application web développée à l'aide de la MERN Stack (MongoDB, Express.js, React, Node.js). Cette application a
          pour but de proposer un moyen de retracer les horaires de présence de chaque employé d'une entreprise.
          <br />
          <br />
          Son fonctionnement est simple : lorsqu'un employé arrive le matin au bureau, il ouvre Badg-Heure, se connecte et déclare sa
          présence à l'aide d'un bouton. Une page de rétrospection lui est également proposée afin qu'il puisse consulter lui-même ses
          horaires.
          <br />
          <br />
          Du côté d'un employé des ressources humaines, il peut créer des utilisateurs et visualiser la rétrospection de chaque employé.
        </p>
      );
    } else if (type === "GeStionB") {
      return (
        <p>
          GeStionB est un logiciel développé en C#, .NET, Windows Forms et MySQL spécialement conçu pour les cabinets médicaux. Son objectif
          principal est la gestion d'une base de données de patients avec leurs allergies et antécédents, ainsi que d'une base de données de
          médicaments incluant les contre-indications.
          <br />
          <br />
          Le logiciel permet également la création d'ordonnances médicales en prenant en compte les contre-indications spécifiques des
          médicaments prescrits, ainsi que les allergies ou antécédents du patient. Il offre également la possibilité de générer des
          fichiers PDF à partir des ordonnances.
          <br />
          <br />
          La connexion à GeStionB est sécurisée et les mots de passe des utilisateurs sont cryptés dans la base de données pour garantir la
          protection des informations sensibles.
        </p>
      );
    } else if (type === "GStockB") {
      return (
        <p>
          Ce projet vise à permettre à un laboratoire pharmaceutique GSB de gérer ses stocks de médicaments, matériels ou autres. Ce
          logiciel comporte une base de données de stocks, de commandes afin pouvoir les entrées ou sortie du stock, il y a également une
          base d’utilisateur qui est gérée. GStockB a pour objectif d’assurer la quantité toujours possitive d’un stock et permet le
          controle des entrées et sorties avec la validation d’un “administrateur”.
          <br />
          <br />
          Pour réaliser ces fonctionnalités, le logiciel fournit une interface conviviale et intuitive permettant d'ajouter, modifier et
          consulter les commandes et les stocks. Un aspect sécurité et la confidentialité des données est mis en avant, en mettant en place
          des mesures de protection appropriées, telles que l'authentification des utilisateurs et le chiffrement des données sensibles tels
          que les mots de passe.
        </p>
      );
    } else if (type === "Other") {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            margin: "1rem",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h2>Projet en cours de développement</h2>
          <img src={comingSoon} alt="" />
        </div>
      );
    } else if (type === "GLPI-GBH") {
      return (
        <p style={{ color: "#fff" }}>
          Ce projet a pour but de permettre au pôle informatique de gérer le parc informatique. Cependant, ce projet n'est pas simplement un
          serveur GLPI lambda. J'ai apporté une personnalisation complète du logiciel.
          <br />
          <br />
          J'ai effectué une rétro-ingénierie du programme open-source de GLPI afin d'apporter les fonctionnalités souhaitées et les
          modifications esthétiques nécessaires.
        </p>
      );
    }
  };
  return (
    <div className={`projects__card card_${props.type}`}>
      <div className={`logo-projects logo-projects__${props.type}`}></div>
      {handleContent(props.type)}
      {props.type === "Badg-Heure" ? (
        <div className="buttonsLayout">
          <a target="_blank" href="https://github.com/Crtnsj/BADG-HEURE_front" className="buttonSource">
            Source : front
          </a>
          <a target="_blank" href="https://github.com/Crtnsj/BADG-HEURE_api" className="buttonSource">
            Source : api
          </a>
          <a target="_blank" href={Badgheure_rapport} className="buttonSource">
            Rapport
          </a>
        </div>
      ) : null}
      {props.type === "GeStionB" ? (
        <div className="buttonsLayout">
          <a target="_blank" href="https://github.com/Crtnsj/GeStionB" className="buttonSource">
            Code source
          </a>
          <a target="_blank" href={GeStionB_rapport} className="buttonSource">
            Rapport
          </a>
        </div>
      ) : null}
      {props.type === "GStockB" ? (
        <div className="buttonsLayout">
          <a target="_blank" href="https://github.com/Crtnsj/GStockB" className="buttonSource">
            Code source
          </a>
          <a target="_blank" href={GStockB_rapport} className="buttonSource">
            Rapport
          </a>
        </div>
      ) : null}
      {props.type === "GLPI-GBH" ? (
        <div style={{ flexDirection: "column" }} className="buttonsLayout">
          <a target="_blank" href={GLPIGBH_rapport} className="buttonSource">
            Rapport
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default Project__card;
