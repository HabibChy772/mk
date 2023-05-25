import React from 'react'
import '../App.css'
import TextShpere from '../Component/TextSphere'

export const About = () => {
  return (
    <div>
    
         
           <div className='abouth' style={{ display:"flex" }}>


              <div className='ab_self' style={{width:"40%" ,paddingTop:"10%",paddingRight:"8%" ,paddingLeft:"2%"  ,  lineHeight: "1.5"}}>

                

                 <h2 aria-label="My, Myself &amp; I" class="blast-root" style={{color:"#08fdd8",fontSize:"5rem"}}>
             
                  <span class="blast" aria-hidden="true"  >M</span>
                  <span class="blast" aria-hidden="true"  >y</span>
                  <span class="blast" aria-hidden="true"  >,</span>
                   <span class="blast" aria-hidden="true"  >M</span>
                   <span class="blast" aria-hidden="true"  >y</span>
                   <span class="blast" aria-hidden="true"  >s</span>
                   <span class="blast" aria-hidden="true"  >e</span>
                   <span class="blast" aria-hidden="true"  >l</span>
                   <span class="blast" aria-hidden="true"  >f</span> 
                   <span class="blast" aria-hidden="true"  >&amp;</span> 
                   <span class="blast" aria-hidden="true"  >I</span>
                   
                   </h2>
                 
                 <p style={{color:"#fff",fontSize:" 1.1rem"  , paddingTop:"2%"  }}>
I’m a Front-End Developer located in Poland. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
</p>
<p style={{color:"#fff",fontSize:" 1.1rem"  , paddingTop:"2%"}}>
Well-organised person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor activities, TV series and English literature. A family person and father of two fractious boys,
</p> 
<p style={{color:"#fff",fontSize:" 1.1rem",lineheight: "0.5" , paddingTop:"2%"}}>
Interested in the entire frontend spectrum and working on ambitious projects with positive people.

Let’s make something special.</p>

              </div>
              <div id="my" style={{width:"500",height:"500",paddingTop:"10%",paddingRight:"5%"}}>
             
                <TextShpere/>
              </div>

             

             
           </div>
  
                

    </div>
  )
}
