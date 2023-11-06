import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home  from './Components/Home';
import About  from './Components/About';
import Project  from './Components/Project';
import Footer  from './Components/Footer';
import Contact  from './Components/Contact';


function App() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <Project/>
        <Footer/> 
        <Contact/>
    </div>
  )
}

export default App