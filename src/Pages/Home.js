import React from 'react'
import '../App.css'
import { About } from './About'
import { Skill } from './Skill'
import { Project } from './Project'
import { Contact } from './Contact'
import LOGO from '../Project_img/logo.jpg'
export const Home = () => {
  return (
    <div>
     
      <div style={{paddingTop:"2%"}}>
 <About />
      </div>
     
      <div style={{paddingTop:"20%"}}>
 <Skill/>
</div>
       
--save
        <div style={{paddingTop:"20%"}}>
 <Project/>
</div>
       
        <div style={{paddingTop:"20%"}}>
<Contact/>
</div>
       <img src={LOGO}/> 
        
        
    </div>
  )
}
