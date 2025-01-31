
import React from "react"
import Header from './navbar'
import Landing from './landingPage'

import Filter from "./filter"
import LandVedio from "./landing2"
// import HomePageMonth from "./home_page_month"
// import MapSection from "./map"
// import SearchedPlaces from "./searchedPlaces"

// import Attractions from "./attractions"

// import CityPage from "./city_page"
// import homePageINC from "./home_page_scraper"
function Home() {
      return (
            <div>
                  <Header />
                  <LandVedio /> 

                  <Landing />
                  {/* <HomePageMonth /> */}
                  {/* <MapSection /> */}

                  {/* <homePageINC /> */}
                  
                  <Filter />

            </div>
      )
}

export default Home