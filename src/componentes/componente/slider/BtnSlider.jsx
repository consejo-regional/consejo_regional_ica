import React from "react";
//import "./Slider.css";
//import leftArrow from "../../../../public/iconos/left-arrow.svg";
//import rightArrow from "./icons/right-arrow.svg";





export default function BtnSlider({ direction, moveSlide }) {

  console.log(direction, moveSlide);
  console.log('hola mundo');


  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img alt='' src={direction === "next" ? process.env.PUBLIC_URL+`/iconos/right-arrow.svg` :process.env.PUBLIC_URL+`/iconos/left-arrow.svg` } />
    </button>
  );
}
