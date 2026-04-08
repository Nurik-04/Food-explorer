import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { ovqatlar, shirinliklar, ichimliklar } from '../../data';

const ProductDetails = () => {
  const ingredients = ["alface", "cebola", "pão naan", "pepino", "rabanete", "tomate", ];

  const { id } = useParams();
  const navigate = useNavigate();

  console.log("Product ID:", id); // ID ni konsolga chiqarish

  const allProducts = [...ovqatlar, ...shirinliklar, ...ichimliklar];
  const product = allProducts.find(item => item.id === parseInt(id));

  if (!product) return <div>Produto não encontrado</div>;
  return (
    <div className='container'>
      <div className="product__container">
        <div className="product__img__box">
          <button onClick={() => navigate(-1)} className='product__set-back w-50 h-50'>&lt; voltar</button>
          <img src={product.image} alt={product.name} className='product__img' />
        </div>
        <div className="product__text__box">
          <h2 className='product__title'>{product.name}</h2>
          <p className='product__description'>{product.description}</p>
          <div className="product__ingredients"></div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
