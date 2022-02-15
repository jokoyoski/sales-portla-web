import { takeEvery, put } from "redux-saga/effects";
import { request } from "../../../api/Service";
import { getErrorMessage } from "../../../components/utils/errorHandler";
import { toast } from "react-toastify";
import history from "../../../router/browserrouter";

export default function* watcherAddPaymentSaga() {
  yield takeEvery("ADD_PAYMENT", workerSaga);
}

function* workerSaga(action) {
  try {
    yield put({ type: "DISPLAY_LOADER", payload: payload });
    var payload = {};
    var formatUrl = "online-order-payment";
    yield request("post", action.payload, formatUrl).then((response) => {
      payload = response;
    });
    yield put({ type: "CLEAR_CART", payload: payload });
    alert(payload.status)
    //  history.push("/")
  } catch (e) {
    console.log(e);
    console.log("product-saga", e);
    console.log("product-saga", e.response);
    yield put({ type: "LOADING_BUTTON_SPINNER" });
    const errorMessage = getErrorMessage(e.response);
    alert(errorMessage)
    toast.error(errorMessage);
    yield put({ type: "API_ERRORED", payload: e });
    yield put({ type: "DISPLAY_LOADER", payload: payload });
  }
}

