import React from "react";
import "./RunningManSection.css";
import Runningman from "../../assets/video/runnermann.mp4"

const RunningManSection = () => {
  return (
    <section className="runner-section">

      {/* Video Background */}
      <div className="video-wrapper">
        <video
    className="bg-video"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src={Runningman} type="video/mp4" />
  </video>
      </div>

    </section>
  );
};

export default RunningManSection;