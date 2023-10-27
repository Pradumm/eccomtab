import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "../components/Owlslider.css"

const logos = [
  {
    img1:"img/vendor-1.jpg"
  },
  {
    img1:"img/vendor-2.jpg"
  },
  {
    img1:"img/vendor-3.jpg"
  },
  {
    img1:"img/vendor-4.jpg"
  },
  {
    img1:"img/vendor-5.jpg"
  },
];

function LogoSlider() {
  const options = {
    items: 5, // Number of logos to display
    margin: 20, // Margin between logos
    nav: true, // Display navigation buttons
    dots: false, // Hide pagination dots
    loop: true, // Infinite loop
  };

  return (
    <section className="owl_sec">
    <div className="container py-5">
      <div className="row">
        <div className="col">
          <OwlCarousel className="logo-slider owl-loaded owl-drag" {...options}>
            {logos.map((logo, index) => (
              <div key={index} className="logo-item p-2">
                <img className='img_size' src={logo.img1} alt={`Logo ${index + 1}`} />
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
    </section>
  );
}

export default LogoSlider;
