import React from "react";
// import { useState } from "react";

function CityHiddenPageContent(props) {

      // const [readMore, setReadMore] = useState(false)

      console.log(props)
      return (
            <div className="city-page-content">
                  {props.content.slice(0,4).map((i, index) =>
                        <div key={index}>
                              <div>
                                    <h3>{Object.keys(i)[0]}</h3>
                                    <p dangerouslySetInnerHTML={{ __html: Object.values(i)[0].replace(/\n/g, "<br />") }}></p>
                              </div>
                        </div>
                  )}
            </div>
      )
}
export default CityHiddenPageContent