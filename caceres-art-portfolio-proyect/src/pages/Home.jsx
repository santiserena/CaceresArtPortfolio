/* borrar - limpiar todo lo relacionado a redux */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "../components/Header";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

import handDrawingDesktop from "../media/handDrawingDesktop.jpg";
import handDrawingMobile from "../media/handDrawingMobile.jpg";
import { MainImg } from "./HomeStyles";

function Home() {
  const state = useSelector((state) => state); // Obtén el estado
  const dispatch = useDispatch(); // Inicializa dispatch

  const [deviceSizeRegistration, setDevice] = useState(
    window.innerWidth <= 450
      ? "mobile"
      : window.innerWidth >= 450 && window.innerWidth <= 900
      ? "tablet"
      : "desktop"
  );

  useEffect(() => {
    // Función para actualizar deviceSizeRegistration:
    const handleResize = () => {
      dispatch({
        type: "UPDATE_VALUE",
        payload:
          window.innerWidth <= 450
            ? "mobile"
            : window.innerWidth >= 450 && window.innerWidth <= 900
            ? "tablet"
            : "desktop",
      });
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
      <p style={{ color: "white" }}>estado: {state.someValue}</p>

      <p style={{ color: "white" }}>{deviceSizeRegistration}</p>
      <div style={{ border: "solid white 3px" }}>
        <Header />
      </div>
      <MainImg
        // Selecciona la imagen según someValue
        src={
          state.someValue === "mobile" ? handDrawingMobile : handDrawingDesktop
        }
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
