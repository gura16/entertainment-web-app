import styled from "styled-components";
import { useEffect, useState } from "react";
import MySlider from "./slider";
import Recommended from "./recommended";
import Homesearch from "./homesearch";

function Home(props) {
  return (
    <Maincontainer>
      <Homesearch />
      <StyledSliderContainer>
        <MySlider />
      </StyledSliderContainer>
      <Recommended data={props.data} />
    </Maincontainer>
  );
}

export default Home;

const Maincontainer = styled.div`
  padding-left: 15px;
  @media screen and (min-width: 768px) {
    padding-left: 30px;
  }
`;

const StyledSliderContainer = styled.div`
  margin-top: 30px;
`;
