import React from 'react';
import "../Components/about.css";
import Lou from '../lou.png';
import Service from '../service.png';
import Cyy from '../Components/cyy.png';
import Ci from '../Components/cii.png';

const About = () => {
  return (
    <section className="sectionne" >
      <div className="about">
      <div className="abou">
      <img  src={Lou} alt="" className='mag'/>
      </div>
      <div className="loremm">
      
        <h4 className="titre">Who we are</h4>
        <p className="page">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
         Integer malesuada magna eget urna gravida auctor.<br />
          Maecenas porta dignissim aliquet.<br /><br /> malesuada ante ac, laoreet diam. Aenean accumsan justo <br />sit amet ultrices blandit.</p>
        <button className="button">LEARN MORE</button>
      </div>
      </div>
      
      <div className="aboute">
      <div className="loremme">
      
        <h4 className="titre">Who we are</h4>
        <p className="page">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
         Integer malesuada magna eget urna gravida auctor.<br />
          Maecenas porta dignissim aliquet.<br /><br /> malesuada ante ac, laoreet diam. Aenean accumsan justo <br />sit amet ultrices blandit.</p>
        <button className="button">LEARN MORE</button>
      </div>
      
      <div className="aboue">
      <img  src={Cyy} alt="" className='source'/>
      </div>
      </div>


      <div className="about">
      <div className="abou">
      <img  src={Service} alt="" className='mag'/>
      </div>
      <div className="loremm">
      
        <h4 className="titre">How we do it</h4>
        <p className="page">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
         Integer malesuada magna eget urna gravida auctor.<br />
          Maecenas porta dignissim aliquet.<br /><br /> malesuada ante ac, laoreet diam. Aenean accumsan justo <br />sit amet ultrices blandit.</p>
        <button className="button">LEARN MORE</button>
      </div>
      </div>
      
      <div className="aboute">
      <div className="loremme">
      
        <h4 className="titre">Why you shoul pick us</h4>
        <p className="page">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
         Integer malesuada magna eget urna gravida auctor.<br />
          Maecenas porta dignissim aliquet.<br /><br /> malesuada ante ac, laoreet diam. Aenean accumsan justo <br />sit amet ultrices blandit.</p>
        <button className="button">LEARN MORE</button>
      </div>
      
      <div className="aboue">
      <img  src={Ci} alt="" className='source'/>
      </div>
      </div>
      
      
    </section>
  )
}

export default About
