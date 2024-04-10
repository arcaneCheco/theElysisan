import styled from "styled-components";
import { Outlet, Link, NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <Wrapper>
      <NavItem to="">Home</NavItem>
      <NavItem to="/menu">Menu</NavItem>
      <NavItem to="/contact">Contact us</NavItem>
      <NavItem to="/jobs">Jobs</NavItem>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 33%;
  flex: 1 1 33%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #000;
  white-space: nowrap;
  &.active {
    text-decoration: underline;
  }
`;
