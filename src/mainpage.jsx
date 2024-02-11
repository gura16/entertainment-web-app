import Header from "./header";
import Home from "./home";
import jsonData from "../public/data.json";
import Movies from "./movies";
import Tvseries from "./tvseries";
import Bookmarkd from "./bookmarkd";

function Mainpage() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home data={jsonData} />} />
          <Route path="/movie" element={<Movies data={jsonData} />} />
          <Route path="/tvseries" element={<Tvseries data={jsonData} />} />
          <Route path="/bookmarked" element={<Bookmarkd data={jsonData} />} />
        </Routes>
      </Router>
    </>
  );
}

export default Mainpage;
