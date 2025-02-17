import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Recognition from "./pages/Recognition";
import Location from "./pages/Location";
import Project from "./pages/Project";
import BlogNews from "./pages/Newsroom";
import { ArticlePage } from "./pages/ArticlePage";
import OurImapct from "./pages/OurImpact";
import WorkPage from "./pages/WorkPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-impact" element={<OurImapct />} />
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
        <Route path="/newsroom/kpng-solar-park-in-south-africa" element={<ArticlePage />} />
        <Route path="/newsroom/smart-city-solutions-initiative" element={<ArticlePage />} />
        <Route path="/newsroom/global-expansion" element={<ArticlePage />} />
        <Route path="/newsroom/future-of-green-construction" element={<ArticlePage />} />
        <Route path="/newsroom/powering-the-world-sustainably" element={<ArticlePage />} />
        <Route path="/newsroom/role-of-technology-in-infrastructure" element={<ArticlePage />} />
        <Route path="/newsroom/iconic-infrastructure-dubai" element={<ArticlePage />} />
        <Route path="/newsroom/renewable-energy-brazil" element={<ArticlePage />} />
        <Route path="/newsroom/emerging-energy-storage" element={<ArticlePage />} />
        <Route path="/newsroom/smart-cities-frontier" element={<ArticlePage />} />
        {/* <Route path="/our-work/infrastructure" element={<WorkPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
