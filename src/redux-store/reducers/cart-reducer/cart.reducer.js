import { addItemToCart , addItemsToCart} from "../cart-reducer/cart.util";
import { RemoveItemFromCart } from "../cart-reducer/cart.util";
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "SET_ITEM":
      return {
        ...state,
        cartItems: action.payload,
      };
    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };

    case "ADD_ITEMS_TO_CART":
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload),
      };

    case "ADD_ITEM_TO_CART":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case "CLEAR_ITEM_FROM_CART":
      console.log(action.payload)
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (x) => x.sku !== action.payload.sku
        ),
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: RemoveItemFromCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default CartReducer;

//to set up redux we install the the necessary dependencies  npm install redux redux-logger react-redux
//we create reducer , reduer is where the state is been changed . , we also go ahead to create the middleware and after we created the root reducer to link all the reducer together
//we then go ahead to index.js to import the store

//then we start to use it in component
