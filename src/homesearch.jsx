import styled from "styled-components";
import iconsearch from "../public/assets/icon-search.svg";

function Homesearch() {
  return (
    <>
      <Search
        src={iconsearch}
        placeholder="Search for movies or TV series"
        textColor="#FFFFFF"
      />
    </>
  );
}

export default Homesearch;

const Search = styled.input`
  margin-top: 20px;
  margin-left: 10px;
  width: 257px;
  height: 24px;
  background-color: #10141e;
  background-image: url(${iconsearch});
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
    margin-left: 0px;
    margin-top: 45px;
  }
`;
