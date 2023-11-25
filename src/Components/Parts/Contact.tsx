import Contact__card from "../Cards/Contact_card";
import Timeline from "../Timeline";

const Contact = () => {
  return (
    <div className=" parts__layout parts__layout--contact" id="contactPart">
      <Timeline number={5} />
      <div className="contact__cardLayout">
        <Contact__card type="phone" />
        <Contact__card type="github" />
        <Contact__card type="email" />
        <Contact__card type="locate" />
        <Contact__card type="linkedin" />
      </div>
    </div>
  );
};

export default Contact;
