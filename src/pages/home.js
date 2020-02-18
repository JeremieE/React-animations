import React, { useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Title from "../components/title";
import desert from "../images/desert.jpg";
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
              <LazyLoadImage alt="desert" effect="blur" src={desert} className="img-box"/>
            </div>
      </div>
    </div>
  );
};

export default Home;
