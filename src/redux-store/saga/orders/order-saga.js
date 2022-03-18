import { takeEvery, put } from "redux-saga/effects";
import { request } from "../../../api/Service";
import { getErrorMessage } from "../../../redux-store/reducers/utils/errorHandler";
import { toast } from "react-toastify";
import { companyId } from "../../../components/utils/constants";
import {store}  from "../../store";
import {
  PRODUCTS_CATEGORIES_LIST,
  PRODUCT_LIST,
} from "../../constants/constants";

export default function* watcherGetOrdersSaga() {
  yield takeEvery("LOAD_ORDERS", workerSaga);
}

function* workerSaga(action) {
  try {
    yield put({ type: "DISPLAY_LOADER", payload: payload });
    // Get Products
    var payload = {};
    var formatUrl = `api/SalesTransactionV2/get-online-customers-order?customerId=${store.getState().userReducer.userId}&isFulfiled=${action.payload.isFulfied}`;
    yield request("get", action.payload, formatUrl).then((response) => {
      payload = response;
      console.log("Here are the orders", response);
    });
    yield put({ type: "SET_ORDERS", payload: payload });
    
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
