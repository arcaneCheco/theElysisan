import { Header } from "@components/header";
import styled from "styled-components";
import BannerSrc from "@assets/intro.png";
import { MenuSection } from "./MenuSection";
import { ContactUs } from "@src/components/contactUs";

export const Menu = () => {
  return (
    <Wrapper>
      <Header />
      <Banner src={BannerSrc} />
      <MenuSectionWrapper>
        <MenuSectionWrapperInner>
          <MenuSection
            title="Cakes"
            entries={[
              { name: "ube cake roll", price: "$24.50" },
              { name: "ube cake roll", price: "$24.50" },
              { name: "ube cake roll", price: "$24.50" },
            ]}
          />
          <MenuSection
            title="Pastries"
            entries={[
              { name: "ube cake roll", price: "$24.50" },
              { name: "ube cake roll", price: "$24.50" },
              { name: "ube cake roll", price: "$24.50" },
              { name: "ube cake roll", price: "$24.50" },
              { name: "ube cake roll", price: "$24.50" },
              { name: "ube cake roll", price: "$24.50" },
            ]}
          />
        </MenuSectionWrapperInner>
        <MenuSectionWrapperInner>
          <MenuSection
            title="All-day Breakfast"
            entries={[
              { name: "ube cake roll", price: "$24.50" },
              { name: "ube cake roll", price: "$24.50" },
              { name: "ube cake roll", price: "$24.50" },
            ]}
          />
          <MenuSection
            title="Drinks"
            entries={[
              { name: "ube cake roll", price: "$24.50" },
              { name: "ube cake roll", price: "$24.50" },
              { name: "ube cake roll", price: "$24.50" },
              { name: "ube cake roll", price: "$24.50" },
              { name: "ube cake roll", price: "$24.50" },
              { name: "ube cake roll", price: "$24.50" },
            ]}
          />
        </MenuSectionWrapperInner>
      </MenuSectionWrapper>
      <ContactUs />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 1;
  padding-bottom: 50px;
`;

const Banner = styled.img`
  height: 40vh;
  width: 100%;
  min-height: 33vh;
  object-fit: cover;
`;

const MenuSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuSectionWrapperInner = styled.div`
  display: flex;
  justify-content: space-around;
`;
