import React from 'react';
import './Hero.css'
import Header from '../Header/Header';
import hero_image from "../../assets/hero_image.png"
import hero_Image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
const Hero = () => {
  return (
    <div className='hero'>
      <div className="left-hero">
          <Header />

        <div className="the-best-ad">
          <div></div>
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
            <span>+140</span>
            <span>Expert coaches</span>
          </div>

          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
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
   
         <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span><span>116 bpm</span>
         </div>


           {/* Hero Images */}
         <img src={hero_image} alt=""  className='hero-image'/>
        <img src={hero_Image_back} alt="" className='hero_image-back' />

        {/* Calories */}
        <div className="calories">
          <img src={Calories} alt="" />
          <div>
          <span>CaloriesBurned</span>
          
          <span>220 kcal</span>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
