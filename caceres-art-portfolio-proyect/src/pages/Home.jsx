import React, { useEffect } from "react";
import Button from "./HomeStyles";
import data from "../Data";

function Home() {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div>
      <h1>Portfolio de Emiliano C.</h1>
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
