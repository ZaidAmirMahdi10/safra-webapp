import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; // Import Leaflet library
import "leaflet/dist/leaflet.css";

const SafrasLocation = () => {
  const [position, setPosition] = useState([0, 0]);
  const mapRef = useRef(null);

  useEffect(() => {
    const fetchPosition = async () => {
      try {
        const geoPosition = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            timeout: 10000,
          });
        });

        const { latitude, longitude } = geoPosition.coords;
        setPosition([latitude, longitude]);
      } catch (error) {
        console.error("Error getting current position:", error);
      }
    };

    fetchPosition();
  }, []);

  const handleMapMove = () => {
    if (mapRef.current) {
      const center = mapRef.current.getCenter();
      setPosition([center.lat, center.lng]);
    }
  };

  const customMarkerIcon = new L.Icon({
    iconUrl: "path/to/custom-marker-icon.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div className="body-content">
      <MapContainer
        center={position}
        zoom={15}
        style={{ height: "400px", width: "100%", borderRadius: "8px" }}
        whenCreated={(map) => {
          mapRef.current = map;
          map.on("moveend", handleMapMove);
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {position[0] !== 0 && (
          <Marker
            position={position}
            icon={L.icon({ iconUrl: "/path/to/custom-marker-icon.png" })}
          >
            <Popup>Your current position</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default SafrasLocation;
