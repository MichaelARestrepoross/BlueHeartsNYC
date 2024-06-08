import React from "react";
import {Routes, Route} from 'react-router-dom'

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
import Outlook from "./Components/Outlook";

const App = () => {
  <>
  <Nav/>
  <Routes>
    <Route path="/" element={<LandingPage />} />
      <Route path="/homepage" element={<Home />} />
      <Route path="/moveNaturally" element={<MoveNaturally />} />
      <Route path="/rightoutlook" element={<Outlook />} />
      <Route path="/eatWisely" element={<EatWisely />} />
      <Route path="/connect" element={<Connect />} />
      <Route path="/aboutthedevs" element={<AboutTheDevs />} />
  </Routes>
  <Footer/>
</>
};

export default App;
