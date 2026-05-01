import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Attractions = (props) => {
      const settings = {
            centerMode: true, // Enables centering of the slides
            centerPadding: "50px", // Amount of the side slides visible (adjust as needed)
            slidesToShow: 3, // Number of slides to show in the center
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
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
                  <Slider {...settings}>
                        {props.data.map((i, index) =>
                              <div className="inc-attractions-card" key={index}>

                                    <div className="inc-attractions-image-container">
                                          <img src={i['image']} alt="" />
                                          <div className="inc-attractions-heading">
                                                {i['name']}
                                          </div>
                                    </div>

                              </div>
                        )}

                  </Slider>
            </div>
      );
};

export default Attractions;