export const ToggleCartHidden=cart=>({
    type: 'TOGGLE_CART_HIDDEN',
   
})

export const ClearItemFromCart=item=>({
    type: 'CLEAR_ITEM_FROM_CART',
    payload:item
   
})



export const AddItem=item=>({
    type: 'ADD_ITEM_TO_CART',
    payload:  item
   
})


export const AddItems=item=>({
    type: 'ADD_ITEMS_TO_CART',
    payload:  item
   
})


export const ClearCart=item=>({
    type: 'CLEAR_CART',
    payload:  item
   
})

export const RemoveItem=item=>({
    type: 'REMOVE_ITEM',
    payload:  item
   
})