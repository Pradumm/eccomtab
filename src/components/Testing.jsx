import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Testing = () => {


    const [marketplaceData, setMarketplaceData] = useState([]);

    useEffect(() => {
        // Define the API URL
        const apiUrl = 'http://143.244.142.0/api/v1/pipo/get/marketplace/list/?marketplace_name=wikitekAgent';

        // Fetch data from the API
        axios.get(apiUrl)
            .then((response) => {
                // setMarketplaceData(response.data.results); // Assuming the data is an array of objects
                  console.log(response.data.results,"--_----features")
                // console.log(response.data.results[0].marketplace_banner,"______banner")
                setMarketplaceData(response.data.results[0].marketplace_banner)


            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <>
            <div>
                <h1>Marketplace Data</h1>
                <div className="image-container">
                    {marketplaceData.map((item) => (
                        <img
                            key={item.id} // Replace with a unique key from your API data
                            src={item.attachment.attachment}                           // Make sure the API provides the image URL
                            alt={item.marketplace_name}
                        />
                    ))}
                </div>
            </div>


        </>
    )
}

export default Testing