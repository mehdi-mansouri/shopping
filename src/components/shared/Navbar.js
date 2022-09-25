import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Icons 
import shopIcon from '../../assest/Icon/shop.svg';
//Context
import { CartContext } from '../../contetxt/CartContextProvider';

const Navbar = () => {
    const{state}=useContext(CartContext);
    return (
        <div>
            <Link to='/products'>Product</Link>
            <div>
                <Link to='/cart'> <img src={shopIcon} alt='shop'/></Link>
                <span>{state.itemCounter}</span>
            </div>
        </div>
    );
};

export default Navbar;