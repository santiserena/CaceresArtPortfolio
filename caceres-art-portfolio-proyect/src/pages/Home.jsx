import React, { useEffect } from "react";
import mainImgSrc from "../media/Wolverine.jpg";
import { Button, MainImg } from "./HomeStyles";
import data from "../Data";

function Home() {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div>
      <h1>Portfolio de Emiliano C.</h1>
      <MainImg src={mainImgSrc} alt="mainImg" />
      {data.map((item, index) => (
        <img
          key={index}
          src={item.url}
          alt={item.name}
          /* borrar style */
          style={{ width: "100px", height: "auto", margin: "10px" }} // Estilo para tamaño pequeño
        />
      ))}
      <Button />
    </div>
  );
}

export default Home;
