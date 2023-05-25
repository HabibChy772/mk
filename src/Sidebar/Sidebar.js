import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
//import LOGO from '../Project_img/habibchy.png';
import LOGO from '../Project_img/chy.png';
import LOGO_pic from '../Project_img/logo.jpg';
import TextSphere from '../Component/TextSphere';
import { About } from '../Pages/About';
import { Skill } from '../Pages/Skill';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },


        {
            path:"/skill",
            name:"skill",
            icon:<FaShoppingBag/>
        },



        {
            path:"/project",
            name:"Project",
            icon:<FaRegChartBar/>
        },
        {
            path:"/contact",
            name:"Contact",
            icon:<FaCommentAlt/>
        },
       
        {
            path:"/productList",
            name:"Product List",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container">  
        
        <div className="sidebar">
        <div className={ isOpen ? 'open' : 'close'}>
              
           {/* <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar"> */}
               <div className="top_section" >
                <Link to={'/'}> 
                   {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><img src={LOGO}/> ff </h1> */}
                   <div className=  { isOpen ? 'logoop' : 'logocl'}>
                    <h1  className="logo"><img src={LOGO}/> ff </h1>
                   </div>
                   
                  </Link> 
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>

               <div style={{paddingTop:"80%",lineHeight:"2.5rem"}}>
              
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }  </div>
               </div>
           </div>
           <div className='scrollbox-inner'>

           <main >
            
            {children}
           
           
           </main> 
        </div></div>
    );
};

export default Sidebar;