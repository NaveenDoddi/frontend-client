import React from "react";

import FooterLogo from "./footer-logo";
import FooterContent from "./footer-centent";

function Footer() {
      return (

            <div className="footer p-5 bg-dark text-light ">

                  <div className="footer1 row">
                        <div className="col-md-12 col-lg-3">
                              <FooterLogo />
                        </div>
                        <div className="col-md-12 col-lg-6">
                              <FooterContent />
                        </div>
                        <div className="col-md-12 col-lg-3">
                              <h6>Scan to Chat</h6>
                        </div>
                  </div>

                  <div className="footer2 text-center m-3">
                        <p>
                              Terms of Use
                              <span>&nbsp; &nbsp; | &nbsp; &nbsp;</span>
                              Privacy Policy
                              <span>&nbsp; &nbsp; | &nbsp; &nbsp;</span>
                              Contact Us
                        </p>
                        <p>@ Ministry of Tourism, Government of India. </p>

                  </div>

            </div>
      )
}

export default Footer