import styled from "styled-components";
import {
  Renderer,
  Camera,
  Transform,
  Box,
  Program,
  Mesh,
  Geometry,
  Texture,
} from "ogl";
import { useEffect, useRef, useState } from "react";
import introSrc from "@assets/intro.png";
import gallery1 from "@assets/gallery1.png";
import gallery2 from "@assets/gallery2.png";
import gallery3 from "@assets/gallery3.png";

const duration = 1;
const interval = 3;
const time = 0;

export const Gallery = () => {
  const wrapper = useRef<HTMLDivElement>(null);

  //   const [position, setPosition] = useState(0);
  //   const [direction, setPosition] = useState(0);

  useEffect(() => {
    const renderer = new Renderer({
      width: wrapper.current?.offsetWidth,
      height: wrapper.current?.offsetHeight,
    });
    const gl = renderer.gl;
    wrapper.current?.appendChild(gl.canvas);

    const textures = [
      new Texture(gl),
      new Texture(gl),
      new Texture(gl),
      new Texture(gl),
    ];

    const imgs = [introSrc, gallery1, gallery2, gallery3];

    textures.forEach((tex) => {});

    const img0 = new Image();
    img0.src = imgs[0];
    img0.onload = () => (textures[0].image = img0);
    const img1 = new Image();
    img1.src = imgs[1];
    img1.onload = () => (textures[1].image = img1);
    const img2 = new Image();
    img2.src = imgs[2];
    img2.onload = () => (textures[2].image = img2);
    const img3 = new Image();
    img3.src = imgs[3];
    img3.onload = () => (textures[3].image = img3);

    // Triangle that covers viewport, with UVs that still span 0 > 1 across viewport
    const geometry = new Geometry(gl, {
      position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) },
      uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
    });
    // Alternatively, you could use the Triangle class.

    let position = 0;

    const program = new Program(gl, {
      vertex: /* glsl */ `
            attribute vec2 uv;
            attribute vec2 position;

            varying vec2 vUv;

            void main() {
                vUv = uv;
                gl_Position = vec4(position, 0, 1);
            }
        `,
      fragment: /* glsl */ `
            precision highp float;

            uniform float uTime;

            uniform sampler2D uTex0;
            uniform sampler2D uTex1;

            uniform float uProgress;

            varying vec2 vUv;

            void main() {
                vec4 fromStep = vec4(0.0, 0.2, 0.4, 0.0);
                vec4 toStep = vec4(0.6, 0.8, 1.0, 1.0);
                vec4 a = texture2D(uTex0, vUv);
                vec4 b = texture2D(uTex1, vUv);
                gl_FragColor = mix(a, b, smoothstep(fromStep, toStep, vec4(uProgress)));
            }
        `,
      uniforms: {
        uTime: { value: 0 },
        uTex0: { value: textures[position] },
        uTex1: { value: textures[(position + 1) % 4] },
        uProgress: { value: 0 },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    requestAnimationFrame(update);

    let prevTime = 0;
    let isTransitioning = true;
    const transition = (time: number) => {
      program.uniforms.uProgress.value += time - prevTime;
      if (program.uniforms.uProgress.value >= 1) {
        isTransitioning = false;
      }
    };

    function update(t: number) {
      requestAnimationFrame(update);

      const time = t * 0.001;
      if (!isTransitioning && Math.floor(time) % interval === 1) {
        isTransitioning = true;
        program.uniforms.uProgress.value = 0;
        position = (position + 1) % 4;
        program.uniforms.uTex0.value = textures[position];
        program.uniforms.uTex1.value = textures[(position + 1) % 4];
      }

      if (isTransitioning) {
        transition(time);
      }
      prevTime = time;

      // Don't need a camera if camera uniforms aren't required
      renderer.render({ scene: mesh });
    }

    const resize = () => {
      renderer.setSize(
        wrapper.current?.offsetWidth || 0,
        wrapper.current?.offsetHeight || 0
      );
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      wrapper.current?.removeChild(gl.canvas);
    };
  }, []);
  return <Wrapper ref={wrapper}></Wrapper>;
};

const Wrapper = styled.div`
  width: 75%;
  aspect-ratio: 1.5/1;
  left: 50%;
  transform: translateX(-50%);
  position: relative;
`;
