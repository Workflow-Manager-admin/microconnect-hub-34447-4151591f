import React, { useState } from 'react';
import './App.css';

// PUBLIC_INTERFACE
function MicroConnectApp() {
  // UI State for main tabs
  const [activeTab, setActiveTab] = useState('map');

  // Mock Data (replace with real backend/API integration as needed)
  const user = {
    name: 'Jordan Lee',
    verified: true,
    trustScore: 94,
    microCommunity: 'Central Green District',
    crisisActive: true,
  };

  const skillExchange = [
    { id: 1, user: 'Maya T.', type: 'offer', skill: 'Bike Repair', verified: true },
    { id: 2, user: 'Omar V.', type: 'need', skill: 'Grocery Pickup', verified: false },
  ];
  const resources = [
    { id: 1, item: 'Portable Charger', status: 'available', user: 'Jordan Lee' },
    { id: 2, item: 'First Aid Kit', status: 'requested', user: 'Sam B.' },
  ];
  const microGrants = [
    { id: 1, project: 'Community Garden', status: 'funding', raised: 420, goal: 500 },
    { id: 2, project: 'School Supplies for Kids', status: 'fulfilled', raised: 300, goal: 300 },
  ];

  // Simulated AI suggestions
  const aiSuggestions = [
    { id: 1, type: 'alert', text: 'Heavy rains forecasted. Do you have sandbags ready?', urgent: true },
    { id: 2, type: 'match', text: 'People nearby need grocery pickup, can you help?' },
    { id: 3, type: 'opportunity', text: 'Micro-grant open for local recycling program.' }
  ];

  // Main render
  return (
    <div className="microconnect-app">
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} user={user} aiSuggestions={aiSuggestions} />

      <main className="main-content">
        {/* AI SUGGESTIONS + ALERTS */}
        <section aria-label="AI Alerts and Suggestions" className="ai-suggestion-section">
          {aiSuggestions.map(s =>
            <div
              key={s.id}
              className={`ai-suggestion ${s.urgent ? "urgent" : ""}`}
              role={s.urgent ? "alert" : "status"}
              tabIndex="0"
            >
              {s.text}
            </div>
          )}
        </section>

        <div className="dashboard">
          {/* MAP View */}
          {activeTab === 'map' && (
            <MapSection microCommunity={user.microCommunity} crisisActive={user.crisisActive} />
          )}

          {/* Skill & Resource Exchange */}
          {activeTab === 'exchange' && (
            <SkillExchangeSection skillExchange={skillExchange} resources={resources} />
          )}

          {/* User Profile - Verification & Trust */}
          {activeTab === 'profile' && (
            <UserProfileSection user={user} />
          )}

          {/* Community Micro-Grants */}
          {activeTab === 'grants' && (
            <MicroGrantsSection microGrants={microGrants} />
          )}

          {/* Crisis Support */}
          {activeTab === 'crisis' && (
            <CrisisSupportSection crisisActive={user.crisisActive} />
          )}
        </div>
      </main>
    </div>
  );
}

// NAVBAR & TOP-LEVEL NAVIGATION
function NavBar({ activeTab, setActiveTab, user, aiSuggestions }) {
  // PUBLIC_INTERFACE
  return (
    <nav className="navbar-mch" role="navigation" aria-label="Primary navigation">
      <span className="logo-mch">
        <span className="logo-dot">*</span> MicroConnect Hub
      </span>
      <ul className="nav-tabs">
        <li>
          <button className={activeTab === 'map' ? "tab active" : "tab"} onClick={() => setActiveTab('map')} aria-label="Micro-community Map">Map</button>
        </li>
        <li>
          <button className={activeTab === 'exchange' ? "tab active" : "tab"} onClick={() => setActiveTab('exchange')} aria-label="Skill and Resource Exchange">Exchange</button>
        </li>
        <li>
          <button className={activeTab === 'grants' ? "tab active" : "tab"} onClick={() => setActiveTab('grants')} aria-label="Community Grants">Grants</button>
        </li>
        <li>
          <button className={activeTab === 'crisis' ? "tab active" : "tab"} onClick={() => setActiveTab('crisis')} aria-label="Crisis Support">
            {user.crisisActive ? <span className="crisis-dot" aria-label="Active Crisis"></span> : null}
            Crisis
          </button>
        </li>
        <li>
          <button className={activeTab === 'profile' ? "tab active" : "tab"} onClick={() => setActiveTab('profile')} aria-label="User Profile">
            <span className="profile-pic-mock" aria-hidden="true"></span>
            {user.name}
          </button>
        </li>
      </ul>
    </nav>
  );
}

// MAP & GEO-FENCED COMMUNITY SECTION
function MapSection({ microCommunity, crisisActive }) {
  // PUBLIC_INTERFACE
  return (
    <section className="map-section" aria-label="Geofenced Micro-Community Map">
      <h2 className="section-title">Welcome to <span className="map-area">{microCommunity}</span></h2>
      <div className="map-mock" role="img" aria-label="Micro-community Map">
        {/* Replace this with a real map integration (Mapbox/Leaflet) */}
        <div className="map-geofence">
          <span className="geofence-label">{microCommunity}</span>
          {crisisActive && <span className="crisis-map-glow" aria-label="Crisis in area"></span>}
        </div>
        <div className="map-icon marker-user" title="You Are Here" tabIndex="0">
          <svg width="20" height="20" aria-hidden="true"><circle cx="10" cy="10" r="8" fill="#8f0a0a" /></svg>
        </div>
        {/* Minimalist - only the active area & a "you are here" marker */}
      </div>
      <p className="map-description">
        Hyper-local hub for verified skill & resource exchange within {microCommunity}.
      </p>
      {crisisActive && (
        <div className="crisis-banner" role="alert">
          <strong>CRISIS ACTIVE:</strong> Community support needed!
        </div>
      )}
    </section>
  );
}

