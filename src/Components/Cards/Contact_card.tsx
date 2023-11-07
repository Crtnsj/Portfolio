type Props = {
  type: String;
};
const Contact__card = (props: Props) => {
  const handleContent = (type: String) => {
    if (type === "phone") {
      return "+33 6 84 56 01 82";
    } else if (type === "github") {
      return "Crtnsj";
    } else if (type === "email") {
      return "crtnsj.pro@gmail.com";
    } else if (type === "locate") {
      return "Mâcon";
    } else if (type === "linkedin") {
      return "Corentin Sanjuan";
    }
  };
  return (
    <div className="contact__card">
      <img src={`../src/assets/${props.type}.svg`} />
      {handleContent(props.type)}
    </div>
  );
};

export default Contact__card;
