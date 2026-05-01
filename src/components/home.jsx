
import React from "react"
import Header from './navbar'
import Landing from './landingPage'
import HomePageMonth from "./home_page_month"
import Filter from "./filter"
import LandVedio from "./landing2"
import MapSection from "./map"
import SearchedPlaces from "./searchedPlaces"

import Attractions from "./attractions"

import CityPage from "./city_page"
import IncredibleIndiaAttractions from "./home_page_scraper"
function Home() {
      return (
            <div>
                  <Header />
                  <Landing />
                  <HomePageMonth />
                  <MapSection />

                  {/* <IncredibleIndiaAttractions /> */}
                  
                  {/* <LandVedio /> 
                  <Filter /> */}

            </div>
      )
}

export default Home