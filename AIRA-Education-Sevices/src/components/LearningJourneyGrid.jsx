import React from 'react';
import './LearningJourneyGrid.css';

export default function LearningJourneyGrid() {
  const cards = [
    {
      num: "1",
      title: "Foundation & Basics",
      desc: "Programming, basic electronics, and building your first Line Follower Robot. Fundamentals of circuits and coding."
    },
    {
      num: "2",
      title: "IoT & Connectivity",
      desc: "Home automation, cloud dashboards, and smartphone-controlled devices. Sensors, data collection, remote control."
    },
    {
      num: "3",
      title: "Artificial Intelligence",
      desc: "Computer Vision, Object Detection, and AI-integrated robots. Build smart systems that learn and decide."
    },
    {
      num: "4",
      title: "Advanced Projects",
      desc: "Capstone projects and industry challenges. Apply all skills to solve real problems and build your portfolio."
    }
  ];

  return (
    <section className="learning-journey-grid-section">
      <div className="network-particles"></div>
      
      <div className="learning-journey-header">
        <span className="lj-label">ROADMAP</span>
        <h2 className="lj-title">
          Your Learning <span>Journey</span>
        </h2>
        <p className="lj-subtitle">
          Structured pathway from beginner to expert in future technologies.
        </p>
      </div>

      <div className="lj-grid">
        {cards.map((card, index) => (
          <div className="lj-card" key={index}>
            <div className="lj-badge">{card.num}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
