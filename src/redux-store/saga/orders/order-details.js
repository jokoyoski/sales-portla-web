
import { takeEvery, put } from "redux-saga/effects";
import { request } from "../../../api/Service";
import { getErrorMessage } from "../../../redux-store/reducers/utils/errorHandler";
import { toast } from "react-toastify";
import { companyId } from "../../../components/utils/constants";
import {store}  from "../../store";
import history from "../../../router/browserrouter";
import {
  PRODUCTS_CATEGORIES_LIST,
  PRODUCT_LIST,
} from "../../constants/constants";

export default function* watcherGetOrderDetailsSaga() {
  yield takeEvery("LOAD_ORDER_DETAILS", workerSaga);
}

function* workerSaga(action) {
  try {
    yield put({ type: "DISPLAY_LOADER", payload: payload });
    // Get Products
    var payload = {};
    var formatUrl = `api/SalesTransactionV2/get-orders?transactionReference=${action.payload.transactionReference}`;
    yield request("get", action.payload, formatUrl).then((response) => {
      payload = response;
      console.log("Here is the order details", response);
    });
    yield put({ type: "SET_ORDER_DETAILS", payload: payload });
    history.push('/FulfilledOrders')
    yield put({ type: "DISPLAY_LOADER", payload: payload });
  } catch (e) {
    console.log(e);
    console.log("product-saga", e);
    console.log("product-saga", e.response);
    yield put({ type: "LOADING_BUTTON_SPINNER" });
    const errorMessage = getErrorMessage(e.response);
    toast.error(errorMessage);
    yield put({ type: "API_ERRORED", payload: e });
    yield put({ type: "DISPLAY_LOADER", payload: payload });
  }
}
