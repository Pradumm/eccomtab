import React, { useState } from "react";
import OrderSingledata from "./OrderSingledata";
// import axios from "axios";
import "./order.css";
// import { useContext } from "react";
// import { UserContext } from "../Api/context/AppContext";

const OrderContainer = () => {
  const [data] = useState();
//   const { token } = useContext(UserContext);
  // console.log(token)

//   const fethord = async () => {
//     try {
//       const response = await axios.get(
//         "http://143.244.142.0/api/v1/marketplace/marketplace-orders/?order_id=ORD-1000000022",
//         {
//           headers: {
//             Authorization: `JWT ${token}`,
//           },
//         }
//       );

 
    
//       // setdata(response.data.results[0])
//     } catch (error) {
//       // Handle any errors here
//       console.error(error.message, "______________error");
//     }
//   };

  return (
    <div className="">
      <div className="row">

        <div className="col-md-12">
          <OrderSingledata data={data} />
        </div>
      </div>
    </div>
  );
};

export default OrderContainer;
