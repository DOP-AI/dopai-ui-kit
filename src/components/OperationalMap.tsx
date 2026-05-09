import React from "react";
import dynamic from "next/dynamic";
import { operationsCenterTheme } from "../themes/operations-center";

interface OperationalMapProps {
  initialLatitude?: number;
  initialLongitude?: number;
  initialZoom?: number;
  onMapLoad?: (map: any) => void;
}

// Dynamically import the map component to avoid SSR issues
const DynamicMap = dynamic(() => import("./OperationalMapClient"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "400px",
        background: operationsCenterTheme.colors.background.elevated,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: operationsCenterTheme.radius.lg,
        color: operationsCenterTheme.colors.escalation.yellow,
        fontSize: "14px",
        fontFamily: operationsCenterTheme.typography.fontFamily.primary,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <p style={{ margin: "0 0 8px 0", fontWeight: 600 }}>
          Loading Map...
        </p>
      </div>
    </div>
  ),
});

export const OperationalMap: React.FC<OperationalMapProps> = (props) => {
  return <DynamicMap {...props} />;
};
