import React, { useContext } from "react";
import CartContext from "../context/cart";


export default function Checkout() {
  const { cartProducts } = useContext(CartContext);

  
  const total = () => {
    return cartProducts.reduce((a, b) => (a = a + b.price * b.units), 0);
  };

  return (
    <>
      <div className='row' id='productDetails'>
        <div className='col-12'>
          <h1>Your Order Details</h1>
        </div>
        {cartProducts.map((product,index) => {
          return (
            <div className='col-12' key={index}>
              <img src={product.imageurl} alt='product img' />
              <p>Product Name: {product.name}</p>
              <p>Category: {product.category} </p>
              <p>
                Price= {product.price}$ x {product.units} ={" "}
                {product.price * product.units}${" "}
              </p>
              <hr />
            </div>
          );
        })}
        <div className='col-12'>
          <h2>Total Price= {total()}$</h2>
        </div>
      </div>
    </>
  );
}
