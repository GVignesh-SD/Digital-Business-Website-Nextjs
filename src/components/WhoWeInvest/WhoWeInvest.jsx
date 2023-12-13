import React from "react";
import "./WhoWeInvest.css";
import { motion } from "framer-motion";
import { features, whoWeInvest } from "@/src/utils/data";
import {
  containerVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animations";
function WhoWeInvest() {
  return (
    <div className="wwi-wrapper">
      <div className="container">
        <div className="wwi-container">
          {/* left side */}
          <div className="wwi-left">
            <div className="head">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className="tag"
              >
                Who we invest in
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                className="title"
              >
                {" "}
                Digital businesses
                <br /> with early traction
              </motion.span>
            </div>
            {/* features */}
            <div className="wwi-features">
              {whoWeInvest.map((feature, i) => (
                <motion.div
                  variants={containerVariants(i * 0.05 + 1)}
                  initial="offscreen"
                  whileInView={"onscreen"}
                  className="wwi-feature"
                  key={i}
                >
                  <span className="des">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </motion.div>
              ))}
            </div>
          </div>
          {/* right side */}
          <div className="wwi-right">
            <img src="persons.png" alt="persons" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeInvest;
