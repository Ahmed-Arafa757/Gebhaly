import React from "react";

const CartContext = React.createContext({
    value: [],
    setValue: () => {}
});


export const CartContextProvider = CartContext.Provider;
export default CartContext;
