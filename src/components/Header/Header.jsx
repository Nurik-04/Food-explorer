import React from 'react'
import logo from '../images/logo1.png'
import './Header.css'
import { FaSearch } from "react-icons/fa";
import { PiReceiptBold } from "react-icons/pi";
import { PiSignOutBold } from "react-icons/pi";

const Header = () => {
  return (
    <header className='header'>
        <div className="container">
            <nav className='header__nav'>
                <img src={logo} alt="Food explorer" className='header__logo' />
                <form className='header__form'>
                    <FaSearch className='header__input__icon'/>
                    <input 
                        id='header__input'
                        type="text"
                        placeholder='Busque por pratos ou ingredientes'
                        required
                        className='header__input'
                        />
                </form>
                <button 
                    type='submit' 
                    className='header__btn'><PiReceiptBold className='header__btn__icon' /> Pedidos
                </button>
                <PiSignOutBold className='header__exit__icon' />
            </nav>
        </div>
    </header>
  )
}

export default Header
