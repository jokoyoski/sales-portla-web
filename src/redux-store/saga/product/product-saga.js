import { takeEvery, put } from "redux-saga/effects";
import { request } from '../../../api/Service';
import { getErrorMessage } from '../../../redux-store/reducers/utils/errorHandler';
import { toast } from 'react-toastify';

export default function* watcherGetProductsSaga() {
    yield takeEvery("LOAD_PRODUCT", workerSaga);
}
var companyId=26;
function* workerSaga(action) {
    try {
    
      
        yield put({ type: "DISPLAY_LOADER", payload: payload })
        var payload = {}
        var  formatUrl = `/get-all-products-by-companyId?companyId=${companyId}`
       
        yield request("get", action.payload, formatUrl).then(response => {
            payload = response;
        });
        yield put({ type: "PRODUCTS_LIST", payload: payload.products })
        yield put({ type: "ALL_ITEM_PRODUCTS", payload: payload })
        formatUrl = `/get-product-category?companyId=${companyId}`
        yield request("get", payload, formatUrl).then(response => {
            payload = response;
        });
       
        yield put({ type: "PRODUCT_CATEGORY_LIST", payload: payload })

        formatUrl = `/get-all-products-by-companyId-and-categoryId?companyId=${companyId}&{}`
        yield request("get", payload, formatUrl).then(response => {
            payload = response;
        });
        yield put({ type: "PRODUCT_CATEGORY_LIST", payload: payload })

        yield put({ type: "DISPLAY_LOADER", payload: payload })

    } catch (e) {
        alert(88831)
        console.log(e)
        console.log("product-saga", e)
        console.log("product-saga", e.response)
        yield put({ type: "LOADING_BUTTON_SPINNER" });
        const errorMessage = getErrorMessage(e.response);
        toast.error(errorMessage);
        yield put({ type: "API_ERRORED", payload: e });
        yield put({ type: "DISPLAY_LOADER", payload: payload })

    }
}
