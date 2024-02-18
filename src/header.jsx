import styled from "styled-components";
import redicon from "../public/assets/logo.svg";
import manimage from "../public/assets/image-avatar.png";
import navhome from "../public/assets/icon-nav-home.svg";
import navmovies from "../public/assets/icon-nav-movies.svg";
import navtvseries from "../public/assets/icon-nav-tv-series.svg";
import navbookmark from "../public/assets/icon-nav-bookmark.svg";
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
  @media screen and (min-width: 1040px) {
    width: 96px;
    height: 960px;
    flex-direction: column;
    justify-content: start;
    margin: 0;
    padding: 30px 20px;
    margin-top: 20px;
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

  @media screen and (min-width: 1040px) {
    flex-direction: column;
    gap: 30px;
    align-items: center;
    width: 0px;
    margin-top: 10px;
    margin-bottom: 650px;
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
