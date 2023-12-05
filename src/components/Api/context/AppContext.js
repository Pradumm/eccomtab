<<<<<<< HEAD
import React, { createContext, useState, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

=======
import React, { createContext, useState, useEffect } from 'react';

import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFetchApi } from '../uesFatchapi';
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057
export const UserContext = createContext();

const AppContext = ({ children }) => {
  const queryClient = useQueryClient();
  const location = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [autho, setautho] = useState(false);
  const [checkId, setcheckId] = useState([]);
  const [showForm, setShowForm] = useState(false);

<<<<<<< HEAD
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
=======
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
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057
    }
  }, [token]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [user, setUser] = useState(null);

  // Check if the user is already logged in when the app loads
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const [cartlen, setCartlen] = useState(0);

  useEffect(() => {
    // Retrieve cartlen from localStorage on component mount
    const storedCartlen = localStorage.getItem("cartlen");
    if (storedCartlen) {
      setCartlen(parseInt(storedCartlen, 10));
    }
  }, []);

  useEffect(() => {
    // Update localStorage whenever cartlen changes
    localStorage.setItem("cartlen", cartlen.toString());
  }, [cartlen]);

  const handleLogout = () => {
    axios
      .post("http://143.244.142.0/api/v1/accounts/logout", null, {
        headers: {
          Authorization: `JWT ${token}`,
        },
      })
      .then((response) => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("make");

        setToken(null);
        setUser(null);

        navigate("/");
      })
      .catch((error) => {

        console.error("Logout failed", error.response.data);
      });
  };

  const addToCard = async (product, quantity) => {
    setShowForm(false);

    try {
      await axios.post(
        "http://143.244.142.0/api/v1/marketplace/add-to-cart/",
        {
          part_number: product.id,
          user: user,
          qty: quantity,
        }
      );

      queryClient.invalidateQueries(["userList-data", user]);

      toast.success("Item added to cart successfully!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 500, // Close the toast after 2 seconds
      });
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const fetchData = async () => {
    const user = localStorage.getItem("user");
    try {
      const response = await axios.get(
        `http://143.244.142.0/api/v1/marketplace/get-my-cart/list/?user=${user}`
      );
      return response.data.results;
    } catch (error) {
      throw error;
    }
  };

<<<<<<< HEAD
  const { data } = useQuery(["userList-data", user, addToCard], fetchData, {
    onSuccess: (data) => {
      setCartlen(data.length);

      let Id_x = data.map((item) => {
        return item.part_number.id;
      });

      setcheckId(Id_x);
      queryClient.setQueryData(["userList-data", user], data);
    },
  });

  const removeFromCard = async (cartId) => {
    try {
      // Make DELETE request using Axios
      const response = await axios.delete(
        `http://143.244.142.0/api/v1/marketplace/add-to-cart/${cartId}/`
      );

      // Invalidate the query to trigger a refetch
      queryClient.invalidateQueries(["userList-data", user]);

      // You can also handle the success scenario as needed, like updating state or context
    } catch (error) {
      console.error("Error deleting item from cart:", error);
    }
  };
=======
    
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
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057

  const HandleFormShow = () => {
    setShowForm(true);
  };

  return (
    <UserContext.Provider
      value={{
        addToCard,
        autho,
        setautho,
        handleLogout,
        setUser,
        user,
        token,
        setToken,
        setautho,
        cartlen,
        setCartlen,
        removeFromCard,
        data,
        checkId,

<<<<<<< HEAD
        HandleFormShow,
        showForm,
      }}
    >
      {children}
    </UserContext.Provider>
  );
=======

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
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057
};

export default AppContext;
