import { useDispatch } from 'react-redux';
import { cartActions } from '../../store';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';


const ProductItem = (props) => {
  const { title, price, description, id } = props;

  // const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function addToCartHandler() {

    dispatch(cartActions.addItemToCart({
      id : id,
      title : title,
      price : price
    }))
    
    // const newTotalQuantity = cart.totalQuantity + 1;

    // const updatedItems = cart.items.slice(); // create copy via slice to avoid mutating original state  // here, updatedItems is SHALLOW COPY
    // const existingItem = updatedItems.find((item) => item.id === id); //item.id is just another product in array, id is the product we are currently dealing with

    // if (existingItem) {
    //   const updatedItem = { ...existingItem }; // new object + copy existing properties to avoid state mutation // here, updatedItems is DEEP COPY
    //   updatedItem.quantity++;
    //   updatedItem.totalPrice = updatedItem.totalPrice + price;
    //   const existingItemIndex = updatedItems.findIndex(     // shallow copy // finding index of existing item
    //     (item) => item.id === id
    //   );
    //   updatedItems[existingItemIndex] = updatedItem;    // storing deep copy in shallow copy?  //replacing existing item with current updated item

    // } else {        
    //   updatedItems.push({   // shallow copy
    //     id: id,
    //     price: price,
    //     quantity: 1,
    //     totalPrice: price,
    //     name: title,
    //   });
    // }

    // const newCart = {
    //   totalQuantity: newTotalQuantity,
    //   items: updatedItems,
    // };

    // dispatch(cartActions.replaceCart(newCart));

  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};


export default ProductItem;