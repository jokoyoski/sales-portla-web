import React, { useState ,useEffect} from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

// import CarouselPage from "./Cart";
// import Category from "./Category";
// import DropdownPage from "../components/dropdown"

export function App({ productCategories, allItems, AllItems, productsList, SetProduct, itemCount}) {

    console.log(productCategories)

  
    const [allProducts, setAllProducts] = useState(productsList.products);
    const [allitem,setAllItem] = useState(allItems);
    const [allproductCategories, setProductCategories] = useState(productsList.categories);
   

    const [showBasic, setShowBasic] = useState(false);
   
    useEffect(() => {
        AllItems()
    }, [])

    var LoadProductCategory = (id) => {
    
       var i = 0;
      var updatedProduct = [];
       for (i; i < productsList.products.length;i++) {
           if (productsList.products[i].categoryId == id) {
               updatedProduct.push(productsList.products[i])
           }
       }
       console.log(updatedProduct)
       setAllProducts(updatedProduct);
    }
  return (
    <div>
      <header>
        <div className="container top-nav pt-3 p-0">
          <MDBNavbar expand="lg" light bgColor="white">
            <MDBContainer fluid>
              <MDBNavbarBrand href="#" className="p-0">
                <img src="./Images/logo2.png" alt="" />
              </MDBNavbarBrand>

              <MDBNavbarToggler
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setShowBasic(!showBasic)}
              >
                <MDBIcon icon="bars" fas />
              </MDBNavbarToggler>
              <MDBCollapse navbar show={showBasic}>
                <form className="d-flex input-group w-auto">
                  <input
                    type="search"
                    className="form-control mt-2"
                    placeholder="Search Item, Brands and filter Names"
                    aria-label="Search"
                    style={{ width: "30rem" }}
                  />
                  <MDBIcon
                    fas
                    icon="search"
                    className="pl-2"
                    style={{ paddingTop: "1.2rem", color: "#bab8b8" }}
                  />
                </form>

                <div className="cart-container pr-3 p-2">
                  <Link to="../shoppingCart">
                    <i class="fas fa-shopping-cart fa-lg"></i>
                    <span class="badge rounded-pill badge-notification bg-danger">
                        {
                            itemCount
                        }
                    </span>
                  </Link>
                </div>

                <div className="profile">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                    class="rounded-circle"
                    height="25"
                    alt=""
                    loading="lazy"
                  />

                  <span className="pl-2 pr-2">
                    <strong>Hi Adeola</strong>
                  </span>
                  <a
                    class="dropdown-toggle align-items-center hidden-arrow d-inline"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  ></a>

                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        My profile
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>

          <hr />
        </div>

        {/* <!-- Navbar --> */}
        <div className="second-nav">
          <nav class="navbar navbar-expand-lg navbar-light bg-white container-fluid">
            <div class="container">
              <button
                class="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="fas fa-bars"></i>
              </button>
             
            </div>
          </nav>
        </div>

      </header>

      <div className="container mb-5">
          <div className="row">
                <div className="col-sm-3 mt-3">
                    <div className="pr-3 card">
                              <div class="card-body">
                              <h5 class="card-title"> <strong>CATEGORY</strong></h5>
                                  <hr />
                              <div>
                                  {
                                      allproductCategories.map(productCategory => {
                                      
                                          return <div onClick={() => LoadProductCategory(productCategory.categoryId)} style={{ width: '100%', cursor: 'pointer', color: 'blue' }}> {productCategory.categoryName }</div>
                                  })
                                  }
                              </div>
                              
                                <hr />

                              <div className="p-0 m-0 d-flex container-fluid" style={{ position: "relative" }}>
                                  <p className="text-dark pr-4"> <small> <strong>PRICE (N)</strong></small></p>
                                  <p className="text-primary pl-5 ml-5"> <small> <strong>Apply</strong></small></p>
                              </div>
                              <div class="range">
                                  <input type="range" class="form-range" id="customRange1" />
                              </div>
                                {/* Dropdowns Here */}
                             <div className="row">
                                  <div class="form-outline col">
                                      <input type="text" id="form1" class="form-control" value="100"/>
                                  </div>
                                  <div class="form-outline col">
                                      <input type="text" id="form1" class="form-control" value="5000"/>
                                  </div>
                             </div>
                             <hr />
                                {/* End of Dropdwons */}
                          </div>
                    </div>
                </div>

                <div className="col-sm-9 mt-3">
                      <div class="card">
                          <div class="card-body"> 
                              <div className="p-0 m-0 d-flex container-fluid" style={{ position: "relative" }}>
                                  <h5 className="text-primary" style={{ position: "absolute", right: "2rem" }}> </h5>
                              </div>
                              <hr />
                              {/*<span>1939 products found</span>*/}
                              <hr />

                              {/* List of product goes here */}
 
                              <div class="row">
                                  {
                                    allProducts.map(product => {
                                        return <div style={{cursor:'pointer'}} onClick={() => {
                                            alert(999);
                                            SetProduct(product)
                                        }}  class="col-sm-3">
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
                                                    <h4> {product.productName}</h4>
                                                    <p class="item-price">
                                                        <span> {product.salePrice}</span>
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                       
                                    })
                                  }
                              </div>
                              {/* List of products ends here */}
                          </div>
                      </div>
                </div>
            </div>
      </div>
    
      <footer class="bg-light text-center text-lg-start">
        <div class="text-center p-3 bg-dark text-white row px-5">
          <div className="col">Privacy & Cookies</div>
          <div className="col">
            © 2020 Copyright:{" "}
            <a class="text-white" href="#">
              Bizen Cloud
            </a>
          </div>
          <div className="col">Terms & Condition</div>
        </div>
      </footer>
    </div>
  );
}

function mapStateToProps(state) {
    console.log(state)
    return {
        itemCount: state.cartReducer.itemCount,
        productsList: state.productDetailsReducer.productsList
    };
}
const mapDispatchToProps = (dispatch) => ({

    SetProduct(payload) {
        dispatch({ type: "SET_PRODUCT_DETAILS", payload });
    },
    AllItems(payload) {
        dispatch({ type: "PRODUCTS_LIST", payload });
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
