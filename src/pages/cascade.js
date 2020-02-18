  
import React, { useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Title from "../components/title";
import waterf from "../images/waterfall.jpg";
import { gsap } from "gsap";

const Cascade = () => {
  let line2 = useRef(null);
  useEffect(() => {
    gsap.from([line2], 2, {
      ease: "power3.InOut",
      opacity: 0,
      stagger: {
        amount: 0.8
      }
    });
  }, [line2]);
  return (
    <div className='inner'>
      <Title lineContent='Dans la Vallée' lineContent2='des chutes' />
      <div className="size">
            <div ref={el => (line2 = el)} className="img-container">
            <LazyLoadImage alt="desert" effect="blur" src={waterf} className="img-box"/>
            </div>
      </div>
    </div>
  );
};

export default Cascade;