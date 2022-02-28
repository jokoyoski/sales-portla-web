import {
  PRODUCT_LIST,
  PRODUCTS_CATEGORIES_LIST,SET_RELATED_ITEMS
} from "../../constants/constants";

const initialState = {
  products: [],
  productCategories: [],
  relatedItems:[]
};

function DashBoardReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_LIST:
      return { ...state, products: action.payload };
      break;
    case PRODUCTS_CATEGORIES_LIST:
      return { ...state, productCategories: action.payload };
      break;
      case SET_RELATED_ITEMS:
      return {...state, relatedItems:action.payload}
    default:
      break;
  }
  return state;
}

export default DashBoardReducer;


