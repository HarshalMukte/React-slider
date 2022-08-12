import React from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Arrow = ({ position, moveSlide }) => {
  return (
    <div className={`sliderArrow ${position}`} onClick={moveSlide}>
      {position === "left" ? (
        <BsFillArrowLeftCircleFill />
      ) : (
        <BsFillArrowRightCircleFill/>
      )}
    </div>
  );
};

export default Arrow;
