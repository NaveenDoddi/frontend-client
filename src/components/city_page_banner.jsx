import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const CityPageBanner = ({ images, names }) => {
      const [activeIndex, setActiveIndex] = useState(0); // Track the active slide

      const handleSelect = (selectedIndex) => {
            setActiveIndex(selectedIndex);
      };

      return (
            <div className="city_page_banner">
                  <Carousel
                        activeIndex={activeIndex}
                        onSelect={handleSelect}
                        controls={true}
                        indicators={false}
                  >
                        {images.map((image, index) => (
                              <Carousel.Item key={index}>
                                    <img
                                          src={image}
                                          alt={`Slide ${index}`}
                                          width="100%"
                                          style={{
                                                opacity: "0.9",
                                                filter: "brightness(0.8) contrast(0.8) saturate(0.9)",
                                          }}
                                    />
                                    <Carousel.Caption style={{ position: 'absolute', top: '30%', left: '-30%', display: index === 0 ? 'block' : 'none' }}>
                                          <p>{names[1]}</p>
                                          <h1>{names[0]}</h1>
                                    </Carousel.Caption>


                                    <div className="d-flex justify-content-center">
                                          <div className="custom-slide-indicator">
                                                {activeIndex + 1} / {images.length}
                                          </div>
                                    </div>


                              </Carousel.Item>
                        ))}
                  </Carousel>
            </div>
      );
};

export default CityPageBanner;