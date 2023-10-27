import React from 'react';
import { Link } from 'react-router-dom';


function CategoLink({ data }) {

    // console.log(data, "_________data cate")

    return (
        <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 fixed-nav-category" id="navbar-vertical">
            <div className="navbar-nav w-100 overflow-scroll" style={{ height: "410px" }}>
                <div className="nav-item dropdown">
                    {data?.map((item, index) => (
                        <div className="dropdown" key={index}>
                            <a to className="nav-link" type="button" data-toggle="dropdown" aria-expanded="false">
                                {item.name} <i className="fa fa-angle-down float-right mt-1"></i>
                            </a>
                            <div className="dropdown-menu" style={{ maxHeight: "200px", overflowY: "auto" }}>
                                {
                                    item.subcat.map((subcategory, subIndex) =>
                                    // console.log(subcategory, "____subcategory")

                                    (

                                        <Link to={`/categories/${subcategory.id}`} className="dropdown-item" key={subIndex}>
                                            {subcategory.name}
                                        </Link>

                                    ))
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default CategoLink;
