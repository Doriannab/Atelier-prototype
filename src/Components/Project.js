import React from 'react';
import Fille from '../Components/fille.png';
import Img from '../Components/side.png';
import '../Components/project.css';

const Project = () => {
  return (
    <div className="tir">
        <h3 className="client">Client's Testimonial</h3>
        <div className='rou'>
            <div className='perse'>
            <img  src={Fille} alt="" className='marche'/>
            <h4 className='lue'>Kelly Riley</h4>
            <span className="pan">Reddy</span>
            <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut lectus id neque gravida convallis. Nunc sit amet libero nec purus molestie scelerisque a ac orci. Curabitur gravida orci quam, eget suscipit ipsum sagittis non.</p>
            </div>

            <div className='but'>
            <img  src={Img} alt="" className='marcher'/>
            <h4 className='lue'>Kelly Riley</h4>
            <span className="pan">Reddy</span>
            <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut lectus id neque gravida convallis. Nunc sit amet libero nec purus molestie scelerisque a ac orci. Curabitur gravida orci quam, eget suscipit ipsum sagittis non.</p>
            </div>

            <div className='bute'>
            <img  src={Fille} alt="" className='marche'/>
            <h4 className='lue'>Kelly Riley</h4>
            <span className="pan">Reddy</span>
            <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut lectus id neque gravida convallis. Nunc sit amet libero nec purus molestie scelerisque a ac orci. Curabitur gravida orci quam, eget suscipit ipsum sagittis non.</p>
            </div>
        </div>
    </div>
  )
}

export default Project;