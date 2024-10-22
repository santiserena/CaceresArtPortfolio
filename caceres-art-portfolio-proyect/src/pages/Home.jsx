import React, { useEffect, useState } from "react";
import handDrawingDesktop from "../media/handDrawingDesktop.jpg";
import handDrawingMobile from "../media/handDrawingMobile.jpg";
import { MainTitle, MainImg } from "./HomeStyles";
import data from "../Data";

function Home() {
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    console.log(data);
  }, []);

  return (
    <div>
      <MainTitle>Portfolio</MainTitle>
      <MainImg
        src={isMobile ? handDrawingMobile : handDrawingDesktop}
        alt="mainImg"
      />
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
export default Home;
