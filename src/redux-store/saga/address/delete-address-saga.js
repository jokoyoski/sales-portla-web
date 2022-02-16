import { takeEvery, put } from "redux-saga/effects";
import { request } from '../../../api/Service';
import { getErrorMessage } from '../../../redux-store/reducers/utils/errorHandler';
import { toast } from 'react-toastify';


export default function* watcherDeleteAddressSaga() {
    yield takeEvery("DELETE_ADDRESS", workerSaga);
}

function* workerSaga(action) {
    try {
        yield put({ type: "DISPLAY_LOADER", payload: payload });
        var payload = {};
        yield request("post", payload, '/delete-delivery-address').then((response) => {
            payload = response;
        });
        var formatUrl = `get-delivery-addresses`;
        yield request("get", payload, formatUrl).then((response) => {
            payload = response;
        });
        yield put({ type: "ADDRESS_LIST", payload: payload });
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
