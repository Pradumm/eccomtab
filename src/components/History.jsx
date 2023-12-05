import React from "react";
import "./history.css";

import Loader from "./Loader";

const History = ({ data, error, isLoading, SingleorderData }) => {
  const formatDate = (dateTimeString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    };

    const formattedDate = new Date(dateTimeString).toLocaleString(
      "en-US",
      options
    );
    return formattedDate;
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="">
              {data?.map((item) => (
                <div className="order-com mb-3" key={item.order_id}>
                  <div className="main_order">
                    <h5
                      className="text-info"
                      onClick={() => SingleorderData(item.id)}
                    >
                      {item.order_id}
                    </h5>

                    <button className="btn btn-danger btn-plus">
                      Track Order
                    </button>
                  </div>
                  <table className="table">
                    <tbody className="table-group-divider">
                      <tr>
                        <td>
                          <span className="title-span">Date</span>
                          <br />
                          <span>{formatDate(item.created)}</span>
                        </td>
                        {item.order_payment.length > 0 && (
                          <>
                            <td>
                              <span>Payment Id</span>
                              <br />
                              <span>{item.order_payment[0].payment_id}</span>
                            </td>
                            <td>
                              <span>Amount</span>
                              <br />
                              <span>{item.order_payment[0].amount}</span>
                            </td>
                            <td>
                              <span>Status</span>
                              <br />
                              <span
                                className={`text-${
                                  item.order_payment[0].status === "Success"
                                    ? "success"
                                    : "danger"
                                }`}
                              >
                                {item.order_payment[0].status}
                              </span>
                            </td>
                          </>
                        )}
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