// SKILL & RESOURCE EXCHANGE SECTION
function SkillExchangeSection({ skillExchange, resources }) {
  // PUBLIC_INTERFACE
  return (
    <section className="exchange-section" aria-label="Skill & Resource Exchange">
      <h2 className="section-title">Skill Exchange</h2>
      <ul className="exchange-list" aria-label="Skill Exchanges">
        {skillExchange.map(entry => (
          <li key={entry.id} className={`exchange-entry ${entry.type}`}>
            <span className="exchange-user">
              {entry.verified && <VerifiedBadge />}
              {entry.user} 
            </span>
            {entry.type === "offer" ? (
              <> offers <span className="exchange-skill">{entry.skill}</span></>
            ) : (
              <> needs <span className="exchange-skill">{entry.skill}</span></>
            )}
            <button className="btn-action">Connect</button>
          </li>
        ))}
      </ul>
      <h2 className="section-title">Resource Listings</h2>
      <ul className="resource-list" aria-label="Resource Listings">
        {resources.map(res => (
          <li key={res.id} className={`resource-entry ${res.status}`}>
            <span className="resource-item">{res.item}</span> &mdash; 
            <span className="resource-user">{res.user}</span>
            <span className={`resource-status ${res.status}`}>
              {res.status === "available" ? "Available" : "Requested"}
            </span>
            <button className="btn-action">Request</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

// USER PROFILE & VERIFICATION
function UserProfileSection({ user }) {
  // PUBLIC_INTERFACE
  return (
    <section className="profile-section" aria-label="Your Profile">
      <div className="profile-header">
        <span className="profile-pic-mock" aria-hidden="true"></span>
        <span className="profile-name">{user.name}</span>
        {user.verified && <VerifiedBadge large />}
      </div>
      <div className="trust-indicator">
        <span>Trust Score:</span>
        <span className={`trust-score ${user.trustScore > 90 ? "high" : "med"}`}>{user.trustScore}</span>/100
        <span className="trust-tooltip">Trusted exchanges, community voting & history</span>
      </div>
      <div className="profile-metrics">
        <div>
          <label>Micro-Community</label>
          <strong>{user.microCommunity}</strong>
        </div>
        <div>
          <label>Verified</label>
          {user.verified ? <VerifiedBadge /> : "Unverified"}
        </div>
        <div>
          <label>Status</label>
          {user.crisisActive ? (<span className="crisis-dot" title="Crisis Active"></span>) : "OK"}
        </div>
      </div>
      <p className="profile-hint">Verified users enjoy higher trust and more opportunities. Keep your profile updated!</p>
    </section>
  );
}

// VERIFICATION ICON COMPONENT
function VerifiedBadge({ large }) {
  // PUBLIC_INTERFACE
  return (
    <span className={`verified-badge${large ? " large" : ""}`} title="Verified">
      <svg width={large ? 20 : 14} height={large ? 20 : 14} viewBox="0 0 20 20" aria-hidden="true">
        <circle cx="10" cy="10" r="9" fill="#8f0a0a" />
        <polyline points="6,11 9,14 15,7" fill="none" stroke="#fff" strokeWidth="2" />
      </svg>
    </span>
  );
}

// COMMUNITY MICRO-GRANTS
function MicroGrantsSection({ microGrants }) {
  // PUBLIC_INTERFACE
  return (
    <section className="grants-section" aria-label="Community Micro-Grants">
      <h2 className="section-title">Micro-Grants</h2>
      <ul className="grants-list">
        {microGrants.map(g => (
          <li key={g.id} className={`grant-entry ${g.status}`}>
            <div className="grant-project">{g.project}</div>
            <div className="grant-bar" role="progressbar" 
              aria-valuenow={g.raised}
              aria-valuemax={g.goal}
              aria-label={`Raised $${g.raised} of $${g.goal}`}>
              <div 
                className="grant-bar-fill"
                style={{ width: `${(g.raised / g.goal) * 100}%` }}>
              </div>
            </div>
            <div className="grant-status">
              {g.status === 'funding' ? (
                <>Funding in progress: ${g.raised} of ${g.goal}
                  <button className="btn-action fund-btn">Contribute</button>
                </>
              ) : (
                <span className="fulfilled">Fulfilled 🎉</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

// CRISIS SUPPORT
function CrisisSupportSection({ crisisActive }) {
  // PUBLIC_INTERFACE
  return (
    <section className="crisis-section" aria-label="Crisis Support">
      <h2 className="section-title">Crisis Support & Alerts</h2>
      {crisisActive ? (
        <div className="crisis-active">
          <strong>URGENT:</strong> There is an active crisis in your area. <br/>
          <button className="btn-action" style={{background:'#8f0a0a'}}>Request Help</button>
          <button className="btn-action" style={{background:'#b1b483',color:'#1a1a1a'}}>Offer Help</button>
        </div>
      ) : (
        <div className="crisis-info">
          No active crises detected.<br />
          <button className="btn-action">Prepare Emergency Kit</button>
        </div>
      )}
      <div className="crisis-tips">
        <div className="tip"><strong>Tip:</strong> Mark yourself as safe in emergencies.</div>
        <div className="tip"><strong>Tip:</strong> Check in on neighbors and respond to urgent requests.</div>
      </div>
    </section>
  );
}

export default MicroConnectApp;
