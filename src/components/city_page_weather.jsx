import React from "react";
import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';


function CityPageWeather(props) {
      const [todayWeather, setTodayWeather] = useState('false')

      return (
            <div className="city_page_weather">
                  <div className="d-flex justify-content-center gap-3">
                        <span onClick={() => setTodayWeather(true)} style={{ color: todayWeather ? 'red' : 'black', textDecoration: todayWeather ? 'underline' : 'none' }}>Today </span>
                        <strong> | </strong>
                        <span onClick={() => setTodayWeather(false)} style={{ color: !todayWeather ? 'red' : 'black', textDecoration: !todayWeather ? 'underline' : 'none' }} > Monthly </span>
                  </div>

                  {todayWeather &&
                        <div className="text-center mt-4">
                              <h3>19.8 °C</h3>

                        </div>
                  }
                  {!todayWeather &&
                        <div className="text-center mt-4">
                              <Carousel className='carousel'
                                    controls={true}
                                    indicators={false}
                              >
                                    {props.data.map((i) =>
                                          <Carousel.Item>

                                                <div>

                                                      <div>
                                                            <span>{Object.keys(i)[0]}</span>
                                                      </div>
                                                      <h4>
                                                            <span>{Object.values(i)[0]}</span>
                                                      </h4>
                                                </div>
                                          </Carousel.Item>
                                    )}
                              </Carousel>
                        </div>
                  }

            </div>
      )
}


export default CityPageWeather