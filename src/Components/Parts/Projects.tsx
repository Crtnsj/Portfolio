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
        <Project__card type="badg-heure" />
        <img className="projects__arrow" src="../src/assets/line1.svg" />
        <img
          className="projects__arrow projects__arrow--2"
          src="../src/assets/line1.svg"
        />
        <Project__card type="GestionB" />
        <Project__card type="Other" />
      </div>

      <div className="carousel">
        <button
          className={`card__1 ${handleIndex(1)}`}
          onClick={() => handleClickCard(1)}
        >
          <Project__card type="GestionB" />
        </button>
        <button
          className={`card__2 ${handleIndex(2)}`}
          onClick={() => handleClickCard(2)}
        >
          <Project__card type="badg-heure" />
        </button>
        <button
          className={`card__3 ${handleIndex(3)}`}
          onClick={() => handleClickCard(3)}
        >
          <Project__card type="Other" />
        </button>
      </div>
    </div>
  );
};

export default Projects;
