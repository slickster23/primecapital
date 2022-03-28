import React, { useEffect, useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom"
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailIcon from '@mui/icons-material/Email';

function Navbar() {
    const [click, setClick] = useState(false);

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll, { passive: true });
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
  return (

    <div className="nav-container">

        <div className="container">
            <div className="item">
                <div className="icon">
                <FmdGoodOutlinedIcon className = "icon-img"/> 
                </div>

                <div className="text">
                    <p>248 Moshoeshoe Road, Opposite Sefika Complex, Maseru, Lesotho</p>
                </div>
            </div>

            <div className="item">
                <div className="icon">
                < PhoneAndroidOutlinedIcon  className = "icon-img"/> 
                </div>

                <div className="text">
                    <a href="tel:+26622320951">(+266) 2232 0951</a>
                </div>
            </div>

            <div className="item">
                <div className="icon">
                < EmailIcon  className = "icon-img"/> 
                </div>

                <div className="text">
                    <a href="mailto:info@primecapitalfs.com">info@primecapitalfs.com</a>
                </div>
            </div>
        </div>
   
        <div className="nav">
            
            
            <div className="logo">
                <img src="/images/Prime Capital Logo Final-02.png" alt="" />
            </div>

            <div className="menu-icon" onClick={() => setClick(!click)}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

            <div className="nav-list">
                <ul>
                    <li className="nav-item">
                    <Link to = '/' className="nav-link">Home</Link></li>
                    <li className="nav-item">
                    <Link to = '/about' className="nav-link">About Us</Link></li>
                    <li className="nav-item">
                    <Link to = '/how-it-works'className="nav-link">How To Apply</Link></li>
                
                    <li className="nav-item">
                    <Link to = '/contact'className="nav-link">Contact Us</Link></li>
                </ul>
            </div> 

            <div
        className={click ? "side-menu open" : "side-menu"}
        onClick={() => setClick(!click)}
      >
        <div className="side-container">
          <ul className = "mobile-menu">
           
              <li className = "mobile-link">
                 <Link to = "/"  className = "link">Home</Link>  
                 </li>
           
           
              <li className = "mobile-link" >
                  <Link to = "/about"  className = "link"> About Us</Link></li>
       
           
              <li className = "mobile-link">
                  <Link to = "/how-it-works"  className = "link">How To Apply</Link>
              </li>
            
          
           <li className = "mobile-link">
            <Link to = "/contact"  className = "link">Contact Us</Link>
           </li>
            
          </ul>
        </div>
      </div>

        </div>

        </div>
  
  )
}

export default Navbar