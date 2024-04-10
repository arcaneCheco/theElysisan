import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "@pages/home";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

const Wrapper = styled.div``;
