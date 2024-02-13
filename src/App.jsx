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

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home data={jsonData} />} />
          <Route path="/movie" element={<Movies data={jsonData} />} />
          <Route path="/tvseries" element={<Tvseries data={jsonData} />} />
          <Route path="/bookmarked" element={<Bookmarkd data={jsonData} />} />
        </Routes>
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
