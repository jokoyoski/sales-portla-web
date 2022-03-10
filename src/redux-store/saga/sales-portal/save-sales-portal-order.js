import { takeEvery, put } from "redux-saga/effects";
import { request } from '../../../api/Service';
import { getErrorMessage } from '../../../redux-store/reducers/utils/errorHandler';
import { toast } from 'react-toastify';
import { companyId } from "../../../components/utils/constants";

export default function* watcherSaveSalesPortalOrderSaga() {
    yield takeEvery("SAVE_SALES_PORTAL_ORDERS", workerSaga);
}

function* workerSaga(action) {
    try {
        yield put({ type: "DISPLAY_LOADER", payload: payload });
        var payload = {};
        formatUrl = "/sales-portal-order";
        yield request("post", action.payload, formatUrl).then((response) => {
            payload = response;
        });
        toast.success("Successful")
        var formatUrl = `/get-sales-portal-transactions?orderId=${action.payload}&companyId=${companyId}`;
        yield request("get", payload, formatUrl).then((response) => {
            payload = response;
        });
        yield put({ type: "SALES_PORTAL_TRANSACTION_LIST", payload: payload });
        yield put({ type: "DISPLAY_LOADER", payload: payload });
    } catch (e) {
        console.log(e);
        console.log("sales-portal-order-saga", e);
        console.log("sales-portal-order-saga", e.response);
        yield put({ type: "LOADING_BUTTON_SPINNER" });
        const errorMessage = getErrorMessage(e.response);
        toast.error(errorMessage);
        yield put({ type: "API_ERRORED", payload: e });
        yield put({ type: "DISPLAY_LOADER", payload: payload });
    }
}
