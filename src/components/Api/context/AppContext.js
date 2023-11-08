import React, { createContext, useState, useEffect } from 'react';

import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFetchApi } from '../uesFatchapi';
export const UserContext = createContext();

const AppContext = ({ children }) => {

     const[userd,setuserd]= useState({
         email:"",
         pass:""

     })

     console.log(userd,"_________user found")


    const location = useLocation()
    const navigate = useNavigate()
    const [token, setToken] = useState(localStorage.getItem('token') || null);


    const [autho, setautho] = useState(false);

    // console.log(categories,"________categories")
  
    const [cardItem, setCardItem] = useState([]);
    const [cardsubtotal, setcardsubtotal] = useState(0);
    const [cardCount, setCardcount] = useState(0)

     
       

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, [token]);



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


    const [user, setUser] = useState(null);

    // Check if the user is already logged in when the app loads
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    
    const handleLogout = () => {
        axios
            .post('http://143.244.142.0/api/v1/accounts/logout', null, {
                headers: {
                    Authorization: `JWT ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data, "___________response");
                localStorage.removeItem('token');
                localStorage.removeItem('user')
                localStorage.removeItem('make');

                setToken(null)
                setUser(null);



                navigate("/login")

            })
            .catch((error) => {
                // Handle error, e.g., display an error message
                console.error('Logout failed', error.response.data);
            });
    };




    console.log(cardItem, "---cardItem");
    return (
        <UserContext.Provider value={{

            // product,
            // setProduct,
            cardItem,
            addToCard,
            removeFromCard,
            handleQuantity,
            cardsubtotal,
            cardCount,
            autho,
            setautho,
            handleLogout,
            setUser,
            user,
            token,
            setToken,
            setautho,
            userd,
            setuserd





        }}>
            {children}
        </UserContext.Provider>
    );
};

export default AppContext;
