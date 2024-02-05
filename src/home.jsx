import styled from "styled-components";
import iconsearch from "../public/assets/icon-search.svg";
import { useEffect, useState } from "react";
import MySlider from "./slider";
import Recommended from "./recommended";

function Home() {
  return (
    <Maincontainer>
      <Homesearch
        src={iconsearch}
        placeholder="Search for movies or TV series"
        textColor="#FFFFFF"
      />
      <MySlider />
      <Recommended />
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
