import React, { useState } from 'react';
import { Zap, Layers, ShieldCheck, Cpu, Crown } from 'lucide-react';
import Hero3DCanvas from './Hero3DCanvas';

export default function Hero({ theme, onSoundPlay }) {
  const [active3DMode, setActive3DMode] = useState('robotics');

  const modes = [
    { id: 'robotics', label: '🤖 Robotics' },
    { id: 'ai', label: '🧠 AI Neural' },
    { id: 'drone', label: '✈️ Drone' },
    { id: 'quantum', label: '💎 STEM Orb' }
  ];

  const handleModeChange = (modeId) => {
    setActive3DMode(modeId);
    if (onSoundPlay) onSoundPlay('click');
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Copy & Actions */}
          <div className="hero-content">
            <div className="hero-luxury-tag">
              <Crown size={16} style={{ color: 'var(--accent-gold)' }} />
              <span>Premier AI & Robotics Education • NEP 2020 Aligned</span>
            </div>

            <h1 className="hero-title">
              Empower Future Innovators with <span className="gradient-text">Hands-On AI</span> & Robotics
            </h1>

            <p className="hero-desc">
              Transform classroom theory into breakthrough engineering. Discover precision-crafted STEM kits, turnkey ATL school lab solutions, and experiential learning tailored for India's young leaders.
            </p>

            <div className="hero-cta-group">
              <a href="#kits" className="btn btn-luxury-gold btn-lg">
                <Zap size={18} />
                <span>Explore Tech Kits (INR ₹)</span>
              </a>
              <a href="#simulator" className="btn btn-luxury-outline btn-lg">
                <Layers size={18} />
                <span>Launch 3D Lab Simulation</span>
              </a>
            </div>

            <div className="hero-stats-row">
              <div className="stat-item">
                <div className="stat-number">15,000<span>+</span></div>
                <div className="stat-label">Students Mentored</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500<span>+</span></div>
                <div className="stat-label">ATL Labs Deployed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98<span>%</span></div>
                <div className="stat-label">Practical Success Score</div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Canvas with Luxury Studio Lighting */}
          <div className="hero-visual">
            <div className="hero-3d-wrapper">
              <Hero3DCanvas activeMode={active3DMode} theme={theme} />

              {/* Floating HUD Badges */}
              <div className="hud-float-badge hud-badge-1">
                <div className="hud-icon">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <div className="hud-title">NEP 2020 Aligned</div>
                  <div className="hud-sub">CBSE & ICSE Certified</div>
                </div>
              </div>

              <div className="hud-float-badge hud-badge-2">
                <div className="hud-icon">
                  <Cpu size={22} />
                </div>
                <div>
                  <div className="hud-title">ESP32 & Neural AI Core</div>
                  <div className="hud-sub">Live 3D Telemetry</div>
                </div>
              </div>

              {/* 3D Mode Selector Overlay */}
              <div className="canvas-controls-overlay" role="group" aria-label="3D Model Selection">
                {modes.map((m) => (
                  <button
                    key={m.id}
                    className={`mode-btn ${active3DMode === m.id ? 'active' : ''}`}
                    onClick={() => handleModeChange(m.id)}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
