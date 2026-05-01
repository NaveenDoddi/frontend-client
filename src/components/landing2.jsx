

function LandVedio() {
      return (
            <div>
                  <div className="video-container mt-5">
                        <video autoPlay loop muted playsInline className="background-video">
                              <source src="images/video.mp4" type="video/mp4" />
                              Your browser does not support the video tag.
                        </video>
                        <div className="Signup content">

                              <h1>Stories and Insights</h1>
                              <p>Your engaging tagline goes here!</p>

                        </div>
                  </div>
            </div>

      )
}


export default LandVedio