import React ,{useContext} from 'react';
import Products from './shared/Products';
//Context
import { ProductsContext } from '../contetxt/ProductsContextProvider';
const Store = () => {
    const products = useContext(ProductsContext);
    return (
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
            
            {
                
                products.map(product=><Products key={product.id} productData={product}/>)
            }
        </div>
    );
};

export default Store;