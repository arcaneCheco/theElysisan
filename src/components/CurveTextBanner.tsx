import styled from "styled-components";

export const CurveTextBanner = () => {
  return (
    <Wrapper>
      <Svg
        viewBox="0 0 939 192"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // preserveAspectRatio="none"
      >
        <defs>
          <path
            d="M0.284272 90.9623C0.284272 90.9623 190.179 203.288 416.679 96.2631C643.179 -10.7622 938.447 96.2626 938.447 96.2626"
            stroke="red"
            id="MyPath"
          />
        </defs>
        {/* <text fill="black"> */}
        <text fill="black" fontSize={"53px"} letterSpacing={5}>
          <textPath href="#MyPath" startOffset="100%">
            We're here to bake your day better!
            <animate
              attributeName="startOffset"
              from="100%"
              to="0%"
              begin="0s"
              dur="9s"
              repeatCount="indefinite"
            />
          </textPath>
          <textPath href="#MyPath" startOffset="0%">
            We're here to bake your day better!
            <animate
              attributeName="startOffset"
              from="0%"
              to="-100%"
              begin="0s"
              dur="9s"
              repeatCount="indefinite"
            />
          </textPath>
        </text>
      </Svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 500px;
  width: 100%;
  position: absolute;
  /* margin-top: 100px; */
  display: flex;
  align-items: center;
`;

const Svg = styled.svg`
  /* height: 80%; */
  width: 100%;
  overflow: visible;
`;
