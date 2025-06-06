import React from "react";
import "./UserProfile.css";

// PUBLIC_INTERFACE
export default function UserProfile({ user }) {
  return (
    <section className="user-profile">
      <div className="profile-header">
        <div className="profile-identity">
          <span className="profile-avatar" aria-label="Avatar" role="img">👤</span>
          <h2 className="profile-name">
            {user.name}
            {user.verified && <span className="profile-verified" title="Verified">✔</span>}
          </h2>
        </div>
        <span className="profile-community">{user.microCommunity}</span>
      </div>
      <div className="profile-metrics">
        <div>
          <span className="profile-trust-label">Trust Score:</span>
          <span className="profile-trust">{user.trustScore}</span>
          <progress max="100" value={user.trustScore} className="trust-bar"></progress>
        </div>
        <div>
          <span className="profile-verification">Verification: <b>{user.verified ? "Yes" : "No"}</b></span>
        </div>
      </div>
      <div className="profile-section">
        <b>Your Skills:</b>
        <ul>{user.skills.map((s, i) => <li key={i}>{s}</li>)}</ul>
      </div>
      <div className="profile-section">
        <b>Resources:</b>
        <ul>{user.resources.map((r, i) => <li key={i}>{r}</li>)}</ul>
      </div>
      <div className="profile-section">
        <b>Requests:</b>
        <ul>{user.requests.map((req, i) => <li key={i}>{req}</li>)}</ul>
      </div>
    </section>
  );
}
