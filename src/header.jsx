import styled from "styled-components";
import redicon from "../public/assets/logo.svg";
import manimage from "../public/assets/image-avatar.png";
import navhome from "../public/assets/icon-nav-home.svg";
import navmovies from "../public/assets/icon-nav-movies.svg";
import navtvseries from "../public/assets/icon-nav-tv-series.svg";
import navbookmark from "../public/assets/icon-nav-bookmark.svg";

function Header() {
  return (
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
