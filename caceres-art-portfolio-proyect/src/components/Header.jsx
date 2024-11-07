import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import enFlag from "../media/enFlag.jpg";
import esFlag from "../media/esFlag.jpg";

import { faBriefcase } from "@fortawesome/free-solid-svg-icons"; // Importa faFlag para usar los íconos de las banderas
import {
  HeaderContainer,
  StyledIcon,
  TitleContainer,
  MainTitle,
  MenuBtnsContainerDesktop,
  MenuBtnsContainerMobile,
  SliderBtn,
  LanguageSettingContainer,
  Flag,
} from "./HeaderStyles";

function Header() {
  const deviceType = useSelector((state) => state.deviceTypeSt);
  const [selectedFlag, setSelectedFlag] = useState("en");

  useEffect(() => {
    console.log("Idioma seleccionado:", selectedFlag);
  }, [selectedFlag]);

  const MenuButtons = (
    <>
      <SliderBtn>About</SliderBtn>
      <SliderBtn>Gallery</SliderBtn>
      <SliderBtn>Contact</SliderBtn>
    </>
  );

  return (
    <div>
      <HeaderContainer>
        <TitleContainer>
          <StyledIcon icon={faBriefcase} />
          <MainTitle>Portfolio</MainTitle>
        </TitleContainer>
        {deviceType !== "mobile" && (
          <MenuBtnsContainerDesktop>{MenuButtons}</MenuBtnsContainerDesktop>
        )}
        <LanguageSettingContainer>
          <Flag
            onClick={() => setSelectedFlag("en")}
            selected={selectedFlag === "en"}  // Agregar la condición aquí
            src={enFlag}
            alt="enflag"
          />
          <Flag
            onClick={() => setSelectedFlag("es")}
            selected={selectedFlag === "es"}  // Agregar la condición aquí
            src={esFlag}
            alt="esflag"
          />
        </LanguageSettingContainer>
      </HeaderContainer>
      {deviceType === "mobile" && (
        <MenuBtnsContainerMobile>{MenuButtons}</MenuBtnsContainerMobile>
      )}
    </div>
  );
}

export default Header;
