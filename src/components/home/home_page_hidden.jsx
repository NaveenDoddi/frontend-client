import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { FaLocationDot } from "react-icons/fa6";

import { CustomNextArrow, CustomPrevArrow } from "../prev-next";

const HomePageHidden = (props) => {

      const settings = {
            centerMode: true,
            centerPadding: "20px",
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            focusOnSelect: true,
            prevArrow: <CustomPrevArrow />,
            nextArrow: <CustomNextArrow />,
            responsive: [

                  {
                        breakpoint: 480, // For extra-small screens
                        settings: {
                              slidesToShow: 1, // Show 1 slide
                              centerMode: true,
                              centerPadding: "70px", // Adjust side padding
                        },
                  },
            ],
      };

      const navigate = useNavigate();

      return (
            <div className="inc-hidden-gems-main">
                  <div className="text-center text-secondary">
                        <p>─── Uncover India's ───</p>
                        <h1>Lesser Known Wonders</h1>
                  </div>
                  <div style={{ position: "relative", paddingBottom: "50px" }}>

                        <Slider {...settings}>
                              {props.data.map((i, index) =>

                                    <Link to={`/city_page?${i['URL'].split('en/')[1]}`} className="no-underline">
                                          <div className="inc-hidden-gems" key={index} >
                                                <Card style={{ borderRadius: '1rem' }}>
                                                      <Card.Img variant="top" style={{ borderRadius: '1rem', border: "none !important" }} src={i['image']} loading="lazy" alt="image" />

                                                      <Card.ImgOverlay style={{ display: "none" }}>
                                                            <div>
                                                                  <h6 className="fw-bold text-warning">
                                                                        <span>{i['name']}</span>
                                                                  </h6>
                                                                  <div className="d-flex justify-content-between text-light">
                                                                        <span style={{ fontSize: "0.4rem", fontWeight: "bold" }}>{i['text']}</span>
                                                                        <span style={{ fontSize: "0.4rem", fontWeight: "bold" }}> <FaLocationDot style={{ fontSize: "0.5rem", fontWeight: "bold" }} className="text-danger" /> {i['place']}</span>
                                                                  </div>

                                                            </div>

                                                      </Card.ImgOverlay>

                                                </Card>
                                          </div>

                                    </Link>

                              )}

                        </Slider>
                  </div>
            </div>
      );
};

export default HomePageHidden;