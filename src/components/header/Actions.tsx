import { Link } from "react-router-dom";
import styled from "styled-components";
import { Cart } from "@assets/svgs";

export const Actions = () => {
  return (
    <Wrapper>
      <OrderButton to="/shop">Order here</OrderButton>
      <CartWrapper to="checkout">
        <Cart />
      </CartWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 33%;
  flex: 1 1 33%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

const OrderButton = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  background-color: #e1b8d8;
  color: #fff;
  padding: 5px 8px;
  border-radius: 3px;
  white-space: nowrap;
`;

const CartWrapper = styled(Link)`
  height: 25px;
`;
