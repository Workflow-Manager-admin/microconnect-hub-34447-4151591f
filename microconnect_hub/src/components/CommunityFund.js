import React, { useState } from "react";
import "./CommunityFund.css";

// Mock data
const initialGrants = [
  { id: 1, name: "Park Cleanup", status: "open", description: "Volunteers & funds for park cleaning.", raised: 120, target: 250 },
  { id: 2, name: "Little Library", status: "funded", description: "Mini-library install on Main.", raised: 250, target: 250 }
];

// PUBLIC_INTERFACE
export default function CommunityFund({ user }) {
  const [grants, setGrants] = useState(initialGrants);
  const [newGrant, setNewGrant] = useState({ name: "", description: "", target: "" });

  // PUBLIC_INTERFACE
  function handleChange(e) {
    setNewGrant({ ...newGrant, [e.target.name]: e.target.value });
  }

  // PUBLIC_INTERFACE
  function handleSubmit(e) {
    e.preventDefault();
    if (!newGrant.name.trim() || !newGrant.description.trim() || !newGrant.target) return;
    setGrants([
      ...grants,
      {
        id: grants.length + 1,
        name: newGrant.name,
        status: "open",
        description: newGrant.description,
        raised: 0,
        target: Number(newGrant.target)
      }
    ]);
    setNewGrant({ name: "", description: "", target: "" });
  }

  return (
    <section className="community-fund">
      <h2>Community Micro-Grants</h2>
      <form className="grant-add-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newGrant.name}
          placeholder="Grant project name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={newGrant.description}
          placeholder="Short description"
          onChange={handleChange}
        />
        <input
          type="number"
          name="target"
          placeholder="Target amount ($)"
          value={newGrant.target}
          onChange={handleChange}
          min={1}
        />
        <button type="submit" className="btn-accent">Propose</button>
      </form>
      <ul className="grants-list">
        {grants.map(grant => (
          <li className={`grant-card grant-${grant.status}`} key={grant.id}>
            <h3>{grant.name}</h3>
            <div className="grant-status">
              {grant.status === "open" ? <span className="grant-open">🟢 Open</span> : <span>✅ Funded</span>}
              <span className="grant-progress">${grant.raised} / ${grant.target}</span>
            </div>
            <p>{grant.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
