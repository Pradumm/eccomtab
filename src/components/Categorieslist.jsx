import React from 'react'
import CategoLink from './categories/CategoLink';
import { useQuery } from 'react-query';
import axios from 'axios';

function Categorieslist() {


  const fetchData = async () => {
    const storedMarket = localStorage.getItem('make');
    try {
      const response = await axios.get(`http://143.244.142.0/api/v1/parts/fetch/parts/?market_place=${storedMarket}`);
      return response.data.results;
    } catch (error) {
      throw error;
    }
  };

  const { data } = useQuery(['menu-data'], fetchData);






  return (
    <div className="col-lg-3 d-none d-lg-block">
      {/* <a
        className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"

        
        style={{ height: "65px", marginTop: "-1px", padding: "0 30px" }}
      > */}
      <h6 className="text-center bg-primary py-3">Categories</h6>
      {/* <i className="fa fa-angle-down text-dark"></i> */}
      {/* </a> */}

      <CategoLink data={data} />
    </div>
  )
}

export default Categorieslist