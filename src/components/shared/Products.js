import React from 'react';
import { shorten } from '../helpers/functions';

const Products = ({productData}) => {
    return (
        <div>
            <img src={productData.image} alt="product" style={{width:"200px"}}/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <a>Details</a>
                <div>
                    <button>Add To Cart</button>
                </div>

            </div>
        </div>
    );
};

export default Products;