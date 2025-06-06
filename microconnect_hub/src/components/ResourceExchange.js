import React, { useState } from "react";
import "./ResourceExchange.css";

// Mock data: initial resource listings
const initialResources = [
  { id: 1, name: "Lawnmower", user: "Cleo", verified: true, trust: 80, distance: 0.2 },
  { id: 2, name: "Kids Books", user: "Jan", verified: false, trust: 62, distance: 0.6 },
  { id: 3, name: "Space Heater", user: "Zara", verified: true, trust: 96, distance: 0.4 }
];

// PUBLIC_INTERFACE
export default function ResourceExchange({ user }) {
  const [resources, setResources] = useState(initialResources);
  const [newResource, setNewResource] = useState("");

  // PUBLIC_INTERFACE
  function handleAddResource(e) {
    e.preventDefault();
    if (!newResource.trim()) return;
    setResources([
      ...resources,
      {
        id: resources.length + 1,
        name: newResource,
        user: user.name,
        verified: user.verified,
        trust: user.trustScore,
        distance: 0.1
      }
    ]);
    setNewResource("");
  }

  return (
    <section className="resource-exchange">
      <h2>Resource Exchange</h2>
      <form className="resource-add-form" onSubmit={handleAddResource}>
        <input
          type="text"
          value={newResource}
          placeholder="List a resource to lend/share (e.g. Tools)"
          onChange={e => setNewResource(e.target.value)}
          aria-label="Add Resource"
        />
        <button type="submit" className="btn-accent">Share</button>
      </form>
      <ul className="resources-list">
        {resources.map(res => (
          <li key={res.id} className="resource-card">
            <span className="resource-title">{res.name}</span>
            <span className="resource-user">
              {res.verified ? <span className="verified-badge">✔</span> : null} {res.user}
            </span>
            <span className="resource-metrics">
              Trust: <span className="trust">{res.trust}</span>
              {" · "}
              <span className="distance">{res.distance}km</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
