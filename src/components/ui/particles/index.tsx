'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from '@tsparticles/slim'; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const MyParticles = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container: unknown) => {
    console.log(container);
  };

  return (
    init && (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          fpsLimit: 80,
          detectRetina: true,
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                width: 1500,
              },
            },
            line_linked: {
              enable: false,
              opacity: 0.03,
            },
            move: {
              direction: 'right',
              speed: 0.05,
            },
            size: {
              value: 1,
            },
            opacity: {
              value: 0.5,

              animation: {
                count: 0, // Number of times the animation repeats; 0 means infinite
                decay: {
                  max: 0.1,
                  min: 0.5,
                }, // Decay factor to slow down the animation over time
                delay: {
                  max: 0.1,
                  min: 0.5,
                }, // Delay before the animation starts
                enable: true, // Enable or disable the animation
                speed: {
                  max: 0.1,
                  min: 0.5,
                }, // Speed of the animation
                sync: false, // If true, animations are synchronized; if false, animations are independent
                mode: 'auto', // Animation mode (must match a valid value from AnimationMode)
                startValue: 'random', // Starting value type (must match a valid value from StartValueType)
              },
            },
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
    )
  );
};

export default MyParticles;
