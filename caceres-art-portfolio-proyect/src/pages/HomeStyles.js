import React from "react";
import styled from "styled-components";
const MainImg = styled.img`
  width: 100%;
  height: auto;
  margin: 10px;
`;

const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export { MainImg, Button };
