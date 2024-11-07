import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "../components/Header";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

import handDrawingDesktop from "../media/handDrawingDesktop.jpg";
/* borrar - agregar imagen de tablet */
import handDrawingMobile from "../media/handDrawingMobile.jpg";
import { MainImg } from "./HomeStyles";

function Home() {
  // traigo estado de redux:
  const deviceType = useSelector((state) => state.deviceTypeSt);
  const dispatch = useDispatch(); // Inicializa dispatch

  useEffect(() => {
    const handleResize = () => {
      dispatch({
        type: "UPDATE_DEVICE_TYPE",
        payload:
          window.innerWidth <= 450
            ? "mobile"
            : window.innerWidth >= 450 && window.innerWidth <= 900
            ? "tablet"
            : "desktop",
      });
    };
    // ejecuta al montarse:
    handleResize();
    // agrega event listener:
    window.addEventListener("resize", handleResize);
    // limpia event listener al desmontar:
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]); // borrar - ver bien esto - creo q es como un watch

  return (
    <div>
      <div style={{ border: "solid white 3px" }}>
        <Header />
      </div>
      <MainImg
        // selecciona la imagen según deviceTypeSt
        src={deviceType === "mobile" ? handDrawingMobile : handDrawingDesktop}
        alt="mainImg"
      />
      <div style={{ border: "solid blue 3px" }}>
        <About />
      </div>
      <p style={{ color: "white" }}>estado: {deviceType}</p>
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
