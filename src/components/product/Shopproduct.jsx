import React, { useState, useContext } from 'react';
import { UserContext } from '../Api/context/AppContext';
import CartItem from './CartItem';
import Footer from '../Footer';
import Categorieslist from '../Categorieslist';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../Loader';
import { AiOutlineMenu, AiOutlineAppstore } from "react-icons/ai"

const Shopproduct = () => {
    const { product, loading } = useContext(UserContext);
    const subcat = [...new Set(product.map((cat) => cat.sub_category.name))];

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
                return (
                    priceFilterCheck(price, priceFilter) && categoryFilter.includes(category)
                );
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
                return price > 1000 && price <= 3000;
            case 'price-3':
                return price > 3000 && price <= 5000;
            case 'price-4':
                return price > 5000 && price <= 10000;
            case 'price-5':
                return price > 10000
            default:
                return false;
        }
    };



    const filteredProducts = filterProductsByPriceAndCategory(
        product,
        priceFilter,
        selectedCategories


    );


    const showGridView = () => {
        setIsGridView(true);
    };

    const showListView = () => {
        setIsGridView(false);
    };
   


    return (
        <>
            {/* Page Header */}
            <div className="container-fluid">
                <div className="row">
                    <Categorieslist />
                    <div className="col-lg-9">
                        <div className="d-flex flex-column align-items-center justify-content-center bg-secondary shop_baner">
                            <h1 className="font-weight-semi-bold text-uppercase mb-3">Our Products</h1>
                            <div className="d-inline-flex">
                                <p className="m-0">
                                    <a href="/">Home</a>
                                </p>
                                <p className="m-0 px-2">-</p>
                                <p className="m-0">Products</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid pt-5 shop_prod">
                <div className="row px-xl-5">
                    {/* Shop Sidebar */}
                    <div className="col-lg-3 col-md-12">
                        <div className="border-bottom mb-4 pb-4">
                            <h5 className="font-weight-semi-bold mb-4">Filter by Price</h5>
                            <form>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
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
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input
                                        type="radio"
                                        className="custom-control-input"
                                        checked={priceFilter === 'price-1'}
                                        onChange={() => handlePriceFilterChange('price-1')}
                                        id="price-1"
                                    />
                                    <label className="custom-control-label" htmlFor="price-1">
                                        $0 - $100
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input
                                        type="radio"
                                        className="custom-control-input"
                                        checked={priceFilter === 'price-2'}
                                        onChange={() => handlePriceFilterChange('price-2')}
                                        id="price-2"
                                    />
                                    <label className="custom-control-label" htmlFor="price-2">
                                        $100 - $200
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input
                                        type="radio"
                                        className="custom-control-input"
                                        checked={priceFilter === 'price-3'}
                                        onChange={() => handlePriceFilterChange('price-3')}
                                        id="price-3"
                                    />
                                    <label className="custom-control-label" htmlFor="price-3">
                                        $200 - $300
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input
                                        type="radio"
                                        className="custom-control-input"
                                        checked={priceFilter === 'price-4'}
                                        onChange={() => handlePriceFilterChange('price-4')}
                                        id="price-4"
                                    />
                                    <label className="custom-control-label" htmlFor="price-4">
                                        $300 - $400
                                    </label>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                    <input
                                        type="radio"
                                        className="custom-control-input"
                                        checked={priceFilter === 'price-5'}
                                        onChange={() => handlePriceFilterChange('price-5')}
                                        id="price-5"
                                    />
                                    <label className="custom-control-label" htmlFor="price-5">
                                        $400 - $500
                                    </label>
                                </div>
                            </form>
                        </div>

                        {/* Filter by Categories */}
                        <div className="border-bottom mb-4 pb-4">
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
                    </div>

                    {/* Shop Products */}
                    <div className="col-lg-9 col-md-12">
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
                                                </span >
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

export default Shopproduct;








