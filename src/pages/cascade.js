  
import React, { useEffect, useRef } from "react";
import Title from "../components/title";
import waterf from "../images/waterfall.webp";
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
              <img src={waterf} alt="water"/>
            </div>
      </div>
    </div>
  );
};

export default Cascade;