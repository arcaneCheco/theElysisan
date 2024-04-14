import styled from "styled-components";

interface IEntry {
  name: string;
  price: string;
}

export const MenuSection = ({
  title,
  entries,
}: {
  title: string;
  entries: Array<IEntry>;
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Entries>
        {entries.map((entry, index) => (
          <Entry entry={entry} key={index + entry.name} />
        ))}
      </Entries>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 25vw;
`;

const Title = styled.p``;

const Entries = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Entry = ({ entry }: { entry: IEntry }) => {
  return (
    <EntryWrapper>
      <p>{entry.name}</p>
      <p>{entry.price}</p>
    </EntryWrapper>
  );
};

const EntryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
