import { useState } from "react";
import Project__card from "../Cards/Project_card";
import Timeline from "../Timeline";

const Projects = () => {
  const [cardFocused, setCardFocused] = useState<number>(2);
  const [oldCardFocused, setOldCardFocused] = useState<number>(2);

  const handleClickCard = (position: number) => {
    setOldCardFocused(cardFocused);
    setCardFocused(position);
  };

  const handleIndex = (position: number) => {
    if (position === cardFocused) {
      return `index2 index2--${cardFocused} from--${oldCardFocused}`;
    } else if (position === cardFocused + 1 || position === cardFocused - 1) {
      return `index1 index1--${cardFocused} from--${oldCardFocused}`;
    } else if (position === cardFocused + 2 || position === cardFocused - 2) {
      return `index0 index0--${cardFocused} from--${oldCardFocused}`;
    }
  };

  return (
    <div className=" parts__layout--projects" id="projectsPart">
      <div className="layout__largeScreen">
        <Timeline number={3} />
      </div>
      <div className="projects">
        <h2>Projets réalisés à l'école</h2>
        <Project__card type="Badg-Heure" />
        <Project__card type="GeStionB" />
        <Project__card type="Other" />
        <h2>Projets réalisés en entreprise</h2>
        <Project__card type="GLPI-GBH" />
      </div>

      <div className="projects__largeScreen">
        <h2>Projets réalisés à l'école</h2>
        <div className="carousel">
          <button className={`card__1 ${handleIndex(1)} GeStionB`} onClick={() => handleClickCard(1)}>
            <Project__card type="GeStionB" />
          </button>
          <button className={`card__2 ${handleIndex(2)} Badg-Heure`} onClick={() => handleClickCard(2)}>
            <Project__card type="Badg-Heure" />
          </button>
          <button className={`card__3 ${handleIndex(3)} Other`} onClick={() => handleClickCard(3)}>
            <Project__card type="Other" />
          </button>
        </div>
        <h2>Projets réalisés en entreprise</h2>
        <Project__card type="GLPI-GBH" />
      </div>
    </div>
  );
};

export default Projects;
