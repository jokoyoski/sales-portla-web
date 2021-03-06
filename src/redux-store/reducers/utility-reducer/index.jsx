const initialState = {
    buttonloader: false,
    loginbuttonloader: false,
    skubuttonloader: false,
    spinner: false,
    currentPage: 1,
    itemsPerPage: 0,
    address: [],
    totalItems: 0,
    selected_address: "",
    totalPages: 0,
    states: []

};

function UtilityReducer(state = initialState, action) {
    if (action.type === "LOADING_BUTTON_SPINNER") {

        return {
            ...state,
            buttonloader: !state.buttonloader
        }
    }
    if (action.type === "LOGIN_LOADING_BUTTON_SPINNER") {

        return {
            ...state,
            loginbuttonloader: !state.loginbuttonloader
        }
    }

    if (action.type === "SKU_LOADING_BUTTON_SPINNER") {

        return {
            ...state,
            skubuttonloader: !state.skubuttonloader
        }
    }

    if (action.type === "SELECTED_ADDRESS") {

        return {
            ...state,
            selected_address: action.payload
        }
    }


    if (action.type === "DISPLAY_LOADER") {
        return {
            ...state,
            spinner: !state.spinner
        }
    }

    if (action.type === "STATE_DROPDOWN") {
        return {
            ...state,
            states: action.payload
        }
    }


    if (action.type === "ADDRESS_LIST") {
        return {
            ...state,
            address: action.payload
        }
    }

    if (action.type === "CURRENT_PAGE") {
        return {
            ...state,
            currentPage: action.payload
        }
    }

    if (action.type === "ITEMS_PER_PAGE") {
        return {
            ...state,
            itemsPerPage: action.payload
        }
    }

    if (action.type === "TOTAL_ITEMS") {
        return {
            ...state,
            totalItems: action.payload
        }
    }

    if (action.type === "TOTAL_PAGES") {
        return {
            ...state,
            totalPages: action.payload
        }
    }
    return state;
}

export default UtilityReducer;