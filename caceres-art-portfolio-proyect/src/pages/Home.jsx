import React, { useEffect } from "react";
import mainImgSrc from "../media/handDrawing.jpg";
import { MainTitle, MainImg } from "./HomeStyles";
import data from "../Data";

function Home() {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div>
      <MainTitle>Portfolio de Emiliano C.</MainTitle>
      <MainImg src={mainImgSrc} alt="mainImg" />
      {data.map((item, index) => (
        <img
          key={index}
          src={item.url}
          alt={item.name}
          style={{ width: "100px", height: "auto", margin: "10px" }} // Estilo para tamaño pequeño
        />
      ))}
    </div>
  );
}

export default Home;
