import React from "react";
import styled from "styled-components";

const MainTitle = styled.h1`
  color: rgb(232, 222, 222);
`;
const MainImg = styled.img`
  width: 100%;
  height: auto;
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

export { MainTitle, MainImg };
