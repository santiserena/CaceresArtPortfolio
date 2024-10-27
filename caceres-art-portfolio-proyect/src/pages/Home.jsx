import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

import handDrawingDesktop from "../media/handDrawingDesktop.jpg";
import handDrawingMobile from "../media/handDrawingMobile.jpg";
import { MainImg } from "./HomeStyles";

function Home() {
  const [device, setDevice] = useState(
    window.innerWidth <= 450
      ? "mobile"
      : window.innerWidth >= 450 && window.innerWidth <= 900
      ? "tablet"
      : "desktop"
  );

  useEffect(() => {
    // Función para actualizar device:
    const handleResize = () => {
      setDevice(
        window.innerWidth <= 450
          ? "mobile"
          : window.innerWidth >= 450 && window.innerWidth <= 900
          ? "tablet"
          : "desktop"
      );
    };

    // Agrega event listener:
    window.addEventListener("resize", handleResize);

    // Limpia event listener al desmontar:
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // [] asegura que el efecto se ejecute solo al montar/desmontar

  return (
    <div>
      <p style={{ color: "white" }}>{device}</p>
      <div style={{ border: "solid white 3px" }}>
        <Header />
      </div>
      <MainImg
        src={device === "mobile" ? handDrawingMobile : handDrawingDesktop} // Selecciona la imagen según device
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
