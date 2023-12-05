import React from 'react';
import { Link } from 'react-router-dom';

function CategoLink({ data }) {
    console.log("devansh" , data)
    if (!data || data.length === 0) {
        return (
            <div>
                <p>No categories with subcategories found.</p>
            </div>
        );
    }
<<<<<<< HEAD
    const uniqueCategories = {}; 
=======

    const uniqueCategories = {}; // Use an object to track unique categories
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057

    return (
        <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 fixed-nav-category" id="navbar-vertical">
            <div className="navbar-nav w-100 overflow-scroll" style={{ height: "410px" }}>
                {data.map((category, index) => {
                    if (!uniqueCategories[category.part_category.name]) {
                        uniqueCategories[category.part_category.name] = true;
                        return (
                            <div className="nav-item dropdown" key={index}>
                                <a className="nav-link" type="button" data-toggle="dropdown" aria-expanded="false">
                                    {category.part_category.name}
                                     <i className="fa fa-angle-down float-right mt-1"></i>
                                </a>
                                <div className="dropdown-menu" style={{ maxHeight: "200px", overflowY: "auto" }}>
<<<<<<< HEAD
=======
                                    {/* {/ Filter subcategories for the current category /} */}
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057
                                    {data.map((subCategory, subIndex) => {
                                        if (
                                            subCategory.part_category.name === category.part_category.name &&
                                            !uniqueCategories[subCategory.sub_category.name]
                                        ) {
                                            uniqueCategories[subCategory.sub_category.name] = true;
                                            return (
                                                <Link
<<<<<<< HEAD
                                                    to={`/home/categories/${category.part_category.name.replace(/ /g, '-')}/${subCategory.sub_category.name.replace(/ /g, '-')}/${subCategory.sub_category.id}`}
=======
                                                    to={`/categories/${category.part_category.name.replace(/ /g, '-')}/${subCategory.sub_category.name.replace(/ /g, '-')}/${subCategory.sub_category.id}`}
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057
                                                    className="dropdown-item sub_cat"
                                                    key={subIndex}
                                                >
                                                    {subCategory.sub_category.name}
                                                </Link>
                                            );
                                        }
<<<<<<< HEAD
                                        return null; 
=======
                                        return null; // Render nothing if the subcategory name doesn't match
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057
                                    })}
                                </div>
                            </div>
                        );
                    }
                    return null; // Render nothing if the category name is not unique
                })}
            </div>
        </nav>
    );
}

export default CategoLink;
