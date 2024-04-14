import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "@pages/home";
import { Menu } from "@pages/menu";
import { Socials } from "@components/Socials";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Socials />
    </BrowserRouter>
  );
};

const Wrapper = styled.div``;
