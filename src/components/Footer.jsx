import React from "react";

const Footer = () => {
  return (
    <div className="footer-wrap">
      <footer>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-8">
              <div className="f-info">
                <div className="f-logo pb-3">
                  <img src="assets/images/logo-tun.PNG" alt="" />
                </div>
                <p className="text-small pb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="d-none d-lg-block">
                  <div className="social-list pb-3">
                    <ul>
                      <li>
                        <a href="#" className="facebook" target="_blank">
                          <i className="ri-facebook-circle-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter" target="_blank">
                          <i className="ri-twitter-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="instagram" target="_blank">
                          <i className="ri-instagram-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="linkedin" target="_blank">
                          <i className="ri-linkedin-box-fill"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className="text-small">© 2023 . All rights reserved.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="row">
                <div className="col-md-3 col-sm-6 col-6 pb-4 pb-md-0">
                  <h5 className="h4 pb-3">Take a tour</h5>
                  <div className="quick-links">
                    <ul>
                      <li>
                        <a href="#">Features</a>
                      </li>
                      <li>
                        <a href="#">Partners</a>
                      </li>
                      <li>
                        <a href="#">Pricing</a>
                      </li>
                      <li>
                        <a href="#">Product</a>
                      </li>
                      <li>
                        <a href="#">Support</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-6 pb-4 pb-md-0">
                  <h5 className="h4 pb-3">Our Company</h5>
                  <div className="quick-links">
                    <ul>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Agents</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Media</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-5">
                  <h5 className="h4 pb-3">Subscribe</h5>
                  <div className="subscribe-form-wrap">
                    <p className="text-small">
                      Subscribe to get latest property, blog news from us
                    </p>
                    <form className="subscribe-form form-wrap">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                        <div className="cta">
                          <button className="btn btn-primary btn-icon btn-sm btn-rounded">
                            <i className="ri-arrow-right-line"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-lg-none pt-4">
            <div className="social-list pb-3">
              <ul>
                <li>
                  <a href="#" className="facebook" target="_blank">
                    <i className="ri-facebook-circle-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter" target="_blank">
                    <i className="ri-twitter-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="instagram" target="_blank">
                    <i className="ri-instagram-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="linkedin" target="_blank">
                    <i className="ri-linkedin-box-fill"></i>
                  </a>
                </li>
              </ul>
            </div>
            <p className="text-small">© 2023 . All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
