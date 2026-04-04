import React from 'react'
import Hero_img from '../images/hero.png';
import Meals from '../Meals/Meals';
import Sweets from '../Meals/Sweets';
import Drinks from '../Meals/Drinks';
import './hero.css';

const Hero = () => {
    return (
    <div className="container">
        <div className="hero__container">
            <div className="hero__box">
                <img src={Hero_img} alt="Hero" className="hero__img animate-pulse " />
                <div className="hero__title__box">
                    <h1 className="hero__title">Sabores inigualáveis</h1>
                    <p className="hero__text">Sinta o cuidado do preparo com ingredientes selecionados</p>
                </div>
            </div>
        </div>
        <Meals />
        <Sweets />
        <Drinks />
    </div>
    )
}

export default Hero
