import React from 'react';
import { useState, useEffect } from 'react';
import serverConfig from '../../config';
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import '../../App.css';



function Footer() {

  return (
    <div>
        <Bottom></Bottom>

    </div>
  );
}

function Bottom(){ 
    return(
       <div className='footer'>

       </div>
    )
}



export default Footer;