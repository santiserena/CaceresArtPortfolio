import React, { useEffect } from "react";
import { MainTitle } from "./GalleryStyles";
import data from "../Data";

function Gallery() {
  useEffect(() => {
    console.log("data desde gallery:", data);
  }, []);

  return (
    <div>
      <MainTitle>Gallery violet</MainTitle>
      {data.map((item, index) => (
        <img
          key={index}
          src={item.url}
          alt={item.name}
          style={{ width: "100px", height: "auto", margin: "10px" }} // borrar estilo para tamaño pequeño
        />
      ))}
    </div>
  );
}
export default Gallery;
