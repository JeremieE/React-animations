import React, { useEffect, } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Title from "../components/title";
import desert from "../images/desert.jpg";
import { gsap } from "gsap";

const Home = () => {
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
      <Title lineContent='Dans la Vallée' lineContent2='du desert'/>
      <div className="size">
            <div className="img-container">
              <LazyLoadImage alt="desert" effect="blur" src={desert} className="img-box"/>
            </div>
      </div>
    </div>
  );
};

export default Home;
