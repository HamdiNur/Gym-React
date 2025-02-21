 import React from 'react';
import './Hero.css'
import Header from '../Header/Header';
import hero_image from "../../assets/hero_image.png"
import hero_Image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import NumberCounter from 'number-counter'
import {motion} from 'framer-motion'

const Hero = () => {
  const transition = {type: 'spring', duration: 3}
  const mobile=window.innerWidth<=768 ? true :false;

  return (
    <div className='hero'  id='home'>
      <div className="blur hero-blur"></div>
      <div className="left-hero">
          <Header />

        <div className="the-best-ad">

          <motion.div
           initial={{left:mobile? "168px": '238px'}}
           whileInView={{left: '8px'}}
           transition={{...transition, type: 'tween'}}
          
          ></motion.div>
          <span>The best finess club in the city</span>
        </div>

            <br />
        {/* hero  heading  */}
        <div className='hero-text'>
          <div>
            <span className='stroke-text'> Shape</span>
            <span> Your</span>
            </div>
          <div>
            <span>Ideal Body</span>
          </div>

          <div>
            <span>
              in here we will help
              you to shape and
              build your ideal body
              and live up your live
              to fullest
            </span>
          </div>
        </div>
           <br />
        {/* Figures */}
        <div className="figures">
          <div>
            <span>

              <NumberCounter end={140} start={100}delay='4' preFix="+"></NumberCounter>
            </span>
            <span>Expert coaches</span>
          </div>
          <div>
            <span>
            <NumberCounter end={978} start={800}delay='4' preFix="+"></NumberCounter>

            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
            <NumberCounter end={50} start={0}delay='4' preFix="+"></NumberCounter>

            </span>
            <span>fitness prgrams</span>
          </div>
        </div>
        <br />
        {/* Hero Buttons */}
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className='btn'> Join Now</button>
   
         <motion.div
         initial={{right:"-1rem"}}
         whileInView={{right:"4rem"}}
         transition={transition}
         className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span><span>116 bpm</span>
         </motion.div>


           {/* Hero Images */}
         <img src={hero_image} alt=""  className='hero-image'/>
        <motion.img 
        initial={{right:"11rem"}}
        whileInView={{right:"23rem"}}
        transition={transition}

        
        src={hero_Image_back} alt="" className='hero_image-back' />

        {/* Calories */}
        <motion.div 
        initial={{right:"37rem"}}
        whileInView={{right:"30rem"}}
        transition={transition}
        
        
        className="calories">
          <img src={Calories} alt="" />
          <div>
          <span>CaloriesBurned</span>
          
          <span>220 kcal</span>
        </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
