import React, { useState } from "react";
import "./App.css";
import MapDashboard from "./components/MapDashboard";
import SkillExchange from "./components/SkillExchange";
import ResourceExchange from "./components/ResourceExchange";
import CommunityFund from "./components/CommunityFund";
import CrisisSupport from "./components/CrisisSupport";
import UserProfile from "./components/UserProfile";
import AIAlerts from "./components/AIAlerts";

// PUBLIC_INTERFACE
function App() {
  // Application tab state
  const [activeTab, setActiveTab] = useState("dashboard");

  // Example user state
  const user = {
    name: "Taylor Chen",
    verified: true,
    trustScore: 87,
    microCommunity: "Central Sunnyside",
    avatarUrl: "",
    skills: ["Tutoring", "Gardening"],
    resources: ["Shovel", "Books"],
    requests: ["Dog walking"],
    grants: [
      { name: "Park Cleanup", status: "approved", amount: 250 }
    ]
  };

  // Navigation feature list: main features + minimal placeholders
  const navTabs = [
    { key: "dashboard", label: "Community Dashboard", icon: "🏠" },
    { key: "skills", label: "Skill Bartering System", icon: "🤝" },
    { key: "payitforward", label: "Pay-It-Forward Chains", icon: "🔗" },
    { key: "emergency", label: "Emergency Alerts", icon: "🚨" },
    { key: "localaid", label: "Local Aid Hub", icon: "💡" },
    { key: "resources", label: "Resource Tracker", icon: "📦" },
    { key: "recommend", label: "Echo Recommendations", icon: "📣" },
    { key: "impact", label: "Community Impact Score", icon: "🌟" },
    { key: "groups", label: "Skill & Interest Groups", icon: "👥" },
    { key: "events", label: "Local Events Calendar", icon: "📅" },
    { key: "mentalhealth", label: "Mental Health First Aid", icon: "💚" },
    { key: "wellness", label: "Wellness Check-Ins", icon: "😊" },
    { key: "archive", label: "Knowledge Archive", icon: "🗄️" },
    { key: "skillreco", label: "Skill Recommendation Engine", icon: "🧠" },
    { key: "personalimpact", label: "Personal Impact Tracker", icon: "📊" },
    { key: "disaster", label: "Disaster Tools & Readiness", icon: "🛠️" }
  ];

  // PUBLIC_INTERFACE
  function renderTab() {
    switch (activeTab) {
      case "dashboard":
        return (
          <>
            <AIAlerts />
            <MapDashboard user={user} />
          </>
        );
      case "skills":
        return <SkillExchange user={user} />;
      case "resources":
        return <ResourceExchange user={user} />;
      case "fund":
        return <CommunityFund user={user} />;
      case "crisis":
        return <CrisisSupport user={user} />;
      case "profile":
        return <UserProfile user={user} />;
      // Placeholder: All other tabs
      default: {
        const current = navTabs.find(tab => tab.key === activeTab);
        return (
          <section style={{
            background: "var(--panel-bg)",
            borderRadius: 12,
            boxShadow: "var(--shadow)",
            padding: "44px 24px",
            minHeight: 160,
            textAlign: "center",
            color: "var(--text-secondary)"
          }}>
            <h2 style={{ color: "var(--primary)", marginBottom: 7 }}>
              {current?.icon} {current?.label}
            </h2>
            <div style={{ fontSize: "1.17rem" }}>
              Feature coming soon to MicroConnect Hub.
            </div>
          </section>
        );
      }
    }
  }

  // Layout: outer wrapper, header, sidebar left, main center, footer
  return (
    <div className="hub-app-outer">
      {/* Header (horizontal on top) */}
      <header className="hub-header" role="banner">
        <span className="hub-logo">
          <span className="hub-logo-symbol" aria-hidden="true">*</span>
          MicroConnect Hub
        </span>
        <span className="hub-header-user">
          <span role="img" aria-label="avatar" className="hub-header-avatar">👤</span>
          {user.name}
        </span>
      </header>
      <div className="hub-layout-body">
        {/* Sidebar nav (vertical, left) */}
        <nav className="hub-sidebar" role="navigation" aria-label="Main navigation">
          <ul className="hub-sidebar-list">
            {navTabs.map(tab => (
              <li key={tab.key}>
                <button
                  className={`hub-sidebar-tab${activeTab === tab.key ? " active" : ""}`}
                  role="tab"
                  aria-selected={activeTab === tab.key}
                  tabIndex={0}
                  aria-label={tab.label}
                  onClick={() => setActiveTab(tab.key)}
                >
                  <span className="hub-sidebar-tab-icon" aria-hidden="true">{tab.icon}</span>
                  <span className="hub-sidebar-tab-label">{tab.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        {/* Main content area */}
        <main className="hub-main" tabIndex={-1}>
          {renderTab()}
        </main>
      </div>
      {/* Footer (horizontal, bottom) */}
      <footer className="hub-footer" role="contentinfo">
        <span>
          &copy; {new Date().getFullYear()} MicroConnect Hub &middot; Hyper-local Community Exchange
        </span>
        <span className="hub-footer-links">
          <a href="/" style={{ color: "var(--primary)" }}>Home</a>
          <span style={{ margin: "0 5px" }}>|</span>
          <a href="https://kavia.ai" target="_blank" rel="noopener noreferrer" style={{ color: "var(--secondary)" }}>Powered by Kavia</a>
        </span>
      </footer>
    </div>
  );
}

export default App;
