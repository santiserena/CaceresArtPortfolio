import React from "react";
import styled from "styled-components";
const MainImg = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover; /* borrar - Mantiene la relación de aspecto y recorta la imagen */
  object-position: bottom; /* borrar - Alinea la imagen hacia arriba */
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
