
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  orderDetails: {},
  orderValue: {},
  orders: [],
  pickUpStations: [],
};

const OrderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_ORDER_DETAILS":
      var orderDetailsObj = {
        ...state,
        orderDetails: action.payload
      };
      return orderDetailsObj;

    case "SET_ORDERS":
      var orderDetailsObj = {
        ...state,
        orders: action.payload
      };
      return orderDetailsObj;


    case "SET_ORDER_VALUE":
      var orderDetails = {
        ...state,
        orderValue: action.payload
      };
      return orderDetails;

    default:
      return state;
  }
};

export default OrderReducer;

//to set up redux we install the the necessary dependencies  npm install redux redux-logger react-redux
//we create reducer , reduer is where the state is been changed . , we also go ahead to create the middleware and after we created the root reducer to link all the reducer together
//we then go ahead to index.js to import the store

//then we start to use it in component
