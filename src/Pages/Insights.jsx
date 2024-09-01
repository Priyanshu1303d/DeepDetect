import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment,  ScrollControls } from '@react-three/drei'
import MacContainer from '../Components/MacContainer'

const Insights = () => {
  return (
    <div className='w-full h-screen bg-black '>
      <div className='absolute flex flex-col items-center text-white top-40 left-1/2 -translate-x-1/2  font-["Helvetica_Now_Display"] bg-zinc-900'>
        <h3 className='text-7xl tracking-tighter font-[700]'>Insights</h3>
        <h5>Oh so pro!</h5>
        <p className='text-center w-3/4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, eos?</p>
      </div>
      <Canvas camera={{fov: 12 , position:[0, -10, 220]}}>
      <Environment  files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr']}/>
      <ScrollControls>
        <MacContainer />
      </ScrollControls>
    </Canvas>
    </div>
    
  )
}

export default Insights