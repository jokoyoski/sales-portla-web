import watcherGetProductsSaga from "../redux-store/saga/product/product-saga";
import watcherSaveSalesPortalOrderSaga from "../redux-store/saga/sales-portal/save-sales-portal-order";


export const UiSagas = [
    watcherGetProductsSaga(),
    watcherSaveSalesPortalOrderSaga(),
];
