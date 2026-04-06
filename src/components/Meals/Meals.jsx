import React, { useState } from 'react';
import Slider from "react-slick";
import { ovqatlar } from '../../data';
import { useNavigate } from 'react-router-dom';

// Slick carousel uchun zaruriy stillar
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './meals.css';

// 1. Har bir ovqat kartochkasi uchun alohida komponent
const MealCard = ({ el }) => {
    const navigate = useNavigate();

    const goTODetails = () => {
        navigate(`/product/${el.id}`);
    };

    const [count, setCount] = useState(1);

    const inc = () => setCount(count + 1);
    const dec = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <div className="meal__card">
            <img 
                src={el.image} 
                alt={el.name} 
                className="meal__img" 
                onClick={goTODetails}
                />
            <h3 className="meal__name" onClick={goTODetails} >{el.name}</h3>
            <p className="meal__description">{el.description}</p>

            <span className="meal__price">R$ {(el.price * count).toFixed(2)}</span>

            <div className="meal__footer">
                <div className='meal__caunter'>
                    <button onClick={dec} className='meal__caunter-btn'>-</button>
                    <span className='meal__caunter-number'>{count}</span>
                    <button onClick={inc} className='meal__caunter-btn'>+</button>
                </div>
                <button className="meal__btn" onClick={goTODetails}>{el.btn}</button>
            </div>
        </div>
    );
};

// 2. Asosiy Meals komponenti
const Meals = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            }
        ]
    };

    return (
        <section className='meals-section'>
            <div className='container'>
                <div className="meals__container">
                    <h2 className='meals__title'>Refeições</h2>
                    
                    <div className="slider-wrapper">
                        <Slider {...settings}>
                            {ovqatlar.map((el) => (
                                <div key={el.id} className="slider__item">
                                    <MealCard el={el} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Meals;