
const initialState = {
   products:[],
   productCategories:[]
};


function DashBoardReducer(state = initialState, action) {


    if (action.type === "PRODUCTS_LIST") {
        var inventoryDetails = {
            ...state,
            products: action.payload
        };
        return inventoryDetails;
    }

    if (action.type === "PRODUCT_CATEGORY_LIST") {
        var inventoryDetails = {
            ...state,
            productCategories: action.payload
        };
        return inventoryDetails;
    }

    return state;
}

export default DashBoardReducer;














