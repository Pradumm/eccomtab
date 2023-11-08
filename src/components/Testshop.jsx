// import React, { useContext, useState, useEffect } from 'react';

// import CartItem from './product/CartItem';
// import Footer from './Footer';
// import Categorieslist from './Categorieslist';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import Loader from './Loader';
// import { AiOutlineAppstore, AiOutlineMenu } from "react-icons/ai"
// // import { UserContext } from './Api/context/AppContext';
// import { useParams } from 'react-router-dom/dist';
// import axios from 'axios';
// const Testshop = () => {


//     // const { product, loading } = useContext(UserContext)

//     const { id } = useParams()

//     const [data, setData] = useState([]);

//     const [loading, setLoading] = useState(true);
//     const fetchData = async () => {
//         try {
//             const response = await axios.get(`http://143.244.142.0/api/v1/parts/fetch/parts/?part_category=${id}`);
//             setData(response.data.results);
//             setLoading(false);
//         } catch (err) {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, [id]);


//     const subcat = [...new Set(data.map((cat) => cat.sub_category.name))];

//     const [priceFilter, setPriceFilter] = useState('all');
//     const [selectedCategories, setSelectedCategories] = useState([]);
//     const [isGridView, setIsGridView] = useState(true);

//     const handlePriceFilterChange = (priceRange) => {
//         setPriceFilter(priceRange);
//     };

//     const handleCategoryFilterChange = (category) => {
//         if (selectedCategories.includes(category)) {
//             setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
//         } else {
//             setSelectedCategories([...selectedCategories, category]);
//         }
//     };

//     const filterProductsByPriceAndCategory = (products, priceFilter, categoryFilter) => {

//         return products.filter((product) => {
//             const price = product.mrp;
//             const category = product.sub_category.name;

//             if (priceFilter !== 'all' && categoryFilter.length > 0) {
//                 return (
//                     priceFilterCheck(price, priceFilter) && categoryFilter.includes(category)
//                 );
//             } else if (priceFilter !== 'all') {
//                 return priceFilterCheck(price, priceFilter);
//             } else if (categoryFilter.length > 0) {
//                 return categoryFilter.includes(category);
//             } else {
//                 return true;
//             }
//         });
//     };

//     const priceFilterCheck = (price, priceFilter) => {
//         switch (priceFilter) {
//             case 'price-1':
//                 return price >= 0 && price <= 1000;
//             case 'price-2':
//                 return price > 1000 && price <= 3000;
//             case 'price-3':
//                 return price > 3000 && price <= 5000;
//             case 'price-4':
//                 return price > 5000 && price <= 10000;
//             case 'price-5':
//                 return price > 10000
//             default:
//                 return false;
//         }
//     };



//     const filteredProducts = filterProductsByPriceAndCategory(
//         data,
//         priceFilter,
//         selectedCategories


//     );


//     const showGridView = () => {
//         setIsGridView(true);
//     };

//     const showListView = () => {
//         setIsGridView(false);
//     };


//     const handleDeleteSelectedCategory = () => {

//     }


