import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "react-bootstrap";
import { GoMute, GoUnmute } from "react-icons/go";

function LandVedio() {
      const videos = [
            // { src: "https://www.incredibleindia.gov.in/content/dam/incredible-india/videos/home/India-360-v2.mp4", label: "India 360" },
            // { src: "https://www.incredibleindia.gov.in/content/dam/incredible-india/videos/home/Nature.mp4", label: "Nature" },
            { src: "/videos/Adventure.mp4", label: "India 360" },
            { src: "/videos/video.mp4", label: "India 360" },
            { src: "/videos/Adventure.mp4", label: "India 360" },
            // { src: "/https://www.incredibleindia.gov.in/content/dam/incredible-india/videos/home/India-360-v1.mp4", label: "Explore" }

      ];

      const [index, setIndex] = useState(0);
      const [mute, setMute] = useState(true);
      const videoRefs = useRef([]);

      useEffect(() => {
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
            </div>
      );
}

export default LandVedio;
