import styled from "styled-components";
import { useEffect, useState } from "react";
import MySlider from "./slider";
import Recommended from "./recommended";

function Home(props) {
  return (
    <Maincontainer>
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
`;

const StyledSliderContainer = styled.div`
  margin-top: 30px;
`;
