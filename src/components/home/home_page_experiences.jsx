import React from "react";
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { CustomNextArrow, CustomPrevArrow } from "../prev-next";


function HomePageExperience(props) {

      const settings = {
            centerMode: false, // Enables centering of the slides
            centerPadding: "50px", // Amount of the side slides visible (adjust as needed)
            slidesToShow: 3, // Number of slides to show in the center
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            prevArrow: <CustomPrevArrow />,
            nextArrow: <CustomNextArrow />,
            // arrows: false, 
            responsive: [

                  {
                        breakpoint: 675, // For small screens
                        settings: {
                              slidesToShow: 2, // Show 2 slides
                              centerMode: true,
                              centerPadding: "30px", // Adjust side padding
                        },
                  },
                  {
                        breakpoint: 480, // For extra-small screens
                        settings: {
                              slidesToShow: 1, // Show 1 slide
                              centerMode: true,
                              centerPadding: "20px", // Adjust side padding
                        },
                  },
            ],
      };

      return (
            <div className="inc-crafts-main">
                  <div className="text-center text-light">
                        <h1>EXQUISITE CRAFTS</h1>
                        <p>─── of timeless tradition ───</p>

                  </div>
                  <div style = {{ position: "relative", paddingBottom: "50px" }}>
                        <Slider style={{ paddingTop: '2vh' }} {...settings}>
                              {props.data.map((i, index) =>
                                    <Link to={`/city_page?${i['URL'].split('en/')[1]}`} className="no-underline">

                                          <div className="inc-crafts-card" key={index}>
                                                <Card key={index} className="inc-crafts-image-container">
                                                      <Card.Img variant="top" src={i['image']} />
                                                      <Card.Body style={{ height: "9rem" }}>
                                                            <Card.Text>
                                                                  <div style={{ color: "red", fontWeight: "bold", margin: "10px 0" }}>
                                                                        <span>{i['state']}</span>
                                                                  </div>
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


export default HomePageExperience
