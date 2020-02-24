import React, { useEffect } from "react";
import { gsap } from "gsap";

const Title = ({ lineContent, lineContent2 }) => {
  useEffect(() => {
    gsap.to(".line", 0.8, {
      delay: 0.8,
      ease: "power3.out",
      y: -150,
      opacity: 1,
      stagger: {
        amount: 0.15
      }
    });
  });
  return (
    <h1 className='page-title'>
      <div className='line-wrap'>
        <div className='line'>
          {lineContent}
        </div>
      </div>
      <div className='line-wrap'>
        <div className='line'>
          {lineContent2}
        </div>
      </div>
    </h1>
  );
};

export default Title;

