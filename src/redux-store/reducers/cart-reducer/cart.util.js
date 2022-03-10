export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.sku === cartItemToAdd.sku);

    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.sku === cartItemToAdd.sku ? { ...cartItem, quantityToAdd: cartItem.quantityToAdd + 1 } : cartItem)
    }
    return [...cartItems, { ...cartItemToAdd, quantityToAdd: 1 }]
}

export const addItemsToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.sku === cartItemToAdd.sku);

    if (existingCartItem) {

        return cartItems.map(cartItem => cartItem.sku === cartItemToAdd.sku ? { ...cartItem, quantity: cartItem.quantityToAdd + cartItemToAdd.quantityToAdd } : cartItem)
    }
    return [...cartItems, { ...cartItemToAdd, quantityToAdd:cartItemToAdd.quantityToAdd  }]
}


export const RemoveItemFromCart = (cartItems, cartItemToRemove) => {

    const existingCartItem = cartItems.find(cartItem => cartItem.sku === cartItemToRemove.sku);

    if (existingCartItem.quantityToAdd === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map(


        cartItem => cartItem.sku === cartItemToRemove.sku ?
            { ...cartItem, quantityToAdd: cartItem.quantityToAdd - 1 } : cartItem
    )
}
