import React, { useEffect, useState  } from "react"
import axios from 'axios';
import SearchedPlaces from "./searchedPlaces";
const cheerio = require('cheerio');

function SetupWikiData(props) {

      const [wikiData, setWikiData] = useState(null)
      const [loading, setLoading] = useState(true);
      useEffect(() => {
            const fetchData = async (place) => {
                  try {
                        const response = await axios.get('http://localhost:5000/api/wiki', {
                              params: {
                                    placeName: place, // Pass the parameter here
                              },
                        });

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

                        console.log(city_map_img)

                        var nicknames = []
                        $('div.nickname').each((index, element) => {
                              nicknames.push($(element).text());
                        });

                        data = {
                              'info' : info,
                              'nicknames' : nicknames,
                              'city_map_img': city_map_img,
                              'images' : imageUrls,
                              'paras' : pTags,
                              'coordinates':[$('span.latitude').text(),$('span.longitude').text()]
                        }

                        setWikiData(data);

                  } catch (error) {
                        console.error('Error fetching data from the backend:', error);
                  } finally {
                        setLoading(false);
                  }

            };

            fetchData(props.placeName)

      }, [props.placeName]);

      
      if (!loading){
            
            localStorage.setItem('tourism_wiki', JSON.stringify(wikiData))
      }

      if (loading){
            return <p>Loading...</p>
      } else{
      return (
            <SearchedPlaces data = {wikiData}/>
      )}

}

export default SetupWikiData