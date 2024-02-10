import styled from "styled-components";
import redicon from "../public/assets/logo.svg";
import manimage from "../public/assets/image-avatar.png";
import navhome from "../public/assets/icon-nav-home.svg";
import navmovies from "../public/assets/icon-nav-movies.svg";
import navtvseries from "../public/assets/icon-nav-tv-series.svg";
import navbookmark from "../public/assets/icon-nav-bookmark.svg";
import iconsearch from "../public/assets/icon-search.svg";
import { useState } from "react";
import jsonData from "../public/data.json";

function Header() {
  return (
    <>
      <Maincontainer>
        <Redicon src={redicon} />
        <Categorycard>
          <Navhome src={navhome} />
          <Navmovies src={navmovies} />
          <Navtvseries src={navtvseries} />
          <Navbookmark src={navbookmark} />
        </Categorycard>
        <Manimage src={manimage} />
      </Maincontainer>
      <Homesearch
        src={iconsearch}
        placeholder="Search for movies or TV series"
        textColor="#FFFFFF"
      />
    </>
  );
}

export default Header;

const Maincontainer = styled.div`
  width: 100%;
  height: 56px;
  background-color: #161d2f;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  padding: 0 20px;
`;

const Redicon = styled.img`
  width: 25px;
  height: 20px;
`;

const Manimage = styled.img`
  width: 24px;
  height: 24px;
`;

const Categorycard = styled.div`
  width: 400px;
  height: 16px;
  display: flex;
  justify-content: space-between;
`;

const Navbookmark = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
const Navhome = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
const Navmovies = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
const Navtvseries = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const Homesearch = styled.input`
  margin-top: 20px;
  margin-left: 10px;
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
