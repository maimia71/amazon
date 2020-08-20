import React from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css"
import Subtotal from "./Subtotal";

function Checkout() {
const [{basket}] = useStateValue();

    return (
        <div className="checkout">

            <div className="checkout_left">

            

            <div>
                <img className="checkout_ad"  
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/UPI/August/DesktopHero_1500x600._CB407984171_.jpg"
                    alt="not found"
                />
            </div>
 
            
            {basket?.length==0  ? (
                <div>
                    <h2>Basket is empty...  </h2>
                    <h1>Add some stuff & get back here.</h1>
                    
                </div>

            ) :  (
                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>

                    {/* List of all product  */}
                    {basket?.map((item) => (
                        
                        
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        )
                    )}
                    
                </div>
            ) }

        </div>

        {basket.length > 0 && (
            <div className="checkout_right">
                <Subtotal />
            </div>
        )}

        </div>
    );
}

export default Checkout;
