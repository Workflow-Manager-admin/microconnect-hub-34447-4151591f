import React from "react";
import "./AIAlerts.css";

// Mock: demonstration AI alert suggestions
const aiAlerts = [
  { id: 1, type: "Urgent", message: "Crisis need nearby: Offer blankets for power outage.", urgent: true },
  { id: 2, type: "Connect", message: "3 new skill matches found in your area.", urgent: false }
];

// PUBLIC_INTERFACE
export default function AIAlerts() {
  return (
    <aside className="ai-alerts">
      {aiAlerts.map(alert => (
        <div
          key={alert.id}
          className={`ai-alert-card ${alert.urgent ? "urgent" : ""}`}
        >
          <span className="ai-alert-type">{alert.type}</span>
          <span className="ai-alert-message">{alert.message}</span>
        </div>
      ))}
    </aside>
  );
}
