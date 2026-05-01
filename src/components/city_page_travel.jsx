import React, { useState } from "react";

function CityPageTravel(props) {
      return (
            <div className="city_page_travel">
                  <div>
                        <div>
                              <h6>Major Airports :</h6>
                              {props.data[0]['Major Airports :'].map((i) =>
                              <p>{i}</p>
                              )}
                              
                        </div>
                        <div>
                              <h6>Nearest Railway Station :</h6>
                              {props.data[1]['Nearest Railway Station :'].map((i) =>
                              <p>{i}</p>
                              )}
                        </div>
                  </div>

            </div>
      );
};

export default CityPageTravel;
