import { takeEvery, put } from "redux-saga/effects";
import { request } from "../../../api/Service";
import { getErrorMessage } from "../../../redux-store/reducers/utils/errorHandler";
import { toast } from "react-toastify";
import { companyId } from "../../../components/utils/constants";
import {
  PRODUCTS_CATEGORIES_LIST,
  PRODUCT_LIST,
} from "../../constants/constants";

export default function* watcherGetProductsSaga() {
  yield takeEvery("LOAD_PRODUCT", workerSaga);
}

function* workerSaga(action) {
  try {
    yield put({ type: "DISPLAY_LOADER", payload: payload });
    // Get Products
    var payload = {};
    var formatUrl = `/api/Admin/get-products?companyId=${companyId}`;
    yield request("get", action.payload, formatUrl).then((response) => {
      payload = response;
      console.log("Here are the Products", response);
    });
    yield put({ type: PRODUCT_LIST, payload: payload });

    // Get Product Categories
    formatUrl = `/api/Admin/get-product-category/${companyId}`;
    yield request("get", action.payload, formatUrl).then((response) => {
      payload = response;
      console.log("Here are your products categories", response);
    });
    yield put({ type: PRODUCTS_CATEGORIES_LIST, payload: payload });

    yield put({ type: "ALL_ITEM_PRODUCTS", payload: payload });
    formatUrl = `/get-product-category?companyId=${companyId}`;
    yield request("get", payload, formatUrl).then((response) => {
      payload = response;
    });

    yield put({ type: "PRODUCT_CATEGORY_LIST", payload: payload });

    formatUrl = `/get-all-products-by-companyId-and-categoryId?companyId=${companyId}&{}`;
    yield request("get", payload, formatUrl).then((response) => {
      payload = response;
    });
    yield put({ type: "PRODUCT_CATEGORY_LIST", payload: payload });

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
