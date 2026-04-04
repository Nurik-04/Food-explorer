import React, { useState } from 'react';
import Slider from "react-slick";
import { shirinliklar } from '../../data';

// Slick carousel uchun zaruriy stillar
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './meals.css';

// DIQQAT: ( { el } ) qismi qo'shildi, aks holda el.image xato beradi
const SweetsCard = ({ el }) => {
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

const Sweets = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3, // 3 emas 3.5 qilsangiz maketga mosroq tushadi
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
        // Klass nomini sweets-section qildik, Meals bilan aralashib ketmasligi uchun
        <section className='meals-section sweets-section'>
            <div className='container'>
                <div className="meals__container">
                    {/* Sarlavhani "Sobremesas" (Shirinliklar) deb o'zgartirdik */}
                    <h2 className='meals__title'>Sobremesas</h2>

                    <div className="slider-wrapper">
                        <Slider {...settings}>
                            {shirinliklar && shirinliklar.map((el) => (
                                <div key={el.id} className="slider__item">
                                    <SweetsCard el={el} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sweets;