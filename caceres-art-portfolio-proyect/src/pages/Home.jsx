import React, { useEffect, useState } from "react"; // Importa useEffect y useState para manejar el estado y efectos.

import Header from "../components/Header";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

import handDrawingDesktop from "../media/handDrawingDesktop.jpg";
import handDrawingMobile from "../media/handDrawingMobile.jpg";
import { MainImg } from "./HomeStyles";

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Función para actualizar isMobile:
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    // Agrega un event listener:
    window.addEventListener("resize", handleResize);

    // Limpia el event listener al desmontar:
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // [] asegura que el efecto se ejecute solo al montar/desmontar

  return (
    <div>
      <div style={{ border: "solid white 3px" }}>
        <Header />
      </div>
      <MainImg
        src={isMobile ? handDrawingMobile : handDrawingDesktop} // Selecciona la imagen según el estado de isMobile
        alt="mainImg"
      />
      <div style={{ border: "solid blue 3px" }}>
        <About />
      </div>
      <div style={{ border: "solid violet 3px" }}>
        <Gallery />
      </div>
      <div style={{ border: "solid red 3px" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
