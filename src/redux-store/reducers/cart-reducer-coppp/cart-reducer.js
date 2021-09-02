
const initialState = {
    cartRecords: [],
    orderList: [],
    itemCount:0,

};


function CartReducer(state = initialState, action) {

    console.log(state.cartRecords);
    if (action.type === "ADD_ITEMS_TO_CART") {
        var inventoryDetails = {
            ...state,
            cartRecords: AddItemToCart(state.cartRecords, action.payload),
            //cartRecords: SubTotal(state.cartRecords, action.payload),

          //  itemCount: state.itemCount + 1
        };
       // console.log(cartRecords)
        return inventoryDetails;
    }

    if (action.type === "REMOVE_ITEM_TO_CART") {
        var inventoryDetails = {
            ...state,
            cartRecords: RemoveItemToCart(state.cartRecords, action.payload),
            cartRecords: SubTotal(state.cartRecords, action.payload),
            itemCount: state.itemCount - 1
        };
        return inventoryDetails;
    }

   
    if (action.type === "REMOVE_ITEM") {
        alert(777);
        console.log(action.payload);
        var inventoryDetails = {
            ...state,
            cartRecords: AddItemToCart(state.cartRecords, action.payload),
        };
        return inventoryDetails;
    }
    if (action.type === "SALES_PORTAL_TRANSACTION_LIST") {
        var inventoryDetails = {
            ...state,
            orderList: action.payload
        };
        return inventoryDetails;
    }

    return state;
}

export default CartReducer;

var SubTotal = (cartRecords, cartItem) => {

        var i = 0;
        for (i = 0; i < cartRecords.length; i++) {
            if (cartRecords[i].sku == cartItem.sku) {
                cartRecords[i].subTotal = cartRecords[i].quantityToAdd * cartRecords[i].salesPrice;;
            }
        }

        return cartRecords;
    
}

var AddItemToCart = (cartRecords, cartItem) => {
    const existingCartItem = GetProduct(cartRecords, cartItem);
    if (existingCartItem == null) {
        var result = [...cartRecords, { ...cartItem, quantityToAdd: 1 }]
        return result;
    }
    else {
        var i = 0;
        for (i = 0; i < cartRecords.length; i++) {
            if (cartRecords[i].sku == cartItem.sku) {
                cartRecords[i].quantityToAdd = cartRecords[i].quantityToAdd + 1;;
            }
        }
        console.log(cartRecords)
        return cartRecords;
    }
}
var RemoveItemToCart = (cartRecords, cartItem) => {
    var newArray = [];
    console.log(cartItem)
    console.log(cartRecords)
    const existingCartItem = GetProduct(cartRecords, cartItem);

    if (existingCartItem.quantityToAdd == 1) {
        var i = 0;
        for (i; i < cartRecords.length; i++) {
            if (cartRecords[i].sku != cartItem.sku) {
                newArray.push(cartRecords[i])
            }
        }
        console.log(newArray)
        return newArray;
    }
    else{
        var i = 0;
        for (i = 0; i < cartRecords.length; i++) {
            if (cartRecords[i].sku == cartItem.sku) {
                cartRecords[i].quantityToAdd = cartRecords[i].quantityToAdd - 1;;
            }
        }
        return cartRecords;
    }
}


function GetProduct(products, product) {
    console.log(product)
    var i = 0;
    for (i = 0; i < products.length; i++) {
        if (products[i].sku == product.sku) {
            return products[i];
        }
    }
    return null;
}