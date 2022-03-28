import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Footer from './components/Footer'
import HowItWorks from './components/pages/HowItWorks';
import Contact from './components/pages/Contact'

function App() {
  return (
    <div className = "App">
  
   <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path='/'  exact element = {<Home/>} />
      <Route path='/about' exact element = {<About/>}/>
      <Route path='/how-it-works' exact element = {<HowItWorks/>}/>
      <Route path='/contact' exact element = {<Contact/>}/>
  
    </Routes>
    <Footer/>
  </BrowserRouter>
  
    </div>
  );
}

export default App;
