import React from 'react'
import './HowItWorks.css'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import {Link} from 'react-router-dom'

function HowItWorks() {
  return (
    <div id = 'howItWorks'>
         <div className="breadcrumb">
        <div className="text">
          <h4>How It Works</h4>
        </div>
        </div> 

        <h4>Get your loan approved in 3 steps</h4>
        <div className="line"/>

        <div className="steps-container">
            <div className="box">
                <div className="icon-container">
                 <CalculateOutlinedIcon className="icon"/>
                </div>

                <div className="text">
                    <h3>Loan Calculator</h3>
                    <p>Select loan amount and duration from our loan calculator</p>
                </div>
            </div>

            <div className="box">
                <div className="icon-container">
                <ArticleOutlinedIcon className="icon"/>
                </div>

                <div className="text">
                    <h3>Fill application</h3>
                    <p>Fill in our application form with required details</p>
                </div>
            </div>

            <div className="box">
                <div className="icon-container">
                <DoneAllOutlinedIcon className="icon"/>
                </div>

                <div className="text">
                    <h3>Check Eligibility</h3>
                    <p>Submit your application form and one of our agents will get back to you</p>
                </div>
            </div>
        </div>

        <h4>Who Can Apply?</h4>
        <div className="line"></div>

        <div className="applicants-container">
            <div className="box">
                <h3>Civil Servant</h3>
               
                <div className="dropdown">
                <ul>
                    <li>ID Copy</li>
                    <li>Payslip</li>
                </ul>
                </div>
                <Link className = "link" to = '/contact'>Apply Now</Link>
            </div>

            <div className="box">
                <h3>Private Sector</h3>
                
                <div className="drop-down">
                <ul>
                    <li>ID Copy</li>
                    <li>Latest 3 months payslip</li>
                    <li>Latest 3 months bank statement</li>
                    <li>Proof of residence</li>
                    <li>Proof of employment</li>
                </ul>
                </div>

                <Link className = "link" to = '/contact'>Apply Now</Link>
               
            </div>

            <div className="box">
                <h3>Small/Medium Enterprises</h3>
                
                <div className="drop-down">
                <ul>
                    <li>Company registration documents</li>
                    <li>Latest valid trader's licence</li>
                    <li>Latest tax clearance certificate</li>
                    <li>Latest audited financial statements</li>
                    <li>Latest 6 months management accounts</li>
                    <li>Latest 6 months company bank statement</li>
                    <li>Copy of lease agreement of the company's effective management</li>
                    <li>Passport/ID copies of all directors as per company extract provided.</li>
                </ul>
                </div>

                <Link className = "link" to = '/contact'>Apply Now</Link>
               
            </div>
        </div>
    </div>
  )
}

export default HowItWorks