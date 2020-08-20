import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';


function CheckoutProduct( {id, title, image, price, rating} ) {

    const [ {basket} , dispatch ] = useStateValue();

    console.log(id, title, image, price, rating);

    const removeFromBasket = () => {
        // remove item from basket..
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    }


    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_title" src={image} alt="not found" />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>


                <p className="checkoutProduct_price">
                    <strong>$</strong>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct_rating">
                 {Array(rating)
                     .fill()
                     .map((_, i)=>(
                         <p>⭐</p>
                     ))}
                </div>


                <button onClick={removeFromBasket} >Remove from basket</button>
                    
            </div>

        </div>
    );
}

export default CheckoutProduct;
