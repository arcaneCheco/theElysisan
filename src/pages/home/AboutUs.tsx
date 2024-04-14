import styled from "styled-components";
import bgSrc from "@assets/aboutUsBg.png";

const aboutUsCopy =
  '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."';

export const AboutUs = () => {
  return (
    <Wrapper>
      <Title>About Us</Title>
      <Body>{aboutUsCopy}</Body>
      <Bg src={bgSrc} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 80px 10%;
  text-align: center;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(255, 241, 245, 1) -0%,
    rgba(255, 255, 255, 1) 15%,
    rgba(255, 255, 255, 1) 85%,
    rgba(255, 241, 245, 1) 100%
  );
`;

const Title = styled.p`
  font-weight: 800;
  font-size: 25px;
  margin-bottom: 20px;
`;

const Body = styled.p`
  font-size: 18px;
  max-width: 600px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  line-height: 1.4;
`;

const Bg = styled.img`
  position: absolute;
  height: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80%;
  top: 50%;
`;
