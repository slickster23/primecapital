import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import AccessTimeFilledOutlinedIcon from '@mui/icons-material/AccessTimeFilledOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';

function Footer() {
  return (
    <div id="footer">
        <div className="footer-container">
        <div className="box">
           <div className="img-box">
           <img src="/images/Prime Capital Logo Final-02.png" alt="" />  
            </div>
        </div>

        <div className="box">
           <h2>Links</h2>
           <Link to="/about">About</Link>
           <Link to="/how-it-works">How it works</Link>
           <Link to ="/contact">Contact</Link>
            </div>

            <div className="box">
           <h2>Socials</h2>
            <a href="https://www.facebook.com/PrimeCapital2021" target="_blank" rel="noreferrer"> > Facebook</a>
            <a href="https://www.linkedin.com/company/prime-capital-pty-ltd/?originalSubdomain=ls" target="_blank" rel="noreferrer"> > LinkedIn</a>
          
            </div>

            <div className="box">
           <h2>Contact Us</h2>
           <div className="container">
           <AccessTimeFilledOutlinedIcon className="icon"/>
           <p>Monday - Friday: 09:00 - 5:00pm</p>
           </div>

           <div className="container">
           <AddLocationAltOutlinedIcon  className="icon"/>
           <p>248 Moshoeshoe Road, Opposite Sefika Complex, Maseru, Lesotho</p>
           </div>

           <div className="container">
           <WhatsappOutlinedIcon  className="icon"/>
           <p>(+266) 5733 0019</p>
           </div>
            
            </div>
        </div>

      <div className="credits-container">
       

        <div className="credits">
          <p>Copyright &copy; Prime Capital 2022. Designed & Developed by <a href="https://www.tokelofoso.online" target="_blank">Tokelo Foso</a></p>
        </div>

      </div>
       

</div>

           
     
    
  )
}

export default Footer