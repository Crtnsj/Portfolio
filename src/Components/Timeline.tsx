// import { useState, useEffect } from "react";

type Props = {
  number: number;
};

const Timeline = (props: Props) => {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };

  //   handleResize(); // Appel initial pour détecter la taille de l'écran au chargement de la page

  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const partsAuto = (number: number) => {
    if (number === 1) {
      return "A propos de moi";
    } else if (number === 2) {
      return "Mes Compétences";
    } else if (number === 3) {
      return "Mes Projets";
    } else if (number === 4) {
      return "Ma veille technologique";
    } else if (number === 5) {
      return "Me contacter";
    } else if (number === 6) {
      return "Fin";
    }
  };

  return (
    <div className="timeline__layout ">
      <h2 className="timeline__number">0{props.number}</h2>
      <h2 className="timeline__hyphen"> - </h2>
      <h2
        className={`timeline__actualPart timeline__actualPart--${props.number}`}
      >
        {partsAuto(props.number)}
      </h2>
      <p className="timeline__nextPart">
        {props.number == 5 ? "" : `0${props.number + 1} - `}{" "}
        {partsAuto(props.number + 1)}
      </p>
    </div>
  );
};

export default Timeline;
