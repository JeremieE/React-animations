  
import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Title from "../components/title";
import waterf from "../images/waterfall.jpg";
import { gsap } from "gsap";

const Cascade = () => {
  useEffect(() => {
    gsap.to(".img-container", 2, {
      ease: "power3.InOut",
      opacity: 1,
      stagger: {
        amount: 0.8
      }
    });
  });
  return (
    <div className='inner'>
      <Title lineContent='Dans la Vallée' lineContent2='des chutes' />
      <div className="size">
            <div className="img-container">
            <LazyLoadImage alt="desert" effect="blur" src={waterf} className="img-box"/>
            </div>
      </div>
    </div>
  );
};

export default Cascade;