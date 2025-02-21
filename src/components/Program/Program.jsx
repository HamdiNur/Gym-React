import React from 'react';
import './Program.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
const Program = () => {
  return (
       <div className="Program" id="programs">
        {/* Header */}
        <div className="programs-header">
            <span className='stroke-text'>Explore Our</span>
            <span>Program</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        <div className="program-categories">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span><span>{program.details}</span>
                    <div className="join-now">
                        <span>Join Now</span><img src={RightArrow}alt="" />
                    </div>
                </div>
            ))}
        </div>
       </div>
  );
}

export default Program;
