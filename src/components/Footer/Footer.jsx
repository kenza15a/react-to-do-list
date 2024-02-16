import React from 'react'
import "./Footer.scss"
import FooterSocials from './FooterSocials'
function Footer() {
  return (
    <>
    <section className='footer__container'>
      <div className="footer__infos">
        <FooterSocials/>
      </div>
      <div className="footer__rights">
       <p>Kenza Filali - © 2024</p>
      </div>

    </section>
    </>
  )
}

export default Footer
