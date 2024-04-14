import styled from "styled-components";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import { Map } from "./Map";

export const ContactUs = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <ContactWrapper>
          <ContactInfo />
          <ContactForm />
        </ContactWrapper>
        <Map />
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 5%;
  width: 100%;
`;

const InnerWrapper = styled.div`
  border-top: 1px solid #e1b8d8;
`;

const ContactWrapper = styled.div`
  display: flex;
`;
