import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../../store/index';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartQuantity = useSelector(state => state.cart.totalQuantity);
  

  function toggleCartHandler () {
    dispatch(uiActions.toggleCart());
    console.log("clicked");
  };


  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};


export default CartButton;

