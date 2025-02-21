import React from 'react';
import './Footer.css'
import Githup from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"
import Logo from "../../assets/logo.png"
// import { Link } from 'react-scroll';
const Footer = () => {
    return (
        <div className="Footer-container" >
            <hr />
            <div className="footer" >
                <div className="social-links">
                    <img src={Githup} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={LinkedIn} alt="" />
                </div>
                <div className="logo-f">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className="blur footer-blur1"></div>
            <div className="blur footer-blur2"></div>
        </div>
    );
}

export default Footer;

