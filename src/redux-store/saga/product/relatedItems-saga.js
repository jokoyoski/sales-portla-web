import { takeEvery, put } from "redux-saga/effects";
import { request } from "../../../api/Service";
import { getErrorMessage } from "../../../redux-store/reducers/utils/errorHandler";
import { toast } from "react-toastify";
import { companyId } from "../../../components/utils/constants";
import {
  PRODUCTS_CATEGORIES_LIST,
  PRODUCT_LIST,
  LOAD_RELATED_ITEMS,
  SET_RELATED_ITEMS,
} from "../../constants/constants";
``;

export default function* watchRelatedItems() {
  yield takeEvery(LOAD_RELATED_ITEMS, workerSaga);
}

function* workerSaga(action) {
  try {
    yield put({ type: "DISPLAY_LOADER", payload: payload });
    // Get Products
    var payload = {};
    var formatUrl = `/api/Admin/get-products-by-category?catId=${action.payload}&cacNumber=SE186668`;
    yield request("get", action.payload, formatUrl).then((response) => {
      payload = response;
      console.log("Here are the Related items --- New", response);
    });
    yield put({ type: SET_RELATED_ITEMS, payload: payload });

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
