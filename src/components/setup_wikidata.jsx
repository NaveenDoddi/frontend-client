import React, { useEffect, useState } from "react"
import axios from 'axios';
import SearchedPlaces from "./searchedPlaces";
const cheerio = require('cheerio');

function SetupWikiData(props) {

      const [wikiData, setWikiData] = useState(null)
      const [loading, setLoading] = useState(true);
      useEffect(() => {
            const fetchData = async (place) => {
                  try {
                        const response = await axios.get(`http://localhost:5000/api/search/${place}`);

                        const $ = cheerio.load(response.data);

                        var data = {}
                        var info = []
                        const imageUrls = []; // Array to store absolute image URLs

                        const baseUrl = 'https://en.wikipedia.org'; // Base URL of the website

                        $('table.infobox a.mw-file-description img.mw-file-element').each((index, element) => {
                              let imgUrl = $(element).attr('src');
                              if (imgUrl) {
                                    // Convert relative URLs to absolute URLs
                                    if (!imgUrl.startsWith('http') && !imgUrl.startsWith('//')) {
                                          imgUrl = new URL(imgUrl, baseUrl).href;
                                    }
                                    imageUrls.push(imgUrl);
                              }
                        });

                        var info_label = []
                        var info_data = []
                        $('th.infobox-label').each((index, element) => {
                              info_label.push($(element).text());
                        });
                        $('td.infobox-data').each((index, element) => {
                              info_data.push($(element).text());
                        });

                        const pTags = [];
                        $('p').each((index, element) => {
                              pTags.push($(element).text());
                        });


                        for (let i = 0; i < info_label.length; i++) {
                              info.push({
                                    [info_label[i]]: info_data[i]
                              })
                        }

                        var city_map_img = $('a.mw-kartographer-map img').attr('src');
                        if (city_map_img) {
                              if (!city_map_img.startsWith('http') && !city_map_img.startsWith('//')) {
                                    city_map_img = new URL(city_map_img, baseUrl).href;
                              }
                        }

                        var nicknames = []
                        $('div.nickname').each((index, element) => {
                              nicknames.push($(element).text());
                        });

                        data = {
                              'info': info,
                              'nicknames': nicknames,
                              'city_map_img': city_map_img,
                              'images': imageUrls,
                              'paras': pTags,
                              'coordinates': [$('span.latitude').text(), $('span.longitude').text()],
                              
                              // 'name': inc_city_hero_banner_text,
                              // 'images': inc_city_hero_banner_imageUrls,
                              // 'travel': inc_city_transportation_arr.splice(0, 2),
                              // 'city_map': JSON.parse(inc_city_map[0]),
                              // 'weather': inc_city_map_weather_arr,
                              // 'content': inc_content_paras_arr
                        }
                        // localStorage.setItem("tourism_wiki", JSON.stringify(data))

                        setWikiData(data);

                  } catch (error) {
                        console.error('Error fetching data from the backend:', error);
                  } finally {
                        setLoading(false);
                  }

            };

            fetchData('Delhi')

      }, []);


      if (!loading) {
            localStorage.setItem('tourism_wiki', JSON.stringify(wikiData))
      }

      if (loading) {
            return <p>Loading...</p>
      } else {
            return (
                  <SearchedPlaces data={wikiData} />
            )
      }

}

export default SetupWikiData