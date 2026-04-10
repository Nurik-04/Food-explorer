import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { ovqatlar, shirinliklar, ichimliklar } from '../../data';
import './productDetails.css';

const ProductDetails = () => {
  
  const { id } = useParams();
  const navigate = useNavigate();

  console.log("Product ID:", id); // ID ni konsolga chiqarish

  const allProducts = [...ovqatlar, ...shirinliklar, ...ichimliklar];
  const product = allProducts.find(item => Number(item.id) === Number(id));
  
  if (!product) return <div>Produto não encontrado</div>;

  const [count, setCount] = useState(1);
  const inc = () => setCount(count + 1);
  const dec = () => {
    if (count > 1) setCount(count - 1);
  }
  const ingredients = ["alface", "cebola", "pão naan", "pepino", "rabanete", "tomate"];

  return (
    <div className='container'>
      <div className="product__container">
        <div className="product__img__box">
          <button onClick={() => navigate(-1)} className='product__set-back'>&lt; voltar</button>
          <img src={product.image} alt={product.name} className='product__img' />
        </div>
        <div className="product__text__box">
          <h2 className='product__title'>{product.name}</h2>
          <p className='product__description'>{product.description}</p>
          <div className="product__ingredients">
            {ingredients.map((ingredient) => (
              <span key={ingredient} className="product__ingredient">
                {ingredient}
              </span>
            ))}
          </div>
          <div className="product__footer">
            <div className="product__caunter__box">
              <button className='product__caunter-btn' onClick={dec}>-</button>
              <span className='product__caunt'>{count}</span>
              <button className='product__caunter-btn' onClick={inc}>+</button>  
            </div>
            <button className='product__btn'>incluir ∙ R$ {(product.price * count).toFixed(2)}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
