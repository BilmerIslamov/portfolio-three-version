import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { FaAngleUp } from "react-icons/fa";

const Home_btn = () => {
  const [Visable, setIsVisibility  ] = useState(false)

  const listenToScroll = () => {
    let heightToHidden = 100;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisibility(true);
    } else {
      setIsVisibility(false);
    }
  };
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Button onClick={goToBtn} className={`home-btn ${Visable ? "active" : ""}`} variant="contained">
      <FaAngleUp className="home-btn_icon " />
      <FaAngleUp className="home-btn_icon_2" />
    </Button>
  );
};

export default Home_btn;
