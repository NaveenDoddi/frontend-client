import React from "react";
import { useState } from "react";

function CityPageContent(props) {

      const [readMore, setReadMore] = useState(true)
      const ReadMore = () => {
            setReadMore(!readMore)
            props.showMoreBtn(readMore)
      }
      return (
            <div >
                  <div className="city-page-content">
                        {props.content.map((i, index) =>
                              <div key={index}>

                                    <div>
                                          <h3>{Object.keys(i)[0]}</h3>
                                          <p dangerouslySetInnerHTML={{ __html: Object.values(i)[0].replace(/\n/g, "<br />") }}></p>
                                    </div>

                              </div>
                        )}
                  </div>



                  <div className="city-page-hidden-content" style={{width : '100% !important'}}>

                        <div style={{ display: !readMore ? 'block' : 'none' }}>
                              {props.hiddenContent[props.hiddenContent.length - 1]['images'].map((i, index) =>
                                    <div key={index}>
                                          <img src={i} alt="" className="hidden_content_image" />
                                    </div>
                              )}
                        </div>

                        {props.hiddenContent.slice(0, 4).map((i, index) =>
                              <div key={index} style={{ display: !readMore ? 'block' : 'none' }}>
                                    <div>
                                          <h3>{Object.keys(i)[0]}</h3>
                                          <p dangerouslySetInnerHTML={{ __html: Object.values(i)[0].replace(/\n/g, "<br />") }}></p>
                                    </div>

                              </div>
                        )}
                  </div>


                  <div className="d-flex justify-content-end mb-3">
                        <button className="discover-more-btn btn" onClick={ReadMore} >
                              {!readMore ? "Read Less" : "Read More"}
                        </button>
                  </div>

            </div>
      )
}
export default CityPageContent