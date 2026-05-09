"use client";

import Map, {
  NavigationControl,
} from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

export const OperationalMap = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "420px",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      <Map
        mapboxAccessToken={
          process.env.NEXT_PUBLIC_MAPBOX_TOKEN
        }
        initialViewState={{
          longitude: -117.08,
          latitude: 32.55,
          zoom: 10,
        }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
      >
        <NavigationControl position="top-right" />
      </Map>
    </div>
  );
};
