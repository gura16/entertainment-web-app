import React from "react";
import styled from "styled-components";
import icon_movie from "../public/assets/icon-category-movie.svg";
import icon_tvseries from "../public/assets/icon-category-tv.svg";
import icon_bookmark_empty from "../public/assets/icon-bookmark-empty.svg";
import icon_bookmark_full from "../public/assets/icon-bookmark-full.svg";
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

const Recomendedtitle = styled.p`
  font-family: "Outfit", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: -0.3125px;
  text-align: left;
  color: white;
  margin-top: 30px;
  padding-left: 15px;
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
  background-image: ${(props) => `url(${props.img.thumbnail.regular.small})`};

  @media screen and (min-width: 768px) {
    width: 220px;
    height: 140px;
    background-image: ${(props) =>
      `url(${props.img.thumbnail.regular.medium})`};
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
  margin-left: 123px;
  @media screen and (min-width: 768px) {
    margin-left: 170px;
  }
`;

const Icon_bookmark_empty = styled.img`
  width: 11.67px;
  height: 14px;
`;
