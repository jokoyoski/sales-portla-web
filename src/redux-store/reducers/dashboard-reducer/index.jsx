import {
  PRODUCT_LIST,
  PRODUCTS_CATEGORIES_LIST,
} from "../../constants/constants";

const initialState = {
  products: [],
  productCategories: [],
};

function DashBoardReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_LIST:
      return { ...state, products: action.payload };
      break;
    case PRODUCTS_CATEGORIES_LIST:
      return { ...state, productCategories: action.payload };
      break;
    default:
      break;
  }
  return state;
}

export default DashBoardReducer;

// if (action.type === "PRODUCTS_LIST") {
//     var inventoryDetails = {
//         ...state,
//         products: action.payload
//     };
//     return inventoryDetails;
// }

// if (action.type === "PRODUCT_CATEGORY_LIST") {
//     var inventoryDetails = {
//         ...state,
//         productCategories: action.payload
//     };
//     return inventoryDetails;
// }
