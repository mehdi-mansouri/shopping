
import './App.css';
// component
import Store from './components/Store';
import ProductsDetails from './components/ProductsDetails';
import Navbar from './components/shared/Navbar';
import Shopcart from './components/Shopcart';
//context
import ProductsContextProvider from './contetxt/ProductsContextProvider';
import CartContextProvider from './contetxt/CartContextProvider';
import {Route , Switch , Redirect} from 'react-router-dom';
function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar />
        <Switch>
          <Route path="/products/:id" component={ProductsDetails} />
          <Route path="/products" component={Store} />
          <Route path="/cart" component={Shopcart} />
          <Redirect to="/products" />
        </Switch>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
