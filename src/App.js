import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import Favourites from "./pages/Favourites";
import MoviePage from "./pages/MoviePage";
import CastPage from "./pages/CastPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/actor/:id" element={<CastPage />} />
        </Routes>
      </div>
    </Router>
  )  
}

export default App;
