import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { CustomNextArrow, CustomPrevArrow } from "../prev-next";

const Attractions = (props) => {

      const settings = {
            centerMode: true, // Enables centering of the slides
            // centerPadding: "50px", // Amount of the side slides visible (adjust as needed)
            slidesToShow: 3, // Number of slides to show in the center
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            prevArrow: <CustomPrevArrow />,
            nextArrow: <CustomNextArrow />,
            // arrows: false, 
            responsive: [
                  {
                        breakpoint: 1024, // For medium screens
                        settings: {
                              slidesToShow: 3, // Show 3 slides
                              centerPadding: "40px", // Adjust side padding
                        },
                  },
                  {
                        breakpoint: 675, // For small screens
                        settings: {
                              slidesToShow: 2, // Show 2 slides
                              centerPadding: "30px", // Adjust side padding
                        },
                  },
                  {
                        breakpoint: 480, // For extra-small screens
                        settings: {
                              slidesToShow: 1, // Show 1 slide
                              centerPadding: "20px", // Adjust side padding
                        },
                  },
            ],
      };

      return (
            <div className="inc-attractions-main">
                  <div className="text-center text-info">
                        <h1>ATTRACTIONS</h1>
                        <p>─── worth a thousand stories ───</p>
                  </div>

                  <div style={{ position: "relative", paddingBottom:"50px"}}>
                        <Slider {...settings}>
                              {props.data.map((i, index) =>

                                    <Link to={`/city_page?${i['URL'].split('en/')[1]}`} className="no-underline"  key={index}>
                                          <div className="inc-attractions-card">
                                                <div className="inc-attractions-image-container">
                                                      <img src={i['image']} alt="" loading='lazy' />
                                                      <div className="inc-attractions-heading">
                                                            {i['name']}
                                                      </div>
                                                </div>

                                          </div>
                                    </Link>
                              )}
                              
                        </Slider>
                  </div>
                  <div className="text-center m-4">
                        <button className="discover-more-btn btn"> Discover More </button>
                  </div>
            </div>
      );
};

export default Attractions;