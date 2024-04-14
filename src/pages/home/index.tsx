import { Header } from "@components/header";
import { CurveTextBanner } from "./CurveTextBanner";
import { OpeningTimesBanner } from "./OpeningTimesBanner";
import { IntroSection } from "./IntroSection";
import styled from "styled-components";
import { Gallery } from "./gallery";
import { AboutUs } from "./AboutUs";
import { Menu } from "./menu";
import { FollowUs } from "./FollowUs";
import { ContactUs } from "@components/contactUs";

export const Home = () => {
  return (
    <Wrapper>
      <Header />
      <OpeningTimesBanner />
      <CurveTextBanner />
      <IntroSection />
      <Gallery />
      <AboutUs />
      <Menu />
      <FollowUs />
      <ContactUs />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 110px;
  z-index: 1;
`;
