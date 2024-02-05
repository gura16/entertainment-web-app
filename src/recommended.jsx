import React from "react";
import styled from "styled-components";
import jsonData from "../public/data.json";
import icon_movie from "../public/assets/icon-nav-movies.svg";
import icon_bookmark_empty from "../public/assets/icon-bookmark-empty.svg";

function Recommended() {
  const recommendedItems = jsonData.filter((item) => !item.isTrending);

  return (
    <>
      <Recomendedtitle>Recommended for you</Recomendedtitle>

      <Maincontainer1>
        {recommendedItems.map((item, index) => (
          <Eachcontainer key={index}>
            <Imgcard
              style={{
                backgroundImage: `url(${item.thumbnail.regular.small})`,
              }}
            >
              <Circle>
                <Icon_bookmark_empty src={icon_bookmark_empty} />
              </Circle>
            </Imgcard>
            <Infocard>
              <Year>{item.year}</Year>
              <Point></Point>
              <Iconmovie src={icon_movie}></Iconmovie>
              <Category>{item.category}</Category>
              <Point></Point>
              <Rating>{item.rating}</Rating>
            </Infocard>
            <Title>{item.title}</Title>
          </Eachcontainer>
        ))}
      </Maincontainer1>
    </>
  );
}

export default Recommended;

const Recomendedtitle = styled.p`
  font-family: "Outfit", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: -0.3125px;
  text-align: left;
  color: white;
  margin-top: 30px;
`;

const Maincontainer1 = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Eachcontainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Imgcard = styled.div`
  background-size: cover;
  width: 164px;
  height: 110px;
  border-radius: 10px;
`;
const Infocard = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Year = styled.p`
  font-family: "Outfit", sans-serif;
  font-size: 11px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0px;
  text-align: left;
  color: white;
  opacity: 75%;
`;

const Point = styled.div`
  width: 3px;
  height: 3px;
  opacity: 50%;
  background-color: white;
  border-radius: 50%;
`;

const Iconmovie = styled.img`
  width: 12px;
  height: 12px;
  opacity: 75%;
`;

const Category = styled.p`
  height: 15px;
  opacity: 75%;
  font-family: "Outfit", sans-serif;
  font-size: 11px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0px;
  color: white;
`;

const Rating = styled.p`
  font-family: "Outfit", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 75%;
  color: white;
`;

const Title = styled.p`
  font-family: "Outfit", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
  color: white;
`;

const Circle = styled.div`
  width: 32px;
  height: 32px;
  opacity: 50%;
  background-color: #10141e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-left: 123px;
`;

const Icon_bookmark_empty = styled.img`
  width: 11.67px;
  height: 14px;
`;
