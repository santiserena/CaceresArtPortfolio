import React, { useEffect, useState } from "react";

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
    if (window.innerWidth <= 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    console.log("is mobile:", isMobile);
  }, []);

  return (
    <div>
      <div style={{ border: "solid white 3px" }}>
        <Header />
      </div>
      <MainImg
        src={isMobile ? handDrawingMobile : handDrawingDesktop}
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
