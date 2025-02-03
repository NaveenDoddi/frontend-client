
import React from "react"
import Header from '../navbar'
import Landing from './landingPage'


import LandVedio from "./landing2"
import HomePageMonth from "./home_page_month"
import MapSection from "../map/map"

// import Attractions from "../city/attractions"

import HomePageINC from "./home_page_scraper"
import Filter from "../filter"
// import SearchedPlaces from "../searchedPlaces"
import Footer from "../footer/footer"
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

                  <Footer />

            </div>
      )
}

export default Home