import React from "react";

import { StatusBanner } from "../components/StatusBanner";
import { TelemetryCard } from "../components/TelemetryCard";
import { OperationalMap } from "../components/OperationalMap";
import { OperationsCenterLayout } from "../layouts/OperationsCenterLayout";

export default function HomePage() {
  return (
    <OperationsCenterLayout
      header={
        <StatusBanner
          status="ORANGE"
          summary="TRV-SHIELD South Bay operations monitoring rising H₂S, rainfall stress, and infrastructure degradation."
          activeAlerts={5}
          telemetryHealth="Partial Visibility"
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

      map={<OperationalMap />}

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
            value={58.4}
            unit="ppb"
            status="ORANGE"
            trend="↑ +22% past 3h"
            sensorId="TRV-H2S-NESTOR-001"
          />

          <TelemetryCard
            label="Rainfall Intensity"
            value={0.42}
            unit="in/hr"
            status="YELLOW"
            trend="Spike detected"
            sensorId="TRV-RAIN-002"
          />

          <TelemetryCard
            label="Flow Velocity"
            value={412}
            unit="cfs"
            status="ORANGE"
            trend="↑ +24% past 6h"
            sensorId="TRV-FLOW-003"
          />

          <TelemetryCard
            label="Pump Status"
            value="Degraded"
            status="RED"
            trend="Manual verification required"
            sensorId="TRV-PUMP-007"
          />
        </>
      }
    />
  );
}
