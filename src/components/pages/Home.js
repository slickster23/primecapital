import React from 'react'
import './Home.css'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Hero from '../Hero'
function Home() {
  return (
    <>
    <Hero/>
    <div id = "home">
      <div className="text-box">
      <h2>Welcome to Prime Capital</h2>
      <div className="line"/>
      <p>Our mission is to provide seamless access to financial products and services that will accelerate Lesotho’s economic growth.</p>
        </div>

        <div className="home-container">
          <div className="box">
            <div className="icon-box">
            <SupportAgentIcon className="icon"/>
              </div>
              <div className="text-box">
                <p>Offer a seamless user experience in providing financial services to clients. </p>
                </div>
            </div>

            <div className="box">
            <div className="icon-box">
              <CreditScoreIcon className="icon"/>
              </div>
              <div className="text-box">
                <p>Create financial products tailored to individual customer’s needs.  </p>
                </div>
            </div>

            <div className="box">
            <div className="icon-box">
              <VerifiedUserIcon className="icon"/>
              </div>
              <div className="text-box">
                <p>Ensure appropriate segmentation of loan products for different customers. </p>
                </div>
            </div>

            <div className="box">
            <div className="icon-box">
              <AttachMoneyIcon className="icon"/>
              </div>
              <div className="text-box">
                <p>Ensure that investors earn a real interest rate as compared to available conventional solutions.  </p>
                </div>
            </div>
          </div>
     
      </div>
      </>
  )
}

export default Home