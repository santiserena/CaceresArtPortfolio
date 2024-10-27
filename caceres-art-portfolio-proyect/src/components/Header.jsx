import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  HeaderContainer,
  StyledIcon,
  TitleContainer,
  MainTitle,
  ContactBtnsContainer,
  ContactIcon,
  SliderBtn,
  IconsContainer,
} from "./HeaderStyles";

function Header() {
  return (
    <HeaderContainer>
      <TitleContainer>
        <StyledIcon icon={faBriefcase} />
        <MainTitle>Portfolio</MainTitle>
      </TitleContainer>
      <ContactBtnsContainer>
        <SliderBtn>About</SliderBtn>
        <SliderBtn>Gallery</SliderBtn>
        <SliderBtn>Contact</SliderBtn>
      </ContactBtnsContainer>
      <IconsContainer>
        <ContactIcon icon={faInstagram} />
        <ContactIcon icon={faWhatsapp} />
      </IconsContainer>
    </HeaderContainer>
  );
}

export default Header;
