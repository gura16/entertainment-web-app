import styled from "styled-components";
import iconsearch from "../public/assets/icon-search.svg";
import { useEffect, useState } from "react";
import jsonData from "../public/data.json";

function Home() {
  const trendingItems = jsonData.filter((item) => item.isTrending);

  return (
    <Maincontainer>
      <Homesearch
        src={iconsearch}
        placeholder="Search for movies or TV series"
        textColor="#FFFFFF"
      />
      {trendingItems.map((item, index) => (
        <Trendingcard
          style={{ backgroundImage: `url(${item.thumbnail.regular.large})` }}
          key={index}
        ></Trendingcard>
      ))}
    </Maincontainer>
  );
}

export default Home;

const Maincontainer = styled.div``;

const Homesearch = styled.input`
  width: 257px;
  height: 24px;
  background-color: #10141e;
  background-image: url(${iconsearch});
  background-size: 24px;
  background-repeat: no-repeat;
  border: none;
  padding-left: 30px;
  &:focus,
  &:not(:placeholder-shown) {
    color: #ffffff;
  }

  &:focus {
    outline: none;
  }
`;

const Trendingcard = styled.div`
  width: 240px;
  height: 140px;
  color: white;
`;

const Img = styled.img`
  width: 240px;
  height: 140px;
`;
