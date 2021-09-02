import { combineReducers } from 'redux';

import DashBoardReducer from "../reducers/dashboard-reducer/index"
import UtilityReducer from "../reducers/utility-reducer/index"
import ProductDetailsReducer from "../reducers/product/product"
import CartReducer from "../reducers/cart-reducer/cart.reducer"

const rootReducer = combineReducers({
    dashboardReducer: DashBoardReducer,
    utilityReducer:UtilityReducer,
    productDetailsReducer: ProductDetailsReducer,
    cartReducer: CartReducer,
})

export default rootReducer
