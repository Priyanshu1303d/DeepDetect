import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import LandingPage from './LandingPage';

const Hero = () => {
  useEffect(() => {

    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power3.out" } });

    tl.to(".home-container", { 
      backgroundColor: "#000000", 
      delay: 2, 
      duration: 2 
    });

    tl.fromTo(".headline", 
      { 
        opacity: 0, 
        y: 0, 
        scale: 0.9 
      }, 
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 1 
      }
    );

    // Typewriter effect with infinite loop
    const typewriter = gsap.timeline({ repeat: -1, repeatDelay: 3 });

    typewriter
      .fromTo(".headline span", 
        { 
          width: "0%", 
          opacity: 1, 
          color: "rgba(255, 255, 255, 0)" 
        }, 
        { 
          width: "100%", 
          opacity: 1, 
          color: "rgba(59, 130, 246, 1)", 
          duration: 3.5, 
          ease: "steps(30, end)" 
        }
      )
      .to(".headline span", {
        width: "0%",
        opacity: 1,
        color: "rgba(255, 255, 255, 0)",
        duration: 3.5,
        ease: "steps(30, end)"
      });

  }, []);

  return (
    

    // <div className="home-container p-8  text-white min-h-screen flex flex-col items-center justify-center">
    //   <h1 className="headline text-4xl font-bold mb-4">
    //     <span>Welcome to the DeepDetect</span>
    //   </h1>
    //   <p className="subtext text-lg">Detect and analyze deepfake media easily.</p>
    // </div>
    <LandingPage />
  
  );
};

export default Hero;