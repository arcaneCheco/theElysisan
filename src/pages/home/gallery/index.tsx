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
import { useEffect, useRef } from "react";
import introSrc from "@assets/intro.png";

// {
//     const renderer = new Renderer();
//     const gl = renderer.gl;
//     document.body.appendChild(gl.canvas);

//     const camera = new Camera(gl);
//     camera.position.z = 5;

//     function resize() {
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         camera.perspective({
//             aspect: gl.canvas.width / gl.canvas.height,
//         });
//     }
//     window.addEventListener('resize', resize, false);
//     resize();

//     const scene = new Transform();

//     const geometry = new Box(gl);

//     const program = new Program(gl, {
//         vertex: /* glsl */ `
//             attribute vec3 position;

//             uniform mat4 modelViewMatrix;
//             uniform mat4 projectionMatrix;

//             void main() {
//                 gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//             }
//         `,
//         fragment: /* glsl */ `
//             void main() {
//                 gl_FragColor = vec4(1.0);
//             }
//         `,
//     });

//     const mesh = new Mesh(gl, { geometry, program });
//     mesh.setParent(scene);

//     requestAnimationFrame(update);
//     function update(t) {
//         requestAnimationFrame(update);

//         mesh.rotation.y -= 0.04;
//         mesh.rotation.x += 0.03;

//         renderer.render({ scene, camera });
//     }
// }

export const Gallery = () => {
  const wrapper = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(wrapper.current);
    const renderer = new Renderer({
      width: wrapper.current?.offsetWidth,
      height: wrapper.current?.offsetHeight,
    });
    const gl = renderer.gl;
    wrapper.current?.appendChild(gl.canvas);

    const texture = new Texture(gl);
    const img = new Image();
    img.src = introSrc;
    img.onload = () => (texture.image = img);

    // Triangle that covers viewport, with UVs that still span 0 > 1 across viewport
    const geometry = new Geometry(gl, {
      position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) },
      uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
    });
    // Alternatively, you could use the Triangle class.

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

            uniform sampler2D uTex;

            varying vec2 vUv;

            void main() {
                gl_FragColor.rgb = vec3(0.8, 0.7, 1.0) + 0.3 * cos(vUv.xyx + uTime);
                gl_FragColor.a = 1.0;
                vec4 texs = texture2D(uTex, vUv);
                gl_FragColor = texs;
            }
        `,
      uniforms: {
        uTime: { value: 0 },
        uTex: { value: texture },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    requestAnimationFrame(update);
    function update(t: number) {
      requestAnimationFrame(update);

      program.uniforms.uTime.value = t * 0.001;

      // Don't need a camera if camera uniforms aren't required
      renderer.render({ scene: mesh });
    }

    return () => {
      //   window.removeEventListener("resize", resize);
    };
  }, []);
  return <Wrapper ref={wrapper}></Wrapper>;
};

const Wrapper = styled.div`
  border: 1px solid black;
  width: 75%;
  aspect-ratio: 1.5/1;
  left: 50%;
  transform: translateX(-50%);
  position: relative;
`;
