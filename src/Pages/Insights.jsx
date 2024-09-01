import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ScrollControls } from '@react-three/drei';
import MacContainer from '../Components/MacContainer';

const Insights = () => {
  return (
    <div className='w-full h-screen bg-black'>
      <div className='absolute flex flex-col items-start text-white top-[20%] left-[6%] font-["Helvetica_Now_Display"] bg-zinc-900 p-3 mt-2'>
        <h3 className='text-7xl tracking-tighter font-[700] mb-4'>Insights</h3>
        <p className='w-3/4 mb-8 font-modista'>Secure, intuitive, and reliable DeepFake detection at your fingertips:</p>
        <ul className='list-disc text-lg font-modista'>
          <li>Implement a secure and efficient file upload system.</li>
          <li>Allow users to upload both images and videos for analysis.</li>
          <li>Clearly indicate the supported file types and any size limits.</li>
          <li>Provide real-time feedback during file processing.</li>
          <li>Include a loading animation or status messages to keep users informed.</li>
          <li>Offer users the option to download an analysis report.</li>
        </ul>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr']} />
        <ScrollControls>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default Insights;
