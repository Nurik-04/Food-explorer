import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ovqatlar } from '../../data'; // Ma'lumotlar manbasi
import { AiOutlineHeart } from "react-icons/ai"; // Yurakcha ikonasi uchun

// Swiper stillari
import 'swiper/css';
import 'swiper/css/navigation';
import './meals.css';

const MealCard = ({ el }) => {
    const [count, setCount] = useState(1);

    const inc = () => setCount(count + 1);
    const dec = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <div className="meal__box">
            <AiOutlineHeart className="meal__wishlist" />
            <img src={el.image} alt={el.name} className="meal__img" />
            <h3 className="meal__name">{el.name} &gt;</h3>
            <p className="meal__description">{el.description}</p>
            <span className="meal__price">R$ {(el.price * count).toFixed(2)}</span>

            <div className="meal__footer">
                <div className='meal__counter'>
                    <button onClick={dec} className='meal__counter-btn'>-</button>
                    <span className='meal__counter-number'>{count < 10 ? `0${count}` : count}</span>
                    <button onClick={inc} className='meal__counter-btn'>+</button>
                </div>
                <button className="meal__btn">incluir</button>
            </div>
        </div>
    );
};

const Meals = () => {
    return (
        <section className="meals">
            <div className="container">
                <h2 className="meals__title">Refeições</h2>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={27}
                    slidesPerView={3.5}
                    navigation={true}
                    loop={true}
                    speed={800} // O'tish tezligi (millisekundda). 800ms juda yumshoq effekt beradi.
                    grabCursor={true} // Sichqoncha borganda qo'lcha chiqadi
                    touchEventsTarget="container"
                    edgeSwipeThreshold={20}
                    breakpoints={{
                        320: { slidesPerView: 1.5, spaceBetween: 16 },
                        768: { slidesPerView: 2.5, spaceBetween: 20 },
                        1024: { slidesPerView: 3.5, spaceBetween: 27 },
                    }}
                    className="mySwiper"
                >
                    {ovqatlar.map((el) => (
                        <SwiperSlide key={el.id}>
                            <MealCard el={el} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Meals;