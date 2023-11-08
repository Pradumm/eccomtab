// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Slider({marketbenner}) {
 


//   return (
//     <div id="header-carousel" className="carousel slide" data-ride="carousel">
//       <div className="carousel-inner">
//         {marketbenner.map((banner, index) => (
//           <div
//             key={banner.id}
//             className={`carousel-item ${index === 0 ? "active" : ""}`}
//             style={{ height: "600px" }}
//           >
//             {banner.attachment && banner.attachment.attachment ? (
//               <img
//                 className="img-fluid"
//                 src={banner.attachment.attachment}
//                 alt={banner.banner_name}
//               />
//             ) : (
//               <p>Image Not Available</p>
//             )}
//             <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
//               <div className="p-3" style={{ maxWidth: "700px" }}>
//                 <h4 className="text-light text-uppercase font-weight-medium mb-3">
//                   {banner.banner_name || "Banner Name Unavailable"}
//                 </h4>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <a
//         className="carousel-control-prev"
//         href="#header-carousel"
//         data-slide="prev"
//       >
//         <div className="btn btn-dark" style={{ width: "45px", height: "45px" }}>
//           <span className="carousel-control-prev-icon mb-n2"></span>
//         </div>
//       </a>
//       <a
//         className="carousel-control-next"
//         href="#header-carousel"
//         data-slide="next"
//       >
//         <div className="btn btn-dark" style={{ width: "45px", height: "45px" }}>
//           <span className="carousel-control-next-icon mb-n2"></span>
//         </div>
//       </a>
//     </div>
//   );
// }

// export default Slider;





import React, { useState, useEffect } from "react";
import axios from "axios";
import banner from  "../components/assets/no_image.png"
// Define the path to your placeholder image
const placeholderImage = banner

function Slider({ marketbenner }) {
  // Check if marketbenner is empty, and if so, create a new array with a length of 3
  if (marketbenner.length === 0) {
    marketbenner = Array(3).fill({});
  }

  return (
    <div id="header-carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {marketbenner.map((banner, index) => (
          <div
            key={banner.id || index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            {banner.attachment && banner.attachment.attachment ? (
              <img
                className="img-fluid dev_bg"
                src={banner.attachment.attachment}
                alt={banner.banner_name || "Banner Name Unavailable"}
              />
            ) : (
              <img
                className="img-fluid"
                src={placeholderImage}
                alt="Image Not Available"
              />
            )}
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "700px" }}>
                {/* <h4 className="text-light text-uppercase font-weight-medium mb-3">
                  {banner.banner_name || "Banner Name Unavailable"}
                </h4> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#header-carousel"
        data-slide="prev"
      >
        <div className="btn btn-dark" style={{ width: "45px", height: "45px" }}>
          <span className="carousel-control-prev-icon mb-n2"></span>
        </div>
      </a>
      <a
        className="carousel-control-next"
        href="#header-carousel"
        data-slide="next"
      >
        <div className="btn btn-dark" style={{ width: "45px", height: "45px" }}>
          <span className="carousel-control-next-icon mb-n2"></span>
        </div>
      </a>
    </div>
  );
}

export default Slider;
