import React from 'react'
import { Button } from 'react-bootstrap'

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



export const Contact = () => {
  return (
    <div style={{display:"flex"}}>

      <div style={{width:"50%",height:"100%",paddingTop:"10%" ,paddingLeft:"4%"}}>
      
      <h2 aria-label="Contact me" class="blast-root" style={{color:"#08fdd8",fontSize:"3.6rem"}}>
      <span class="blast" aria-hidden="true"  >C</span>
      <span class="blast" aria-hidden="true"  >o</span>
      <span class="blast" aria-hidden="true"  >n</span>
      <span class="blast" aria-hidden="true"  >t</span>
      <span class="blast" aria-hidden="true"  >a</span>
      <span class="blast" aria-hidden="true"  >c</span>
      <span class="blast" aria-hidden="true"  >t </span>
      <span class="blast" aria-hidden="true"  >m</span>
      <span class="blast" aria-hidden="true"  >e</span>
      </h2>

       <p style={{color:"#fff",fontSize:" 1.1rem"  ,paddingTop:"2%"}}>I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.
       </p>
       


    <form >
        <label style={{paddingLeft:"0px"}}>
    
           <input style={{backgroundColor:"#42434e" ,width:" 33.5%",height:"50px",margin:"10px"}}  placeholder="Name" type="text" name="name"/>
           <input style={{backgroundColor:"#42434e" ,width:" 33.5%",height:"50px", margin:"10px"}}  placeholder="Email" type="email" name="name"/>
           </label>
           <label>
           <input style={{backgroundColor:"#42434e" ,width:"70%",height:"50px",margin:"10px"}}  placeholder="Subject" type="text" name="subject"/>
            </label>
           <label>
           <textarea style={{backgroundColor:"#42434e" ,width:"70%",height:"150px",margin:"10px"}} placeholder="Message" name="msg"></textarea>
         </label>
          <br/>

          {/* <input style={{position:"center"    ,content: "",
          display: "table",
          clear:" both"}} type="submit" value="Submit" /> */}

      <Button style={{height:" 20%", width:"20%",marginLeft:"45%"}}> Send message! </Button>




    </form>
                                                 


      </div>
    
    <div style={{color:"red",width:"50%",height:"100%"}}>Map
    
    
    
    {/* <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    
    
    
    
     */}
    
    
    
    
    
    
    
    
    </div>
    </div>
    
  )
}
