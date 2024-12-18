import styled from "styled-components";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";

/* general div */
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

/* icon and portfolio container */
const TitleContainer = styled.div`
  border: solid green 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledIcon = styled(FAIcon)`
  padding-left: 0.5em;
  padding-right: 0.2em;
  font-size: 1rem; // size
  color: rgb(232, 222, 222);
`;

const MainTitle = styled.h1`
  color: rgb(232, 222, 222);
`;

/* contact buttons container */
const MenuBtnsContainerDesktop = styled.div`
  border: solid blue 2px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40%;
`;

/* contact buttons container */
const MenuBtnsContainerMobile = styled.div`
  border: solid violet 2px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgb(232, 222, 222);
`;

const SliderBtn = styled.button`
  background-color: var(--themeColor);
  color: white;
  border: none;
  &:hover {
    color: yellow;
  }
  /* desktop */
  font-size: 1.5vw;
  /* tablet */
  @media (max-width: 900px) {
    font-size: 2.5vw;
    color: pink;
  }
  /* mobile */
  @media (max-width: 450px) {
    font-size: 5vw;
    color: aqua;
  }
`;

/* icons container */
const LanguageSettingContainer = styled.div`
  border: solid blue 2px;
  display: flex;
  align-items: center;
`;

const Flag = styled.img`
  margin-right: 7px;
  filter: ${(props) => (props.selected ? "none" : "grayscale(80%)")};
  border: ${(props) => (props.selected ? "1.5px solid white" : "none")};
  /* desktop */
  width: 4vw;
  @media (max-width: 900px) {
    width: 6.5vw;
  }
  /* mobile */
  @media (max-width: 450px) {
    width: 10vw;
  }
`;

export {
  HeaderContainer,
  StyledIcon,
  TitleContainer,
  MainTitle,
  MenuBtnsContainerDesktop,
  MenuBtnsContainerMobile,
  SliderBtn,
  LanguageSettingContainer,
  Flag,
};
