import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Login from "./login";
function App() {
  return (
    <>
      <GlobalStyles />
      <Login />
    </>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`body {
background-color:  #10141E}

*{
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}


@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Roboto:wght@700&display=swap');

`;
