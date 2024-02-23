import styled from "styled-components";

import { useLocation } from "react-router-dom";

function Homesearch(props) {
  const navigate = useLocation();
  return navigate.pathname !== "/login" &&
    navigate.pathname !== "/signup" &&
    navigate.pathname !== "/Login" ? (
    <>
      <Search
        placeholder="Search for movies or TV series"
        textColor="#FFFFFF"
        onChange={(event) => props.setSearch(event.target.value)}
      />
    </>
  ) : null;
}

export default Homesearch;

const Search = styled.input`
  margin-top: 20px;
  margin-left: 10px;
  width: 257px;
  height: 24px;
  background-color: #10141e;
  background-image: url("./assets/icon-search.svg");
  background-size: 24px;
  background-repeat: no-repeat;
  border: none;
  padding-left: 40px;
  &:focus,
  &:not(:placeholder-shown) {
    color: #ffffff;
  }

  &:focus {
    outline: none;
  }
  @media screen and (min-width: 768px) {
    background-position: left;
    margin-left: 30px;
    width: 381px;
    height: 32px;
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0px;
    text-align: left;
  }

  @media screen and (min-width: 1040px) {
    margin-left: 30px;
    margin-top: 45px;
  }
`;
