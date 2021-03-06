import React from 'react'
import './About.css'
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';

function About() {
  return (
    <div id ="about">
      <div className="breadcrumb">
        <div className="text">
          <h4>About Us</h4>
        </div>
        </div> 

        <div className="about-container">
          <div className="img">
            <img src="/images/IMG_0484.png" alt="" />
          </div>

          <div className="text">
            <h3>Company Introduction</h3>
            <p>Prime Capital aims to create an ecosystem where access to financial products 
              is put in the hands of those that need them the most. This can be achieved by 
              including marginalized and unbanked individuals and small businesses in the 
              financial system. Further to this, Prime Capital aims to create an ecosystem
               where individuals &  institutional investors can not only earn a real interest
              rate by lending in the real economy, but can also create impact by providing 
              capital to those that need it the most. The ultimate goal and vision is to see
               individuals (investors and borrowers) working together in a regulated marketplace, 
               as we believe that this is the best way in which we can grow the economy of Lesotho. 
               </p>

               <p> Prime Capital aims to do this by following the financial inclusion dimension that 
                 states that financial inclusion must be accessible, usable, and offer quality products 
                 and services.</p>

                 <p>Financial inclusion involves access to credit, access to savings, risk mitigation products, and 
                   a well-functioning economic infrastructure that allows individuals and companies to engage more 
                   actively in the economy with their rights protected. Prime Capital is aligned with this as borrowers 
                   can easily access capital for their personal or business needs in a regulated manner. At the same 
                   time, our investors are also allowed to lend, impact the economy and earn a higher real interest rate 
                   compared to current conventional solutions. </p>
          </div>
        </div>

        <h3>Values</h3>
        <div className="line"/>

        <div className="values-container">
          <div className="box">
            <div className="icon">
              <EmojiObjectsOutlinedIcon className = "icon-img"/>
            </div>

            <div className="text">
              <h4>Innovation</h4>
              <p> Innovative way of doing things. The use of technology to simplify processes 
                and increase efficiency to the end-users of the financial system.</p>
            </div>

          </div>

          <div className="box">
            <div className="icon">
              <HandshakeOutlinedIcon className = "icon-img"/>
            </div>

            <div className="text">
              <h4>Diversity & inclusion</h4>
              <p> Empower youth-owned and female-owned companies, as well as assist the informal 
                sector in becoming formal and expanding.</p>
            </div>

          </div>

          <div className="box">
            <div className="icon">
              <PeopleOutlinedIcon className = "icon-img"/>
            </div>

            <div className="text">
              <h4>Corporate Social Responsibility</h4>
              <p>From the profits generated by the company to give back to the poor and empower 
                them by creating education funds and donations as we believe that education is the 
                best way to impact and change the world.</p>
            </div>

          </div>
          <div className="box">
            <div className="icon">
              <SearchOutlinedIcon className = "icon-img"/>
            </div>

            <div className="text">
              <h4>Transparency</h4>
              <p> Ensure transparency when dealing with internal and external funds so that 
                our investors trust us fully.</p>
            </div>

          </div>

          <div className="box">
            <div className="icon">
              <LoyaltyOutlinedIcon className = "icon-img"/>
            </div>

            <div className="text">
              <h4>Honesty</h4>
              <p>To be honest in every situation, no matter how minute it may seem. </p>
            </div>

          </div>
        </div>
      </div>
 
  )
}

export default About