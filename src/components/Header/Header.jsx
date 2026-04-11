import React, { useEffect, useState } from 'react'
import logo from '../images/logo1.png'
import './Header.css'
import { FaSearch } from "react-icons/fa";
import { PiReceiptBold } from "react-icons/pi";
import { PiSignOutBold } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { ovqatlar, shirinliklar, ichimliklar } from '../../data';


const Header = ({ setIsLogin }) => {
    // const Header = ({ setIsLogin, cartCount = 0 }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    const allProducts = [...ovqatlar, ...shirinliklar, ...ichimliklar];

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setSearchResults([]);
            return;
        }

        const filtered = allProducts.filter(product =>
            product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            product.description.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        )
        setSearchResults(filtered);
    }, [searchTerm]);

    const getHighlightedText = (text, highlight) => {
        if (!highlight.trim()) return <span>{text}</span>;

        const regex = new RegExp(`(${highlight})`, 'gi');
        const parts = text.split(regex);

        return (
            <span>
                {parts.map((part, index) =>
                    part.toLocaleLowerCase() === highlight.toLocaleLowerCase() ? (
                        <mark key={index} className="highlight">{part}</mark>
                    ) : (<span key={index}>{part}</span>)
                )}
            </span>
        )
    }

    return (
        <header className='header'>
            <div className="container">
                <nav className='header__nav'>
                    <img src={logo} alt="Food explorer" className='header__logo' />
                    <form className='header__form' onSubmit={(e) => e.preventDefault()}>
                        <FaSearch className='header__input__icon' />
                        <input
                            id='header__input'
                            type="text"
                            placeholder='Busque por pratos ou ingredients'
                            autoComplete="off" // Brauzer tarixini ko'rsatmaydi
                            className='header__input'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        {/* Natijalar oynasi faqat searchTerm borligida chiqadi */}
                        {searchResults.length > 0 && (
                            <ul className="header__search-results">
                                {searchResults.map((product) => (
                                    <li
                                        key={product.id}
                                        className="search-item"
                                        onClick={() => {
                                            navigate(`/product/${product.id}`);
                                            setSearchTerm("");
                                        }}
                                    >
                                        <img src={product.image} alt={product.name} />
                                        <div className="search-item-info">
                                            <span className="search-item-name">
                                                {getHighlightedText(product.name, searchTerm)}
                                            </span>
                                            <span className="search-item-description">
                                                {getHighlightedText(product.description, searchTerm)}
                                            </span>
                                            <span className="search-item-price">R$ 
                                                {product.price}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </form>
                    <button
                        type='submit'
                        className='header__btn'><PiReceiptBold className='header__btn__icon'
                        // onClick={() => navigate('/cart')}
                        /> Pedidos
                    </button>
                    <PiSignOutBold
                        className='header__exit__icon'
                        onClick={() => setIsLogin(false)}
                    />
                </nav>
            </div>
        </header>
    )
}

export default Header
