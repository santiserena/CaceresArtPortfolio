import React from "react";
import { useSelector } from "react-redux";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  HeaderContainer,
  StyledIcon,
  TitleContainer,
  MainTitle,
  MenuBtnsContainer,
  MenuBtnsContainerMobile,
  ContactIcon,
  SliderBtn,
  IconsContainer,
} from "./HeaderStyles";

function Header() {
  const deviceType = useSelector((state) => state.deviceTypeSt);

  return (
    <div>
      <HeaderContainer>
        <TitleContainer>
          <StyledIcon icon={faBriefcase} />
          <MainTitle>Portfolio</MainTitle>
        </TitleContainer>
        {deviceType !== "mobile" && (
          <MenuBtnsContainer>
            <SliderBtn>About</SliderBtn>
            <SliderBtn>Gallery</SliderBtn>
            <SliderBtn>Contact</SliderBtn>
          </MenuBtnsContainer>
        )}
        <IconsContainer>
          <ContactIcon icon={faInstagram} />
          <ContactIcon icon={faWhatsapp} />
        </IconsContainer>
      </HeaderContainer>
      {deviceType === "mobile" && (
        <MenuBtnsContainerMobile>
          <SliderBtn>About</SliderBtn>
          <SliderBtn>Gallery</SliderBtn>
          <SliderBtn>Contact</SliderBtn>
        </MenuBtnsContainerMobile>
      )}
    </div>
  );
}

export default Header;
