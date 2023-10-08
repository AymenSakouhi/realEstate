import React from "react";

const Banner = ({ title, buttonTitle }) => {
  return (
    <div className="banner-wrap">
      <div className="container">
        <div className="banner-box">
          <div className="banner-box__img">
            <img
              src="assets/images/banner-image-2.jpg"
              width="1300"
              height="482"
              alt=""
            />
          </div>

          <div className="banner-box__content">
            <h1 className="banner-box__title h1">{title}</h1>
            <div className="banner-box__txt text-ex-large">
              We provide a complete service for the sale, purchase or rental of
              real estate.
            </div>
            <div className="banner-box__cta">
              <a href="#" className="btn btn-primary">
                {buttonTitle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
