import React, { useEffect, useState } from 'react'
import { UserContext } from "./Api/context/AppContext";
import CategoLink from './categories/CategoLink';

import axios from 'axios';
import { useContext } from 'react';
function Categorieslist() {

  const [product, setProduct] = useState([])

  const getdata = async () => {
    const storedMarket = localStorage.getItem('make');
    const apiUrl =
      `http://143.244.142.0/api/v1/parts/fetch/parts/?market_place=${storedMarket}`; // Replace with your actual API endpoint.

    await axios
      .get(apiUrl)
      .then((response) => {
        // console.log(response.data.results, "-------market");

        setProduct(response.data.results)

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getdata();
  }, [])



  return (
    <div className="col-lg-3 d-none d-lg-block">
      {/* <a
        className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"

        
        style={{ height: "65px", marginTop: "-1px", padding: "0 30px" }}
      > */}
        <h6 className="text-center bg-primary py-3">Categories</h6>
        {/* <i className="fa fa-angle-down text-dark"></i> */}
      {/* </a> */}

      <CategoLink data={product} />
    </div>
  )
}

export default Categorieslist