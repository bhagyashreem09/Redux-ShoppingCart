import { createSlice } from '@reduxjs/toolkit';


const uiSlice = createSlice ({
    name : 'ui',
    initialState : {cartIsVisible : false, notification : null},
    reducers : {
        toggleCart(state) {
            state.cartIsVisible = !state.cartIsVisible;
            console.log('toggleCart function')
        },
        showNotification (state, action) {
            state.notification = {
                status : action.payload.status,
                message : action.payload.message
            };
            console.log('showNotifiction reducer function working');
        }
    }
    
})


export default uiSlice;

