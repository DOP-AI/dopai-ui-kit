import React from "react";
import { operationsCenterTheme } from "../themes/operations-center";

type StatusLevel =
  | "GREEN"
  | "YELLOW"
  | "ORANGE"
  | "RED";

interface TelemetryCardProps {
  label: string;
  value: string | number;
  unit?: string;
  status?: StatusLevel;
  trend?: string;
  sensorId?: string;
}

const statusColors: Record<StatusLevel, string> = {
  GREEN: operationsCenterTheme.colors.escalation.green,
  YELLOW: operationsCenterTheme.colors.escalation.yellow,
  ORANGE: operationsCenterTheme.colors.escalation.orange,
  RED: operationsCenterTheme.colors.escalation.red,
};

export const TelemetryCard: React.FC<
  TelemetryCardProps
> = ({
  label,
  value,
  unit,
  status = "GREEN",
  trend = "Stable",
  sensorId,
}) => {
  return (
    <div
      style={{
        background:
          operationsCenterTheme.colors.background.secondary,
        border: `1px solid ${operationsCenterTheme.colors.border.subtle}`,
        borderLeft: `6px solid ${statusColors[status]}`,
        borderRadius:
          operationsCenterTheme.radius.md,
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
        minWidth: "260px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize:
              operationsCenterTheme.typography
                .fontSize.lg,
            fontWeight:
              operationsCenterTheme.typography
                .fontWeight.semibold,
          }}
        >
          {label}
        </div>

        <div
          style={{
            fontSize:
              operationsCenterTheme.typography
                .fontSize.sm,
            color: statusColors[status],
            fontWeight:
              operationsCenterTheme.typography
                .fontWeight.bold,
          }}
        >
          {status}
        </div>
      </div>

      {/* Metric Value */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap:
            operationsCenterTheme.spacing[2],
        }}
      >
        <div
          style={{
            fontSize:
              operationsCenterTheme.typography
                .fontSize["3xl"],
            fontWeight:
              operationsCenterTheme.typography
                .fontWeight.bold,
            lineHeight:
              operationsCenterTheme.typography
                .lineHeight.tight,
          }}
        >
          {value}
        </div>

        {unit && (
          <div
            style={{
              fontSize:
                operationsCenterTheme.typography
                  .fontSize.base,
              color:
                operationsCenterTheme.colors.text
                  .secondary,
            }}
          >
            {unit}
          </div>
        )}
      </div>

      {/* Trend */}
      <div
        style={{
          fontSize:
            operationsCenterTheme.typography
              .fontSize.sm,
          color:
            operationsCenterTheme.colors.text
              .secondary,
        }}
      >
        {trend}
      </div>

      {/* Footer */}
      {sensorId && (
        <div
          style={{
            marginTop:
              operationsCenterTheme.spacing[2],
            paddingTop:
              operationsCenterTheme.spacing[2],
            borderTop: `1px solid ${operationsCenterTheme.colors.border.subtle}`,
            fontSize:
              operationsCenterTheme.typography
                .fontSize.xs,
            color:
              operationsCenterTheme.colors.text
                .muted,
            fontFamily:
              operationsCenterTheme.typography
                .fontFamily.mono,
          }}
        >
          Sensor: {sensorId}
        </div>
      )}
    </div>
  );
};
