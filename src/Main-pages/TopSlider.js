import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Tryslide.scss";

const TopSlider = ({ products, LoadProducts }) => {
  console.log("here are your products 🏆🏆🏆🏆🏆", products);
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      360: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      540: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  //   useEffect(() => {
  //     LoadProducts();
  //   }, []);

  return (
    <div>
      <section className="product-slider">
        <div className="slider-btns">
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>

        <div className="slider-container">
          {/* Swiper */}
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                {/*box---------------------*/}
                {/* Product-1 */}
                <div className="product-box">
                  <div className="product-img-container">
                    {/*img=============*/}
                    <div className="product-img">
                      <Link to="/selected">
                        <img
                          className="product-img-front"
                          src="https://tse1.mm.bing.net/th?id=OIP.nA4D3w0u6MboOadvJ5rYzQHaJ4&pid=Api&P=0&w=124&h=165"
                          alt="product_img"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="product-box-text">
                    {/*category*/}
                    <div className="product-category">
                      <span>Fashion</span>
                    </div>
                    {/*tile-*/}
                    <h4>New Clothes</h4>
                    {/*Price-*/}
                    <div className="price-buy">
                      <span className="p-price">$10,000</span>
                      <a href="" className="p-buy-btn">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                {/* Product-2 */}
             
              </div>
            </div>
          </div>
        </div>

        
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.dashboardReducer.products,
  };
};
const mapDispatchToProps = (dispatch) => ({
  LoadProducts(payload) {
    dispatch({ type: "LOAD_PRODUCT", payload });
  },
  SetProduct(payload) {
    dispatch({ type: "SET_PRODUCT_DETAILS", payload });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TopSlider);
