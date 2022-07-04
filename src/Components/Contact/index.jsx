import { Container } from "./style";
import { useEffect } from "react";
import emailjs from "emailjs-com";
import ContactForm from "../Form";
import linkedin from "../../Assets/linkedin.png";
import whatsapp from "../../Assets/whatsapp.png";
import email from "../../Assets/email.png";
import github from "../../Assets/github.png";
import user from "../../Assets/user.png";

const Contact = () => {
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href =
        "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);

  return (
    <Container>
      <h1>Contato</h1>
      <div className="infos">
        <div className="dados">
          <div className="item">
            <a>
              <img alt="user" src={user} />
              Daniel Leira
            </a>
          </div>
          <div className="item">
            <a>
              <img alt="whatsapp" src={whatsapp} />
              (21)98816-0902
            </a>
          </div>
          <div className="item">
            <a href="mailto:daniel7leira@gmail.com">
              <img alt="email" src={email} />
              daniel_leira@hotmail.com
            </a>
          </div>
          <div className="item">
            <a href="https://linkedin.com/in/leira-daniel">
              <img alt="linkedin" src={linkedin} />
              Linkedin
            </a>
          </div>
          <div className="item">
            <a href="https://github.com/danielkleira">
              <img alt="github" src={github} />
              GitHub
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </Container>
  );
};

export default Contact;
