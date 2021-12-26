import watcherGetProductsSaga from "../redux-store/saga/product/product-saga";
import watcherSaveSalesPortalOrderSaga from "../redux-store/saga/sales-portal/save-sales-portal-order";
import watcherAddAddressSaga from "./saga/address/add-address-saga";
import watcherGetAddressSaga from "./saga/address/address-saga";
import watcherDeleteAddressSaga from "./saga/address/delete-address-saga";
import watcherLoginSaga from "./saga/login-sagas";
import watcherRegisterSaga from "./saga/register-saga";


export const UiSagas = [
    watcherGetProductsSaga(),
    watcherSaveSalesPortalOrderSaga(),
    watcherLoginSaga(),
    watcherRegisterSaga(),
    watcherAddAddressSaga(),
    watcherDeleteAddressSaga(),
    watcherGetAddressSaga()
];
