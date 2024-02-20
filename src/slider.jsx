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

const MySlider = (props) => {
  const trendingItems = jsonData.filter((item) => item.isTrending);
  const [movies, setMovies] = useState(trendingItems);

  const swiperStyles = {
    backgroundColor: "#10141E",
    color: "#333",
    width: "200vh",
  };

  return (
    <>
      <Trendingtitle>Trending</Trendingtitle>
      <Swiper
        style={swiperStyles}
        pagination={{ clickable: true }}
        breakpoints={{
          // when window width is <= 499px
          375: {
            slidesPerView: 1.5, // Adjust the number of slides per view for smaller screens
            spaceBetween: 50, // Adjust the space between slides for smaller screens
          },
          // when window width is >= 500px and <= 999px
          1040: {
            slidesPerView: 2.5, // Default number of slides per view
            spaceBetween: 50, // Default space between slides
          },
          // Add more breakpoints as needed
          1440: {
            slidesPerView: 3.5, // Default number of slides per view
            spaceBetween: 50, // Default space between slides
            width: "900vw",
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
              </Trendingbox>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default MySlider;

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
  position: relative;
  background-image: ${(props) => `url(${props.image.small})`};

  @media screen and (min-width: 768px) {
    width: 470px;
    height: 230px;
    background-image: ${(props) => `url(${props.image.large})`};
  }
`;

const Trendingbox = styled.div`
  display: flex;
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
  top: 10px;
  right: 10px;
`;
