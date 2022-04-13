import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from './store/cartActionThunks';


let isInitial = true;

function App() {
  const show = useSelector(state => state.ui.cartIsVisbile);
  const notification = useSelector(state => state.ui.showNotification);

  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();

//-------------- fetch cart data -----------
  useEffect(() => {
    dispatch(fetchCartData());

  }, [dispatch]);


//---------- send cart data -----------
  useEffect(() => {

    if (isInitial) {                 // ensures that when the useEffect runs for the first time, it does not send data(aka, empty cart) to backend.
      isInitial = false;             // ready to send cart data again
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
    


  return (
    <Fragment>
      {notification && (
        <Notification 
          status={notification.status} 
          message={notification.message} 
        />
      )}
      <Layout>
        {!show && <Cart /> } 
        <Products /> 
      </Layout>
    </Fragment>
    
  );
}

export default App;
