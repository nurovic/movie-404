import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Movies from "../Pages/Movies";

function index() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
  );
}

export default index;