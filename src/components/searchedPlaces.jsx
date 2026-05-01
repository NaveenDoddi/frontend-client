import React from "react"


function SearchedPlaces() {

      var data = JSON.parse(localStorage.getItem('tourism_wiki'))

      return (
            <div className="searchedPlaces">
                  <div style={{ width: '40vw', height: 'auto' }}>
                        <h5>Tirupati</h5>

                        <div className="searchedPlacesImg m-1">
                        {
                              data.images.map((i) => {
                                    return (
                                          <img src={i}/>
                                    )
                              })
                        }
                        </div>
                        
                        {data.info.map((i) => {
                              return (
                                    <div>
                                          <span>{Object.keys(i)[0]}</span>
                                          <span>{Object.values(i)[0]}</span>
                                    </div>
                              )
                        })}
                  </div>

            </div>
      )
}

export default SearchedPlaces;
