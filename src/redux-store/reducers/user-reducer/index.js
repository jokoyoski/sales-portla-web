const initialState = {
    triggerLogging: false,
    users: null,
    user: null,
    userType: null,
    isRegisterSuccessful: false,
    firstName: null,
    roles: [],
    customer: [],
    pay_delivery_address: {},
    is_cash_on_delivery: false,
    pay_is_pick_up: 'false',
    drop: [],
    industries: null,
    companyId: null,
    access: null,
    payPickUpStation: {},
    cus_name: "Anonymous",
    cus_id: null,
    cus_number: null,
    cacNumber: null
};


function UserReducer(state = initialState, action) {


    if (action.type === "USERS_DETAILS") {
        var userdetails = {
            ...state,
            user: action.payload
        };
        return userdetails;

    }


    if (action.type === "IS_CASH_ON_DELIVERY") {
        var userdetails = {
            ...state,
            is_cash_on_delivery: action.payload
        };
        return userdetails;

    }



    if (action.type === "PAY_PICK_UP_STATION") {
        var userdetails = {
            ...state,
            payPickUpStation: action.payload
        };
        return userdetails;

    }




    if (action.type === "CUSTOMER_INFO") {
        var userdetails = {
            ...state,
            customer: action.payload
        };
        return userdetails;

    }

    if (action.type === "CUSTOMER_INFO_DROP") {
        var userdetails = {
            ...state,
            drop: action.payload
        };
        return userdetails;

    }


    if (action.type === "SET_CUSTOMER_NAME") {
        var userdetails = {
            ...state,
            cus_name: action.payload
        };
        return userdetails;

    }

    if (action.type === "PAY_DELIVERY_ADDRESS") {

        return {
            ...state,
            pay_delivery_address: action.payload
        }
    }


    if (action.type === "PAY_IS_PICK_UP_STATION") {

        return {
            ...state,
            pay_is_pick_up: action.payload
        }
    }


    if (action.type === "SET_CUSTOMER_ID") {
        var userdetails = {
            ...state,
            cus_id: action.payload
        };
        return userdetails;

    }

    if (action.type === "SET_CUSTOMER_PHONE_NUMBER") {
        var userdetails = {
            ...state,
            cus_number: action.payload
        };
        return userdetails;

    }

    if (action.type === "SET_FIRST_NAME") {
        var userdetails = {
            ...state,
            firstName: action.payload
        };
        return userdetails;

    }

    if (action.type === "COMPANY_ID") {
        var userdetails = {
            ...state,
            companyId: action.payload
        };
        return userdetails;

    }

    if (action.type === "SET_INDUSTRIES") {

        return {
            ...state,
            industries: action.payload
        }
    }


    if (action.type === "SET_ROLES") {
        var userdetails = {
            ...state,
            roles: action.payload
        };
        return userdetails;

    }
    if (action.type === "SET_USER_TYPE") {
        var userdetails = {
            ...state,
            userType: action.payload
        };
        return userdetails;

    }

    if (action.type === "SET_USER_ID") {
        var userdetails = {
            ...state,
            userId: action.payload
        };
        return userdetails;

    }


    if (action.type === "SET_ACCESS_TOKEN") {
        var userdetails = {
            ...state,
            access: action.payload
        };
        return userdetails;

    }



    if (action.type === "TRIGGER_LOGIN_SUCCESS") {
        return {
            ...state,
            triggerLogging: !state.payload
        };
    }

    if (action.type === "TRIGGER_REGISTER_SUCCESS") {
        return {
            ...state,
            isRegisterSuccessful: !state.payload
        };

    }
    if (action.type === "SET_USER_COUNT") {
        var userdetails = {
            ...state,
            users: action.payload
        };
        return userdetails;

    }


    return state;
}

export default UserReducer;














