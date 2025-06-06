import React from "react";
import "./MapDashboard.css";

// PUBLIC_INTERFACE
export default function MapDashboard({ user }) {
  return (
    <section className="map-dashboard">
      <div className="map-header">
        <h1 className="community-title">
          {user.microCommunity}
        </h1>
        <span className="tag-geofence">Geofenced</span>
      </div>
      <div className="map-view">
        {/* Simulated map with geofence - replace with map API for real implementation */}
        <div className="mock-map">
          <svg viewBox="0 0 200 150" width="100%" height="100%">
            <ellipse
              cx="100" cy="80" rx="70" ry="55"
              fill="none" stroke="#8f0a0a" strokeWidth="3"
              opacity="0.8"
            />
            <rect x="70" y="50" width="60" height="50" fill="#b1b483" opacity="0.23" />
            <circle cx="110" cy="90" r="11" fill="#8f0a0a" />
            <text x="105" y="90" fontSize="13" fill="#fff">You</text>
          </svg>
        </div>
        <div className="map-community-info">
          <div>
            <strong>Nearby:</strong>
            <ul>
              <li><span role="img" aria-label="">🎓</span> 13 skills listed</li>
              <li><span role="img" aria-label="">🔧</span> 8 resources shared</li>
              <li><span role="img" aria-label="">💸</span> 2 micro-grants open</li>
            </ul>
          </div>
          <div>
            <strong>Trust Level:</strong>
            <span className="trust-rating">{user.trustScore} / 100</span>
          </div>
        </div>
      </div>
      <div className="map-instructions">
        See your hyper-local community, view available skills, support needs, and micro-grant opportunities—right on the map.
      </div>
    </section>
  );
}
