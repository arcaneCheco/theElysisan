import { Link } from "react-router-dom";
import styled from "styled-components";

interface IItem {
  copy: string;
  src: "*.png";
}

export const MenuItems = ({ data }: { data: Array<IItem> }) => {
  return (
    <MenuCards>
      {data.map((item, index) => (
        <MenuCard data={item} key={index + item.src} />
      ))}
    </MenuCards>
  );
};

const MenuCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const MenuCard = ({ data }: { data: IItem }) => {
  return (
    <Wrapper to={"/menu"}>
      <MenuItem src={data.src} />
      <MenuDescription>
        <MenuDescriptionText>{data.copy}</MenuDescriptionText>
      </MenuDescription>
    </Wrapper>
  );
};
const Wrapper = styled(Link)`
  width: 250px;
  height: 250px;
  position: relative;
`;

const MenuItem = styled.img`
  height: 100%;
  width: 100%;
`;

const MenuDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #ffffffad;
  opacity: 0;
  transition: opacity 0.3s;
  will-change: opacity;
  &:hover {
    opacity: 1;
  }
`;

const MenuDescriptionText = styled.p`
  text-decoration: none;
  color: black;
  white-space: break-spaces;
  text-align: center;
  font-size: 20px;
`;
