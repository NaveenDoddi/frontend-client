import React from "react";
import { useState } from "react";

export default function Dropdown(){
      const [country, setCountry] = useState("")
      var list = {
            india:["chennai", "bangalore", "hyderabad"],
            australia:["sydney", "melborne", "perth"],
            england:["lords", "london", "edbingstone"],
      }
      return(
            <div>
                  <select onChange={(e)=>setCountry(e.target.value)}>
                        <option>select a country</option>
                        {
                        
                        Object.keys(list).map((key)=>{
                              return(
                                    <option value={key}>{key}</option>
                              )
                        })

                        }
                  </select>
                  
                  
                  <select>
                  <option>select a city</option>

                        {
                              list[country].map((city)=>{
                                    return(<option>{city}</option>)
                              })
                        }

                  </select>
                  
                  
                  
            </div>
      )
}