import Timeline from "../Timeline";
import CV from "../../assets/CV_Corentin_Sanjuan.pdf";

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
            <strong> BTS SIO</strong>, (Services Informatiques aux
            Organisations) à l'École ISITECH de Lyon, option SLAM (Solutions
            Logicielles et Applications Métier).
            <br />
            <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Enim sed iusto expedita consequatur explicabo iure. Earum provident
            voluptatum eaque sint dolorum architecto, saepe molestiae, quis
            magnam dolores, quidem ratione! Tenetur.
          </p>
          <button className="cvButton">
            <a href={CV} target="_blank">
              Télécharger mon CV
            </a>
          </button>
        </div>
        <div className="about__pic"></div>
      </div>
    </div>
  );
};
export default About;
