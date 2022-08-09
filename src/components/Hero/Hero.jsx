import React from "react";
import "./Hero.css";
import { Header } from "../Header/Header";

import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
export const Hero = () => {
  return (
    <div className="Hero">
      {/* <Header /> */}
      <div className="Left-h">
        <Header />
        <div className="The-best-gym">
          <motion.div
            whileInView={{
              x: 165,
              transition: {
                duration: 1.5,
                repeat: 1,
                repeatType: "reverse",
                repeatDelay: 0.5,
                ease: "easeInOut",
              },
            }}
          ></motion.div>
          <span>the best gym in the town</span>
        </div>
        <div className="Hero-text">
          <div>
            <span className="Stroke-text">Shape</span>
            <span> your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you shape and build your ideal body and live
              up your life to fullest
            </span>
          </div>
        </div>
        <div className="Stats">
          <div>
            <span>+ 140</span>
            <span>experts coaches</span>
          </div>
          <div>
            <span>+ 978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>fitness programs</span>
          </div>
        </div>
        <div className="Hero-actions">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="Right-h">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
          <img src={heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        <motion.img
          initial={{
            opacity: 0.5,
            scale: 1.3,
            originX: 0.5,
            originY: 1,
          }}
          whileInView={{
            opacity: 1,
            scale: 1.5,
            transition: {
              duration: 1,
            },
          }}
          whileHover={{
            scale: 1.6,
            originX: 0.5,
            originY: 1,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
              type: "spring",
            },
          }}
          className="hero_image"
          src={hero_image}
          alt=""
          srcset=""
        />
        <motion.img
          initial={{
            opacity: 0,
          }}
          whileInView={{
            x: "0.5rem",
            opacity: 1,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="hero_image_back"
          src={hero_image_back}
          alt=""
          srcset=""
        />

        <div className="Calories">
          <img src={calories} alt="" srcset="" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};
