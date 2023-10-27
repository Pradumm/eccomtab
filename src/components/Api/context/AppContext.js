import React, { createContext, useState, useEffect } from 'react';

import axios from 'axios';
import { useLocation } from 'react-router-dom';
export const UserContext = createContext();



const AppContext = ({ children }) => {
    const location = useLocation()

    const [tokenvalue, setTokenvalue] = useState(true);

    const [categories, setCategories] = useState([])
    // console.log(categories,"________categories")
    const [product, setProduct] = useState([])

    const [cardItem, setCardItem] = useState([]);
    const [cardsubtotal, setcardsubtotal] = useState(0);
    const [cardCount, setCardcount] = useState(0)


    const getdata = async () => {
        const apiUrl =
            "http://143.244.142.0/api/v1/parts/fetch/parts/?market_place=enata-automotive"; // Replace with your actual API endpoint.

        await axios
            .get(apiUrl)
            .then((response) => {
                console.log(response.data.results, "-------market");

                setProduct(response.data.results)
                // setCategories(response.data.results[0].sub_category);

                // Assuming the API returns an array of product data.
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    useEffect(() => {
        let count = 0;
        cardItem.map((item) => (count += item.quantity))
        setCardcount(count)

        let subTotal = 0;
        cardItem.map((item) => (subTotal += item.mrp * item.quantity))

        setcardsubtotal(subTotal)

    }, [cardItem]);


    //  add to cart 

    useEffect(() => {
        getdata();
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])


    const addToCard = (product, quantity) => {
        const items = [...cardItem];

        const index = items.findIndex((p) => p.id === product.id);

        if (index !== -1) {
            items[index].quantity = quantity;
        } else {
            const newItem = {
                ...product,
                quantity: quantity,
            };
            items.push(newItem);
        }

        setCardItem(items);

        // Save the updated cart to localStorage
        localStorage.setItem('shoppingCart', JSON.stringify(items));
    }

    const removeFromCard = (productId) => {
        const updatedItems = cardItem.filter((item) => item.id !== productId);
        setCardItem(updatedItems);

        // Save the updated cart to localStorage
        localStorage.setItem('shoppingCart', JSON.stringify(updatedItems));
    }

    const handleQuantity = (type, product) => {
        const items = [...cardItem];

        const index = items.findIndex((p) => p.id === product.id);

        if (type == "inc") {
            items[index].quantity += 1
        } else if (type === "dec") {
            if (items[index].quantity === 1) return;
            items[index].quantity -= 1

        }

        setCardItem(items)
    }




    // Load cart data from localStorage when the component mounts
    useEffect(() => {
        const savedCart = localStorage.getItem('shoppingCart');
        if (savedCart) {
            setCardItem(JSON.parse(savedCart));
        }
    }, []);



    console.log(cardItem, "---cardItem");
    return (
        <UserContext.Provider value={{
            tokenvalue,
            setTokenvalue,
            product,
            setProduct,
            cardItem,
            addToCard,
            removeFromCard,
            handleQuantity,
            cardsubtotal,
            cardCount
        }}>
            {children}
        </UserContext.Provider>
    );
};

export default AppContext;
