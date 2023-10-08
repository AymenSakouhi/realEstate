import React from "react";
import Properties from "./Properties";

const Main = () => {
  return (
    <>
      <div className="banner-wrap">
        <div className="container">
          <div className="banner-box">
            <div className="banner-box__img">
              <img
                src="assets/images/image-tunisia.jpg"
                width="1300"
                height="634"
                alt=""
              />
            </div>

            <div className="banner-box__content">
              <h1 className="banner-box__title h1">
                Easy way to find a perfect property
              </h1>
              <div className="banner-box__txt text-ex-large">
                We provide a complete service for the sale, purchase or rental
                of real estate.
              </div>
            </div>

            <div className="banner-tab-wrap">
              <ul className="nav" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="tab-item active"
                    data-bs-toggle="pill"
                    data-bs-target="#rent"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    Rent
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="tab-item"
                    data-bs-toggle="pill"
                    data-bs-target="#buy"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Buy
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="tab-item"
                    data-bs-toggle="pill"
                    data-bs-target="#sell"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Sell
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="rent"
                  role="tabpanel"
                >
                  <form className="form-wrap">
                    <div className="row align-items-end">
                      <div className="col-md-10">
                        <div className="row">
                          <div className="col-md-6 col-lg-4">
                            <div className="form-group mb-lg-0">
                              <label className="form-label">Location</label>
                              <select className="form-control">
                                <option>Select Your City</option>
                                <option>Amsterdam</option>
                                <option>Barcelona</option>
                                <option>Beijing</option>
                                <option>Beirut</option>
                                <option>Bergen</option>
                                <option>Copenhagen</option>
                                <option>Doha</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                            <div className="form-group mb-lg-0">
                              <label className="form-label">
                                Property Type
                              </label>
                              <select className="form-control">
                                <option>Choose Property Type</option>
                                <option>Residential Apartment</option>
                                <option>Independent/Builder Floor</option>
                                <option>Independent House/Villa</option>
                                <option>Residential Land</option>
                                <option>1 RK/ Studio Apartment</option>
                                <option>Farm House</option>
                                <option>Serviced Apartments</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                            <div className="form-group mb-md-0">
                              <label className="form-label">Price Range</label>
                              <select className="form-control">
                                <option>Choose Price Range</option>
                                <option>$0-1000</option>
                                <option>$1000-$2000</option>
                                <option>$2000-$3000</option>
                                <option>$3000-$4000</option>
                                <option>$4000-$5000</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 d-md-flex">
                        <button className="btn btn-primary btn-icon ms-auto">
                          <i className="ri-search-2-line"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="tab-pane fade" id="buy" role="tabpanel">
                  <form className="form-wrap">
                    <div className="row align-items-end">
                      <div className="col-md-10">
                        <div className="row">
                          <div className="col-md-6 col-lg-4">
                            <div className="form-group mb-lg-0">
                              <label className="form-label">Location</label>
                              <select className="form-control">
                                <option>Select Your City</option>
                                <option>Amsterdam</option>
                                <option>Barcelona</option>
                                <option>Beijing</option>
                                <option>Beirut</option>
                                <option>Bergen</option>
                                <option>Copenhagen</option>
                                <option>Doha</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                            <div className="form-group mb-lg-0">
                              <label className="form-label">
                                Property Type
                              </label>
                              <select className="form-control">
                                <option>Choose Property Type</option>
                                <option>Residential Apartment</option>
                                <option>Independent/Builder Floor</option>
                                <option>Independent House/Villa</option>
                                <option>Residential Land</option>
                                <option>1 RK/ Studio Apartment</option>
                                <option>Farm House</option>
                                <option>Serviced Apartments</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                            <div className="form-group mb-md-0">
                              <label className="form-label">Price Range</label>
                              <select className="form-control">
                                <option>Choose Price Range</option>
                                <option>$0-1000</option>
                                <option>$1000-$2000</option>
                                <option>$2000-$3000</option>
                                <option>$3000-$4000</option>
                                <option>$4000-$5000</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 d-md-flex">
                        <button className="btn btn-primary btn-icon ms-auto">
                          <i className="ri-search-2-line"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="tab-pane fade" id="sell" role="tabpanel">
                  <form className="form-wrap">
                    <div className="row align-items-end">
                      <div className="col-md-10">
                        <div className="row">
                          <div className="col-md-6 col-lg-4">
                            <div className="form-group mb-lg-0">
                              <label className="form-label">Location</label>
                              <select className="form-control">
                                <option>Select Your City</option>
                                <option>Amsterdam</option>
                                <option>Barcelona</option>
                                <option>Beijing</option>
                                <option>Beirut</option>
                                <option>Bergen</option>
                                <option>Copenhagen</option>
                                <option>Doha</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                            <div className="form-group mb-lg-0">
                              <label className="form-label">
                                Property Type
                              </label>
                              <select className="form-control">
                                <option>Choose Property Type</option>
                                <option>Residential Apartment</option>
                                <option>Independent/Builder Floor</option>
                                <option>Independent House/Villa</option>
                                <option>Residential Land</option>
                                <option>1 RK/ Studio Apartment</option>
                                <option>Farm House</option>
                                <option>Serviced Apartments</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                            <div className="form-group mb-md-0">
                              <label className="form-label">Price Range</label>
                              <select className="form-control">
                                <option>Choose Price Range</option>
                                <option>$0-1000</option>
                                <option>$1000-$2000</option>
                                <option>$2000-$3000</option>
                                <option>$3000-$4000</option>
                                <option>$4000-$5000</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 d-md-flex">
                        <button className="btn btn-primary btn-icon ms-auto">
                          <i className="ri-search-2-line"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="countries-wrap">
        <div className="container">
          <div className="countries-wrap__title">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-7 col-md-10">
                <h2 className="h2 text-center">
                  We are available in many well-known countries
                </h2>
              </div>
            </div>
          </div>
          <div className="countries-list">
            <ul className="row">
              <li className="col-lg-3 col-md-6 col-sm-6">
                <div className="countries-box">
                  <div className="countries-box__title">America</div>
                  <div className="countries-box__img">
                    <img src="assets/images/countrie-img-1.jpg" alt="" />
                  </div>
                </div>
              </li>
              <li className="col-lg-3 col-md-6 col-sm-6">
                <div className="countries-box">
                  <div className="countries-box__title">Spain</div>
                  <div className="countries-box__img">
                    <img src="assets/images/countrie-img-2.jpg" alt="" />
                  </div>
                </div>
              </li>
              <li className="col-lg-3 col-md-6 col-sm-6">
                <div className="countries-box">
                  <div className="countries-box__title">London</div>
                  <div className="countries-box__img">
                    <img src="assets/images/countrie-img-3.jpg" alt="" />
                  </div>
                </div>
              </li>
              <li className="col-lg-3 col-md-6 col-sm-6">
                <div className="countries-box">
                  <div className="countries-box__title">France</div>
                  <div className="countries-box__img">
                    <img src="assets/images/countrie-img-4.jpg" alt="" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Properties />
    </>
  );
};

export default Main;
