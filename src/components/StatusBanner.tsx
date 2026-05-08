import React from "react";
import { operationsCenterTheme } from "../themes/operations-center";

type StatusLevel =
  | "GREEN"
  | "YELLOW"
  | "ORANGE"
  | "RED";

interface StatusBannerProps {
  status: StatusLevel;
  summary: string;
  activeAlerts?: number;
  telemetryHealth?: string;
}

const statusColors: Record<StatusLevel, string> = {
  GREEN: operationsCenterTheme.colors.escalation.green,
  YELLOW: operationsCenterTheme.colors.escalation.yellow,
  ORANGE: operationsCenterTheme.colors.escalation.orange,
  RED: operationsCenterTheme.colors.escalation.red,
};

export const StatusBanner: React.FC<
  StatusBannerProps
> = ({
  status,
  summary,
  activeAlerts = 0,
  telemetryHealth = "Stable",
}) => {
  return (
    <div
      style={{
        background:
          operationsCenterTheme.colors.background.secondary,
        border: `1px solid ${statusColors[status]}`,
        borderRadius:
          operationsCenterTheme.radius.lg,
        padding:
          operationsCenterTheme.spacing[5],
        boxShadow:
          operationsCenterTheme.shadows.panel,
        color:
          operationsCenterTheme.colors.text.primary,
        display: "flex",
        flexDirection: "column",
        gap:
          operationsCenterTheme.spacing[3],
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontSize:
                operationsCenterTheme.typography
                  .fontSize.sm,
              color:
                operationsCenterTheme.colors.text
                  .secondary,
              marginBottom:
                operationsCenterTheme.spacing[1],
            }}
          >
            DOP-AI / Regional Operational Status
          </div>

          <div
            style={{
              fontSize:
                operationsCenterTheme.typography
                  .fontSize["2xl"],
              fontWeight:
                operationsCenterTheme.typography
                  .fontWeight.bold,
              color: statusColors[status],
            }}
          >
            STATUS: {status}
          </div>
        </div>

        <div
          style={{
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            background: statusColors[status],
          }}
        />
      </div>

      <div
        style={{
          fontSize:
            operationsCenterTheme.typography
              .fontSize.base,
          color:
            operationsCenterTheme.colors.text
              .primary,
        }}
      >
        {summary}
      </div>

      <div
        style={{
          display: "flex",
          gap:
            operationsCenterTheme.spacing[5],
          flexWrap: "wrap",
          fontSize:
            operationsCenterTheme.typography
              .fontSize.sm,
          color:
            operationsCenterTheme.colors.text
              .secondary,
        }}
      >
        <div>
          Active Alerts:{" "}
          <strong>{activeAlerts}</strong>
        </div>

        <div>
          Telemetry Health:{" "}
          <strong>{telemetryHealth}</strong>
        </div>
      </div>
    </div>
  );
};
