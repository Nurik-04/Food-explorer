import React, { useState } from 'react';
import { ovqatlar } from '../../data';
import './meals.css';

// 1. Har bir ovqat kartochkasi uchun alohida komponent
const MealCard = ({ el }) => {

    const [count, setCount] = useState(1); // Har bir ovqat uchun alohida state

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

const Meals = () => {

    return (
        <div>
            <div className='container'>
                <div className="meals__container">
                    <h2 className='meals__title'>Refeições</h2>
                    <div className="mealt__list">
                        {ovqatlar.map((el) => (
                            <MealCard key={el.id} el={el} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meals;