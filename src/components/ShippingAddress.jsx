import React, { useState, useEffect } from "react";
import axios from "axios";

const ShippingAddress = () => {
  const [selectedOrg, setSelectedOrg] = useState("");
  const [organizations, setOrganizations] = useState([]);

  const [formData, setFormData] = useState({
    org: "0884137a-b5dc-4f5b-b64d-9e7baf0d3819",
    pincode: "414103",
    address_type: "PLANT",
    country: "91a0ebea-cee4-4074-aa04-b2b00cc7c954",
    address: "address",
    gst_no: "GFDR456789",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectOrg = (org) => {
    setSelectedOrg(org);
  };

  const getOrganizations = async () => {
    try {
      const response = await axios.get(
        "http://143.244.142.0/api/v1/org/fetch/address/type/"
      );
      setOrganizations(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOrganizations();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the API endpoint
      const response = await axios.post(
        "http://143.244.142.0/api/v1/org/address/add",
        formData
      );

      console.log("Address added successfully:", response.data);

      // You can also reset the form or perform other actions here
    } catch (error) {
      // Handle any errors that occur during the request
      console.error("Error adding address:", error);
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="mt-5 mb-4">Add Address</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Organization:</label>
                <input
                  type="text"
                  className="form-control"
                  name="org"
                  value={formData.org}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Pincode:</label>
                <input
                  type="text"
                  className="form-control"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Select an Organization:</label>
            <select
              className="form-control"
              value={selectedOrg}
              onChange={(e) => handleSelectOrg(e.target.value)}
            >
              <option value="">Select an organization</option>
              {organizations.map((org) => (
                <option key={org.id} value={org.name}>
                  {org.name}
                </option>
              ))}
            </select>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Country:</label>
                <input
                  type="text"
                  className="form-control"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>GST No:</label>
                <input
                  type="text"
                  className="form-control"
                  name="gst_no"
                  value={formData.gst_no}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Address
          </button>
        </form>
      </div>
    </>
  );
};

export default ShippingAddress;
