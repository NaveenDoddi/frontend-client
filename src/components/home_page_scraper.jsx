import React from 'react';

import Attractions from './attractions';
import CityPageExperience from './city_page_experience';
import HomePageExperience from './home_page_experiences';
// import data from './monthly_wise_data.json'
import data from './home_page.json'

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
                        <HomePageExperience data={data.experiences1} />
                  </div>
            </div>

      );
};

export default homePageINC;
