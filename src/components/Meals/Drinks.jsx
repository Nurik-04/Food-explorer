import React, { useState } from 'react';
import Slider from "react-slick";
import { ichimliklar } from '../../data'; // Ma'lumotlarni data faylidan olish

// Slick carousel uchun zaruriy stillar
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Meals/meals.css'; // Mavjud stillarni ishlatamiz

// 1. Har bir ichimlik kartochkasi uchun alohida komponent
const DrinksCard = ({ el }) => {
    const [count, setCount] = useState(1);

    const inc = () => setCount(count + 1);
    const dec = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <div className="meal__card">
            <img src={el.image} alt={el.name} className="meal__img" />
            <h3 className="meal__name">{el.name}</h3>
            <p className="meal__description">{el.description}</p>

            {/* Narxni miqdorga ko'paytirib ko'rsatish */}
            <span className="meal__price">R$ {(el.price * count).toFixed(2)}</span>

            <div className="meal__footer">
                <div className='meal__caunter'>
                    <button onClick={dec} className='meal__caunter-btn'>-</button>
                    <span className='meal__caunter-number'>{count}</span>
                    <button onClick={inc} className='meal__caunter-btn'>+</button>
                </div>
                <button className="meal__btn">{el.btn}</button>
            </div>
        </div>
    );
};

// 2. Asosiy Drinks komponenti
const Drinks = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3, // 3.5 qilsangiz, chetdan keyingi slayd ko'rinib turadi
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.2,
                    centerMode: true,
                }
            }
        ]
    };

    return (
        <section className='meals-section drinks-section'>
            <div className='container'>
                <div className="meals__container">
                    <h2 className='meals__title'>Bebidas</h2> {/* Ichimliklar sarlavhasi */}

                    <div className="slider-wrapper">
                        <Slider {...settings}>
                            {ichimliklar && ichimliklar.map((el) => (
                                <div key={el.id} className="slider__item">
                                    <DrinksCard el={el} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Drinks;