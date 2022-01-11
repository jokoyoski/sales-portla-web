import React from "react";
import { Link } from "react-router-dom";
import "./Tryslide.scss";

const Classjs = ({ products, setProductDetails }) => {
    console.log('here are your products 🏆🏆🏆🏆🏆', products);
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
                            {products.map((product) => {
                                return <>
                                    <div className="swiper-slide" onClick={() => setProductDetails(product)}>
                                        {/*box---------------------*/}
                                        <div className="product-box">
                                            <div className="product-img-container">
                                                {/*img=============*/}
                                                <div className="product-img">
                                                    <Link to="/selected">
                                                        < img
                                                            className="product-img-front"
                                                            src={product.imageId}
                                                            alt
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="product-box-text">
                                                {/*category*/}
                                                <div className="product-category">
                                                    <span>{product.categoryName}</span>
                                                </div>
                                                {/*tile-*/}
                                                <h4>
                                                    {product.productName}
                                                </h4>
                                                {/*Price-*/}
                                                <div className="price-buy">
                                                    <span className="p-price">{product.salePrice}</span>
                                                    <a
                                                        href=""
                                                        className="p-buy-btn"
                                                    >
                                                        Buy Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            })}
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Classjs;
