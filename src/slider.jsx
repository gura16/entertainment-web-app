import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import jsonData from "../public/data.json";
import styled from "styled-components";
import icon_movie from "../public/assets/icon-nav-movies.svg";
import icon_bookmark_empty from "../public/assets/icon-bookmark-empty.svg";

const MySlider = () => {
  const trendingItems = jsonData.filter((item) => item.isTrending);

  const swiperStyles = {
    backgroundColor: "#10141E",
    color: "#333",
  };

  const swiperSlides = {
    width: "240px",
    height: "140px",
  };

  return (
    <>
      <Trendingtitle>Trending</Trendingtitle>
      <Swiper
        style={swiperStyles}
        spaceBetween={10}
        slidesPerView={1.5}
        pagination={{ clickable: true }}
      >
        {trendingItems.map((item, index) => (
          <SwiperSlide key={index} style={swiperSlides}>
            <Trendingbox>
              <Trendingcard
                style={{
                  backgroundImage: `url(${item.thumbnail.trending.small})`,
                }}
              >
                <Titelscard>
                  <Yearscard>
                    <Year>{item.year}</Year>
                    <Point></Point>
                    <Iconmovie src={icon_movie}></Iconmovie>
                    <Category>{item.category}</Category>
                    <Point></Point>
                    <Rating>{item.rating}</Rating>
                  </Yearscard>
                  <Title>{item.title}</Title>
                </Titelscard>
                <Circle>
                  <Icon_bookmark_empty src={icon_bookmark_empty} />
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
`;

const Trendingcard = styled.div`
  width: 240px;
  height: 140px;
  color: white;
  border-radius: 5%;
  background-size: cover;
  position: relative;
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
`;

const Yearscard = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const Year = styled.p`
  width: 26px;
  height: 15px;
  opacity: 75%;
  font-family: "Outfit", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: left;
`;

const Point = styled.div`
  width: 3px;
  height: 3px;
  opacity: 50%;
  background-color: white;
  border-radius: 50%;
`;

const Category = styled.p`
  height: 15px;
  opacity: 75%;
  font-family: "Outfit", sans-serif;
  font-size: 11px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0px;
`;

const Iconmovie = styled.img`
  width: 12px;
  height: 12px;
  opacity: 75%;
`;

const Rating = styled.p`
  font-family: "Outfit", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: left;
  opacity: 75%;
`;

const Title = styled.p`
  font-family: "Outfit", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
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
