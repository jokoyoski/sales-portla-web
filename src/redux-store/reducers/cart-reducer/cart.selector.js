import {createSelector} from 'reselect';

const selectCart=state=>state.cartReducer;   //root reducers



export const  selectCartItems=createSelector(
  [selectCart],
   cart=>cart.cartItems
);

export const selectCartHidden =createSelector(
[selectCart],
cart=>cart.hidden

)


export const selectCartItemsCount=createSelector(
    [selectCartItems],  //refencing this means we are trying to get the cartItems from selectCartItems
     cartItems=>cartItems.reduce(

  (accumulatedQuantity,cartItem)=>accumulatedQuantity+cartItem.quantityToAdd,0

     )
  );




export const selectCartTotal=createSelector(
    [selectCartItems],  //refencing this means we are trying to get the cartItems from selectCartItems
     cartItems=>cartItems.reduce(

  (accumulatedQuantity,cartItem)=>accumulatedQuantity+cartItem.quantityToAdd * cartItem.basePrice,0

     )
  );




//to use selector , install selector  and then write your selector js file and then go to your component and use it