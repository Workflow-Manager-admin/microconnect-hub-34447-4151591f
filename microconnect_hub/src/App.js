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

  // Navbar tab config
  const navTabs = [
    { key: "map", label: "Map", icon: "🗺️" },
    { key: "skills", label: "Skills", icon: "🎓" },
    { key: "resources", label: "Resources", icon: "🔧" },
    { key: "fund", label: "Micro-Grants", icon: "💸" },
    { key: "crisis", label: "Crisis", icon: "🚨" },
    { key: "profile", label: "Profile", icon: "👤" },
  ];

  return (
    <div className="hub-app">
      <nav className="hub-navbar">
        <span className="hub-logo">
          <span className="hub-logo-symbol">*</span> MicroConnect Hub
        </span>
        <div className="hub-nav-tabs">
          {navTabs.map(tab => (
            <button
              className={`hub-nav-tab ${activeTab === tab.key ? "active" : ""}`}
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
            >
              <span aria-hidden="true">{tab.icon}</span> {tab.label}
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
