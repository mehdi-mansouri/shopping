import React ,{useContext} from 'react';
import { ProductsContext } from '../contetxt/ProductsContextProvider';
import { Link } from 'react-router-dom';
const ProductsDetails = (props) => {
    const id=props.match.params.id;
    const data=useContext(ProductsContext);
    const product =data[id - 1];
    const {image ,category ,description ,price , title}=product;
    return (
        <div>
            <img src={image} alt="Product"/>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>Category:</span>{category}</p>
                <div>
                    <span>{price} €</span>
                    <Link to="/products">Back to shop</Link>
                </div>
            </div>

        </div>
    );
};

export default ProductsDetails;