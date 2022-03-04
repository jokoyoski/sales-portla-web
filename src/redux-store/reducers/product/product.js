
const initialState = {
    productDetails: {},
    productsList: [],
    productCategories: []
};


function ProductDetailsReducer(state = initialState, action) {


   
    if (action.type === "SET_PRODUCT_DETAILS") {
        var inventoryDetails = {
            ...state,
            productDetails: action.payload
        };
        return inventoryDetails;
    }


    if (action.type === "ALL_ITEM_PRODUCTS") {
        var inventoryDetails = {
            ...state,
            productsList: action.payload
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

export default ProductDetailsReducer;














