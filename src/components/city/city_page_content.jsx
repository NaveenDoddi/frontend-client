import React from "react";
import { useState } from "react";

function CityPageContent(props) {
      console.log(props)

      const [readMore, setReadMore] = useState(false)
      const ReadMore = () => {
            readMore === false ? setReadMore(true) : setReadMore(false)

      }

      return (
            <div className="city-page-content">
                  {props.content.map((i, index) =>
                        <div key={index} style={{ display: readMore ? 'block' : 'none'  }}>

                              <div>
                                    <h3>{Object.keys(i)[0]}</h3>
                                    <p dangerouslySetInnerHTML={{ __html: Object.values(i)[0].replace(/\n/g, "<br />") }}></p>
                              </div>

                        </div>
                  )}
                  <div className="d-flex justify-content-end mb-3">
                        <button className="discover-more-btn btn" onClick={ReadMore} >
                              {readMore ? "Read Less":"Read More"}
                        </button>
                  </div>

            </div>
      )
}
export default CityPageContent