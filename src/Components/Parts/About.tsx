import Timeline from "../Timeline";
import CV from "../../assets/CV_Corentin_Sanjuan.pdf";
import tableauCompentence from "../../assets/CV_Corentin_Sanjuan.pdf";

const About = () => {
  return (
    <div className="about parts__layout" id="aboutPart">
      <Timeline number={1} />
      <div className="about__layout">
        <div className="about__text--layout">
          <h2>Mon profil</h2>
          <p className="about__text">
            Bonjour, je m'appelle <strong>Corentin San Juan</strong>,
            <br />
            <br />
            Je suis étudiant en deuxieme année de
            <strong> BTS SIO</strong>, (Services Informatiques aux Organisations) à l'École ISITECH de Lyon, option SLAM (Solutions Logicielles et Applications Métier).
            <br />
            <br /> Actuellement toujours en études je vous presente par le biais de mon portfolio mes experience professionnelles et mes différents projets réalisés au cours de mes deux années de BTS
            SIO option SLAM
          </p>
          <div>
            <button className="cvButton">
              <a href={CV} target="_blank">
                Télécharger mon CV
              </a>
            </button>
            <button className="cvButton tableauCompetence">
              <a href={tableauCompentence} target="_blank">
                Ma fiche de compétence
              </a>
            </button>
          </div>
        </div>
        <div className="about__pic"></div>
      </div>
      <div></div>
      <div className="experiencePro">
        <h2>Mes expériences professionnelles</h2>
        <div>
          <div className="logo_exp logo_gbh"></div>
          <div className="content_exp">
            <h3>Administrateur systemes et réseaux</h3>
            <p>Grand Bourg Habitat - 01000 Bourg-en-Bresse | Août 2022 - Aujourd’hui</p>
            <li>Support aux utilisateurs</li>
            <li>Migration vers un nouveaux plan d’adressage IP</li>
            <li>Création et personnalisation d’un GLPI</li>
            <li>Participation aux projets du Service Informatique </li>
          </div>
        </div>
        <div>
          <div className="logo_exp logo_acg"></div>
          <div className="content_exp">
            <h3>Technicien systèmes et réseaux</h3>
            <p>ACG-Synergies - 01000 Bourg-en-Bresse | Janvier 2022 - Mars 2022 | Stage</p>
            <li>Maintien en Condition Opérationnel (MCO) de l’infrastructure</li>
            <li>Recherche et mise en place d’outils et de procédures pour améliorer le MCO</li>
          </div>
        </div>
        <div>
          <div className="logo_exp logo_pref"></div>
          <div className="content_exp">
            <h3>Technicien systèmes et réseaux</h3>
            <p>Préfecture de l'AIN - 01000 Bourg-en-Bresse | Mai 2021 - Juillet 2021 | Stage</p>
            <li>Déploiement de postes informatiques</li>
            <li>Gestion de tickets</li>
            <li>Gestion d’inventaire.</li>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
