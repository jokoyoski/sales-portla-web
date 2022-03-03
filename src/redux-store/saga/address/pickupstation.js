import { takeEvery, put } from "redux-saga/effects";
import { request } from '../../../api/Service';
import { getErrorMessage } from '../../../redux-store/reducers/utils/errorHandler';
import { toast } from 'react-toastify';

export default function* watcherGetPickUpStationSaga() {
    yield takeEvery("GET_PICK_UP_STATION", workerSaga);
}

function* workerSaga(action) {
    try {
        var updated_location = [];
        yield put({ type: "DISPLAY_LOADER", payload: payload });
        var payload = {};
        var formatUrl = `api/Admin/get-Locations/${companyId}`;
        yield request("get", payload, formatUrl).then((response) => {
            payload = response;
        });
        for (var i = 0; i < payload.length; i++) {
            if (payload[i].stateId == action.payload.stateId) {
                updated_location.push(payload[i]);
            }
        }
        yield put({ type: "PICK_UP_STATION", payload: updated_location });
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