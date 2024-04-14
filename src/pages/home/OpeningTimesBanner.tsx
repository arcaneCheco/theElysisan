import styled, { keyframes } from "styled-components";

const copy = "Mon - Fri: 8AM - 8PM | Saturday: 9AM - 7PM | Sunday: 9AM - 8PM";
export const OpeningTimesBanner = () => {
  return (
    <Wrapper>
      <OpeningText>{copy}</OpeningText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 40px;
  width: 100%;
  background-color: #e1b8d8;
  display: flex;
  align-items: center;
`;

const leftToRight = keyframes`
 from { left: 0; transform: translateX(-100%) }
 to { left: 100%; transform: translateX(0) }
`;

const OpeningText = styled.p`
  position: relative;
  color: #fff;
  animation-name: ${leftToRight};
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  white-space: nowrap;
`;
