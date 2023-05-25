import React from 'react'

import ProgressBar from '@ramonak/react-progress-bar';
import { FaBootstrap } from 'react-icons/fa';
export const Skill = () => {

  const mainDiv = {
    width:"50%" ,
    paddingRight:"5%",
    paddingTop:"16%"
  
 };
  return (
    <div style={{display:"flex"}}>
      {/* <div style={{width:"50%" ,height:"100%",backgroundColor:"gray"}}>  */}
      
      <div className='ab_self' style={{width:"50%" ,paddingTop:"10%",paddingRight:"8%" ,paddingLeft:"2%"  ,  lineHeight: "1.5"}}>

                

 <h2 aria-label=" Skills &amp; " class="blast-root" style={{color:"#08fdd8",fontSize:"5rem",lineHeight: "1"}}>

 <span class="blast" aria-hidden="true"  >S</span>
 <span class="blast" aria-hidden="true"  >k</span>
 <span class="blast" aria-hidden="true"  >i</span>
  <span class="blast" aria-hidden="true"  >l</span>
  <span class="blast" aria-hidden="true"  >l</span>
  <span class="blast" aria-hidden="true"  >s</span>
  <span class="blast" aria-hidden="true"  >&amp;</span> 
 
  </h2> 
      
      



  <h2 aria-label="  Experience" class="blast-root" style={{color:"#08fdd8",fontSize:"5rem",lineHeight: "1"}}>

 <span class="blast" aria-hidden="true"  >E</span>
 <span class="blast" aria-hidden="true"  >x</span>
 <span class="blast" aria-hidden="true"  >p</span> 
 <span class="blast" aria-hidden="true"  >e</span>
 <span class="blast" aria-hidden="true"  >r</span>
 <span class="blast" aria-hidden="true"  >i</span> 
 <span class="blast" aria-hidden="true"  >e</span>
 <span class="blast" aria-hidden="true"  >n</span>
 <span class="blast" aria-hidden="true"  >c</span>
 <span class="blast" aria-hidden="true"  >e</span>
 </h2> 
      

 <p style={{color:"#fff",fontSize:" 1.1rem"  , paddingTop:"2%"  }}> Since beginning my journey as a freelance developer nearly 10 years ago, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.


 </p>
<p style={{color:"#fff",fontSize:" 1.1rem"  , paddingTop:"2%"  }}>
  
I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.

</p>
<p style={{color:"#fff",fontSize:" 1.1rem"  , paddingTop:"2%"  }}>I also have full-stack developer experience with popular open-source CMS like (WordPress, Drupal, Magento, Keystone.js and others) .
</p>
<p style={{color:"#fff",fontSize:" 1.1rem"  , paddingTop:"2%"  }}>
Visit my LinkedIn profile for more details or just contact me.
</p>

 </div>
      



 <div style = {mainDiv}>
   
    <h2 style={{color:"#fff"}}>Front-end</h2>
    <ProgressBar completed = {50} bgColor = "grey" animateOnRender = {true} />
    <br></br>
    <h2 style={{color:"#fff"}} >Back-end</h2>
   
    <ProgressBar completed = {30} bgColor = "green" isLabelVisible = {false} />
    <br></br>
    <h2 style={{color:"#fff"}} >ReactJS</h2>
    

    <ProgressBar completed = {50} bgColor = "red" animateOnRender = {true} isLabelVisible = {false} />
    <br></br>
    <h2 style={{color:"#fff"}} >Angular</h2>
    <ProgressBar completed = {90.1} bgColor = "black" />
    <br></br>
    <ProgressBar completed = {90.3} animateOnRender = {true} />
 </div>


    </div>
  )
}
