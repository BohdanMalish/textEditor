import React from 'react';
import '../components/ProductCard.css';

const ProductItem = ({productTitle,price,image,productDescription }) => {
 
    return (
        <div className={'productItem'}>
           <div className={'productImage'}><img src="https://content.rozetka.com.ua/goods/images/preview/188093595.jpg"></img></div>
           <div className={'productTitle'}>Компьютерные Level (комп.) 72582-C3</div>
           <div className={'price'}><span>220$</span><span className={'buttonCart'}>Add to cart</span></div>
        </div>
    )
}
export default ProductItem