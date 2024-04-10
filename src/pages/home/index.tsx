import { Header } from "@components/header";
import { CurveTextBanner } from "@components/CurveTextBanner";
import { OpeningTimesBanner } from "@components/OpeningTimesBanner";
import { IntroSection } from "./IntroSection";
import styled from "styled-components";
import { Gallery } from "./gallery";

export const Home = () => {
  return (
    <Wrapper>
      <Header />
      <OpeningTimesBanner />
      <CurveTextBanner />
      <IntroSection />
      <Gallery />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 110px;
  z-index: 1;
`;
