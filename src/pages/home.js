import React, { useEffect, useRef } from "react";
import Title from "../components/title";
import desert from "../images/desert.webp";
import { gsap } from "gsap";

const Home = () => {
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
      <Title
        lineContent='Dans la Vallée'
        lineContent2='du desert'
      />
      <div className="size">
            <div ref={el => (line2 = el)} className="img-container">
              <img src={desert} alt="desert"/>
              <h2>WebP not support</h2>
            </div>
      </div>
    </div>
  );
};

export default Home;
