import React, { useState, useContext, useEffect } from "react";
import CartCounterContext from "../context/cart-counter";
import CartContext from "../context/cart";
import ProductsContext from "../context/products";

export default function Home() {
  const { cartCounter, setCartCounter } = useContext(CartCounterContext);
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const { products } = useContext(ProductsContext);
  const [activeCategory, setActiveCategory] = useState(1);
  const [currentCategory, setCurrentCategory] = useState("Smart Phones");
  const [showExitPrompt] = useState(true);


  // to filter products by category and active effect on category list
  const categories = [
    { id: 1, categoryName: "Smart Phones" },
    { id: 2, categoryName: "Electronics" },
    { id: 3, categoryName: "Books" },
  ];

  // to prevent duplication of products in the cart
  const checkExistence = (product) => {
    if (cartProducts.length === 0) {
      setCartProducts([...cartProducts, product]);
    } else {
      cartProducts.forEach((item, index) => {
        if (product === item) {
          const updatedProduct = cartProducts.slice();
          updatedProduct[index].units = updatedProduct[index].units + 1;
          setCartProducts(updatedProduct);

            setTimeout(() => {
              let unique = [];
              for (let i = 0; i < cartProducts.length; i++) {
                if (unique.indexOf(cartProducts[i]) === -1) {
                  unique.push(cartProducts[i]);
                }
              }
              setCartProducts(unique);
            }, 100);
        
        } else if (product !== item) {
          setCartProducts([...cartProducts, product]);
        }
      });
    }
  };

  const initBeforeUnLoad = (showExitPrompt) => {
    window.onbeforeunload = (event) => {
      // Show prompt based on state
      if (showExitPrompt) {
        const e = event || window.event;
        e.preventDefault();
        if (e) {
          e.returnValue = "";
        }
        return "";
      }
    };
  };

  window.onload = function () {
    initBeforeUnLoad(showExitPrompt);
  };

  // Re-Initialize the onbeforeunload event listener
  useEffect(() => {
    initBeforeUnLoad(showExitPrompt);
  }, [showExitPrompt]);

  return (
    <>
      <div className='row' id='main'>
        <div className='col-2' id='categories'>
          <p>Categories</p>
          <ul>
            {categories.map((category, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setCurrentCategory(category.categoryName);
                  }}
                  style={
                    activeCategory === category.id
                      ? {
                          color: "#ff9258",
                        }
                      : {}
                  }
                >
                  {category.categoryName}
                </li>
              );
            })}
          </ul>
        </div>
        <div className='col-10'>
          <div className='row' id='cards'>
            {products
              .filter((product) => {
                return product.category === currentCategory;
              })
              .map((product, index) => {
                return (
                  <div className='col-4' key={index}>
                    <img src={`${product.imageurl}`} alt='product img' />
                    <h2>{product.name}</h2>
                    <p className='price'>{product.price}$</p>
                    <p>{product.category}</p>
                    <p>available quantity: {product.availableQuantity}</p>
                    <button
                      className={`addToCartBtn${product.id}`}
                      onClick={() => {
                        setCartCounter(cartCounter + 1);
                        checkExistence(product);
                      }}
                    >
                      {" "}
                      ADD TO CART
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
