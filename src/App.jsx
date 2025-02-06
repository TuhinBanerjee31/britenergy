import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Recognition from "./pages/Recognition";
import Location from "./pages/Location";
import Project from "./pages/Project";
import BlogNews from "./pages/Newsroom";
import { ArticlePage } from "./pages/ArticlePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-impact" element={<OurWork />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/recognition" element={<Recognition />} />
        <Route path="/location" element={<Location />} />
        <Route path="/our-impact/riyadh-metro" element={<Project />} />
        <Route path="/our-impact/haramain-railway" element={<Project />} />
        <Route path="/our-impact/king-abdulaziz-airport" element={<Project />} />
        <Route path="/our-impact/kingdom-tower" element={<Project />} />
        <Route path="/our-impact/jeddah-economic-city" element={<Project />} />
        <Route path="/our-impact/lumina-smart-city" element={<Project />} />
        <Route path="/our-impact/mumbai-container-terminals" element={<Project />} />
        <Route path="/our-impact/mundra-port-expansion" element={<Project />} />
        <Route path="/our-impact/tata-steel-plant" element={<Project />} />
        <Route path="/our-impact/east-west-metro-corridor" element={<Project />} />
        <Route path="/our-impact/dubai-expo" element={<Project />} />
        <Route path="/our-impact/singareni-collieries-power-plant" element={<Project />} />
        <Route path="/our-impact/rio-de-janeiro-light-rail" element={<Project />} />
        <Route path="/our-impact/melbourne-metro-tunnel" element={<Project />} />
        <Route path="/our-impact/gautrain-expansion" element={<Project />} />
        <Route path="/our-impact/zhuhai-macau-bridge" element={<Project />} />
        <Route path="/our-impact/new-istanbul-airport" element={<Project />} />
        <Route path="/our-impact/lagos-light-rail" element={<Project />} />
        <Route path="/our-impact/panama-canal-expansion" element={<Project />} />
        <Route path="/our-impact/london-crossrail" element={<Project />} />
        <Route path="/newsroom" element={<BlogNews />} />
        <Route path="/newsroom/article" element={<ArticlePage />} />
      </Routes>
    </>
  );
}

export default App;
