"use client";

import React from "react";
import { MapContainer, TileLayer, Circle, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { operationsCenterTheme } from "../themes/operations-center";

interface OperationalMapClientProps {
  initialLatitude?: number;
  initialLongitude?: number;
  initialZoom?: number;
  onMapLoad?: (map: any) => void;
}

const markers = [
  {
    name: "Nestor Odor / H₂S Hotspot",
    type: "Odor Hotspot",
    position: [32.575, -117.088] as [number, number],
    color: "#C7A640",
  },
  {
    name: "Tijuana River Valley Flow Sensor",
    type: "River Flow Sensor",
    position: [32.552, -117.083] as [number, number],
    color: "#3A6EA5",
  },
  {
    name: "Pump Degradation Alert Zone",
    type: "Pump / Infrastructure",
    position: [32.5618, -117.0712] as [number, number],
    color: "#D97A2B",
  },
  {
    name: "Coastal Discharge / Impact Corridor",
    type: "Discharge Zone",
    position: [32.5442, -117.0931] as [number, number],
    color: "#B44545",
  },
  {
    name: "Imperial Beach Coastal Impact Zone",
    type: "Public Health / Coastal",
    position: [32.579, -117.132] as [number, number],
    color: "#B44545",
  },
];

const OperationalMapClient: React.FC<OperationalMapClientProps> = ({
  initialLatitude = 32.5520,
  initialLongitude = -117.0831,
  initialZoom = 11,
}) => {
  const center: [number, number] = [initialLatitude, initialLongitude];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "420px",
        borderRadius: operationsCenterTheme.radius.lg,
        overflow: "hidden",
      }}
    >
      <MapContainer
        center={center}
        zoom={initialZoom}
        style={{ height: "100%", width: "100%" }}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Circle
          center={[32.575, -117.088]}
          radius={2200}
          pathOptions={{
            color: "#C7A640",
            fillColor: "#C7A640",
            fillOpacity: 0.16,
          }}
        />

        <Circle
          center={[32.5618, -117.0712]}
          radius={1800}
          pathOptions={{
            color: "#D97A2B",
            fillColor: "#D97A2B",
            fillOpacity: 0.18,
          }}
        />

        <Circle
          center={[32.5442, -117.0931]}
          radius={2600}
          pathOptions={{
            color: "#B44545",
            fillColor: "#B44545",
            fillOpacity: 0.18,
          }}
        />

        {markers.map((marker) => (
          <CircleMarker
            key={marker.name}
            center={marker.position}
            radius={10}
            pathOptions={{
              color: marker.color,
              fillColor: marker.color,
              fillOpacity: 0.75,
            }}
          >
            <Popup>
              <strong>{marker.name}</strong>
              <br />
              {marker.type}
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>

      <div
        style={{
          position: "absolute",
          bottom: "18px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(11, 15, 20, 0.78)",
          color: "#F5F7FA",
          padding: "10px 14px",
          borderRadius: "10px",
          fontSize: "14px",
          zIndex: 500,
        }}
      >
        TRV-SHIELD South Bay Ops
      </div>
    </div>
  );
};

export default OperationalMapClient;
