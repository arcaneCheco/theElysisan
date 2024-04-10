import styled from "styled-components";
import IntroSrc from "@assets/intro.png";
import { Link } from "react-router-dom";

export const IntroSection = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Img src={IntroSrc} />
        <p>our garden terrace</p>
      </ImageWrapper>
      <ButtonsWrapper>
        <OrderButton to={"/shop"}>shop</OrderButton>
        <OrderButton to={"/menu"}>our menu</OrderButton>
      </ButtonsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 500px;
  align-items: center;
  z-index: 1;
  position: relative;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  font-size: 28px;
  margin-top: 220px;
  gap: 40px;
`;

const OrderButton = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  background-color: #e1b8d8;
  color: #fff;
  padding: 5px 8px;
  border-radius: 3px;
  white-space: nowrap;
  height: fit-content;
  height: 50px;
  width: 190px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const ImageWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Img = styled.img`
  height: 400px;
  width: 85%;
`;
