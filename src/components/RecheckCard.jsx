import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import { Link, useParams, useNavigate } from "react-router-dom";
import { UserContext } from "./Api/context/AppContext";
import axios from "axios";
import "../components/Singleproduct.css";

import { useQuery } from "react-query";
const RecheckCard = () => {
  const { addToCard, checkId, HandleFormShow } = useContext(UserContext);

  const [describe, setDescribe] = useState({
    longDescri: "",
    short: "",
  });
  const { id } = useParams();

  const Navigate = useNavigate();

  const [quantity, setQuantity] = useState(0);

  const incQty = () => {
    setQuantity((prevQty) => prevQty + 1);
  };
  const decQty = () => {
    setQuantity((prevQty) => {
      if (prevQty > 1) {
        return prevQty - 1;
      }
      return prevQty; // Quantity shouldn't go below 1
    });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://143.244.142.0/api/v1/parts/fetch/parts/?part_number=${id}`
      ); // Replace with your API endpoint
      return response.data.results;
    } catch (error) {
      throw error;
    }
  };

  const { data, isLoading, isError, error } = useQuery(
    ["single-product", id],
    fetchData
  );

  const descri = data && data.length > 0 ? data[0].short_description : null;

  const imagesimgl =
    !isLoading &&
    data &&
    data.length > 0 &&
    data[0].default &&
    data[0].default.attachment
      ? data[0].default.attachment
      : null;

  const attachment1 =
    !isLoading &&
    data &&
    data.length > 0 &&
    data[0].documents[0] &&
    data[0].documents[0].attachment
      ? data[0].documents[0].attachment.attachment
      : null;
  const finalImage = attachment1 || imagesimgl;

  useEffect(() => {
    const getDescribe = async () => {
      try {
        if (descri) {
          const response = await axios.get(
            `http://143.244.142.0/api/v1/parts/fetch/parts/?short_description=${descri}`
          );
          setDescribe({
            longDescri: response.data.results[0].long_description,
            short: response.data.results[0].short_description,
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getDescribe();
  }, [descri]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const HandleNavigate = (product, qty) => {
    addToCard(product, qty);
    HandleFormShow();
    Navigate("/home/cart");
  };

  return (
    <>
      <div className="container-fluid bg-secondary mb-2">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ "min-height": "255px" }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            Product Catalog
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link to="/home">Home</Link>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Product Catalog</p>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- Shop Detail Start --> */}
      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <div className="col-lg-5 pb-5">
            <div id="product-carousel" className="carousel slide">
              <div className="border">
                <img className="w-100 h-100" src={finalImage} alt="Image" />
              </div>
            </div>
          </div>

          <div className="col-lg-7 pb-5">
            <h3 className="font-weight-semi-bold">
              {data[0].short_description}
            </h3>
            {/* <div className="d-flex mb-3">
                            <div className="text-primary mr-2">
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star"></small>
                                <small className="fas fa-star-half-alt"></small>
                                <small className="far fa-star"></small>
                            </div>
                            <small className="pt-1">(50 Reviews)</small>
                        </div> */}
            <h3 className="font-weight-semi-bold mb-4">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(data[0].mrp)}
            </h3>
            <p className="mb-4"> {data[0].long_description}</p>

            <p className="pb-4">{data[0]?.sub_category?.name}</p>

            <div className="d-flex align-items-center mb-4 pt-2">
              <div
                className="input-group  quantity mr-3"
                style={{ width: "130px;" }}
              >
                <div className="input-group-btn">
                  <button
                    className="btn btn-primary btn-minus"
                    onClick={decQty}
                  >
                    <i className="fa fa-minus"></i>
                  </button>
                </div>
                <input
                  type="text"
                  className=" bg-secondary text-center add_bor"
                  value={quantity}
                />
                <div className="input-group-btn">
                  <button className="btn btn-primary btn-plus" onClick={incQty}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>

                {quantity > 0 ? (
                  <>
                    {!checkId.includes(data[0].id) ? (
                      <button
                        className="btn btn-primary px-3 ml-2 "
                        onClick={() => addToCard(data[0], quantity)}
                      >
                        <i className="fa fa-shopping-cart mr-1"></i> Add To Cart
                      </button>
                    ) : (
                      <Link
                        to="/home/cart"
                        className="btn btn-primary px-3 ml-2 "
                      >
                        <i className="fa fa-shopping-cart mr-1"></i> Go To Cart
                      </Link>
                    )}

                    {!checkId.includes(data[0].id) ? (
                      <button
                        className="btn btn-primary px-3 ml-2 "
                        onClick={() => HandleNavigate(data[0], quantity)}
                      >
                        Buy Now
                      </button>
                    ) : null}
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="row px-xl-5">
          <div className="col">
            <div className="nav nav-tabs justify-content-center border-secondary mb-4">
              <a
                className="nav-item nav-link active"
                data-toggle="tab"
                href="#tab-pane-1"
              >
                Description
              </a>
              <a
                className="nav-item nav-link"
                data-toggle="tab"
                href="#tab-pane-2"
              >
                Information
              </a>
            </div>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab-pane-1">
                <h4 className="mb-3">Product Description</h4>
                <p>{describe.short}</p>
                <p>{describe.longDescri}</p>
              </div>

              <div className="tab-pane fade" id="tab-pane-2">
                <h4 className="mb-3">Additional Information</h4>

                <div className="info">
                  <div className="row">
                    <div className="col-6">
                      <ul>
                        <li>Part-Number</li>
                        <li>{data[0].part_number}</li>
                      </ul>
                      <ul>
                        <li>height</li>
                        <li>{data[0].height}</li>
                      </ul>
                      <ul>
                        <li>length</li>
                        <li>{data[0].length}</li>
                      </ul>
                      <ul>
                        <li>weight</li>
                        <li>{data[0].weight}</li>
                      </ul>
                      <ul>
                        <li>warranty-period</li>
                        <li>{data[0].warranty_period}</li>
                      </ul>
                      <ul>
                        <li>warranty-terms</li>
                        <li>{data[0].warranty_terms}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Shop Detail End --> */}

      {/* <ReletedProduct carousel={carousel} /> */}

      <Footer />
    </>
  );
};

export default RecheckCard;
