import { uiActions, cartActions } from './index';


// ----------------- send cart data -------------------

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status : 'pending',
                message : 'Sending cart data...'
          }))

        const sendRequest = async () => {
            const response = await fetch(
                process.env.REACT_APP_DB_URL_CART, 
                {
                    method : 'PUT',
                    body: JSON.stringify(cart)
                }
            );
        
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
        }


        try {
            await sendRequest();
            dispatch(
                uiActions.showNotification({
                status: 'success',
                message: 'Cart data sent successfully'
                })
            )
        } catch (error) {
            sendCartData().catch((error) => {
                dispatch(
                  uiActions.showNotification({
                    status: 'error',
                    message: 'Sending cart data failed!'
                  })
                )
            });
        }
        
    }

}


// ------------------ receive cart data --------------------

export const fetchCartData = () => {

    return async (dispatch) => {

        const fetchData = async () => {
            const response = await fetch(
              process.env.REACT_APP_DB_URL_CART // default GET request
            );
            
            if (!response.ok) {
                throw new Error ('Could not fetch cart data!');
            }

            const data = await response.json();

            return data;
        }

        try { 
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));   // fetching cart from database, then storing state in replaceCart for display
            
        } catch (error) { 
            sendCartData().catch((error) => {
                dispatch(
                  uiActions.showNotification({
                    status: 'error',
                    message: 'Fetching cart data failed!'
                  })
                )
            });
        }

    }
}