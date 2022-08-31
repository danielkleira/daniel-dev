import { Container } from "./style";
import { useEffect } from "react";

import { AiOutlineWhatsApp } from "react-icons/ai";
import {BiUserCircle } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import {HiOutlineDocumentText } from "react-icons/hi"



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
    <Container id="contact">
      <h1>Contatos</h1>
      <div className="infos">
      <ContactForm />
        <div className="dados">
          <div className="item">
            <a>
              <BiUserCircle/>
              Daniel Leira
            </a>
          </div>
          <div className="item">
            <a>
              <AiOutlineWhatsApp/>
              (21)98816-0902
            </a>
          </div>
          <div className="item">
            <a href="mailto:daniel7leira@gmail.com">
              <AiOutlineMail/>
              daniel_leira@hotmail.com
            </a>
          </div>
          <div className="item">
            <a href="https://linkedin.com/in/leira-daniel">
              <AiFillLinkedin/>
              Linkedin
            </a>
          </div>
          <div className="item">
            <a href="https://github.com/danielkleira">
              <AiFillGithub />
              GitHub
            </a>
          </div>
          <div className="item">
            <a href="https://drive.google.com/file/d/1QsNgqW4XTcT5wLOOJQr1RcWL-D0gOjph/view?usp=sharing">
              <HiOutlineDocumentText/>
              Curriculo
            </a>
          </div>
        </div>
        
      </div>
    </Container>
  );
};

export default Contact;
