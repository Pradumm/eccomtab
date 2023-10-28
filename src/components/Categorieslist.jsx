import React from 'react'
import { UserContext } from "./Api/context/AppContext";
import CategoLink from './categories/CategoLink';
import { useFetchApi } from './Api/uesFatchapi';

function Categorieslist() {

    const { data, loading } = useFetchApi("http://143.244.142.0/api/v1/parts/categories/");

  return (
    <div className="col-lg-3 d-none d-lg-block">
    <a
        className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" 
        
        href="#navbar-vertical"
        style={{ height: "65px", marginTop: "-1px", padding: "0 30px" }}
    >
        <h6 className="m-0">Categories</h6>
        <i className="fa fa-angle-down text-dark"></i>
    </a>
   


    <CategoLink data={data} />
</div>
  )
}

export default Categorieslist