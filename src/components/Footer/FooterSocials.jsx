import React from 'react'
import './Footer.scss'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";
import footerLogo from '../../assets/app footer logo.png'
import { TbWorldWww } from "react-icons/tb";

function FooterSocials() {
    return (
        <>
        <div className="footer__socials">
         <a href="https://www.linkedin.com/in/kenza-fil/" target='_blank' rel="noreferrer"><FaLinkedin className='footer__icon' />
     
     </a>
         <a href="https://github.com/kenza15a" target='_blank' rel="noreferrer"><FaSquareGithub className='footer__icon' />
     </a>
         <a href="https://www.behance.net/kenzafilali?log_shim_removal=1" target='_blank' rel="noreferrer"><FaBehanceSquare  className='footer__icon'/>
     </a>
  
         <a href="https://kenza-filali-portfolio.netlify.app/" target='_blank' rel="noreferrer"><TbWorldWww className='footer__icon'/>
     </a>
     
     <a href="#" target='_self' className="footer__logo"><img  src={footerLogo} alt="a productivity app" />
     </a>
        </div>
        </>
       )
}

export default FooterSocials
