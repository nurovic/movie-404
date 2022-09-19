import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Movies from "../Pages/Movies";
import TvSeries from "../Pages/TvSeries.tsx";

function index() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tv-series" element={<TvSeries />} />
    </Routes>
  );
}

export default index;