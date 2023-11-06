import React, { useState } from "react";
import "../Components/navbar.css";
import "../Components/contact.css";
import Tech from '../tech.png'
import { CiFacebook} from 'react-icons/ci';
import { AiFillTwitterCircle} from 'react-icons/ai';
import { AiOutlineLinkedin} from 'react-icons/ai';

function Contact() {
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
    <header className="marie">
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
      </ul>
    </nav>


    <section className="contact">
        <p className="correct">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur aliquam eros, sit amet tincidunt justo faucibus id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet arcu non ipsum congue aliquam</p>
        <div className="">
        <div className="icone">
        <div className="nol">
        <CiFacebook className='miol'/>
        </div>
        <div className="nol">
        <AiFillTwitterCircle className='miol' />
        </div>
        <div className="nol">
        <AiOutlineLinkedin  className='miol'/>
        </div>
        </div>

         <p className='cons'>Footer@AI-fights techserver, 2023</p>
        </div>
       
    </section>
    </header>
     );
    }
export default Contact;