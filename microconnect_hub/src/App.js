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
  const [activeTab, setActiveTab] = useState("map");

  // Placeholder: Example user state
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

  // PUBLIC_INTERFACE
  function renderTab() {
    switch (activeTab) {
      case "map":
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
      default:
        return null;
    }
  }

  // Navigation feature list: 16 features mapped to keys, labels, and accessible emoji icons
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
    // The only tabs with implemented screens are dashboard (show map & alerts), skills, resources, plus a few base features.
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
      // Placeholder: Unimplemented features show a minimalist placeholder
      default:
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

  return (
    <div className="hub-app">
      <nav className="hub-navbar" role="navigation" aria-label="Main navigation">
        <span className="hub-logo">
          <span className="hub-logo-symbol" aria-hidden="true">*</span>
          MicroConnect Hub
        </span>
        <div className="hub-nav-tabs" role="tablist">
          {navTabs.map((tab, idx) => (
            <button
              className={`hub-nav-tab${activeTab === tab.key ? " active" : ""}`}
              key={tab.key}
              role="tab"
              aria-selected={activeTab === tab.key}
              tabIndex={0}
              aria-label={tab.label}
              onClick={() => setActiveTab(tab.key)}
            >
              <span aria-hidden="true">{tab.icon}</span>
              <span style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                maxWidth: 80,
                display: "inline-block"
              }}>{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>
      <main className="hub-main">
        {renderTab()}
      </main>
    </div>
  );
}

export default App;