//     return (
//         <>
//             {/* Page Header */}
//             <div className="container-fluid">
//                 <div className="row">
//                     <Categorieslist />
//                     <div className="col-lg-9">
//                         <div className="d-flex flex-column align-items-center justify-content-center bg-secondary shop_baner">
//                             <h1 className="font-weight-semi-bold text-uppercase mb-3">Our Products</h1>
//                             <div className="d-inline-flex">
//                                 <p className="m-0">
//                                     <a href="/">Home</a>
//                                 </p>
//                                 <p className="m-0 px-2">-</p>
//                                 <p className="m-0">Products</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="container-fluid pt-5 shop_prod">
//                 <div className="row px-xl-5">
//                     {/* Shop Sidebar */}
//                     <div className="col-lg-3 col-md-12">
//                         {
//                             data.length > 0 && (<>   <div className="border-bottom mb-4 pb-4">
//                                 <h5 className="font-weight-semi-bold mb-4">Filter by Price</h5>
//                                 <form>
//                                     <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
//                                         <input
//                                             type="radio"
//                                             className="custom-control-input"
//                                             checked={priceFilter === 'all'}
//                                             onChange={() => handlePriceFilterChange('all')}
//                                             id="price-all"
//                                         />
//                                         <label className="custom-control-label" htmlFor="price-all">
//                                             All Prices
//                                         </label>
//                                     </div>
//                                     <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
//                                         <input
//                                             type="radio"
//                                             className="custom-control-input"
//                                             checked={priceFilter === 'price-1'}
//                                             onChange={() => handlePriceFilterChange('price-1')}
//                                             id="price-1"
//                                         />
//                                         <label className="custom-control-label" htmlFor="price-1">
//                                             $0 - $100
//                                         </label>
//                                     </div>
//                                     <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
//                                         <input
//                                             type="radio"
//                                             className="custom-control-input"
//                                             checked={priceFilter === 'price-2'}
//                                             onChange={() => handlePriceFilterChange('price-2')}
//                                             id="price-2"
//                                         />
//                                         <label className="custom-control-label" htmlFor="price-2">
//                                             $100 - $200
//                                         </label>
//                                     </div>
//                                     <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
//                                         <input
//                                             type="radio"
//                                             className="custom-control-input"
//                                             checked={priceFilter === 'price-3'}
//                                             onChange={() => handlePriceFilterChange('price-3')}
//                                             id="price-3"
//                                         />
//                                         <label className="custom-control-label" htmlFor="price-3">
//                                             $200 - $300
//                                         </label>
//                                     </div>
//                                     <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
//                                         <input
//                                             type="radio"
//                                             className="custom-control-input"
//                                             checked={priceFilter === 'price-4'}
//                                             onChange={() => handlePriceFilterChange('price-4')}
//                                             id="price-4"
//                                         />
//                                         <label className="custom-control-label" htmlFor="price-4">
//                                             $300 - $400
//                                         </label>
//                                     </div>
//                                     <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
//                                         <input
//                                             type="radio"
//                                             className="custom-control-input"
//                                             checked={priceFilter === 'price-5'}
//                                             onChange={() => handlePriceFilterChange('price-5')}
//                                             id="price-5"
//                                         />
//                                         <label className="custom-control-label" htmlFor="price-5">
//                                             $400 - $500
//                                         </label>
//                                     </div>
//                                 </form>
//                             </div></>)
//                         }



//                         {/* Filter by Categories */}
//                         {data.length > 0 && (<> <div className="border-bottom mb-4 pb-4">
//                             <h5 className="font-weight-semi-bold mb-4">Filter by Categories</h5>
//                             <form>
//                                 {subcat.map((category) => (
//                                     <div
//                                         key={category}
//                                         className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
//                                     >
//                                         <input
//                                             type="checkbox"
//                                             className="custom-control-input"
//                                             checked={selectedCategories.includes(category)}
//                                             onChange={() => handleCategoryFilterChange(category)}
//                                             id={`category-${category}`}
//                                         />
//                                         <label
//                                             className="custom-control-label"
//                                             htmlFor={`category-${category}`}
//                                         >
//                                             {category}
//                                         </label>
//                                     </div>
//                                 ))}
//                             </form>
//                         </div></>)}
//                     </div>

//                     {/* Shop Products */}
//                     <div className="col-lg-9 col-md-12">


//                         {/* {
//                             selectedCategories.length > 0 && (<>  <p>Selected Subcategories: {selectedCategories.join(', ')}</p></>)

//                         } */}

//                         <div className=''>
//                             {
//                                 selectedCategories.length > 0 && (
//                                     selectedCategories.map((item, index) => (
//                                         <div key={index} className="d-flex align-items-center mb-2">
//                                             <button
//                                                 className="btn btn-primary mr-2"
//                                                 onClick={() => handleDeleteSelectedCategory(item)}
//                                             >
//                                                 {item}
//                                             </button>
//                                             <button
//                                                 className="btn btn-danger"
//                                                 onClick={() => handleDeleteSelectedCategory(item)}
//                                             >
//                                                 Delete
//                                             </button>
//                                         </div>
//                                     )))
//                             }

//                         </div>


//                         <div className="row pb-3">
//                             <div className="col-12 pb-1">
//                                 <div className="d-flex align-items-center justify-content-between mb-4">
//                                     <form action="">
//                                         <div className="input-group">
//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 placeholder="Search by name"
//                                             />
//                                             <div className="input-group-append">
//                                                 <span className="input-group-text bg-transparent text-primary">
//                                                     <i className="fa fa-search"></i>
//                                                 </span>

//                                                 <span
//                                                     className="input-group-text bg-transparent text-primary"
//                                                     onClick={showGridView}
//                                                 >
//                                                     <AiOutlineAppstore />
//                                                 </span >
//                                                 <span
//                                                     className="input-group-text bg-transparent text-primary ml-2"
//                                                     onClick={showListView}
//                                                 >
//                                                     <AiOutlineMenu />
//                                                 </span>
//                                             </div>
//                                         </div>
//                                     </form>



