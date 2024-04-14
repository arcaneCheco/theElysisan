import styled from "styled-components";

export const ContactInfo = () => {
  return (
    <Wrapper>
      <Text>The Elysian</Text>
      <Text>Bingag, Dauis, 6369, Bohol, Philippines</Text>
      <Text>{"Mon - Fri: 8am - 9pm\nSat - Sun: 9am - 9pm"}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Text = styled.p`
  white-space: break-spaces;
`;
