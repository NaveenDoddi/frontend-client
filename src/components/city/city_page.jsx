import React, { useEffect, useState } from "react"
import axios from "axios";
import { useLocation } from "react-router-dom";

import Header from "../header/navbar";
import CityPageBanner from "./city_page_banner";
import CityPageContent from "./city_page_content";
import LeafletMap from "../map/LeafletMap";
import CityPageWeather from "./city_page_weather";
import CityPageTravel from "./city_page_travel";
import Attractions from "./attractions";
import CityPageExperience from "./city_page_experience";
import Footer from "../footer/footer";

function CityPage() {
      const [loading, setLoading] = useState(true);
      const [data, setData] = useState(null);

      const location = useLocation();
      const url = location.search.substring(1);
      
      
      useEffect(() => {
            const fetchData = async () => {

                  try {
                        const fetchUrl = `http://localhost:5000/api/inc-city/${url}`
                        console.log(fetchUrl)
                        const response = await axios.get(fetchUrl);
                        setData(response.data);
                        setLoading(false);
                        console.log(response.data.experiences); // For debugging the data structure
                  } catch (error) {
                        console.error("Error fetching data:", error);
                        setLoading(false);
                  }
            };

            fetchData();

      }, [url]);

      if (loading) {
            return <p>Loading...</p>
      } else {
            return (
                  <div className="city_page">
                        <div>
                              <Header />
                        </div>

                        <div>
                              <CityPageBanner names={data.name} images={data.images.slice(0, Math.floor(data.images.length / 2))} />
                        </div>

                        <div className="row city-page-content-map">
                              <div className="col-11 col-sm-6 col-md-7 col-lg-8 mt-5">
                                    <CityPageContent content={data.content} />

                              </div>

                              <div className="col-11 col-sm-5 col-md-4 col-lg-3 city-page-map">
                                    <LeafletMap
                                          latitude={data.city_map.position.lat}
                                          longitute={data.city_map.position.lng}
                                          description=""
                                          imageUrl=""
                                          name={data.city_map.points[0].title}
                                          state=""
                                    // description={data.city_map.description}
                                    // imageUrl={data.city_map.image}
                                    // name={data.city_map.name}
                                    // state={data.city_map.state}
                                    />

                                    <CityPageWeather data={data.weather} />
                                    {data.travel[0][' Major Airports :'] ?
                                          <CityPageTravel data={data.travel} /> : ""
                                    }

                              </div>

                        </div>

                        <div>
                              <CityPageExperience data={data.experiences} />
                        </div>

                        <div className="city_page_attractions">
                              <Attractions data={data.nearby} />
                        </div>

                        <div>
                              <Footer />
                        </div>

                  </div>
            )
      }
}

export default CityPage