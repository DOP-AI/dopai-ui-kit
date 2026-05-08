import React from "react";
import { operationsCenterTheme } from "../themes/operations-center";

interface OperationsCenterLayoutProps {
  header: React.ReactNode;
  sidebar?: React.ReactNode;
  map: React.ReactNode;
  timeline: React.ReactNode;
  telemetry: React.ReactNode;
}

export const OperationsCenterLayout: React.FC<
  OperationsCenterLayoutProps
> = ({
  header,
  sidebar,
  map,
  timeline,
  telemetry,
}) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          operationsCenterTheme.colors.background.primary,
        color:
          operationsCenterTheme.colors.text.primary,
        padding:
          operationsCenterTheme.spacing[5],
        display: "flex",
        flexDirection: "column",
        gap:
          operationsCenterTheme.spacing[5],
        fontFamily:
          operationsCenterTheme.typography
            .fontFamily.primary,
      }}
    >
      {/* Header */}
      <div>{header}</div>

      {/* Main Operations Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: sidebar
            ? "280px 1fr"
            : "1fr",
          gap:
            operationsCenterTheme.spacing[5],
          minHeight: "480px",
        }}
      >
        {/* Sidebar */}
        {sidebar && (
          <div
            style={{
              background:
                operationsCenterTheme.colors
                  .background.secondary,
              borderRadius:
                operationsCenterTheme.radius.lg,
              padding:
                operationsCenterTheme.spacing[4],
              border: `1px solid ${operationsCenterTheme.colors.border.subtle}`,
            }}
          >
            {sidebar}
          </div>
        )}

        {/* Operational Map */}
        <div
          style={{
            background:
              operationsCenterTheme.colors
                .background.secondary,
            borderRadius:
              operationsCenterTheme.radius.lg,
            padding:
              operationsCenterTheme.spacing[4],
            border: `1px solid ${operationsCenterTheme.colors.border.subtle}`,
            overflow: "hidden",
          }}
        >
          {map}
        </div>
      </div>

      {/* Timeline */}
      <div
        style={{
          background:
            operationsCenterTheme.colors
              .background.secondary,
          borderRadius:
            operationsCenterTheme.radius.lg,
          padding:
            operationsCenterTheme.spacing[4],
          border: `1px solid ${operationsCenterTheme.colors.border.subtle}`,
        }}
      >
        {timeline}
      </div>

      {/* Telemetry Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(260px, 1fr))",
          gap:
            operationsCenterTheme.spacing[4],
        }}
      >
        {telemetry}
      </div>
    </div>
  );
};
