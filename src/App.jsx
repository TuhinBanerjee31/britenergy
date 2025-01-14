import './App.css'
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import OurWork from './pages/OurWork';

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/our-work' element={<OurWork />}/>
    </Routes>
    </>
  )
}

export default App
