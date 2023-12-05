// import React from 'react';
// const OrderForm = ({errors, handleInputChange, formData, usedetails }) => {
//   return (
//     <div className="mb-4">
//       <h4 className="font-weight-semi-bold mb-4">Order Form</h4>
//       {/* Your form fields */}
//       <div className="row">
//         <div className="col-md-6 form-group">
//           <label>Billing Company Name</label>
//           <input
//             className="form-control"
//             type="text"
//             placeholder="John"
//             onChange={(e) => handleInputChange('billing_company_name', e.target.value)}
//             value={formData.billing_company_name}
//           />
//           {/* <small className="text-danger">{errors.billing_company_name}</small> */}
//         </div>
//         <div className="col-md-6 form-group d-none ">
//           <label>Billing Pincode</label>
//           <input
//             className="form-control"
//             type="text"
//             placeholder="Pincode"
//             value={formData.billing_pincode}
//             onChange={(e) => handleInputChange('billing_pincode', e.target.value)}
//           />
//           {/* <small className="text-danger">{errors.billing_company_name}</small> */}
//         </div>
//         <div className="col-md-6 form-group d-none">
//           <label>Billing GST No</label>
//           <input
//             className="form-control"
//             type="text"
//             placeholder="GST No"
//             value={formData.billing_gst_no}
//             onChange={(e) => handleInputChange('billing_gst_no', e.target.value)}
//           />
//           <small className="text-danger">{errors.billing_gst_no}</small>
//         </div>
//         <div className="col-md-6 form-group d-none">
//           <label>Shipping Company Name</label>
//           <input
//             className="form-control"
//             type="text"
//             value={formData.shipping_company_name}
//             placeholder="Shipping Company"
//             onChange={(e) => handleInputChange('shipping_company_name', e.target.value)}
//           />
//           <small className="text-danger">{errors.shipping_company_name}</small>
//         </div>
//         <div className="col-md-6 form-group d-none">
//           <label>Shipping Pincode</label>
//           <input
//             className="form-control"
//             type="text"
//             placeholder="Shipping Pincode"
//             value={formData.shipping_pincode}
//             onChange={(e) => handleInputChange('shipping_pincode', e.target.value)}
//           />
//           <small className="text-danger">{errors.shipping_pincode}</small>
//         </div>
//         <div className="col-md-6 form-group">
//           <label>Name</label>
//           <input
//             className="form-control"
//             type="text"
//             placeholder="Name"
//             value={formData.name}
//             onChange={(e) => handleInputChange('name', e.target.value)}
//           />
//           <small className="text-danger">{errors.name}</small>
//         </div>
//         <div className="col-md-6 form-group">
//           <label>Mobile No</label>
//           <input
//             className="form-control"
//             type="text"
//             placeholder="Mobile No"
//             value={formData.mobile}
//             onChange={(e) => handleInputChange('mobile', e.target.value)}
//           />
//           <small className="text-danger">{errors.mobile}</small>
//         </div>
//         <div className="col-md-6 form-group">
//           <label>E-mail</label>
//           <input
//             className="form-control"
//             type="text"
//             placeholder="example@email.com"
//             value={formData.email}
//             onChange={(e) => handleInputChange('email', e.target.value)}
//           />
//           <small className="text-danger">{errors.email}</small>
//         </div>
//       </div>
//       <div className="mb-3">
//         <label htmlFor="market_place" className="register-label">Billing Address:</label>
//         <select
//           id="market_place"
//           name="market_place"
//           value={formData.billing_address} // Set the value attribute to manage the selected value
//           onChange={(e) => handleInputChange('billing_address', e.target.value)}
//           className="form-select"
//         >
//           <option value="">Select a market place</option>
//           {usedetails.map((item) => (
//             <option key={item.id} value={item.id}>
//               {item.address}
//             </option>
//           ))}
//         </select>

//         {/* {error && error.includes('Market') && <p className="text-danger">{error.split('Market: ')[1].split(', Org:')[0]}</p>} */}
//       </div>
    
//       <div className="mb-3">
//         <label htmlFor="market_place" className="register-label">shipping Address:</label>
//         <select
//           id="market_place"
//           name="market_place"
//         // Set the value attribute to manage the selected value
//           onChange={(e) => handleInputChange('shipping_address', e.target.value)}
//           className="form-select"
//         >
//           <option  value={formData.shipping_address}>Select a market place</option>
//           {usedetails.map((item) => (
//             <option key={item.id} value={item.id}>
//               {item.address}
//             </option>
//           ))}
//         </select>

//         {/* {error && error.includes('Market') && <p className="text-danger">{error.split('Market: ')[1].split(', Org:')[0]}</p>} */}
//       </div>
//     </div>
//   );
// };

// export default OrderForm;





// OrderForm.js





import React from 'react';

const OrderForm = ({ errors, handleInputChange, formData, usedetails, setErrors }) => {
  const handleSelectChange = (field, value) => {
    handleInputChange(field, value);
    setErrors({
      ...errors,
      [field]: "", // Remove error when the field is selected
    });
  };

  return (
    <div className="mb-4">
      <h4 className="font-weight-semi-bold mb-4">Order Form</h4>
      <div className="row">
        <div className="col-md-6 form-group">
          <label>Billing Company Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="John"
            onChange={(e) => handleInputChange('billing_company_name', e.target.value)}
            value={formData.billing_company_name}
          />
          <small className="text-danger">{errors.billing_company_name}</small>
        </div>
        {/* ... (similar fields for billing_pincode, billing_gst_no, etc.) */}
        <div className="col-md-6 form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
          <small className="text-danger">{errors.name}</small>
        </div>
        <div className="col-md-6 form-group">
          <label>Mobile No</label>
          <input
            className="form-control"
            type="text"
            placeholder="Mobile No"
            value={formData.mobile}
            onChange={(e) => handleInputChange('mobile', e.target.value)}
          />
          <small className="text-danger">{errors.mobile}</small>
        </div>
        <div className="col-md-6 form-group">
          <label>E-mail</label>
          <input
            className="form-control"
            type="text"
            placeholder="example@email.com"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
          <small className="text-danger">{errors.email}</small>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="billing_address" className="register-label">Billing Address:</label>
        <select
          id="billing_address"
          name="billing_address"
          value={formData.billing_address}
          onChange={(e) => handleSelectChange('billing_address', e.target.value)}
          className="form-select"
        >
          
          {usedetails.map((item) => (
            <option key={item.id} value={item.id}>
              {item.address}
            </option>
          ))}
        </select>
        <small className="text-danger">{errors.isBillingAddressValid}</small>
      </div>

      <div className="mb-3">
        <label htmlFor="shipping_address" className="register-label">Shipping Address:</label>
        <select
          id="shipping_address"
          name="shipping_address"
          value={formData.shipping_address}
          onChange={(e) => handleSelectChange('shipping_address', e.target.value)}
          className="form-select"
        >
          
          {usedetails.map((item) => (
            <option key={item.id} value={item.id}>
              {item.address}
            </option>
          ))}
        </select>
        <small className="text-danger">{errors.isShippingAddressValid}</small>
      </div>
    </div>
  );
};

export default OrderForm;
