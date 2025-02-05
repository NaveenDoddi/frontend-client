import React from "react";
import { LuLinkedin, LuYoutube } from "react-icons/lu";
import { BsTwitterX, BsInstagram } from "react-icons/bs";
function FooterLogo() {

      const navBrandStyle = {
            fontFamily: 'Lobster, sans-serif',
            fontSize: '2rem',
            fontWeight: 'bold',
            color: 'white',
            textTransform: 'uppercase',
            letterSpacing: '0.2rem',
            transition: 'color 0.3s ease',
      };

      const redAccentStyle = {
            // color: '#ff5733',
            color: 'red',
            fontSize: '1rem'
      };
      return (
            <div className="text-center">
                  <div style={navBrandStyle}>
                        E<span style={redAccentStyle}>xplore </span>I<span style={redAccentStyle}>NDIA</span>
                  </div>

                  <div>
                        <h6>Follow us</h6>

                        <div className="d-flex justify-content-evenly pb-5">
                              <div><BsInstagram /></div>
                              <div><LuYoutube /></div>
                              <div><BsTwitterX /></div>
                              <div><LuLinkedin /></div>
                        </div>
                  </div>

            </div>
      )
}

export default FooterLogo