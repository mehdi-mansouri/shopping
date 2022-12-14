import React, { useContext } from 'react';
import { shorten , isInCart ,quantityCount} from '../../helpers/functions';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contetxt/CartContextProvider';

//Icon
import TrashIcon from '../../assest/Icon/trash.svg';

const Products = ({productData}) => {
    const {state , dispatch}=useContext(CartContext);
    return (
        <div>
            <img src={productData.image} alt="product" style={{width:"200px"}}/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <Link to={`products/${productData.id}`}>Details</Link>
                <div>
                    {
                        quantityCount(state ,productData.id) > 1 && <button onClick={()=>dispatch({type:"DICREASE", payload:productData})}>-</button>
                    }
                    {
                        quantityCount(state ,productData.id) === 1 && <button onClick={()=>dispatch({type:"REMOVE_ITEM", payload:productData})}><img src={TrashIcon} alt="Trash" style={{width:"10px"}}/></button>
                    }

                    {
                        isInCart(state ,productData.id)?
                        <button onClick={()=>dispatch({type:"INCREASE",payload :productData})}>+</button>:
                        <button onClick={()=>dispatch({type :"ADD_ITEM", payload:productData})}>Add to Cart</button>
                    }

                </div>

            </div>
        </div>
    );
};

export default Products;