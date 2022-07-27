import React from "react";
import "../../components/WhyUs/WhyUs.css";
import tick from "../../assets/tick.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";

export const WhyUs = () => {
  return (
    <div className="WhyUS">
      <div className="gallery">
        <img src={image1} alt="" srcset="" />
        <div>
          <img src={image2} alt="" srcset="" />
          <div>
            <img src={image3} alt="" srcset="" />
            <img src={image4} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="Why">
        <span>Some reasons</span>
        <div>
          <span className="Stroke-text">Why</span>
          <span>choose us?</span>
        </div>
        <div className="Reasons">
          <div>
            <img src={tick} alt="" srcset="" />
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="" srcset="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" srcset="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="" srcset="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <div className="partners">
          <span>Our partners</span>
          <div>
            <img src={nb} alt="" srcset="" />
            <img src={adidas} alt="" srcset="" />
            <img src={nike} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};
