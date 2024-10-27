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
  border: solid blue 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledIcon = styled(FAIcon)`
  padding-left: 0.5em;
  padding-right: 0.2em;
  font-size: 1.5rem; // size
  color: rgb(232, 222, 222);
`;

const MainTitle = styled.h1`
  color: rgb(232, 222, 222);
`;

/* contact buttons container */
const ContactBtnsContainer = styled.div`
  border: solid blue 2px;
  display: flex;
  align-items: center;
  color: rgb(232, 222, 222);
`;

const SliderBtn = styled.button`
  background-color: yellow;
`;

/* icons container */
const IconsContainer = styled.div`
  border: solid blue 2px;
  display: flex;
  align-items: center;
`;

const ContactIcon = styled(FAIcon)`
  border: solid brown 2px;
  font-size: 1.5rem; // size
  color: rgb(232, 222, 222);
  box-sizing: border-box;
`;

export {
  HeaderContainer,
  StyledIcon,
  TitleContainer,
  MainTitle,
  ContactBtnsContainer,
  SliderBtn,
  IconsContainer,
  ContactIcon,
};
