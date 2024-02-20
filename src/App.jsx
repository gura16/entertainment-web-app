import { createGlobalStyle } from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./header";
import Home from "./home";
import jsonData from "../public/data.json";
import Movies from "./movies";
import Tvseries from "./tvseries";
import Bookmarkd from "./bookmarkd";
import Login from "./login";
import Signup from "./signup";
import styled from "styled-components";
import Homesearch from "./homesearch";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Maincard>
      <GlobalStyles />
      <Router>
        <Header />
        <div>
          <Homesearch setSearch={setSearch} />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/home"
              element={<Home search={search} data={jsonData} />}
            />
            <Route
              path="/movie"
              element={<Movies search={search} data={jsonData} />}
            />
            <Route
              path="/tvseries"
              element={<Tvseries search={search} data={jsonData} />}
            />
            <Route
              path="/bookmarked"
              element={<Bookmarkd search={search} data={jsonData} />}
            />
          </Routes>
        </div>
      </Router>
    </Maincard>
  );
}

export default App;

const Maincard = styled.div`
  @media screen and (min-width: 1040px) {
    display: flex;
  }
`;

const GlobalStyles = createGlobalStyle`body {
    background-color:  #10141E}
    
    *{
      margin: 0;
      padding: 0;
      box-sizing:border-box;
    }
    
    
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Roboto:wght@700&display=swap');
    
    `;
