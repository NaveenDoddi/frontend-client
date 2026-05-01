import React, { useState, createContext } from 'react';
import SetupWikiData from './setup_wikidata';

function Filter(children) {

      const [country, setState] = useState("Andhra Pradesh")
      const [place, setPlace] = useState(null)
      var list = {
            'Andhra Pradesh': ["Tirupati", "Araku Valley", "Vishakhapatnam", "Amaravati", "Lepakshi", "Horsley Hills", "Srikalahasti"],
            'Arunachal Pradesh': ["Tawang", "Ziro Valley", "Sela Pass", "Namdapha National Park", "Itanagar", "Bomdila", "Dirang"],
            'Assam': ["Kaziranga National Park", "Majuli", "Manas National Park", "Sivasagar", "Guwahati", "Kamakhya Temple", "Dibrugarh"],
            'Bihar': ["Bodh Gaya", "Nalanda", "Rajgir", "Vaishali", "Patna", "Vikramshila", "Barabar Caves"],
            'Chhattisgarh': ["Chitrakote Falls", "Kanger Valley National Park", "Barnawapara Sanctuary", "Raipur", "Bhoramdeo Temple", "Sirpur", "Danteshwari Temple"],
            'Goa': ["Calangute Beach", "Dudhsagar Falls", "Panaji", "Baga Beach", "Basilica of Bom Jesus", "Aguada Fort", "Anjuna Beach"],
            'Gujarat': ["Statue of Unity", "Gir National Park", "Rann of Kutch", "Somnath", "Dwarka", "Sabarmati Ashram", "Saputara"],
            'Haryana': ["Kurukshetra", "Sultanpur Bird Sanctuary", "Pinjore Gardens", "Morni Hills", "Brahma Sarovar", "Surajkund", "Kalesar National Park"],
            'Himachal Pradesh': ["Shimla", "Manali", "Dharamshala", "Kullu", "Dalhousie", "Spiti Valley", "Chamba"],
            'Jharkhand': ["Baidhyanath Dham", "Netarhat", "Dassam Falls", "Betla National Park", "Hazaribagh", "Jonha Falls", "Ranchi"],
            'Karnataka': ["Hampi", "Mysore Palace", "Jog Falls", "Coorg", "Badami Caves", "Gokarna", "Chikmagalur"],
            'Kerala': ["Munnar", "Alleppey", "Kochi", "Wayanad", "Kovalam", "Thekkady", "Varkala"],
            'Madhya Pradesh': ["Khajuraho", "Kanha National Park", "Ujjain", "Bandhavgarh National Park", "Pachmarhi", "Bhopal", "Sanchi"],
            'Maharashtra': ["Ajanta and Ellora Caves", "Mumbai", "Shirdi", "Lonavala", "Mahabaleshwar", "Pune", "Alibaug"],
            'Manipur': ["Loktak Lake", "Imphal", "Kangla Fort", "Keibul Lamjao National Park", "Ukhrul", "Andro Village", "Thoubal"],
            'Meghalaya': ["Cherrapunji", "Shillong", "Mawlynnong", "Living Root Bridges", "Nongriat", "Umiam Lake", "Dawki"],
            'Mizoram': ["Aizawl", "Dampa Tiger Reserve", "Champhai", "Lunglei", "Reiek", "Vantawng Falls", "Hmuifang"],
            // fkdfj
            'Nagaland': ["Kohima", "Dzükou Valley", "Dimapur", "Mon", "Shilloi Lake", "Khonoma Village", "Japfu Peak"],
            'Odisha': ["Konark Sun Temple", "Puri", "Chilika Lake", "Bhubaneswar", "Dhauli", "Simlipal National Park", "Raghurajpur"],
            'Punjab': ["Golden Temple", "Jallianwala Bagh", "Wagah Border", "Anandpur Sahib", "Patiala", "Ranjit Sagar Dam", "Kapurthala"],
            'Rajasthan': ["Jaipur", "Udaipur", "Jaisalmer", "Jodhpur", "Mount Abu", "Pushkar", "Ranthambore National Park"],
            'Sikkim': ["Gangtok", "Tsomgo Lake", "Nathula Pass", "Pelling", "Lachen", "Yumthang Valley", "Ravangla"],
            'Tamil Nadu': ["Chennai", "Mahabalipuram", "Kanyakumari", "Madurai", "Rameswaram", "Ooty", "Coimbatore"],
            'Telangana': ["Hyderabad", "Warangal", "Nagarjuna Sagar", "Ramoji Film City", "Khammam Fort", "Medak Church", "Basar"],
            'Tripura': ["Agartala", "Ujjayanta Palace", "Neermahal", "Sepahijala Wildlife Sanctuary", "Unakoti", "Tripurasundari Temple", "Jampui Hills"],
            'Uttarakhand': ["Dehradun", "Mussoorie", "Rishikesh", "Haridwar", "Nainital", "Jim Corbett National Park", "Badrinath"],
            'Uttar Pradesh': ["Taj Mahal", "Varanasi", "Lucknow", "Agra Fort", "Fatehpur Sikri", "Prayagraj", "Mathura"],
            'West Bengal': ["Kolkata", "Darjeeling", "Sundarbans", "Kalimpong", "Howrah Bridge", "Shantiniketan", "Digha"],

      };

      return (
            <div>

                  <div className='filterDropdown row'>
                        <select className='col-12 col-md-6' onChange={(e) => setState(e.target.value)}>
                              <option>Select State</option>
                              {Object.keys(list).map((value, key) => {
                                    return (
                                          <option key={key} value={value}>{value}</option>
                                    )
                              })}
                        </select>

                        <select className='col-12 col-md-6' onChange={(e) => setPlace(e.target.value)}>
                              <option>Select Place</option>
                              {list[country].map((city, key) => {
                                    return (<option key={key}>{city}</option>)
                              })}
                        </select>

                        <div className='col-12 d-flex justify-content-center'>
                              <input type="text" id="" placeholder='Search By Place' onChange={(e) => setPlace(e.target.value)} />
                        </div>

                  </div>
                  {place && <SetupWikiData placeName = {place} />}
            </div>
      )
}

export default Filter;