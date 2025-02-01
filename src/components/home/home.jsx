
import React from "react"
import Header from '../navbar'
import Landing from './landingPage'


import LandVedio from "./landing2"
import HomePageMonth from "./home_page_month"
import MapSection from "../map/map"

// import Attractions from "../city/attractions"

import HomePageINC from "./home_page_scraper"
import CityPageBanner from "../city/city_page_banner"
import Filter from "../filter"
import SearchedPlaces from "../searchedPlaces"
function Home() {
      return (
            <div>
                  <Header />
                  
                  <LandVedio />
                  <Landing />
                  
                  <HomePageMonth />
                  <MapSection />


                  <HomePageINC />
                  
                  
                  <Filter />

            </div>
      )
}

export default Home