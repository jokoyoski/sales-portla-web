import { combineReducers } from 'redux';

import DashBoardReducer from "../reducers/dashboard-reducer/index"
import UtilityReducer from "../reducers/utility-reducer/index"
import ProductDetailsReducer from "../reducers/product/product"
import cartReducer from "../reducers/cart-reducer/cart.reducer"
import UserReducer from '../reducers/user-reducer';

const rootReducer = combineReducers({
    dashboardReducer: DashBoardReducer,
    utilityReducerSales:UtilityReducer,
    productDetailsReducer: ProductDetailsReducer,
    cartReducerSales: cartReducer,
    userReducerSales:UserReducer
})

export default rootReducer
