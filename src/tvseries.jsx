import React from "react";
import styled from "styled-components";
import icon_movie from "../public/assets/icon-category-movie.svg";
import icon_tvseries from "../public/assets/icon-category-tv.svg";
import icon_bookmark_empty from "../public/assets/icon-bookmark-empty.svg";
import icon_bookmark_full from "../public/assets/icon-bookmark-full.svg";
import playimage from "../public/assets/icon-play.svg";
import { useState } from "react";

function Tvseries(props) {
  const tvserieseitems = props.data.filter((item) => item.category !== "Movie");
  const [movies, setMovies] = useState(tvserieseitems);

  return (
    <>
      <Recomendedtitle>TV Series</Recomendedtitle>

      <Maincontainer1>
        {movies
          .filter((item) =>
            !props.search
              ? true
              : item.title.toLowerCase().includes(props.search)
          )
          .map((item, index) => (
            <Eachcontainer key={index}>
              <Hovercard>
                <Imgcard img={item}>
                  <Circle
                    onClick={() => {
                      movies[index].isBookmarked = !movies[index].isBookmarked;
                      setMovies([...movies]);
                    }}
                  >
                    <Icon_bookmark_empty
                      src={
                        item.isBookmarked
                          ? icon_bookmark_full
                          : icon_bookmark_empty
                      }
                    />
                  </Circle>
                </Imgcard>
                <Hover>
                  <Playcard>
                    <Playimg src={playimage} />
                    <Playtext>Play</Playtext>
                  </Playcard>
                </Hover>
              </Hovercard>
              <Infocard>
                <Year>{item.year}</Year>
                <Point></Point>
                <Iconmovie
                  src={item.category === "Movie" ? icon_movie : icon_tvseries}
                ></Iconmovie>
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

export default Tvseries;

const Hovercard = styled.div`
  position: relative;
  @media screen and (min-width: 1040px) {
    width: 95%;
    height: 174px;
    cursor: pointer;
  }
`;

const Hover = styled.div`
  display: none;
  position: absolute;
  top: 0px;
  left: 0px;
  @media screen and (min-width: 1040px) {
    display: inline;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.5);
    z-index: 0;
    opacity: 0;
    &:hover {
      opacity: 1;
    }
  }
`;

const Recomendedtitle = styled.p`
  font-family: "Outfit", sans-serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: -0.5px;
  text-align: left;
  color: white;
  padding-left: 15px;
  margin-top: 30px;
`;

const Maincontainer1 = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-left: 15px;
  @media screen and (min-width: 768px) {
    grid-template-columns: auto auto auto;
  }
  @media screen and (min-width: 1040px) {
    grid-template-columns: auto auto auto auto;
    width: 93vw;
  }
`;

const Eachcontainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Imgcard = styled.div`
  background-size: cover;
  width: 90%;
  height: 110px;
  border-radius: 10px;
  background-image: ${(props) => `url(${props.img.thumbnail.regular.small})`};

  @media screen and (min-width: 768px) {
    width: 80%;
    height: 140px;
    background-image: ${(props) =>
      `url(${props.img.thumbnail.regular.medium})`};
  }

  @media screen and (min-width: 1040px) {
    width: 100%;
    height: 100%;
    background-image: ${(props) => `url(${props.img.thumbnail.regular.large})`};
  }
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
  @media screen and (min-width: 768px) {
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
  }
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
  @media screen and (min-width: 768px) {
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
  }
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
  @media screen and (min-width: 768px) {
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

const Title = styled.p`
  font-family: "Outfit", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
  color: white;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0px;
    text-align: left;
  }
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
  margin-left: 80%;
  cursor: pointer;
  position: absolute;
  @media screen and (min-width: 768px) {
    margin-left: 80%;
  }
  @media screen and (min-width: 1040px) {
    margin-left: 80%;
    cursor: pointer;
    z-index: 1;
  }
  &:hover {
    background-color: #878383;
  }
`;

const Icon_bookmark_empty = styled.img`
  width: 11.67px;
  height: 14px;
`;

const Playimg = styled.img`
  width: 30px;
  height: 30px;
`;

const Playtext = styled.p`
  width: 35px;
  height: 23px;
  color: white;
  font-family: "Outfit", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
`;
const Playcard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-left: 35%;
  text-align: center;
  top: 50px;
  gap: 20px;
  width: 100px;
  height: 40px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 25px;
`;
