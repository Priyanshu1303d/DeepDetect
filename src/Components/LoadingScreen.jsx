import React from 'react';
import './LoadingScreen.css'; 
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const LoadingScreen = () => {

  useGSAP(() => {
    gsap.fromTo(
      ".loading-page",
      { opacity: 1 },
      {
        opacity: 0,
        display: "none",
        duration: 1.5,
        delay: 3.5,
      }
    );
    
    gsap.fromTo(
      ".logo-name",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
      }
    );
  })
  return (<>
  
    {/* <div class="container">
        <p>Welcome Viewrs!</p>

    </div>

    <div class="loading-page">
    <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
        <path 
            d="M16 8C7.163 8 0 15.163 0 24s7.163 16 16 16h24c4.418 0 8-3.582 8-8s-3.582-8-8-8H16v-8h24c8.837 0 16-7.163 16-16S44.837 0 36 0H16c-4.418 0-8 3.582-8 8s3.582 8 8 8h24c4.418 0 8 3.582 8 8s-3.582 8-8 8H16z"/>
    </svg> 

    <div class="name-container">
        <div class="logo-name">DeepDetect</div>
    </div>
</div> */}


    {/*  ------------------------------------ */}
    <div class="loading-page">
  <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      d="M145.09,50.92h144.4c42.24,0,76.5,11.78,102.79,35.35c26.29,23.57,39.43,55.67,39.43,96.3
        c0,40.63-13.14,72.62-39.43,96.96c-26.29,24.34-60.55,36.51-102.79,36.51H145.09V50.92z M231.95,120.43v191.57h46.96
        c28.69,0,50.88-7.66,66.57-23.02c15.68-15.35,23.53-37.18,23.53-65.46c0-28.28-7.85-50.33-23.53-66.15
        c-15.69-15.82-37.88-23.73-66.57-23.73H231.95z" />
  </svg>

  <div class="name-container">
    <div class="logo-name">DeepDetect</div>
  </div>
</div>

{/* -------------------------------------- */}

    </>
  );
};

export default LoadingScreen