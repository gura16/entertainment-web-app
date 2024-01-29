import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Login from "./login";
import Signup from "./signup";
import Header from "./header";
function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Login />
      <Signup />
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
