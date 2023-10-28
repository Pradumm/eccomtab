import React, { useEffect, useState } from 'react'
import OrderSingledata from './OrderSingledata'
import axios from 'axios';
import "./order.css"
import { useContext } from 'react';
import { UserContext } from '../Api/context/AppContext';

const OrderContainer = () => {
    const [data, setdata] = useState()
    const { token } = useContext(UserContext)
    // console.log(token)


    const fetchData = async () => {
        try {
            const response = await axios.get('http://143.244.142.0/api/v1/marketplace/marketplace-orders/?id=f7b6075f-0159-44e2-9c23-89bdc0a49ef6', {
                headers: {
                    Authorization: `JWT ${token}`, // Include the token in the Authorization header
                },
            });

            // Handle the response data here
            // console.log(response.data.results, "___________jwt");
            setdata(response.data.results[0])
        } catch (error) {
            // Handle any errors here
            console.error(error.message, "______________error");
        }
    };


    const fethord = async () => {
        try {
            const response = await axios.get('http://143.244.142.0/api/v1/marketplace/marketplace-orders/?order_id=ORD-1000000013', {
                headers: {
                    Authorization: `JWT ${token}`, // Include the token in the Authorization header
                },
            });

            // Handle the response data here
            console.log(response.data.results, "___________jwt");
            // setdata(response.data.results[0])
        } catch (error) {
            // Handle any errors here
            console.error(error.message, "______________error");
        }
    };

    useEffect(() => {
        fetchData()
        fethord()
    }, [token])





    return (
        <div className=''>
            <div className='row'>
                <div className='col-md-4'>

                </div>
                <div className='col-md-8'>
                    <OrderSingledata data={data} />
                </div>

            </div>

        </div>
    )
}

export default OrderContainer