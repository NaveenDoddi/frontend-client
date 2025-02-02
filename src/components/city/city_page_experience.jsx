import React from "react";
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
function CityPageExperience(props) {
      props.data.map((i, index) =>console.log(i['URL']))
      const settings = {
            // centerMode: true, // Enables centering of the slides
            // centerPadding: "50px", // Amount of the side slides visible (adjust as needed)
            slidesToShow: 3, // Number of slides to show in the center
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            // arrows: false, 
            responsive: [
      
                  {
                        breakpoint: 675, // For small screens
                        settings: {
                              slidesToShow: 2, // Show 2 slides
                              // centerPadding: "30px", // Adjust side padding
                        },
                  },
                  {
                        breakpoint: 480, // For extra-small screens
                        settings: {
                              slidesToShow: 1, // Show 1 slide
                              // centerPadding: "20px", // Adjust side padding
                        },
                  },
            ],
      };

      return (
            <div className="inc-experience-main">
                  <div className="text-center text-light">
                        <p>─── explore ───</p>
                        <h1>EXPERIENCES</h1>
                  </div>
                  <div>
                        <Slider {...settings}>
                              {props.data.map((i, index) =>
                              <Link to={`/city_page?${i['URL'].split('en/')[1]}`} className="no-underline">
                                    <div className="inc-experience-card" key={index}>
                                          <Card key={index} className="inc-experience-image-container">
                                                {/* <Card.Img variant="top" src={i['image']} loading='lazy'/> */}
                                                <Card.Body style={{ backgroundColor: "black", color: "white", height: "11rem"}}>

                                                      <Card.Title>
                                                      {i['state'] ?
                                                                  <div style={{ margin:"10px 0" }}>
                                                                        <span style={{color:"red"}} dangerouslySetInnerHTML={{ __html: i['state'].replace(/\n/g, "<br />") }}></span>
                                                                        &nbsp;|&nbsp;
                                                                        <span>{i['crafts']}</span>
                                                                  </div>
                                                            : ""}
                                                      </Card.Title>
                                                      <Card.Text className="text-light">
                                                            {i["text"]}
                                                      </Card.Text>
                                                </Card.Body>
                                          </Card>
                                    </div>
                              </Link>
                              )}

                        </Slider>
                  </div>
                  <div className="text-center m-4">
                        <button className="discover-more-btn btn"> Discover More </button>
                  </div>


            </div>
      )
}


export default CityPageExperience
