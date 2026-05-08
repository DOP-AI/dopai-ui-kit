import React from "react";

import { StatusBanner } from "../components/StatusBanner";
import { TelemetryCard } from "../components/TelemetryCard";
import { OperationsCenterLayout } from "../layouts/OperationsCenterLayout";

export default function HomePage() {
  return (
    <OperationsCenterLayout
      header={
        <StatusBanner
          status="YELLOW"
          summary="Elevated operational stress detected across regional environmental systems."
          activeAlerts={3}
          telemetryHealth="Stable"
        />
      }

      sidebar={
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <h3>Operational Layers</h3>

          <div>Environmental Telemetry</div>
          <div>Infrastructure Status</div>
          <div>Escalation Regions</div>
          <div>Flood-State Corridors</div>
          <div>Public Advisories</div>
        </div>
      }

      map={
        <div
          style={{
            width: "100%",
            height: "100%",
            minHeight: "420px",
            borderRadius: "12px",
            background:
              "linear-gradient(180deg, #182230 0%, #10161F 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#7D8794",
            fontSize: "18px",
          }}
        >
          Operational Map Placeholder
        </div>
      }

      timeline={
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <h3>Incident Timeline</h3>

          <div>
            14:32 UTC — H₂S spike detected
          </div>

          <div>
            15:08 UTC — Pump degradation reported
          </div>

          <div>
            15:41 UTC — Equalization activated
          </div>

          <div>
            16:12 UTC — Conditions stabilized
          </div>
        </div>
      }

      telemetry={
        <>
          <TelemetryCard
            label="H₂S Levels"
            value={42.7}
            unit="ppb"
            status="YELLOW"
            trend="↑ +12% past 3h"
            sensorId="TRV-H2S-001"
          />

          <TelemetryCard
            label="Flow Velocity"
            value={385}
            unit="cfs"
            status="ORANGE"
            trend="↑ +18% past 6h"
            sensorId="TRV-FLOW-003"
          />

          <TelemetryCard
            label="Air Quality"
            value="Moderate"
            status="GREEN"
            trend="Stable"
            sensorId="AQ-REGION-07"
          />

          <TelemetryCard
            label="Pump Status"
            value="Degraded"
            status="ORANGE"
            trend="Backup Systems Active"
            sensorId="TRV-PUMP-007"
          />
        </>
      }
    />
  );
}
