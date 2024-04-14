import { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const bannerCopy =
  " Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu ";

let scrollPos = 0;
let delta = 0;

export const Banner = () => {
  const [direction, setDirection] = useState("normal");
  const [targetPosition, setTargetPosition] = useState(0);

  const $banner = useRef(null);
  //   useEffect(() => {
  //     scrollPos = document.documentElement.scrollTop;
  //     // window.addEventListener("wheel", scrollHandler); // add touch events for mobile

  //     window.addEventListener("scroll", scrollHandlerTemp); // add touch events for mobile
  //     window.addEventListener("scrollend", onScrollend); // add touch events for mobile

  //     return () => {
  //       //   window.removeEventListener("wheel", scrollHandler);
  //       window.removeEventListener("scrollend", onScrollend); // add touch events for mobile
  //       window.removeEventListener("scroll", scrollHandlerTemp); // add touch events for mobile
  //     };
  //   }, []);

  const scrollHandlerTemp = () => {
    const newScrollPos = document.documentElement.scrollTop;
    delta = newScrollPos - scrollPos;
    if (delta > 0) {
      setDirection("normal");
    } else {
      setDirection("reverse");
    }
    setTargetPosition((prev) => prev + delta);
    console.log(targetPosition + "px");
    scrollPos = newScrollPos;
    // console.log(delta);
  };

  const onScrollend = () => {
    delta = 0;
    // console.log(delta);
    // console.log($banner.current.style);
  };

  return (
    <BannerWrapper>
      <Content
        ref={$banner}
        $direction={direction}
        $targetPosition={targetPosition}
      >
        {bannerCopy}
      </Content>
      <Content $direction={direction} $targetPosition={targetPosition}>
        {bannerCopy}
      </Content>
    </BannerWrapper>
  );
};

const leftToRight = keyframes`
 from {
    transform: translateX(-100%) 
}
 to {
    transform: translateX(0)
     }
`;

const BannerWrapper = styled.div`
  width: 100%;
  display: flex;
  /* left: -100%; */
  position: relative;
  /* transform: skewX(-10deg); */
  overflow: hidden;
`;

const Content = styled.div<{ $direction: string; $targetPosition: number }>`
  font-size: 30px;
  left: -100%;
  /* width: 200%; */
  white-space: nowrap;
  transform: translateX(20px);
  border: 1px solid green;
  transition: translate;
  translate: ${({ $targetPosition }) => $targetPosition + "px"} 0px;
`;
