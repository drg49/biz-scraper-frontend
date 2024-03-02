// MapComponent.js
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Spinner from "./Spinner/Spinner";

const MapComponent = () => {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  console.log(position);

  return (
    <div>
      {position ? (
        <MapContainer
          center={position} // Default to London if user location is not available
          zoom={13}
          style={{ width: "40%", height: "70vh" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              Your current location. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default MapComponent;
