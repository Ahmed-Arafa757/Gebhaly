import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartCounterContext from "../context/cart-counter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


export default function Header() {
  const { cartCounter} = useContext(CartCounterContext);
  return (
    <>
      <div id='header'>
        <div>
          <Link to='/'>
            <img src='/images/logo.png' id='logo' alt='logo' />
          </Link>
        </div>
        <div></div>
        <div></div>

        <Link to='/cart' style={{ textDecoration: "none" }}>
          <div id='cartContainer'>
          <span className='shoppingCart'> <FontAwesomeIcon icon={faShoppingCart} /> </span>
              <span id='badge' style={cartCounter === 0 ? {visibility: "hidden" }:{}}>{cartCounter} </span>
          </div>
        </Link>
      </div>
    </>
  );
}
