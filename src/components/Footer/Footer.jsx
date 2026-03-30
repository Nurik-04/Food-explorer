import React from 'react'
import Logo from '../images/logo2.png'
import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__container">
                    <img src={Logo} alt="Food explorer" className='footer__logo' />
                    <p className='footer__text'>&copy; 2023-{year} - Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
