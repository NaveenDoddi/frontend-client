import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "react-bootstrap";
import { GoMute, GoUnmute } from "react-icons/go";

function LandVedio() {
      const videos = [
            { src: "https://www.incredibleindia.gov.in/content/dam/incredible-india/videos/home/India-360-v2.mp4", label: "India 360" },
            { src: "https://www.incredibleindia.gov.in/content/dam/incredible-india/videos/home/Adventure.mp4", label: "Adventure" },
            // { src: "https://www.incredibleindia.gov.in/content/dam/incredible-india/videos/home/Nature.mp4", label: "Nature" },
            { src: "https://www.incredibleindia.gov.in/content/dam/incredible-india/videos/home/Heritage.mp4", label: "Heritage" },
            { src: "https://www.incredibleindia.gov.in/content/dam/incredible-india/videos/home/Spiritual.mp4", label: "Spiritual" },

      ];

      const [index, setIndex] = useState(0);
      const [mute, setMute] = useState(true);
      const videoRefs = useRef([]);

      useEffect(() => {
            // Pause all videos first
            videoRefs.current.forEach((video, idx) => {
                  if (video && idx !== index) {
                        video.pause(); // Pause the video if it's not the active one
                  }
            });

            // Play the active video
            const currentVideo = videoRefs.current[index];
            if (currentVideo) {
                  currentVideo.muted = mute;
                  currentVideo.play().catch(() => { }); // Prevent play() errors

                  const onEnded = () => {
                        setTimeout(() => {
                              setIndex((prevIndex) => (prevIndex + 1) % videos.length);
                        }, 500);
                  };

                  currentVideo.addEventListener("ended", onEnded);
                  return () => currentVideo.removeEventListener("ended", onEnded);
            }
      }, [index, mute, videos.length]);

      const toggleMute = () => {
            setMute((prevMute) => !prevMute);
            if (videoRefs.current[index]) {
                  videoRefs.current[index].muted = !mute;
            }
      };

      return (
            <div className="home-page-landing-video position-relative">
                  <Carousel activeIndex={index} onSelect={setIndex} controls={false} interval={null} indicators={false}>
                        {videos.map((video, idx) => (
                              <Carousel.Item key={idx}>
                                    <video
                                          ref={(el) => (videoRefs.current[idx] = el)}
                                          className="d-block w-100"
                                          src={video.src}
                                          playsInline
                                          autoPlay
                                          muted={mute}
                                    />
                              </Carousel.Item>
                        ))}
                  </Carousel>

                  {/* Mute/Unmute Button */}
                  <button
                        onClick={toggleMute}
                        className="mute-button"
                        style={{
                              position: "absolute",
                              top: "80%",
                              left: "90%",
                              background: "none",
                              border: "none",
                              fontSize: "1.5rem",
                              color: "white",
                              cursor: "pointer"
                        }}
                  >
                        {mute ? <GoMute /> : <GoUnmute />}
                  </button>

                  {/* Video Indicators */}
                  <div className="carousel-indicators">
                        {/* <div> */}
                              {videos.map((video, idx) => (
                                    <button
                                          key={idx}
                                          className={index === idx ? "active btn btn-sm" : "btn btn-sm"}
                                          onClick={() => setIndex(idx)}
                                    >
                                          {video.label}
                                    </button>
                              ))}
                        {/* </div> */}

                  </div>
            </div>
      );
}

export default LandVedio;
