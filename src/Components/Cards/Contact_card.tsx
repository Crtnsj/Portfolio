import emailSvg from "../../assets/email.svg";
import phoneSvg from "../../assets/phone.svg";
import linkedinSvg from "../../assets/linkedin.svg";
import locateSvg from "../../assets/locate.svg";
import githubSvg from "../../assets/github.svg";

type Props = {
  type: string;
};

const ContactCard = (props: Props) => {
  const handleContent = (type: string) => {
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
  const handleLink = (type: string) => {
    if (type === "github") {
      return "https://github.com/Crtnsj";
    } else if (type === "locate") {
      return "https://maps.app.goo.gl/4WKgkBdGmwxDt2eP9";
    } else if (type === "linkedin") {
      return "https://www.linkedin.com/in/corentin-sanjuan-1b3191234/";
    }
  };

  return (
    <a className="contact__card" href={handleLink(props.type)} target="_blank">
      {props.type === "phone" && <img src={phoneSvg} alt="phone" />}
      {props.type === "github" && <img src={githubSvg} alt="github" />}
      {props.type === "email" && <img src={emailSvg} alt="email" />}
      {props.type === "locate" && <img src={locateSvg} alt="locate" />}
      {props.type === "linkedin" && <img src={linkedinSvg} alt="linkedin" />}
      {handleContent(props.type)}
    </a>
  );
};

export default ContactCard;
