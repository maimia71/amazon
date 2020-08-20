import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue} from "./StateProvider";


function Header() {

const [{basket}] = useStateValue();

console.log(basket);

    return (
        <nav className="header">
            {/* amazon logo on the left */}

            <Link to="/">
                <img 
                    className="header_logo" 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="not found"
                />
            </Link>
            
    
        {/* search box */}
        <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header_searchIcon" />
        </div>
       
        {/* 3 links */}
        <div className="header_nav">
            {/* 1st link */}

            <Link to="/login" className="header_link">
                <div className="header_option">
                    <span className="header_OptionLineOne">Hello</span>
                    <span className="header_OptionLineTwo">Sign In</span>
                </div>
            </Link>
            
            {/* 2nd link */}
            <Link to="/" className="header_link">
                <div className="header_option">
                    <span className="header_OptionLineOne">Return</span>
                    <span className="header_OptionLineTwo">& orders</span>
                </div>
            </Link>

            {/* 3rd link */}
            <Link to="" className="header_link">
                <div className="header_option">
                    <span className="header_OptionLineOne">Try</span>
                    <span className="header_OptionLineTwo">Prime</span>
                </div>
            </Link>


            {/* 4th link */}

            <Link to="/checkout" className="header_link">
                    <div className="header_OptionBasket header_option">
                    <span className="header_OptionLineOne">Cart</span>
                        {/* Shopping basket icon */}
                        <ShoppingBasketIcon />
                        {/* no of items */}
                        
    <span className="header_OptionLineTwo header_BasketCount">{basket.length}</span>
                    </div>  
            </Link>
            
        </div>


        {/* Basket icon with numbers */}
        </nav>
    );  
}

export default Header;
