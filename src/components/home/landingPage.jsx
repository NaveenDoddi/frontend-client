import Carousel from 'react-bootstrap/Carousel';

function Landing() {
      return (
            <div className='mainPageBanner'>
                  <Carousel className='carousel'>

                        <Carousel.Item>
                              <img
                                    src='/images/taj mahal landing2.jpg'
                                    text="First slide"
                                    width='100%'
                                    alt='slide1'
                                    loading='lazy'
                                    style={{
                                          opacity: "0.9",
                                          filter: "brightness(0.8) contrast(0.8) saturate(0.9)",
                                    }}
                              />
                              <Carousel.Caption>
                                    <h1>Taj Mahal</h1>
                                    <p>
                                          The Taj Mahal is known for its stunning architecture and historical significance..
                                    </p>
                              </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                              <img
                                    src='/images/kasi landing.jpg'
                                    text="Third slide"
                                    width='100%'
                                    alt='slide2'
                                    loading='lazy'
                                    style={{
                                          opacity: "0.9",
                                          filter: "brightness(0.8) contrast(0.8) saturate(0.9)",
                                    }}

                              />
                              <Carousel.Caption>
                                    <h1>Temples</h1>
                                    <p>
                                          India is home to iconic temples like the Kashi Vishwanath and Golden Temple.
                                    </p>
                              </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                              <img
                                    src='/images/kerala landing.jpg'
                                    text="Third slide"
                                    width='100%'
                                    alt='slide3'

                                    loading='lazy'
                                    style={{
                                          opacity: "0.9",
                                          filter: "brightness(0.8) contrast(0.8) saturate(0.9)",
                                    }}

                              />
                              <Carousel.Caption>
                                    <h1>Kerala</h1>
                                    <p>
                                          Kerala, "God's Own Country," is renowned for its backwaters, beaches, and vibrant culture.
                                    </p>
                              </Carousel.Caption>
                        </Carousel.Item>
                  </Carousel>
            </div>

      );
}

export default Landing