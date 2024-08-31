import React from "react";
import { motion, useAnimation } from "framer-motion";
import contentVideo from '../assets/content.mp4';

function DetectFake() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-10 rounded-tr-3xl rounded-tl-3xl bg-zinc-800">
      <div className="w-full px-20 border-b-[1px] border-zinc-600 pb-10">
        <h1 className='text-5xl font-["Neue_Montreal tracking-tight"]'>
          Spotting deepfakes: harder than spotting a unicorn!
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-5">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#FFD700] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-9xl font-['Neue_Montreal'] tracking-tight">
              {"REAL".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden shadow-[0_4px_30px_rgba(255,215,0,0.5)]">
              <video
                className="w-full h-full object-cover"  
                src={contentVideo}
                autoPlay
                muted
                loop
                alt="Real"
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#FFD700] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-9xl font-['Neue_Montreal'] tracking-tight">
              {"FAKE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden shadow-[0_4px_30px_rgba(255,215,0,0.5)]">
              <video
                className="w-full h-full object-cover"  
                src={contentVideo}
                autoPlay
                muted
                loop
                alt="Real"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default DetectFake;
