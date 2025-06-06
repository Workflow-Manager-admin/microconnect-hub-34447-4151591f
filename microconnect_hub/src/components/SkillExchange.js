import React, { useState } from "react";
import "./SkillExchange.css";

// Mock data: listings
const initialSkills = [
  { id: 1, name: "Bike Repair", user: "Sam", trust: 92, verified: true, distance: 0.3 },
  { id: 2, name: "Math Tutoring", user: "Alex", trust: 78, verified: true, distance: 0.5 },
  { id: 3, name: "Yoga Teaching", user: "Priya", trust: 66, verified: false, distance: 0.2 }
];

// PUBLIC_INTERFACE
export default function SkillExchange({ user }) {
  const [skills, setSkills] = useState(initialSkills);
  const [newSkill, setNewSkill] = useState("");

  // PUBLIC_INTERFACE
  function handleAddSkill(e) {
    e.preventDefault();
    if (!newSkill.trim()) return;
    setSkills([
      ...skills,
      {
        id: skills.length + 1,
        name: newSkill,
        user: user.name,
        trust: user.trustScore,
        verified: user.verified,
        distance: 0.1
      }
    ]);
    setNewSkill("");
  }

  return (
    <section className="skill-exchange">
      <h2>Skill Exchange</h2>
      <form className="skill-add-form" onSubmit={handleAddSkill}>
        <input
          type="text"
          value={newSkill}
          placeholder="List a skill you offer (e.g. Gardening)"
          onChange={e => setNewSkill(e.target.value)}
          aria-label="Add Skill"
        />
        <button type="submit" className="btn-accent">Offer</button>
      </form>
      <ul className="skills-list">
        {skills.map(skill => (
          <li key={skill.id} className="skill-card">
            <span className="skill-title">{skill.name}</span>
            <span className="skill-user">
              {skill.verified ? <span className="verified-badge">✔</span> : null} {skill.user}
            </span>
            <span className="skill-metrics">
              Trust: <span className="trust">{skill.trust}</span>
              {" · "}
              <span className="distance">{skill.distance}km</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
