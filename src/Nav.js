import React, { useEffect, useState } from 'react'
import './Nav.css'


function Nav() {

    const [show,handleShow] = useState(false);
     useEffect(()=>{
    window.addEventListener("scroll",()=>{
        if(window.scrollY > 100){
           handleShow(true);
        }else
           handleShow(false);
    });
    return ()=>{
        window.removeEventListener("scroll",null);
    };
     },[]);
  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img className='nav_logo'
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9SbjZeQ-brKJNc4CZPHSapNUtCi5Mumpup-Eb3CBG&s'
      alt='netflix logo'/>

<img className='avatar_logo'
      src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png'
      alt='avatar logo'/>
    </div>
  )
}

export default Nav
