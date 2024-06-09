import React from "react";
import {Routes, Route} from 'react-router-dom'
import "./App.css"
//Common Components
import Nav from "./Components/CommonComponents/Nav";
import Footer from "./Components/CommonComponents/Footer";
import LandingPage from "./Components/CommonComponents/LandingPage";
import AboutTheDevs from "./Components/CommonComponents/AboutTheDevs";

//Components
import Home from "./Components/CommonComponents/Home";
import Connect from "./Components/Connect";
import EatWisely from "./Components/EatWisely";
import MoveNaturally from "./Components/MoveNaturally";
import OutLook from "./Components/OutLook";

const App = () => {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/homepage" element={<Home />} />
        <Route path="/moveNaturally" element={<MoveNaturally />} />
        <Route path="/rightoutlook" element={<OutLook />} />
        <Route path="/eatWisely" element={<EatWisely />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/aboutthedevs" element={<AboutTheDevs />} />
    </Routes>
    <Footer/>
    </>
  )
};

export default App;
