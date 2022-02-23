import { takeEvery, put } from "redux-saga/effects";
import { request } from "../../api/Service";
import { getErrorMessage } from "../../components/utils/errorHandler";
import { toast } from "react-toastify";
import { get, isEmpty, find, filter, has, debounce } from "lodash";
import history from "../../router/browserrouter";

export default function* watcherLoginSaga() {
  yield takeEvery("LOGIN_USER", workerSaga);
}

function* workerSaga(action) {
  try {
    yield put({ type: "LOGIN_LOADING_BUTTON_SPINNER" });
    let payload = {};
    yield request("post", action.payload, "api/Authentication/sales-portal-login").then(
      (response) => {
        payload = response;
      }
    );
    var roles = payload.roles;
    var user = payload.user;
    var token = payload.token;
    var cacNumber = null;

    yield request("get", payload, "api/Admin/get-countries-dropdown").then(
      (response) => {
        payload = response;
      }
    );
    localStorage.setItem("countries", JSON.stringify(payload));
    yield put({ type: "COUNTRIES_DROPDOWN", payload: payload });
    localStorage.setItem("userId2", user.id);
    cacNumber = user.cacNumber;
    yield put({ type: "SET_CUSTOMER_ID", payload: user.id });
    yield put({ type: "SET_CUSTOMER_NAME", payload: user.firstName });
    yield put({ type: "SET_CUSTOMER_PHONE_NUMBER", payload: user.phoneNumber });
    yield put({ type: "SET_ROLES", payload: roles });
    yield put({ type: "SET_USER_TYPE", payload: user.userType });
    yield put({ type: "SET_USER_ID", payload: user.id });
    localStorage.setItem("access_token", JSON.stringify(token));
    yield put({ type: "SET_ACCESS_TOKEN", payload: user.token });
    yield put({ type: "DISPLAY_LOADER", payload: payload });
     history.push('/order')


  } catch (e) {
    console.log("login-saga", e.response);
    console.log("login-saga", e.response);
    yield put({ type: "LOGIN_LOADING_BUTTON_SPINNER" });
    const errorMessage = getErrorMessage(e.response);
    toast.error(errorMessage);
    yield put({ type: "API_ERRORED", payload: e });
  }
}
