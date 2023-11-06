import React, { useState } from "react";
import "../Components/navbar.css";
import Tech from '../tech.png'
import Image from '../Components/work.png';

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <header>
    <nav className="nav">
      <a href="#" className="nav__brand">
      <img  src={Tech} alt="" className="img"/>
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            About Us
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Services
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
           News
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
          Sign In
          </a>
        </li>
        <li className="nav__items">
          <a href="#" className="nav__links">
            TRY IT FREE
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>


    <div className="wrapper" >
      <section className="homes">
      <div className="home">
    <div className="home-content">
        <h1 className="">A leading provider of consulting services </h1>
        <p>Who help to communicate the value of your project so you get  the buy in and adoption you need tu succes</p>
        <div>
        <button className="rien">TRY IT FREE</button>
        </div>
    </div>
    </div>
    </section>
    <div className='ion'>
    <img  src={Image} alt="cercle" className="cercle"/>
    </div>
    </div>


  
     </header>
  );
}

export default Navbar;