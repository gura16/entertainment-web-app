import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import jsonData from "../public/data.json";
import styled from "styled-components";
import icon_movie from "../public/assets/icon-category-movie.svg";
import icon_tvseries from "../public/assets/icon-category-tv.svg";
import icon_bookmark_empty from "../public/assets/icon-bookmark-empty.svg";
import icon_bookmark_full from "../public/assets/icon-bookmark-full.svg";
import playimage from "../public/assets/icon-play.svg";
import "./slider.css";

const MySlider = (props) => {
  const trendingItems = jsonData.filter((item) => item.isTrending);
  const [movies, setMovies] = useState(trendingItems);

  const swiperStyles = {
    backgroundColor: "#10141E",
    color: "#333",
  };

  return (
    <>
      <Trendingtitle>Trending</Trendingtitle>
      <Swiper
        className="swiper"
        style={swiperStyles}
        pagination={{ clickable: true }}
        breakpoints={{
          375: {
            slidesPerView: 1.5,
            spaceBetween: 50,
          },

          1040: {
            slidesPerView: 2.5,
            spaceBetween: 50,
          },

          1440: {
            slidesPerView: 3.5,
            spaceBetween: 50,
          },
        }}
      >
        {trendingItems
          .filter((item) =>
            !props.search
              ? true
              : item.title.toLowerCase().includes(props.search)
          )
          .map((item, index) => (
            <SwiperSlide key={index}>
              <Trendingbox>
                <Trendingcard image={item.thumbnail.trending}>
                  <Titelscard>
                    <Yearscard>
                      <Year>{item.year}</Year>
                      <Point></Point>
                      <Iconmovie
                        src={
                          item.category === "Movie" ? icon_movie : icon_tvseries
                        }
                      ></Iconmovie>
                      <Category>{item.category}</Category>
                      <Point></Point>
                      <Rating>{item.rating}</Rating>
                    </Yearscard>
                    <Title>{item.title}</Title>
                  </Titelscard>
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
                </Trendingcard>
                <Hover>
                  <Playcard>
                    <Playimg src={playimage} />
                    <Playtext>Play</Playtext>
                  </Playcard>
                </Hover>
              </Trendingbox>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default MySlider;

const Hover = styled.div`
  display: none;
  @media screen and (min-width: 1040px) {
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    border-radius: 13px;
    position: absolute;
    cursor: pointer;
    z-index: 0;
    opacity: 0;
    &:hover {
      opacity: 1;
    }
  }
`;

const Trendingtitle = styled.p`
  font-family: "Outfit", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: -0.3125px;
  text-align: left;
  color: white;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: -0.5px;
    text-align: left;
  }
`;

const Trendingcard = styled.div`
  width: 240px;
  height: 140px;
  color: white;
  border-radius: 5%;
  background-size: cover;
  background-image: ${(props) => `url(${props.image.small})`};
  position: relative;

  @media screen and (min-width: 768px) {
    width: 470px;
    height: 230px;
    cursor: pointer;
    background-image: ${(props) => `url(${props.image.large})`};
  }
`;

const Trendingbox = styled.div`
  display: flex;
  position: relative;
  width: 240px;
  height: 140px;
  @media screen and (min-width: 768px) {
    width: 470px;
    height: 230px;
  }
`;

const Titelscard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 90px;
  padding: 0 15px;
  @media screen and (min-width: 768px) {
    margin-top: 155px;
    padding: 0 23px;
  }
`;

const Yearscard = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const Year = styled.p`
  opacity: 75%;
  font-family: "Outfit", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: left;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    font-weight: 400;
    line-height: 19px;
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

const Category = styled.p`
  opacity: 75%;
  font-family: "Outfit", sans-serif;
  font-size: 11px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0px;
  }
`;

const Iconmovie = styled.img`
  width: 12px;
  height: 12px;
  opacity: 75%;
  @media screen and (min-width: 768px) {
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
  @media screen and (min-width: 768px) {
    font-size: 15px;
    font-weight: 400;
    line-height: 19px;
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
  @media screen and (min-width: 768px) {
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

const Icon_bookmark_empty = styled.img`
  width: 11.67px;
  height: 14px;
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
  position: absolute;
  z-index: 1;
  top: 10px;
  right: 10px;
  cursor: pointer;
  &:hover {
    background-color: #878383;
  }
`;

const Playimg = styled.img`
  width: 30px;
  height: 30px;
`;

const Playtext = styled.p`
  font-family: "Outfit", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
  color: white;
`;

const Playcard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 117px;
  height: 48px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 25px;
  position: absolute;
  top: 100px;
  left: 170px;
`;
