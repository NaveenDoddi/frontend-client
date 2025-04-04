import { useState } from "react";
import React from "react";
import { WiSnow } from "react-icons/wi";

function ErrorPage(props) {
      const back = () =>{
            window.history.back()
            window.location.reload()
      }
      
      return (
            <div className="error-main d-flex justify-content-center">
                  <div>
                        <h3>This page can’t be reached</h3>
                        <h5>{ props.err }</h5>
                        Try:
                        <ul>
                              <li>Checking the connection</li>
                              <li>Check the url</li>
                              <li>Go with other places</li>
                              <li>Place district in url before place</li>
                        </ul>

                        <div className="d-flex justify-content-between">
                              <button onClick={back}>Back</button>
                              <button onClick={() => window.location.reload()}>Reload</button>
                        </div>

                  </div>
            </div>
      )
}

export default ErrorPage