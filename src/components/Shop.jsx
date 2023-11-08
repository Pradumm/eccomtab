import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import CartItem from './product/CartItem';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';
import { useParams } from 'react-router-dom/dist';

const Shop = () => {
    const { id } = useParams()
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const [priceFilter, setPriceFilter] = useState("all");

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://143.244.142.0/api/v1/parts/fetch/parts/?part_category=${id}`);
            setData(response.data.results);
            setLoading(false);
        } catch (err) {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    const handlePriceFilterChange = (priceRange) => {
        setPriceFilter(priceRange);
    };

    const filterProductsByPrice = (products, priceFilter) => {
        if (priceFilter === "all") {
            return products;
        } else {
            return products.filter(product => {
                const price = extractPrice(product.prices);
                 console.log(price,"__________price x")
                switch (priceFilter) {
                    case "price-1":
                        return price >= 0 && price <= 100;
                    case "price-2":
                        return price > 100 && price <= 200;
                    case "price-3":
                        return price > 200 && price <= 300;
                    case "price-4":
                        return price > 300 && price <= 400;
                    case "price-5":
                        return price > 400;
                    default:
                        return false;
                }
            });
        }
    };

    const extractPrice = (prices) => {
        if (prices && prices.length > 0) {
            return prices[0].price; // Assuming the price you want to filter by is in the first element
        }
        return 0; // Default price if there are no prices 
    };

    const filteredProducts = filterProductsByPrice(data, priceFilter);

    return (
        <>
            {/* Page Header Start */}
            <div class="container-fluid bg-secondary mb-5">
                <div class="d-flex flex-column align-items-center justify-content-center" style={{ "min-height": "300px" }}>
                    <h1 class="font-weight-semi-bold text-uppercase mb-3">Product Catalog</h1>
                    <div class="d-inline-flex">
                        <p class="m-0"><a href="">Home</a></p>
                        <p class="m-0 px-2">-</p>
                        <p class="m-0">Product Catalog</p>
                    </div>
                </div>
            </div>
            {/* Page Header End */}

            {/* Shop Start */}
            <div class="container-fluid pt-5">
                <div class="row px-xl-5">
                    {/* Shop Sidebar Start */}
                    <div class="col-lg-3 col-md-12">
                        {/* Price Start */}
                        <div class="border-bottom mb-4 pb-4">
                            <h5 class="font-weight-semi-bold mb-4">Filter by price</h5>
                            <form>
                                <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input
                                        type="radio"
                                        class="custom-control-input"
                                        checked={priceFilter === "all"}
                                        onChange={() => handlePriceFilterChange("all")}
                                        id="price-all"
                                    />
                                    <label class="custom-control-label" for="price-all">All Price</label>

                                </div>
                                <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input
                                        type="radio"
                                        class="custom-control-input"
                                        checked={priceFilter === "price-1"}
                                        onChange={() => handlePriceFilterChange("price-1")}
                                        id="price-1"
                                    />
                                    <label class="custom-control-label" for="price-1">$0 - $100</label>

                                </div>
                                <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input
                                        type="radio"
                                        class="custom-control-input"
                                        checked={priceFilter === "price-2"}
                                        onChange={() => handlePriceFilterChange("price-2")}
                                        id="price-2"
                                    />
                                    <label class="custom-control-label" for="price-2">$100 - $200</label>

                                </div>
                                <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input
                                        type="radio"
                                        class="custom-control-input"
                                        checked={priceFilter === "price-3"}
                                        onChange={() => handlePriceFilterChange("price-3")}
                                        id="price-3"
                                    />
                                    <label class="custom-control-label" for="price-3">$200 - $300</label>

                                </div>
                                <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input
                                        type="radio"
                                        class="custom-control-input"
                                        checked={priceFilter === "price-4"}
                                        onChange={() => handlePriceFilterChange("price-4")}
                                        id="price-4"
                                    />
                                    <label class="custom-control-label" for="price-4">$300 - $400</label>

                                </div>
                                <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                    <input
                                        type="radio"
                                        class="custom-control-input"
                                        checked={priceFilter === "price-5"}
                                        onChange={() => handlePriceFilterChange("price-5")}
                                        id="price-5"
                                    />
                                    <label class="custom-control-label" for="price-5">$400 - $500</label>

                                </div>
                            </form>
                        </div>
                        {/* Price End */}
                    </div>
                    {/* Shop Sidebar End */}

                    {/* Shop Product Start */}
                    <div class="col-lg-9 col-md-12">
                        <div class="row pb-3">
                            <div class="col-12 pb-1">
                                <div class="d-flex align-items-center justify-content-between mb-4">
                                    <form action="">
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Search by name" />
                                            <div class="input-group-append">
                                                <span class="input-group-text bg-transparent text-primary">
                                                    <i class="fa fa-search"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                    <div class="dropdown ml-4">
                                        <button class="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Sort by
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                                            <a class="dropdown-item" href="#">Latest</a>
                                            <a class="dropdown-item" href="#">Popularity</a>
                                            <a class="dropdown-item" href="#">Best Rating</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map through your product data and create product cards dynamically */}
                            {loading ? (
                                <Loader />
                            ) : filteredProducts.length > 0 ? (
                                <InfiniteScroll
                                    dataLength={filteredProducts.length}
                                    hasMore={filteredProducts.length < 500}
                                    height={750}
                                >
                                    <div className='d-flex flex-wrap'>
                                        {filteredProducts.map((product, index) => (
                                            <CartItem product={product} key={index} />
                                        ))}
                                    </div>
                                </InfiniteScroll>
                            ) : (
                                <p className='text-center text-dark'>No products match the selected price range.</p>
                            )}
                        </div>
                    </div>
                    {/* Shop Product End */}
                </div>
            </div>
            {/* Shop End */}
            <Footer />
        </>
    )
}

export default Shop;
