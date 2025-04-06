import React, { useEffect, useState } from "react"
import axios from "axios";
import { useLocation } from "react-router-dom";

import Header from "../header/navbar";
import Loading from "../../loading";
import ErrorPage from "../../Error";
import CityPageBanner from "./city_page_banner";
import CityPageContent from "./city_page_content";
import LeafletMap from "../map/LeafletMap";
import CityPageWeather from "./city_page_weather";
import CityPageTravel from "./city_page_travel";
import Attractions from "./attractions";
import CityPageExperience from "./city_page_experience";
import Footer from "../footer/footer";
import CityHiddenPageContent from "./city_page_hidden_content";
// const SERVER_URL = process.env.SERVER;
function CityPage() {
      const [loading, setLoading] = useState(true);
      const [err, setError] = useState('');
      const [data, setData] = useState(null);

      const [readMore, setReadMore] = useState(false)

      const location = useLocation();
      const url = location.search.substring(1);

      useEffect(() => {
            window.scrollTo(0, 0); // Scroll to top when URL changes
      }, [location.search]);

      const showMore = (bool) => {
            setReadMore(bool)
            console.log(readMore)
      }

      useEffect(() => {
            const fetchData = async () => {

                  try {
                        const fetchUrl = `https://india-server.vercel.app/api/inc-city/${url}`
                        // const fetchUrl = `http://localhost:5000/api/inc-city/${url}`
                        const response = await axios.get(fetchUrl);
                        setData(response.data);
                        setLoading(false);
                  } catch (error) {
                        console.error("Error fetching data:", error);
                        setLoading(false);
                        setError(error.message);
                        console.log(err)
                  }
            };

            fetchData();

      }, [url]);

      if (loading) return <Loading />
      if (err) return <ErrorPage err={err} />
      return (
            <div className="city_page">
                  <div>
                        <Header />
                  </div>

                  <div>
                        <CityPageBanner names={data.name} images={data.images.slice(0, Math.floor(data.images.length / 2))} />
                  </div>

                  <div className="row city-page-content-map">

                        <div className="col-11 col-sm-5 col-md-4 col-lg-3 city-page-map">
                              <LeafletMap
                                    latitude={data.city_map.position.lat}
                                    longitute={data.city_map.position.lng}
                                    description=""
                                    imageUrl=""
                                    name={data.city_map.points[0].title}
                                    state=""
                              />

                              <CityPageWeather data={data.weather} />
                              {data.travel[0][' Major Airports :'] ?
                                    <CityPageTravel data={data.travel} /> : ""
                              }
                        </div>
                        <div className="col-11 col-sm-6 col-md-7 col-lg-8 mt-5">
                              <CityPageContent content={data.content} showMoreBtn={showMore} hiddenContent = { data.hiddenContent } />

                        </div>
                  </div>

                  {/* <div>
                        {
                              readMore ? <CityHiddenPageContent content = { data.hiddenContent } />
                                    : ""
                        }
                  </div> */}
                  <div>
                        {data.experiences.length > 0 ?
                              <CityPageExperience data={data.experiences} />
                              : ""
                        }
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

export default CityPage