import React from "react";

const Agents = () => {
  return (
    <div className="recently-added-wrap">
      <div className="container">
        
        <div className="recently-added-wrap__title d-md-flex justify-content-between">
          <h2 className="h2">Our Agents</h2>
        </div>

        <div className="property-list">
          <ul className="row">
            <li className="col-md-6">
              <div className="property-box">
                <div className="property-box__left">
                  <img src="assets/images/Gssim_Selim.jpg" alt="" />
                </div>
                <div className="property-box__right">
                  <div className="property-box__title h3">
                    <a href="#">Selim Gssim</a>
                  </div>
                  <div className="property-box__amenities">
                    <span>WhtasApp: +216 xxx xxx</span>
                    <span>E-mail: <a href="mailto:selim.gssim@gmail.com">selim.gssim@gmail.com</a> </span>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-md-6">
              <div className="property-box">
                <div className="property-box__left">
                  <img src="assets/images/Sakouhi_Aymen_.jpg" alt="" />
                </div>
                <div className="property-box__right">
                  <div className="property-box__title h3">
                    <a href="#">Aymen Sakouhi</a>
                  </div>
                  <div className="property-box__amenities">
                    <span>WhatsApp: +216 xxx xxx</span>
                    <span>E-mail: <a href="mailto:aymenmarketer@gmail.com">aymenmarketer@gmail.com</a></span>
                  </div>
                  <div className="property-box__post-price">
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Agents;
