import React from "react";
import { CiHeart, CiShare1 } from "react-icons/ci";


function CityPageTravel(props) {
      return (
            <div className="city_page_travel">
                  <div>
                        <div>
                              {props.data[0][' Major Airports :'] ?
                                    <div>
                                          <h6>Nearest Airport :</h6>
                                          {props.data[0][' Major Airports :'].map((i) =>
                                                <p>{i}</p>
                                          )}
                                    </div>
                                    : ""}

                        </div>
                        <div>
                              {props.data[1]['Nearest Railway Station :'] ?
                                    <div>
                                          <h6>Nearest Railway Station :</h6>
                                          {props.data[1]['Nearest Railway Station :'].map((i) =>
                                                <p>{i}</p>
                                          )}
                                    </div>
                                    : ""}
                        </div>
                        <div className="d-flex justify-content-around">
                              <div >
                                    <CiHeart />
                              </div>
                              <div>
                                    <CiShare1 />
                              </div>
                        </div>
                  </div>

            </div>
      );
};

export default CityPageTravel;
