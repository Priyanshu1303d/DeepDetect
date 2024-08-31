
import React, { useState, useEffect } from 'react';
import LoadingScreen from '../Components/LoadingScreen';
import Hero from './Hero';
import DetectFake from '../Components/DetectFake';
import Highlights from '../Components/HighLights';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return <>
        <Hero />
        <DetectFake />
        <Highlights />
  </>;
};

export default Home;
