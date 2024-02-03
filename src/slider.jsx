import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import jsonData from "../public/data.json";
import styled from "styled-components";

const MySwiper = () => {
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
    <Swiper
      style={swiperStyles}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {trendingItems.map((item, index) => (
        <SwiperSlide key={index} style={swiperSlides}>
          <Trendingbox>
            <Trendingcard
              style={{
                backgroundSize: "100%",
                backgroundImage: `url(${item.thumbnail.trending.small})`,
              }}
            />
          </Trendingbox>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiper;

const Trendingcard = styled.div`
  width: 240px;
  height: 140px;
  color: white;
`;

const Trendingbox = styled.div`
  display: flex;
`;
