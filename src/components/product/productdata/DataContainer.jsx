import React, { useState, useContext ,useEffect} from 'react'

<<<<<<< HEAD
=======
// import { Link } from 'react-router-dom/dist';
// import Maincate from './Maincate';\
import { UserContext } from '../../Api/context/AppContext';
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057
import CartItem from '../CartItem';
import Footer from '../../Footer';
import Categorieslist from '../../Categorieslist';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../../Loader';
import Maincate from './Maincate';
import "./proctuct.css"
import axios from 'axios';
const DataContainer = () => {
    // const { product, loading } = useContext(UserContext)
    const[loading, setLoading]= useState(true)

    const [isGridView, setIsGridView] = useState(true);
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

                        {/* Filter by Categories */}
                        <div className="border-bottom mb-4 pb-4">
                            <h5 className="font-weight-semi-bold mb-4">Filter by Categories</h5>
                            <Maincate />
                        </div>
                    </div>

                    {/* Shop Products */}
                    <div className="col-lg-9 col-md-12">
                        <div className="row pb-3">
                           

                            {/* Product Cards */}
                            {loading ? (
                                <Loader />
                            ) : product.length > 0 ? (
                                <InfiniteScroll
                                    dataLength={product.length}
                                    hasMore={product.length < 500}
                                    height={750}
                                >
                                    <div className={`d-flex ${isGridView ? 'flex-wrap' : 'flex-column'}`}>
                                        {product.map((product, index) => (
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


    )
}

export default DataContainer