//                                 </div>
//                             </div>

//                             {/* Product Cards */}
//                             {loading ? (
//                                 <Loader />
//                             ) : filteredProducts.length > 0 ? (
//                                 <InfiniteScroll
//                                     dataLength={filteredProducts.length}
//                                     hasMore={filteredProducts.length < 500}
//                                     height={750}
//                                 >
//                                     <div className={`d-flex ${isGridView ? 'flex-wrap' : 'flex-column'}`}>
//                                         {filteredProducts.map((product, index) => (
//                                             <CartItem product={product} key={index} isGridView={isGridView} />
//                                         ))}
//                                     </div>
//                                 </InfiniteScroll>
//                             ) : (
//                                 <p className="text-center text-dark">
//                                     No products match the selected price range or category.
//                                 </p>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* Footer */}
//             <Footer />
//         </>
//     );
// };

// export default Testshop;



import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { LiaGreaterThanSolid } from 'react-icons/lia';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { AiOutlineAppstore, AiOutlineMenu, AiFillDelete } from 'react-icons/ai';

import CartItem from './product/CartItem';
import Footer from './Footer';
import Loader from './Loader';
const Testshop = () => {

    const { partCategoryName, subCategoryName, subCategoryId } = useParams();
    const decodedPartCategoryName = decodeURI(partCategoryName);
    const decodedSubCategoryName = decodeURI(subCategoryName);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://143.244.142.0/api/v1/parts/fetch/parts/?part_category=${subCategoryId}`);

            // console.log(response.data,"_______is data")
            setData(response.data.results);
            console.log(response.data.results, "amit")
            setLoading(false);
        } catch (err) {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [subCategoryId]);

    const subcat = [...new Set(data.map((cat) => cat.sub_category.name))];

    console.log("amitcosole", subcat)

    const [priceFilter, setPriceFilter] = useState('all');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [isGridView, setIsGridView] = useState(true);

    const handlePriceFilterChange = (priceRange) => {
        setPriceFilter(priceRange);
    };



    const handleCategoryFilterChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };



    const filterProductsByPriceAndCategory = (products, priceFilter, categoryFilter) => {
        return products.filter((product) => {
            const price = product.mrp;
            const category = product.sub_category.name;

            if (priceFilter !== 'all' && categoryFilter.length > 0) {
                return priceFilterCheck(price, priceFilter) && categoryFilter.includes(category);
            } else if (priceFilter !== 'all') {
                return priceFilterCheck(price, priceFilter);
            } else if (categoryFilter.length > 0) {
                return categoryFilter.includes(category);
            } else {
                return true;
            }
        });
    };



    const priceFilterCheck = (price, priceFilter) => {
        switch (priceFilter) {
            case 'price-1':
                return price >= 0 && price <= 1000;
            case 'price-2':
                return price > 1000 && price <= 2000;
            case 'price-3':
                return price > 2000 && price <= 3000;
            case 'price-4':
                return price > 3000 && price <= 4000;
            case 'price-5':
                return price > 4000;
            default:
                return false;
        }
    };



    const handleDeleteSelectedCategory = (category) => {
        setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    };

    const showGridView = () => {
        setIsGridView(true);
    };

    const showListView = () => {
        setIsGridView(false);
    };

    // Filter products based on price and category
    const filteredProducts = filterProductsByPriceAndCategory(data, priceFilter, selectedCategories);





    const navigate = useNavigate();

    const handleDeleteCategory = () => {

        navigate('/home');
    };
    return (
        <>


            <div className='top_route'>
                {partCategoryName && subCategoryName && (
                    <>
                        <Link to={`/home`} className="btn_top">
                            Home /{decodedPartCategoryName}/
                        </Link>
                        {decodedSubCategoryName}
                    </>
                )}
            </div>
            {/* ... (header content) ... */}

            <div className="container-fluid bg-secondary mb-2">
                <div className="d-flex flex-column align-items-center justify-content-center" style={{ "min-height": "255px" }}>
                    <h1 className="font-weight-semi-bold text-uppercase mb-3">Product Catalog</h1>
                    <div className="d-inline-flex">
                        <p className="m-0"><Link to="/home">Home</Link></p>
                        <p className="m-0 px-2">-</p>
                        <p className="m-0">Product Catalog</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid pt-5 shop_prod">
                <div className="row px-xl-5">
                    {/* Shop Sidebar */}
                    <div className="col-lg-3 col-md-12">
                        {data.length > 0 && (
                            <>
                                <div className="border-bottom mb-4 pb-4">
                                    <h5 className="font-weight-semi-bold mb-4">Filter by Price</h5>
                                    <form>
                                        <div className="custom-control custom-radio d-flex align-items-center justify-content-between mb-3">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                checked={priceFilter === 'all'}
                                                onChange={() => handlePriceFilterChange('all')}
                                                id="price-all"
                                            />
                                            <label className="custom-control-label" htmlFor="price-all">
                                                All Prices
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio d-flex align-items-center justify-content-between mb-3">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                checked={priceFilter === 'price-1'}
                                                onChange={() => handlePriceFilterChange('price-1')}
                                                id="price-1"
                                            />
                                            <label className="custom-control-label" htmlFor="price-1">
                                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(0)} - {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(1000)}
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio d-flex align-items-center justify-content-between mb-3">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                checked={priceFilter === 'price-2'}
                                                onChange={() => handlePriceFilterChange('price-2')}
                                                id="price-2"
                                            />
                                            <label className="custom-control-label" htmlFor="price-2">
                                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(1000)}- {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(2000)}
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio d-flex align-items-center justify-content-between mb-3">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                checked={priceFilter === 'price-3'}
                                                onChange={() => handlePriceFilterChange('price-3')}
                                                id="price-3"
                                            />
                                            <label className="custom-control-label" htmlFor="price-3">
                                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(2000)} - {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(3000)}
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio d-flex align-items-center justify-content-between mb-3">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                checked={priceFilter === 'price-4'}
                                                onChange={() => handlePriceFilterChange('price-4')}
                                                id="price-4"
                                            />
                                            <label className="custom-control-label" htmlFor="price-4">
                                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(3000)} - {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(4000)}
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio d-flex align-items-center justify-content-between">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                checked={priceFilter === 'price-5'}
                                                onChange={() => handlePriceFilterChange('price-5')}
                                                id="price-5"
                                            />
                                            <label className="custom-control-label" htmlFor="price-5">
                                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(4000)} - {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(5000)}
                                            </label>
                                        </div>
                                    </form>

                                </div>
                            </>
                        )}

                        {/* Filter by Categories */}
                        {data.length > 0 && (
                            <>
                                <div className="border-bottom mb-4 pb-4 d-none   ">
                                    <h5 className="font-weight-semi-bold mb-4">Filter by Categories</h5>
                                    <form>
                                        {subcat.map((category) => (
                                            <div
                                                key={category}
                                                className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    checked={selectedCategories.includes(category)}
                                                    onChange={() => handleCategoryFilterChange(category)}
                                                    id={`category-${category}`}
                                                />
                                                <label
                                                    className="custom-control-label"
                                                    htmlFor={`category-${category}`}
                                                >
                                                    {category}
                                                </label>
                                            </div>
                                        ))}
                                    </form>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Shop Products */}
                    <div className="col-lg-9 col-md-12">
                        <div className=" d-flex flex-wrap">
                            {selectedCategories.length > 0 && (
                                selectedCategories.map((item, index) => (
                                    <div key={index} className="d-flex align-items-center mb-2">
                                        <button
                                            className="btn btn-primary mr-2"
                                            onClick={() => handleDeleteSelectedCategory(item)}
                                        >
                                            {item} <AiFillDelete />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="row pb-3">
                            <div className="col-12 pb-1">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <form action="">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search by name"
                                            />
                                            <div className="input-group-append">
                                                <span className="input-group-text bg-transparent text-primary">
                                                    <i className="fa fa-search"></i>
                                                </span>

                                                <span
                                                    className="input-group-text bg-transparent text-primary"
                                                    onClick={showGridView}
                                                >
                                                    <AiOutlineAppstore />
                                                </span>
                                                <span
                                                    className="input-group-text bg-transparent text-primary ml-2"
                                                    onClick={showListView}
                                                >
                                                    <AiOutlineMenu />
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* Product Cards */}
                            {loading ? (
                                <Loader />
                            ) : filteredProducts.length > 0 ? (
                                <InfiniteScroll
                                    dataLength={filteredProducts.length}
                                    hasMore={filteredProducts.length < 500}
                                    height={750}
                                >
                                    <div className={`d-flex ${isGridView ? 'flex-wrap' : 'flex-column'}`}>
                                        {filteredProducts.map((product, index) => (
                                            <CartItem product={product} key={index} isGridView={isGridView} />
                                        ))}
                                    </div>
                                </InfiniteScroll>
                            ) : (
                                <p className="text-center text-dark">
                                    No products match the selected price range or category.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </>

    );
};

export default Testshop;
