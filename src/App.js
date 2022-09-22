
import './App.css';
// component
import Store from './components/Store';
import ProductsDetails from './components/ProductsDetails';
//context
import ProductsContextProvider from './contetxt/ProductsContextProvider';
import CartContextProvider from './contetxt/CartContextProvider';
import {Route , Switch , Redirect} from 'react-router-dom';
function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Switch>
          <Route path="/products/:id" component={ProductsDetails} />
          <Route path="/products" component={Store} />
          <Redirect to="/products" />
        </Switch>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
