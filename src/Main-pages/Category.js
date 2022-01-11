import React from "react";
import { Link } from "react-router-dom";
// import './Tryslide.scss'

const Category = ({ products, setProductDetails }) => {
  console.log(products);
  return (
    <div className="container">
      <div className="row">
        <div className="">
          <div
            id="myCarousel"
            className="carousel slide"
            data-ride="carousel"
            data-interval="0"
          >
            {/* <!-- Carousel indicators --> */}

            {/* <!-- Wrapper for carousel items --> */}
            <div className="carousel-inner">
              <div className="carousel-item active bg-warning">
                <div className="row bg-danger">
                  {products.map((product) => {
                    return (
                      <div
                        onClick={() => {
                          setProductDetails(product);
                        }}
                        className="bg-success"
                        style={{}}
                      >
                        <div className="thumb-wrapper">
                          <div className="img-box">
                            <Link to="/selected">
                              <img
                                src={product.imageId}
                                className="img-fluid"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="thumb-content">
                            <h4>{product.productName}</h4>
                            <p className="item-price">
                              <span>{product.salePrice}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* <!-- Carousel controls --> */}
            <a
              className="carousel-control-prev"
              href="#myCarousel"
              data-slide="prev"
            >
              <i className="fa fa-angle-left"></i>
            </a>
            <a
              className="carousel-control-next"
              href="#myCarousel"
              data-slide="next"
            >
              <i className="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

