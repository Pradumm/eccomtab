// TabComponent.jsx
import React, { useContext, useState, useEffect } from "react";
import "./TabComponent.css";
import History from "./History";
import Footer from "./Footer";
import { useQuery } from "react-query";
import axios from "axios";
import { UserContext } from "./Api/context/AppContext";
import OrderSingledata from "./orders/OrderSingledata";

function TabComponent() {
  const [orderdata, setsingledata] = useState();
  const [activeTab, setActiveTab] = useState("v-pills-home");

  const { token } = useContext(UserContext);
  const userId = localStorage.getItem("user");

  const fetchData = async (userId, token) => {
    const response = await axios.get(
      `http://143.244.142.0/api/v1/marketplace/marketplace-orders/?user=${userId}`,
      {
        headers: {
          Authorization: `JWT ${token}`,
        },
      }
    );
    return response.data.results;
  };

  const { data, error, isLoading } = useQuery(
    ["marketplaceOrders", userId, token],
    () => fetchData(userId, token)
  );

  const SingleorderData = async (orderId) => {
    try {
      const response = await axios.get(
        `http://143.244.142.0/api/v1/marketplace/marketplace-orders/?id=${orderId}`,
        {
          headers: {
            Authorization: `JWT ${token}`,
          },
        }
      );
      setsingledata(response.data.results[0]);

      setActiveTab("v-pills-profile"); // Move to the profile tab
    } catch (error) {
      console.error(error.message, "______________error");
    }
  };

  useEffect(() => {
    SingleorderData();
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <section className="order_page">
        <div className="container-fluid">
          <div className="row tab_bor">
            <div className="col-3 col_2_bor">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className={`nav-link ${
                    activeTab === "v-pills-home" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("v-pills-home")}
                  type="button"
                >
                  Order history
                </button>
                <button
                  className={`nav-link ${
                    activeTab === "v-pills-profile" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("v-pills-profile")}
                  type="button"
                >
                  Order-Id
                </button>
                <button
                  className={`nav-link ${
                    activeTab === "v-pills-messages" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("v-pills-messages")}
                  type="button"
                >
                  Messages
                </button>
              </div>
            </div>
            <div className="col-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className={`tab-pane fade ${
                    activeTab === "v-pills-home" ? "show active" : ""
                  }`}
                  id="v-pills-home"
                  role="tabpanel"
                >
                  <h3 className="pb-3">Orderhistory</h3>
                  <History
                    data={data}
                    isLoading={isLoading}
                    error={error}
                    SingleorderData={SingleorderData}
                  />
                </div>

                <div
                  className={`tab-pane fade ${
                    activeTab === "v-pills-profile" ? "show active" : ""
                  }`}
                  id="v-pills-profile"
                  role="tabpanel"
                >
                  <OrderSingledata OrderSigledata={orderdata} />
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "v-pills-messages" ? "show active" : ""
                  }`}
                  id="v-pills-messages"
                  role="tabpanel"
                >
                  <div className="row">
                    <div className="col-3">
                      <p>Order No.</p>
                      <p>1234566</p>
                      <p>1234566</p>
                      <p>1234566</p>
                    </div>
                    <div className="col-3">
                      <p>Date</p>
                      <p>21/07/23</p>
                      <p>21/07/23</p>
                      <p>21/07/23</p>
                    </div>
                    <div className="col-3">
                      <p>Total Amount</p>
                      <p>1000</p>
                      <p>1000</p>
                      <p>1000</p>
                    </div>
                    <div className="col-3">
                      <p>Status</p>
                      <p>Pending</p>
                      <p>Pending</p>
                      <p>Pending</p>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "v-pills-settings" ? "show active" : ""
                  }`}
                  id="v-pills-settings"
                  role="tabpanel"
                >
                  ...4
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default TabComponent;
