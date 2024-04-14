import { FormEvent } from "react";
import styled from "styled-components";

const cta =
  "Any Questions? Want to reserve a table? We’ll get back to you as soon as we can!";

const onSubmit = async (e: FormEvent) => {
  e.preventDefault();
  console.log("SUBMIT");
};

export const ContactForm = () => {
  return (
    <Wrapper>
      <CTA>{cta}</CTA>
      <Form onSubmit={onSubmit}>
        <Input placeholder="name" />
        <Input placeholder="email" />
        <MessageBox placeholder="Message" />
        <Button>Submit</Button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const CTA = styled.p``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input``;

const MessageBox = styled.textarea``;

const Button = styled.button`
  text-transform: uppercase;
  background-color: #e1b8d8;
  border: none;
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
  cursor: pointer;
`;
