import React from 'react';
import "../Components/home.css";
import Image from '../Components/images.png';
import {MdOutlineManageHistory} from "react-icons/md";
import { FaMoneyCheck } from 'react-icons/fa';
import { SiManageiq } from 'react-icons/si';
import {RiInformationFill} from 'react-icons/ri';
import {GrSafariOption} from 'react-icons/gr';
import {GrTechnology} from 'react-icons/gr';



const Home = () => {
  return (
    <div className="container">
    <h1 className="our">Our Service</h1>
    <p className="who">Who help to communicate the value of your project so you get  the buy in and adoption you need tu succes</p>
    <div className="homer">
    <div className="vouse">
    <div className="">
      <h3  className="rose"> <FaMoneyCheck className="icon"/>Corporate Finance</h3>
      <p className="mien">Who help to communicate the value of your project so you get  the buy in and adoption you need tu succes</p>
      <span className='span'>Fload More...</span>
    </div>
    <div className="">
    
      <h3  className="roso"><MdOutlineManageHistory className="icon"/>Operations management</h3>
      <p className="mien">Who help to communicate the value of your project so you get  the buy in and adoption you need tu succes</p>
      <span className='span'>Fload More...</span>
    </div>
    <div className="">
   
      <h3  className="rosa"> <SiManageiq className="icon" />Risk Management</h3>
      <p className="mien">Who help to communicate the value of your project so you get  the buy in and adoption you need tu succes</p>
      <span className='span'>Fload More...</span>
    </div>
    </div>
    <div className="nouse">
    <div className="">
      <h3 className="rosso"> < RiInformationFill className="icon"/>Information Management</h3>
      <p className='mienne'>Who help to communicate the value of your project so you get  the buy in and adoption you need tu succes</p>
      <span className='span'>Fload More...</span>
    </div>
    <div className="">
    
      <h3 className='rosso'><GrSafariOption className="icon"/>Strategy And Optimisation</h3>
      <p className="mienne">Who help to communicate the value of your project so you get  the buy in and adoption you need tu succes</p>
      <span className='span'>Fload More...</span>
    </div>
    <div className="">
   
      <h3 className='rossa'> <GrTechnology className='icon' />Technologies And Innovations</h3>
      <p className='mienne'>Who help to communicate the value of your project so you get  the buy in and adoption you need tu succes</p>
      <span className='span'>Fload More...</span>
    </div>
    

    </div>
   </div>
   </div>
  )
}

export default Home
