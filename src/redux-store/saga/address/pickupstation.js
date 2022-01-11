import { takeEvery, put } from "redux-saga/effects";
import { request } from '../../../api/Service';
import { getErrorMessage } from '../../../redux-store/reducers/utils/errorHandler';
import { toast } from 'react-toastify';

var companyId = 26;
export default function* watcherGetPickUpStationSaga() {
    yield takeEvery("GET_PICK_UP_STATION", workerSaga);
}

function* workerSaga(action) {
    try {
        yield put({ type: "DISPLAY_LOADER", payload: payload });
        var payload = {};
        var formatUrl = `get-pickup-stations?companyId=${26}&cityId=${action.payload.cityId}`;
        yield request("get", payload, formatUrl).then((response) => {
            payload = response;
        });
        yield put({ type: "PICK_UP_STATION", payload: payload });
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
