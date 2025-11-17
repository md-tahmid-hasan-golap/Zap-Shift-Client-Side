import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Covarage = () => {
  const position = [23.685, 90.3563];
  const serviceCenter = useLoaderData();
  console.log(serviceCenter);
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold  my-6">
        We are available in 64 districts
      </h2>

      {/* search box */}
      <div></div>

      {/* map containar */}
      <div className="w-full h-[800px] my-7 rounded-md">
        <MapContainer
          className="w-full h-[800px]"
          center={position}
          zoom={8}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenter.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br /> Service Area :{" "}
                {center.covered_area.join(" , ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Covarage;
