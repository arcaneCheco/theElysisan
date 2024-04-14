import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { MenuItems } from "./MenuItems";
import Item1Src from "@assets/menuItem1.png";
import Item2Src from "@assets/menuItem2.png";
import Item3Src from "@assets/menuItem3.png";
import { Banner } from "./Banner";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <Wrapper>
      <Banner />
      <MenuItems
        data={[
          { src: Item1Src, copy: "Red Velvet\n-\nCake\n-\nRoll" },
          { src: Item2Src, copy: "Red Velvet\n-\nCake\n-\nRoll" },
          { src: Item3Src, copy: "Red Velvet\n-\nCake\n-\nRoll" },
        ]}
      />
      <Button to={"/menu"}>View Menu</Button>
    </Wrapper>
  );
};

const Button = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  background-color: #e1b8d8;
  color: #fff;
  padding: 5px 8px;
  border-radius: 3px;
  white-space: nowrap;
  display: block;
  width: fit-content;
  left: 50%;
  transform: translateX(-50%);
  position: relative;
  margin-top: 50px;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 100px 0;
  /* overflow: hidden; */
`;
