# Technologies used
- ReactJs
- Context API
- SCSS

# Packages Used
- react-router-dom
- react-loadingg (for loading spinner)
- font-awesome packages


# Project description
* The project consists of a header and four pages [Home, Cart, Checkout, Error404] 

- Header contains: 
    - Logo and cart icon to navigate through Home & Cart pages and cart badge to display the number of products added to the cart
    
- Home page contains:
    - Category list to filter products by category and display it in the product listing section  
    - Product listing for display products cards
    - Each card contains:
        - product image, name, category, price, quantity left in the stock & add to cart button to send this product to the cart, if add to     cart button hit twice the quantity of product increased (no duplication of products in the cart)

- Cart page contains:
    - List of products added from the home page with their details 
    - Each product item contains:
        - increment and decrement buttons to edit quantity needed from this product 
        - remove button to remove the product from the cart 
        - cost for each product (product*quantity)
    - total items in the cart 
    - total cost for all products

- Checkout page contains:
    - list of products ready to be purchased with all details 
    - total cost for all products

- Error page contains:
    - '404 page not found' text 
    - link to go back to the home page