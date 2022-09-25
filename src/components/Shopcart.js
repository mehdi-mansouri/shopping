import React ,{useContext} from 'react';

//Component
import Cart from './shared/Cart';

//Context
import { CartContext } from '../contetxt/CartContextProvider';
import { Link } from 'react-router-dom';

const Shopcart = () => {
    const { state ,dispatch}=useContext(CartContext);
    return (
        <div>
            <div>
                {state.selectedItem.map(item=><Cart key={item.id} data={item}/>)}
            </div>
            {
                state.itemsCounter >0 && <div>
                <p><span>Total Items:</span> {state.itemsCounter}</p>
                <p><span>Total Payment:</span> {state.total}</p>
                <div>
                    <button onClick={()=>dispatch({type:"CHECKOUT"})}>Check Out</button>
                    <button onClick={()=>dispatch({type:"CLEAR"})}>Clear</button>
                </div>

                </div>
            }
            
            {
                state.checkout && <div>
                    <h3>Check Out successfully!</h3>
                    <Link to="/products">Buy more</Link>
                </div>
            }

            {
                !state.checkout && state.itemsCounter === 0 && <div>
                    <h3>Want to Buy?</h3>
                    <Link to="/products">Go To Shop</Link>
                </div>
            }
        </div>
    );
};

export default Shopcart;