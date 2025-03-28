import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from "../prev-next";

const CartoonsDiv = () => {
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
            <div className="inc-attractions-main" style={{background:"none !important"}}>
                  <div className="text-center text-info">
                        <h1 style={{color:"#FE6900"}}>India Unveiled</h1>
                        <p style={{color:"#A0522D"}}>─── A Tapestry of Travel & Tradition ───</p>
                  </div>

                  <div style={{ position: "relative", paddingBottom: "50px" }}>
                        <Slider {...settings}>
                              {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((i, index) =>

                                    // <Link to={`/city_page?${i['URL'].split('en/')[1]}`} className="no-underline">
                                    <div className="inc-attractions-card" key={index}>
                                          <div className="inc-attractions-image-container">
                                                <img src={`/cartoons/cimage${i}.jpg`} alt="" loading='lazy' />
                                                <div className="inc-attractions-heading">
                                                      {/* {i['name']} */}
                                                </div>
                                          </div>

                                    </div>
                                    // </Link>

                              )}

                        </Slider>
                  </div>
                  {/* <div className="text-center m-4">
                        <button className="discover-more-btn btn"> Discover More </button>
                  </div> */}
            </div>
      );

}

export default CartoonsDiv