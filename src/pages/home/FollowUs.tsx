import styled from "styled-components";
// import dotenv from "dotenv";
import { useEffect, useState } from "react";

// dotenv.config()

// curl -X GET 'https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token='
const getData = async () => {
  const response = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${process.env.INSTA_ACCESS_TOKEN}`
  );
  const data = await response.json();
  return data.data;
};

interface IIGData {
  caption: string;
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
}

export const FollowUs = () => {
  const [data, setData] = useState<Array<IIGData>>([]);
  useEffect(() => {
    const fetchData = async () => await getData();
    fetchData().then((res) => setData(res));
    console.log(data);
  }, []);
  return (
    <Wrapper>
      <Title>
        <CTA>FOLLOW US</CTA>
        <IGTag
          href={"https://www.instagram.com/the.elysian.bakery/"}
          target="_blank"
        >
          @the-elysian-bakery
        </IGTag>
      </Title>
      <IGCards>
        {data.map((post) => (
          <IGCard key={post.id} data={post} />
        ))}
      </IGCards>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 10%;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(255, 241, 245, 1) -0%,
    rgba(255, 255, 255, 1) 15%,
    rgba(255, 255, 255, 1) 85%,
    rgba(255, 241, 245, 1) 100%
  );
`;

const Title = styled.p``;

const CTA = styled.span`
  background: linear-gradient(#833ab4, #fd1d1d, #fcb045);
  /* background: linear-gradient(to right, #833ab4, #fd1d1d, #fcb045); */
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const IGTag = styled.a`
  text-decoration: none;
  color: black;
`;

const IGCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const IGCard = ({ data }: { data: IIGData }) => {
  return (
    <IGCardWrapper href={data.permalink} target="_blank">
      <IGMedia src={data.media_url} />
      <IGCaption>
        <IGCaptionText>{data.caption}</IGCaptionText>
      </IGCaption>
    </IGCardWrapper>
  );
};

const IGCardWrapper = styled.a`
  width: 250px;
  height: 250px;
  position: relative;
`;

const IGMedia = styled.img`
  height: 100%;
  width: 100%;
`;

const IGCaption = styled.div`
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

const IGCaptionText = styled.p`
  text-decoration: none;
  color: black;
  white-space: break-spaces;
  text-align: center;
  font-size: 20px;
`;
