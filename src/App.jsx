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
      </Routes>
    </>
  );
}

export default App;
