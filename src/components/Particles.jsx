import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback, useRef } from "react";

const ParticlesComponent = () => {
  const containerRef = useRef(null);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    (container) => {
      containerRef.current = container;

      window.particlesContainer = container;
    },
    [containerRef]
  );

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#352f44",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "#000000",
              },
              polygon: {
                nb_sides: 12,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.22843639228042528,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 86.64828672705787,
              random: true,
              anim: {
                enable: true,
                speed: 34.01828888006934,
                size_min: 8.099592590492701,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 143.94242303078775,
              color: "#0000",
              opacity: 1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6.3974410235905665,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "bounce",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 113.3942962668978,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};

export default ParticlesComponent;
