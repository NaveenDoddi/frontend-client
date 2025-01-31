import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-bootstrap';

function LandVedio() {
      const videos = [
            { src: "/videos/India-360-v1.mp4", label: "India 360" },
            { src: "/videos/India-360-v1.mp4", label: "Nature" },
            { src: "/videos/India-360-v1.mp4", label: "India 360" },
            { src: "/videos/India-360-v1.mp4", label: "Explore" }
            
      ];
      const [index, setIndex] = useState(0);
      const videoRefs = useRef([]);

      useEffect(() => {
            const currentVideo = videoRefs.current[index];

            if (currentVideo) {
                  currentVideo.muted = true; // Ensure autoplay works
                  currentVideo.play().catch(() => { }); // Prevent play() errors

                  const onEnded = () => {
                        setTimeout(() => {
                              setIndex((prevIndex) => (prevIndex + 1) % videos.length);
                        }, 500);
                  };

                  currentVideo.addEventListener("ended", onEnded);
                  return () => currentVideo.removeEventListener("ended", onEnded);
            }
      }, [index, videos.length]);


      return (
            <div className='home-page-landing-video'>

                  <Carousel activeIndex={index} onSelect={setIndex} controls={false} interval={null} indicators={false}>

                        {videos.map((video, idx) => (

                              <Carousel.Item key={idx}>

                                    <video
                                          ref={(el) => (videoRefs.current[idx] = el)}
                                          className="d-block w-100"
                                          src={video.src}
                                          muted
                                          playsInline
                                    />
                                    <Carousel.Caption>
                                          <div className="Signup content">

                                          </div>
                                    </Carousel.Caption>

                              </Carousel.Item>
                        ))}
                        <div className="carousel-indicators">
                              {videos.map((video, idx) => (
                                    <button
                                          key={idx}
                                          className={index === idx ? "active" : ""}
                                          onClick={() => setIndex(idx)}
                                    >
                                          {video.label}
                                    </button>
                                    
                              ))}
                        </div>
                  </Carousel>
            </div>
      )
}


export default LandVedio