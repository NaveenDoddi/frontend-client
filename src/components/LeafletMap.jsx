import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
function LeafletMap(props) {
      
      useEffect(() => {
            const map = L.map("map").setView([props.latitude, props.longitute], 5);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                  
            }).addTo(map);

            const defaultIcon = L.icon({
                  iconUrl: markerIcon,
                  iconSize: [21, 31],
                  iconAnchor: [12, 41],
                  popupAnchor: [1, -34],
            });

            L.Marker.prototype.options.icon = defaultIcon;

            const marker = L.marker([props.latitude, props.longitute]).addTo(map);
            marker.bindPopup(`
                  <div>

                        <img src=${props.imageUrl} height=60/>
                  </div>
                  <h6>${props.name}</h6>
                  <span>${props.state}</span>
                  `);

                  
            return () => map.remove();
      }, [props.latitude, props.longitute, props.description]); // Dependencies for re-rendering

      return (
            <div id="map"></div>
      );
}

export default LeafletMap;
