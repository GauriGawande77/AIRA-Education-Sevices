import React, { useState } from 'react';
import { Rocket, BookOpen, Star, Users, MapPin } from 'lucide-react';
import FloatingHeroImages from './FloatingHeroImages';
import './HeroContent.css';

export default function Hero({ theme, onSoundPlay }) {
  const [active3DMode, setActive3DMode] = useState('robotics');

  const modes = [
    { id: 'robotics', label: 'ðŸ¤– Robotics' },
    { id: 'ai', label: 'ðŸ§  AI Neural' },
    { id: 'drone', label: 'âœˆï¸ Drone' },
    { id: 'quantum', label: 'ðŸ’Ž STEM Orb' }
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
          <div className="hero-content custom-hero-left">
            <div className="hero-tag-yellow">
              <span className="dot"></span> NEP 2020 ALIGNED • STEM EDUCATION
            </div>

            <h1 className="hero-title-new">
              Build the <span className="text-purple">Future</span><br />
              with<br />
              <span className="text-purple">AI • IoT • Robotics</span>
            </h1>

            <p className="hero-desc-new">
              AIRA empowers students with practical skills through hands-on, project-based learning. We bridge theory and real-world application — preparing students for Industry 4.0 careers.
            </p>

            <div className="hero-cta-group-new">
              <a href="#benefits" className="btn-blue-glow">
                <Rocket size={18} />
                <span>Student Benefits</span>
              </a>
              <a href="#nep2020" className="btn-outline-blue">
                <BookOpen size={18} />
                <span>NEP 2020</span>
              </a>
            </div>

            <div className="hero-bottom-stats">
              <div className="stat-item-new">
                <Star size={16} className="text-blue" fill="currentColor" />
                <span>4.9 Google Rating</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item-new">
                <Users size={16} className="text-blue" />
                <span>150+ Students</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item-new">
                <MapPin size={16} className="text-blue" />
                <span>Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Images Layout */}
          <div className="hero-visual">
            <FloatingHeroImages />
          </div>
        </div>
      </div>
    </section>
  );
}
