import styled from "styled-components";
import logo from "@assets/logo.png";
import { Actions } from "@components/header/Actions";
import { Nav } from "@components/header/Nav";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Header = () => {
  const [scrollOffset, setScrollOffset] = useState(window.scrollY);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  });

  const scrollHandler = () => {
    const currentScrollOffset = window.scrollY;
    if (currentScrollOffset < 20 || scrollOffset > currentScrollOffset) {
      setHide(false);
    } else {
      setHide(true);
    }
    setScrollOffset(currentScrollOffset);
  };

  return (
    <Wrapper $hide={hide}>
      <Nav />
      <LogoWrapper>
        <LogoButton to="/">
          <LogoImg src={logo} />
        </LogoButton>
      </LogoWrapper>
      <Actions />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $hide: boolean }>`
  width: 100%;
  background-color: #fff1f5;
  display: flex;
  padding: 13px 26px;
  height: 110px;
  position: fixed;
  box-shadow: 0px -1px 3px 0px #0000008f;
  /* top: 0;
  ${(props) => props.$hide && "top: -110px;"} */
  top: ${(props) => (props.$hide ? "-110px" : "0px")};
  transition: top 0.3s;
  z-index: 2;
`;

const LogoWrapper = styled.div`
  width: 34%;
  display: flex;
  justify-content: center;
`;
const LogoButton = styled(Link)``;

const LogoImg = styled.img`
  height: 100%;
`;
