import React from "react";
/* borrar - cambiar nombre xxx */
import { MainTitle, ContactIconxxx } from "./FooterStyles";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>
      <MainTitle>Footer rojo</MainTitle>
      <ContactIconxxx icon={faInstagram} />
      <ContactIconxxx icon={faWhatsapp} />
    </div>
  );
}
export default Footer;
