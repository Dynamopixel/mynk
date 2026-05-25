import React from "react";
import "./RunningManSection.css";

const RunningManSection = () => {
  return (
    <section className="runner-section">

      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/231AHsBUBeo?autoplay=1&mute=1&controls=0&loop=1&playlist=231AHsBUBeo&playsinline=1&rel=0&showinfo=0&modestbranding=1"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      {/* <div className="runner-overlay"></div> */}

    </section>
  );
};

export default RunningManSection;