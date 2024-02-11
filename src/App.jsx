import { createGlobalStyle } from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import Mainpage from "./mainpage";
import Login from "./login";
import Signup from "./signup";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, []);
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mainpage" element={<Mainpage />} />
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
