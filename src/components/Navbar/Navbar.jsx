"use client";
import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "react-scroll";
function Navbar() {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.1) {
      setNavStyle("sticky");
    } else {
      setNavStyle("");
    }
  });

  return (
    <div className={`n-wrapper ${navStyle}`}>
      {/* Desktop Version */}
      <div className="container">
        <div className="n-container">
          <div className="n-logo">
            <span>Magon</span>
          </div>
          <div className="n-right">
            <div className="n-menu">
              <Link to="wwd-wrapper" spy={true} smooth={true}>
                <span>What we do</span>
              </Link>
              <Link to="hiw-wrapper" spy smooth={true} offset={100}>
                <span>How it works</span>
              </Link>
              <Link to="wwi-wrapper" spy smooth={true}>
                <span>Who we invest in</span>
              </Link>
              <Link to="t-wrapper" spy smooth={true} offset={100}>
                <span>Testimonials</span>
              </Link>
            </div>
            <div className="fund-button">Get Funded</div>
          </div>
        </div>
      </div>

      {/* Mobile/Tab Version */}
      <div className="nm-container">
        <span>Magon</span>
        {!mobileMenuOpened ? (
          <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        )}

        {/* Mobile Menu */}

        <div
          className="nm-menu"
          style={{ transform: mobileMenuOpened && "translateX(0%)" }}
        >
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="wwd-wrapper"
            spy={true}
            smooth={true}
          >
            <span>What we do</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="hiw-wrapper"
            spy
            smooth={true}
            offset={100}
          >
            <span>How it works</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="wwi-wrapper"
            spy
            smooth={true}
          >
            <span>Who we invest in</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="t-wrapper"
            spy
            smooth={true}
            offset={100}
          >
            <span>Testimonials</span>
          </Link>
          <div className="m-funded-button">Get Funded</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
