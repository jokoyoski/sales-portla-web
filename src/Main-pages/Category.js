import React from 'react'
import { Link } from 'react-router-dom';

const Category = ({ products, setProdctDetails }) => {
    console.log(products)
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div
              id="myCarousel"
              class="carousel slide"
              data-ride="carousel"
              data-interval="0"
            >
              {/* <!-- Carousel indicators --> */}

              {/* <!-- Wrapper for carousel items --> */}
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                {
                    products.map(product => {
                        return <div onClick={() => {
                            setProdctDetails(product)
                        }} class="col-sm-3">
                            <div class="thumb-wrapper">
                                <div class="img-box">
                                    <Link to="/selected">
                                        <img
                                            src={product.imageId}
                                            class="img-fluid"
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                <div class="thumb-content">
                                    <h4>{product.productName}</h4>
                                    <p class="item-price">
                                        <span>{product.salePrice}</span>
                                    </p>

                                </div>
                            </div>
                        </div>

                    }


                    )
                }
               
                  </div>
                </div>
         
           
              </div>
              {/* <!-- Carousel controls --> */}
              <a
                class="carousel-control-prev"
                href="#myCarousel"
                data-slide="prev"
              >
                <i class="fa fa-angle-left"></i>
              </a>
              <a
                class="carousel-control-next"
                href="#myCarousel"
                data-slide="next"
              >
                <i class="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Category