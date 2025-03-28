
import React from "react"
import Header from "../header/navbar"
import Landing from './landingPage'


import LandVedio from "./landing2"
import HomePageMonth from "./home_page_month"
import MapSection from "../map/map"

// import Attractions from "../city/attractions"

import HomePageINC from "./home_page_scraper"
import Filter from "../filter";
import Footer from "../footer/footer"
import CartoonsDiv from "./cartoons"
function Home() {
      return (
            <div>
                  {/* <SetupWikiData /> */}

                  <Header />
                  
                  <LandVedio />
                  {/* <Landing /> */}
                  <CartoonsDiv />
                  
                  
                  <HomePageMonth />

                  <Filter />
                  
                  <MapSection />

                  <HomePageINC />
                  
                  <Footer />

            </div>
      )
}

export default Home