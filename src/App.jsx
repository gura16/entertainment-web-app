import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Login from "./login";
import Signup from "./signup";
import Header from "./header";
import Home from "./home";
import jsonData from "../public/data.json";
import Movies from "./movies";
import Tvseries from "./tvseries";

function App() {
  const recommendedItems = jsonData.filter((item) => !item.isTrending);
  const tvserieseitems = jsonData.filter((item) => item.category !== "Movie");
  const bookmarkitems = jsonData.filter((item) => item.isBookmarked);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home data={jsonData} />} />
          <Route path="/movie" element={<Movies data={jsonData} />} />
          <Route path="/tvseries" element={<Tvseries data={jsonData} />} />
          {/* <Route
            path="/bookmarked"
            element={<Recommended data2={bookmarkitems} />}
          /> */}
        </Routes>

        {/* <Login />
      <Signup /> */}
      </Router>
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
