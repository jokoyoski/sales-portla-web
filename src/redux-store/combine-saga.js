import watcherGetProductsSaga from "../redux-store/saga/product/product-saga";
import watcherSaveSalesPortalOrderSaga from "../redux-store/saga/sales-portal/save-sales-portal-order";
import watcherAddAddressSaga from "./saga/address/add-address-saga";
import watcherGetAddressSaga from "./saga/address/address-saga";
import watcherDeleteAddressSaga from "./saga/address/delete-address-saga";
import watcherLoginSaga from "./saga/login-sagas";
import watcherRegisterSaga from "./saga/register-saga";
import watcherGetPickUpStationSaga from "./saga/address/pickupstation";
import watcherAddPaymentSaga from "../redux-store/saga/payment/add-payment-saga";
import watchRelatedItems from '../redux-store/saga/product/relatedItems-saga';
import watcherGetOrdersSaga from "./saga/orders/order-saga";
import watcherGetOrderDetailsSaga from "./saga/orders/order-details";
export const UiSagas = [
    watcherGetProductsSaga(),
    watcherSaveSalesPortalOrderSaga(),
    watcherGetOrderDetailsSaga(),
    watcherLoginSaga(),
    watcherAddPaymentSaga(),
    watcherRegisterSaga(),
    watcherAddAddressSaga(),
    watcherDeleteAddressSaga(),
    watcherGetPickUpStationSaga(),
    watcherGetAddressSaga(),
    watchRelatedItems(),
    watcherGetOrdersSaga()
];
