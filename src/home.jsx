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
      <StyledSliderContainer>
        <MySlider />
      </StyledSliderContainer>
      <Recommended />
    </Maincontainer>
  );
}

export default Home;

const Maincontainer = styled.div`
  padding-left: 15px;
`;

const Homesearch = styled.input`
  margin-top: 20px;
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

const StyledSliderContainer = styled.div`
  margin-top: 30px;
`;
