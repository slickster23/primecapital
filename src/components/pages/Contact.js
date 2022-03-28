import React from 'react'
import './Contact.css'
import { Input, TextField, Button, InputLabel } from '@mui/material'
import { GoogleMap, LoadScript, Marker, InfoBox } from '@react-google-maps/api';


function Contact() {

    const coordinates = {
        "lat": -29.314076,
        "lng": 27.492677
      }

      const containerStyle = {
        width: '95vw',
        height: '60vh',
       
      };
  return (
    <div id ='contact'>
        <div className="breadcrumb">
        <div className="text">
          <h4>Contact Us</h4>
        </div>
        </div> 
        <div className="contact-container">
            <div className="box">
                <h3>Get in touch with us.</h3>
                <p>We save you not only time, but in many cases also many thousands of kroner. Want to 
                    get in touch? We'd love to hear from you. Here's how you can reach us...</p>
                    
                    <div className="container">
                    <div className="contact-info">
                        <p className = "bold">Call us</p>
                        <p>(+266) 2232 0951</p>
                    </div>

                    <div className="contact-info">
                        <p className = "bold">Whatsapp Us</p>
                        <p>(+266) 5733 0019</p>
                    </div>

                    <div className="contact-info">
                        <p className = "bold">Location</p>
                        <p>248 Moshoeshoe Road, Opposite Sefika Complex, Maseru, Lesotho</p>
                    </div>

                    <div className="contact-info">
                        <p className = "bold">Email</p>
                        <p>info@primecapitalfs.com</p>
                    </div>

                    
                    </div>
                   
            </div>

            <div className="box">
               <form  className="form"action="">
                   <div className="input-box">
    
                   <Input placeholder="Full Name" name="name" type="text"className="input" id = "name"/>
                  <Input placeholder="Email" name="email" className="input" type="email" /> 
                   </div>

                   <TextField multiline="true" placeholder = "Subject" name="subject" className ="input" id = "subject"></TextField>
                   <TextField multiline="true" placeholder = "Message" name="message" className ="input" id = "message"></TextField>
                   <Button type = "submit" className="button" >Submit</Button>
               </form>
                </div>
        </div>
        <div className="map-container">
            <LoadScript googleMapsApiKey="AIzaSyA4x_uwF1U8Dezn2xciKYwgcRmPInk1tbQ">

            <GoogleMap className="map"
            mapContainerStyle={containerStyle}
            center={coordinates}
            zoom={16}
            style={{width: '100%', height: '70vh', position: 'relative'}}>
 
      <Marker position={coordinates}/>
   
      </GoogleMap>
              </LoadScript>
              </div>

    </div>
  )
}

export default Contact