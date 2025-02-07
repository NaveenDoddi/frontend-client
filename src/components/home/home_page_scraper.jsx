import React from 'react';

import Attractions from '../city/attractions';
import CityPageExperience from '../city/city_page_experience';
import HomePageExperience from './home_page_experiences';

import  HomePageHidden from './home_page_hidden';

import data from '../json/home_page.json'
const homePageINC = () => {
      
      return (
            <div>
                  <div>
                        <Attractions data={data.attractions} />
                  </div>
                  <div>
                        <CityPageExperience data={data.experiences} />
                  </div>
                  <div>
                        <HomePageHidden data = {data.hiddenGems}/>
                  </div>
                  <div>
                        <HomePageExperience data={data.experiences1} />
                  </div>
                  
            </div>

      );
};

export default homePageINC;
