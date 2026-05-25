import React from "react";
import SizeCard from "../../assets/images/sizecard.webp";

const SizecardPopup = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={SizeCard}
        alt="Size Guide"
        style={{ width: "100%", borderRadius: "10px" }}
      />
    </div>
  );
};

export default SizecardPopup;