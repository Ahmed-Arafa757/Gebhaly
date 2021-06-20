import React from "react";

const ProductsContext = React.createContext({
    value: [

        {
            id: 1,
            name: "Samsung Galaxy A02",
            imageurl: "/images/samA02.jpg",
            category: "Smart Phones",
            price: 139,
            availableQuantity: 30,
            units: 1
        }, {
            id: 2,
            name: "Samsung Galaxy A12",
            imageurl: "/images/samA12.jpg",
            category: "Smart Phones",
            price: 199,
            availableQuantity: 21,
            units: 1
        }, {
            id: 3,
            name: "Samsung Galaxy A21S",
            imageurl: "/images/samA21S.jpg",
            category: "Smart Phones",
            price: 202,
            availableQuantity: 24,
            units: 1
        }, {
            id: 4,
            name: "Samsung Galaxy A31",
            imageurl: "/images/samA31.jpg",
            category: "Smart Phones",
            price: 263,
            availableQuantity: 12,
            units: 1
        }, {
            id: 5,
            name: "Samsung Galaxy A51",
            imageurl: "/images/samA51.jpg",
            category: "Smart Phones",
            price: 280,
            availableQuantity: 34,
            units: 1
        }, {
            id: 6,
            name: "Samsung Galaxy A52",
            imageurl: "/images/samA52.jpg",
            category: "Smart Phones",
            price: 499,
            availableQuantity: 19,
            units: 1
        }, {
            id: 7,
            name: "Samsung Galaxy A71",
            imageurl: "/images/samA71.jpg",
            category: "Smart Phones",
            price: 596,
            availableQuantity: 16,
            units: 1
        }, {
            id: 8,
            name: "Samsung Galaxy S20 FE",
            imageurl: "/images/samS20FE.jpg",
            category: "Smart Phones",
            price: 524,
            availableQuantity: 18,
            units: 1
        }, {
            id: 9,
            name: "Samsung Galaxy S21",
            imageurl: "/images/samS21.jpg",
            category: "Smart Phones",
            price: 770,
            availableQuantity: 37,
            units: 1
        },

        {
            id: 10,
            name: "Atomic Habits",
            imageurl: "/images/atomicHabits.jpg",
            category: "Books",
            price: 12,
            availableQuantity: 5,
            units: 1
        }, {
            id: 11,
            name: "Dude Perfect",
            imageurl: "/images/dudePerfect.jpg",
            category: "Books",
            price: 19,
            availableQuantity: 12,
            units: 1
        }, {
            id: 12,
            name: "Last Thing He Told Me",
            imageurl: "/images/lastThing.jpg",
            category: "Books",
            price: 13,
            availableQuantity: 8,
            units: 1
        }, {
            id: 13,
            name: "Malibu Rising",
            imageurl: "/images/malibu.jpg",
            category: "Books",
            price: 17,
            availableQuantity: 21,
            units: 1
        }, {
            id: 14,
            name: "The Midnight Library",
            imageurl: "/images/midNight.jpg",
            category: "Books",
            price: 13,
            availableQuantity: 6,
            units: 1
        }, {
            id: 15,
            name: "OTTO Tales",
            imageurl: "/images/otto.jpg",
            category: "Books",
            price: 9,
            availableQuantity: 14,
            units: 1
        }, {
            id: 16,
            name: "The Body Keeps the Score",
            imageurl: "/images/theBodyKeeps.jpg",
            category: "Books",
            price: 10,
            availableQuantity: 8,
            units: 1
        },

        {
            id: 17,
            name: "Apple AirPods",
            imageurl: "/images/airPods.jpg",
            category: "Electronics",
            price: 105,
            availableQuantity: 25,
            units: 1
        }, {
            id: 18,
            name: "360° Camera",
            imageurl: "/images/camera.jpg",
            category: "Electronics",
            price: 30,
            availableQuantity: 12,
            units: 1
        }, {
            id: 19,
            name: "Keyboard",
            imageurl: "/images/keyboard.jpg",
            category: "Electronics",
            price: 33,
            availableQuantity: 14,
            units: 1
        }, {
            id: 20,
            name: "Mouse",
            imageurl: "/images/mouse.jpg",
            category: "Electronics",
            price: 26,
            availableQuantity: 9,
            units: 1
        }, {
            id: 21,
            name: "RGB Speakers",
            imageurl: "/images/speaker.jpg",
            category: "Electronics",
            price: 19,
            availableQuantity: 4,
            units: 1
        }

    ],
    setValue: () => {}
});


export const ProductsContextProvider = ProductsContext.Provider;
export default ProductsContext;