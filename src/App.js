import { CssBaseline } from "@mui/material";
import Home from "./componenthome/HomePage";
import About from "./componentaboutus/AboutPage";
import ArtistPage from "./componentartist/ArtistPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="home" element={<Home/>}/>
          <Route exact path="about" element={<About/>}/>
          <Route exact path="artist" element={<ArtistPage/>}/>
        </Routes>
      </BrowserRouter>

      <CssBaseline />
    </>
  );
}

export default App;
