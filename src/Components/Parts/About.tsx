import Timeline from "../Timeline";

const About = () => {
  return (
    <div className="about parts__layout" id="aboutPart">
      <Timeline number={1} />
      <div className="about__layout">
        <div className="about__text--layout">
          <h2>Bonjour, je m'appelle Corentin SAN JUAN</h2>
          <p className="about__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            quas. Unde ex autem officia numquam totam nihil facere illo
            repellendus fugiat, hic dolore provident cupiditate debitis
            asperiores nulla, voluptate voluptatum. <br />
            <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Enim sed iusto expedita consequatur explicabo iure. Earum provident
            voluptatum eaque sint dolorum architecto, saepe molestiae, quis
            magnam dolores, quidem ratione! Tenetur.
          </p>
          <button className="cvButton">
            <a
              href="/Portfolio/src/assets/CV_Corentin_Sanjuan.pdf"
              target="_blank"
            >
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
