import React from "react";

function CityPageTravel(props) {
      return (
            <div className="city_page_travel">
                  <div>
                        <div>
                              {props.data[1][' Major Airports :'] ?
                               <div>
                                    <h6>Nearest Railway Station :</h6>
                                    {props.data[1][' Major Airports :'].map((i) =>
                                          <p>{i}</p>
                                    )}
                               </div>
                              :""}

                        </div>
                        <div>
                              {props.data[1]['Nearest Railway Station :'] ?
                               <div>
                                    <h6>Nearest Railway Station :</h6>
                                    {props.data[1]['Nearest Railway Station :'].map((i) =>
                                          <p>{i}</p>
                                    )}
                               </div>
                              :""}
                        </div>
                  </div>

            </div>
      );
};

export default CityPageTravel;
