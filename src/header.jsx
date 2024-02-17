import styled from "styled-components";
import redicon from "../public/assets/logo.svg";
import manimage from "../public/assets/image-avatar.png";
import navhome from "../public/assets/icon-nav-home.svg";
import navmovies from "../public/assets/icon-nav-movies.svg";
import navtvseries from "../public/assets/icon-nav-tv-series.svg";
import navbookmark from "../public/assets/icon-nav-bookmark.svg";
import iconsearch from "../public/assets/icon-search.svg";
import navhomewhite from "../public/assets/icon-nav-home-white.svg";
import navmovieswhite from "../public/assets/icon-nav-movies-white.svg";
import navtvserieswhite from "../public/assets/icon-nav-tvseries-white.svg";
import navbookmarkwhite from "../public/assets/icon-nav-bookmark-white.svg";
import { Link, Outlet, useLocation } from "react-router-dom";

function Header() {
  const navigate = useLocation();

  return navigate.pathname !== "/login" &&
    navigate.pathname !== "/signup" &&
    navigate.pathname !== "/Login" ? (
    <>
      <Maincontainer>
        <Redicon src={redicon} />
        <Categorycard>
          <Link to="/home">
            <Navhome
              src={navigate.pathname === "/home" ? navhomewhite : navhome}
            />
          </Link>
          <Link to="/movie">
            <Navmovies
              src={navigate.pathname === "/movie" ? navmovieswhite : navmovies}
            />
          </Link>
          <Link to="/tvseries">
            <Navtvseries
              src={
                navigate.pathname === "/tvseries"
                  ? navtvserieswhite
                  : navtvseries
              }
            />
          </Link>
          <Link to="/bookmarked">
            <Navbookmark
              src={
                navigate.pathname === "/bookmarked"
                  ? navbookmarkwhite
                  : navbookmark
              }
            />
          </Link>
        </Categorycard>
        <Manimage src={manimage} />
      </Maincontainer>
      <Homesearch
        src={iconsearch}
        placeholder="Search for movies or TV series"
        textColor="#FFFFFF"
      />
      <Outlet />
    </>
  ) : null;
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

  @media screen and (min-width: 768px) {
    width: 719px;
    height: 72px;
    border-radius: 15px;
    margin-top: 15px;
  }
`;

const Redicon = styled.img`
  width: 25px;
  height: 20px;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 25.6px;
  }
`;

const Manimage = styled.img`
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const Categorycard = styled.div`
  width: 400px;
  height: 16px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 172.92px;
    height: 20px;
  }
`;

const Navbookmark = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
const Navhome = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
const Navmovies = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
const Navtvseries = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
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
  @media screen and (min-width: 768px) {
    margin-left: 30px;
  }
`;
