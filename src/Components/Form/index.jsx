import React, { useState } from "react";
import { Button } from "@mui/material";
import { Container } from "./style";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/3bde37e0-fb2a-11ec-bc36-e1ea9ccadd33";

const ContactForm = () => {
  return (
    <Container>
      <form action={FORM_ENDPOINT} method="POST" target="_blank">
        <div>
          <label>Nome:</label>
          <input
            type="text"
            placeholder="Seu nome"
            name="name"
            className="nome"
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="email"
            required
          />
        </div>
        <div>
          <label>Mensagem:</label>
          <textarea
            placeholder="Sua mensagem"
            name="message"
            className="textarea"
            required
          />
        </div>
        <div>
          <Button className="botao" type="submit">
            Enviar Mensagem
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default ContactForm;
