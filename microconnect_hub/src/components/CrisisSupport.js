import React, { useState } from "react";
import "./CrisisSupport.css";

// Mock initial alerts
const initialAlerts = [
  { id: 1, type: "Medical", message: "Elderly neighbor needs meds delivered", urgent: true, distance: 0.2 },
  { id: 2, type: "Weather", message: "Power outage, need batteries", urgent: false, distance: 0.5 }
];

// PUBLIC_INTERFACE
export default function CrisisSupport({ user }) {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [newAlert, setNewAlert] = useState({ type: "", message: "", urgent: false });

  // PUBLIC_INTERFACE
  function handleSubmit(e) {
    e.preventDefault();
    if (!newAlert.type.trim() || !newAlert.message.trim()) return;
    setAlerts([
      ...alerts,
      {
        id: alerts.length + 1,
        type: newAlert.type,
        message: newAlert.message,
        urgent: newAlert.urgent,
        distance: 0.1
      }
    ]);
    setNewAlert({ type: "", message: "", urgent: false });
  }

  return (
    <section className="crisis-support">
      <h2>Crisis Support</h2>
      <form className="crisis-add-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Alert type (e.g. Medical, Weather)"
          value={newAlert.type}
          onChange={e => setNewAlert({ ...newAlert, type: e.target.value })}
        />
        <input
          type="text"
          placeholder="Brief description"
          value={newAlert.message}
          onChange={e => setNewAlert({ ...newAlert, message: e.target.value })}
        />
        <label>
          <input
            type="checkbox"
            checked={newAlert.urgent}
            onChange={e => setNewAlert({ ...newAlert, urgent: e.target.checked })}
          />
          Urgent
        </label>
        <button type="submit" className="btn-danger">Alert</button>
      </form>
      <ul className="crisis-list">
        {alerts.map(alert => (
          <li key={alert.id} className={`crisis-card ${alert.urgent ? "urgent" : ""}`}>
            <span className="crisis-type">{alert.type}</span>
            <span className="crisis-msg">{alert.message}</span>
            <span className="crisis-meta">{alert.distance}km</span>
            {alert.urgent ? <span className="crisis-flag">URGENT</span> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
