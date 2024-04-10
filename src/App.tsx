import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "@pages/home";
import { Socials } from "@components/Socials";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Socials />
    </BrowserRouter>
  );
};

const Wrapper = styled.div``;
