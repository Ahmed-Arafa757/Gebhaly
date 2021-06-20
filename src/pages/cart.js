import React, { useContext } from "react";
import CartContext from "../context/cart";
import CartCounterContext from "../context/cart-counter";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const { cartCounter, setCartCounter } = useContext(CartCounterContext);

  // to change quantity of products
  const changeMultiplier = (status, product, index) => {
    if (status === "increment") {
      if (product.units > product.availableQuantity - 1) {
        ((i) => {
          const updatedQty = cartProducts.slice();
          updatedQty[i].units = product.availableQuantity;

          setCartProducts(updatedQty);
        })(index);
      } else {
        ((i) => {
          const updatedQty = cartProducts.slice();
          updatedQty[i].units = updatedQty[i].units + 1;
          setCartProducts(updatedQty);
          setCartCounter(cartCounter + 1);
        })(index);
      }
    } else if (status === "decrement") {
      if (product.units < 2) {
        ((i) => {
          const updatedQty = cartProducts.slice();
          updatedQty[i].units = 1;
          setCartProducts(updatedQty);
        })(index);
      } else {
        ((i) => {
          const updatedQty = cartProducts.slice();
          updatedQty[i].units = updatedQty[i].units - 1;
          setCartProducts(updatedQty);
          setCartCounter(cartCounter - 1);
        })(index);
      }
    }
  };

  const removeProduct = (product, index) => {
    setCartProducts(
      cartProducts.filter((p) => {
        setCartCounter(cartCounter - cartProducts[index].units);
        return p.id !== product.id;
      })
    );
  };

  const total = () => {
    return cartProducts.reduce((a, b) => (a = a + b.price * b.units), 0);
  };

  return (
    <>
      {cartProducts.map((product, index) => {
        return (
          <div className='row' id='cartDetails' key={product.id}>
            <div className='col-1'></div>
            <div className='col-5 image'>
              <img src={`${product.imageurl}`} alt='product img' />
            </div>
            <div className='col-5 info'>
              <h1>{product.name}</h1>
              <h2 className='price'>
                {product.price}${" "}
                {product.units > 1
                  ? `x ${product.units} = ${product.price * product.units}$`
                  : ``}
              </h2>
              <h2>{product.category}</h2>
              <h2>available quantity: {product.availableQuantity}</h2>
              <button
                onClick={() => {
                  changeMultiplier("increment", product, index);
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  changeMultiplier("decrement", product, index);
                }}
              >
                −
              </button>
              <br />
              <br />
              <button
                id='removeBtn'
                onClick={() => {
                  removeProduct(product, index);
                }}
              >
                Remove From Cart
              </button>
            </div>
            <div className='col-1'></div>
          </div>
        );
      })}
      <div className='row'>
        <div className='col-12'>
          {cartProducts.length === 0 ? (
            <h1 style={{ marginTop: "10%", textAlign: "center" }}>
              Your Cart Is Empty
            </h1>
          ) : (
            <>
              {" "}
              <div id='total'>
                <h3>Total Items: {cartCounter} </h3>
                <h1>Total Cost = {total()}$</h1>
                <Link to='/checkout'>
                  <button>Proceed To Checkout</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
