import './App.css'
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import OurWork from './pages/OurWork';
import OurTeam from './pages/OurTeam';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Recognition from './pages/Recognition';

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/our-work' element={<OurWork />}/>
    <Route path='/our-team' element={<OurTeam />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/faq' element={<Faq />}/>
    <Route path='/recognition' element={<Recognition />}/>
    </Routes>
    </>
  )
}

export default App
