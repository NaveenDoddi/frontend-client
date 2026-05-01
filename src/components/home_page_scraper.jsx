import React, { useEffect, useState } from 'react';

import Attractions from './attractions';
import CityPageExperience from './city_page_experience';
import HomePageExperience from './home_page_experiences';
// import data from './monthly_wise_data.json'
import data from './home_page.json'

const IncredibleIndiaAttractions = () => {
      // const [attractions, setAttractions] = useState([]);
      // const [experiences, setexperiences] = useState([]);
      // const [error, setError] = useState(null);


      // if (error) {
      //       return <div>Loading.....</div>;
      // }

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

export default IncredibleIndiaAttractions;
