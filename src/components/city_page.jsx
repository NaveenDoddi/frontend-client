import React from "react"

import CityPageBanner from "./city_page_banner";
import CityPageContent from "./city_page_content";
import LeafletMap from "./LeafletMap";
import CityPageWeather from "./city_page_weather";
import CityPageTravel from "./city_page_travel";
import Attractions from "./attractions";
import CityPageExperience from "./city_page_experience";

function CityPage() {
      const data = {
            name: ['Taj Mahal', 'Uttar Pradesh'],
            map:
            {
                  'latitude': 27.1804262624159,
                  'longitude': 78.0036966270024,
                  'description': 'fsfd',
                  'imageUrl': 'https://s7ap1.scene7.com/is/image/incredibleindia/taj-mahal-agra-uttar-pradesh-1-attr-hero?qlt=82&ts=1726650384852',
                  'name': 'Taj Mahal',
                  'state': 'Uttar Pradesh'
            }
            ,
            images: [
                  'https://s7ap1.scene7.com/is/image/incredibleindia/taj-mahal-agra-uttar-pradesh-1-attr-hero?qlt=82&ts=1726650384852',
                  'https://s7ap1.scene7.com/is/image/incredibleindia/taj-mahal-agra-uttar-pradesh-2-attr-hero?qlt=82&ts=1726650323712',
            ],
            travel: [
                  { 'Major Airports :': ['Agra Airport (AGR) Indira Gandhi', 'International Airport (DEL)'] },
                  { 'Nearest Railway Station :': ['Agra City Railway Station (AGA)'] }
            ],
            weather: [
                  { January: '4.1 - 27.7 °C' },
                  { February: '6.7 - 31.7 °C' },
                  { March: '10.1 - 38.6 °C' },
                  { April: '15.1 - 43.1 °C' },
                  { May: '20.5 - 46.1 °C' },
                  { June: '20.8 - 46.0 °C' },
                  { July: '21.7 - 41.3 °C' },
                  { August: '21.6 - 37.1 °C' },
                  { September: '20.7 - 37.4 °C' },
                  { October: '14.8 - 37.5 °C' },
                  { November: '9.4 - 33.2 °C' },
                  { December: '4.5 - 27.6 °C' }
            ],
            content: [
                  {
                        'An everlasting symbol of love and devotion': 'Imagine a monument so exquisite, it has inspired poets, artists, and dreamers for centuries. A place where love and beauty are forever enshrined in marble, standing as a testament to the heights of human creativity and devotion. This is no flight of fancy, but a reality that awaits you in the heart of India.\n' +
                              '\n' +
                              'Welcome to the Taj Mahal, one of the Seven Wonders of the World, commissioned by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this ivory-white marble mausoleum has captivated hearts worldwide for generations. Its breathtaking beauty is manifest in every detail - from the graceful symmetry of its design to the intricate inlay work adorning its walls.\n' +
                              '\n' +
                              "As you approach the Taj Mahal, you're greeted by a vision of perfection that seems to defy time itself, inviting you to step into a world where beauty and emotion are eternally intertwined in stone."
                  },
                  {
                        'Incredible stories': 'Taj Mahal, the pinnacle of Mughal architecture, was built by the Mughal emperor Shah Jahan (1628-1658), grandson of Akbar the great, in the memory of his queen Arjumand Bano Begum, entitled ‘Mumtaz Mahal’. Mumtaz Mahal was a niece of empress Nur Jahan and granddaughter of Mirza Ghias Beg I’timad-ud-Daula, wazir of emperor Jehangir. She was born in 1593 and died in 1631, during the birth of her fourteenth child at Burhanpur. Her mortal remains were temporarily buried in the Zainabad garden. Six months later, her body was transferred to Agra to be finally enshrined in the crypt of the main tomb of the Taj Mahal. The Taj Mahal is the mausoleum of both Mumtaz Mahal and Shah Jahan.'
                  },
                  {
                        'Global recognition and Bollywood connection': "The timeless beauty of Taj Mahal has earned it many international acclaims, including the UNESCO World Heritage Site status. Beyond its historical significance, the Taj Mahal has also captured the imagination of filmmakers, becoming an iconic backdrop in Indian cinema. Bollywood classics like 'Guide' (1965) and 'Saagar' (1983), as well as modern hits such as 'Love Aaj Kal' (2010) and 'Jab Harry Met Sejal' (2017), have showcased the monument's ethereal beauty on the silver screen."
                  },
                  {
                        'A monument born from enduring love': 'The Taj Mahal holds numerous fascinating stories within its walls that add an incredible allure. Built by Mughal Emperor Shah Jahan in 1632 as part of his final wish to his beloved wife Queen Mumtaz - she died giving birth and wanted her husband to build "such an immense tomb in her honour that no other has seen before" - Taj Mahal boasts incredible narratives within its walls that make its allure complete.\n' +
                              '\n' +
                              "The Taj Mahal has touched many, from Nobel Laureates like Rabindranath Tagore (described it as a teardrop on eternity's cheek) to Rudyard Kipling and Time Magazine who featured it as an emblem of hope for future generations. It has even graced Time's cover in 2020!"
                  },
                  {
                        'Architectural marvels and labour of devotion': 'The Taj Mahal boasts breathtaking exterior designs featuring vaulted arches adorned with Pietra Dura scrollwork and verses from the Quran written elegantly in calligraphy, precious gems and stones such as lapis lazuli, cornelian, mother of pearl, agate and emerald were used in its intricate design. Spanning 17 hectares surrounded by Mughal gardens and pathways; its four minarets stand in perfect balance from one tomb with 4 minarets at equal distances from its tomb - A testament to the efforts of 22,000 workers and 1,000 elephants over 17 years of construction, their labor of love created this marvel!\n' +
                              '\n' +
                              'Masons, stonecutters, inlayers, carvers, painters, calligraphers, dome-builders and other artisans were requisitioned from the whole of the empire and also from Central Asia and Iran. While bricks for internal constructions were locally prepared, white marble for external use in veneering work was obtained from Makrana in Rajasthan. Semi-precious stones for inlay ornamentation were brought from distant regions of India, Ceylon and Afghanistan. Red sandstone of different tints was requisitioned from the neighbouring quarries of Sikri, Dholpur, etc.'
                  },
                  {
                        'Enrich your journey with unforgettable experiences': "Visits to the Taj Mahal can offer an abundance of activities to enrich your experience. Take in its mesmerising views, and intricate marble inlay work, or enjoy strolling through its magnificent gardens - there is truly something special here for everyone. Boat rides on the Yamuna River offer stunning photo opp. Explore history at the Taj Mahal Museum where miniature paintings, manuscripts and exhibits related to its construction as well as the Mughal era can be admired. Attractions such as Itimad-ud-Daula's Tomb, Mehtab Bagh, and Agra Fort provide further exploration and insights into Agra's rich heritage. Don't miss the vibrant markets such as Sadar Bazar, Raja ki Mandi, Kinari Bazar, and Munro Road where you're sure to find unforgettable souvenirs to commemorate your visit!The Taj Mahal draws travellers from around the globe with its timeless beauty and captivating stories, inviting them to witness its splendour first-hand. A masterpiece that transcends time, visiting it is sure to fill one's spirit with gratitude and leave an indelible mark upon one's heart - take an adventure to this architectural wonder and witness first-hand its splendour - don't miss it!"
                  }
            ],
            experiences: [
                  {
                        name: 'Agra beyond Taj – explore lesser-known places of Agra',
                        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/Agra-Beyond-Taj10-popular?qlt=82&ts=1726650327142',
                        URL: 'https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/agra-beyond-taj-explore-lesser-known'
                  },
                  {
                        name: 'Magnificent world heritage site Taj Mahal',
                        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/Magnificent-World-Heritage-Site-Taj-Mahal5-popular?qlt=82&ts=1726650301912',
                        URL: 'https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/magnificent-world-heritage-site-taj-mahal'
                  },
                  {
                        name: 'Taj and beyond - exploring the must-visit spiritual spots in Agra',
                        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/Taj-and-Beyond1-popular?qlt=82&ts=1726650329505',
                        URL: 'https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/taj-and-beyond-exploring'
                  },
                  {
                        name: "Agra's vibrant bazaars",
                        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/meenakari-agra-uttar-pradesh-blog-sho-exp-cit-pop?qlt=82&ts=1726650309531',
                        URL: 'https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/agras-vibrant-bazaars'
                  }
            ],
            nearby: [
                  {
                        name: 'Mehtab Bagh',
                        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/mehtab-bagh-agra-uttar-pradesh-1-attr-nearby?qlt=82&ts=1726650377064',
                        URL: 'https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/mehtab-bagh'
                  },
                  {
                        name: 'Agra Fort',
                        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/agra-fort-agra-uttar-pradesh-1-attr-nearby?qlt=82&ts=1726650313757',
                        URL: 'https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/agra-fort'
                  },
                  {
                        name: 'Itimad-Ud-Daulah’s Tomb',
                        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/itmad-ud-daulas-tomb-agra-uttar-pradesh-1-attr-nearby?qlt=82&ts=1726650379676',
                        URL: 'https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/itimad-ud-daulahs-tomb'
                  },
                  {
                        name: 'Chini Ka Rauza',
                        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/chini-ka-rauza-agra-uttar-pradesh-1-attr-nearby?qlt=82&ts=1726650355270',
                        URL: 'https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/chini-ka-rauza'
                  },
                  {
                        name: 'Mariyam’s Tomb',
                        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/mariyams-tomb-agra-uttar-pradesh-1-attr-nearby?qlt=82&ts=1726650363147',
                        URL: 'https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/mariams-tomb'
                  },
                  {
                        name: 'Ram Bagh',
                        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/ram-bagh-agra-uttar-pradesh-1-attr-nearby?qlt=82&ts=1726650399027',
                        URL: 'https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/ram-bagh'
                  },
                  {
                        name: 'Radhasoami Samadhi / Soamibagh Temple',
                        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/radhasoami-samadhi-or-soamibagh-temple-agra-1-attr-nearby?qlt=82&ts=1726650127837',
                        URL: 'https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/radhasoami-samadhi-soamibagh-temple'
                  },
                  {
                        name: 'Akbar’s Tomb (Sikandara)',
                        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/placeholder-attr-nearby?qlt=82&ts=1727162095257',
                        URL: 'https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/akbar-s-tomb-sikandara'
                  },
                  {
                        name: 'Sikandra',
                        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/sikandra-agra-uttar-pradesh-1-attr-nearby?qlt=82&ts=1726650366768',
                        URL: 'https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/sikandra'
                  },
                  {
                        name: 'Soor Sarovar Bird Sanctuary',
                        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/soor-sarovar-bird-sanctuary-agra-1-attr-nearby?qlt=82&ts=1726650305369',
                        URL: 'https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/soor-sarovar-bird-sanctuary'
                  },
                  {
                        name: 'Fatehpur Sikri',
                        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/fatehpur-sikri-agra-uttar-pradesh-1-attr-nearby?qlt=82&ts=1726650386587',
                        URL: 'https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/fatehpur-sikri'
                  },
                  {
                        name: 'The National Chambal Sanctuary',
                        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/the-national-chambal-sanctuary-agra-1-attr-nearby?qlt=82&ts=1726650407748',
                        URL: 'https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/the-national-chambal-sanctuary'
                  }
            ]
      }
      return (

            <div className="city_page">

                  <div>
                        <CityPageBanner names={data.name} images={data.images} />
                  </div>

                  <div className="row city_page_content_map">
                        <div className="col-11 col-sm-6 col-md-7 col-lg-8 mt-5">
                              <CityPageContent content={data.content} />

                        </div>

                        <div className="col-11 col-sm-5 col-md-4 col-lg-3 city_page_map">
                              <LeafletMap
                                    latitude={data.map.latitude}
                                    longitute={data.map.longitude}
                                    description={data.map.description}
                                    imageUrl={data.map.image}
                                    name={data.map.name}
                                    state={data.map.state}
                              />
                              
                              <CityPageWeather data = {data.weather}/>
                              <CityPageTravel data = {data.travel}/>
                        </div>


                  </div>

                  <div>
                        <CityPageExperience data = {data.experiences} />
                  </div>
                  
                  <div className="city_page_attractions">
                        <Attractions data = {data.nearby}/>
                  </div>

            </div>
      )
}

export default CityPage