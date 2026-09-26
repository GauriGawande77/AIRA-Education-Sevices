import React from 'react';
import { Check, Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  return (
    <div className="about-page-container">
      <div className="about-grid">
        
        {/* Left Side: Video & Badges */}
        <div className="about-video-wrapper">
          <div className="badge-nep">
            <Trophy size={16} />
            NEP 2020 Aligned
          </div>
          
          <div className="about-video-container">
            <video 
              className="about-video"
              controls
              autoPlay
              muted
              loop
              poster="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="badge-stats">
            <h3>80%</h3>
            <p>Hands-on Projects</p>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="about-content">
          <span className="about-who-label">WHO WE ARE</span>
          
          <h1 className="about-title">
            About <span>AIRA</span>
          </h1>
          
          <p className="about-subtitle">
            On a mission to democratize future-tech education and create the next generation of Indian innovators.
          </p>

          <div className="about-features">
            <div className="feature-item">
              <Check size={18} className="feature-icon" />
              <span className="feature-text">Access to cutting-edge AI, IoT & Robotics education for every Indian student</span>
            </div>
            
            <div className="feature-item">
              <Check size={18} className="feature-icon" />
              <span className="feature-text">80% project-based, 20% theory — learn by building real things</span>
            </div>
            
            <div className="feature-item">
              <Check size={18} className="feature-icon" />
              <span className="feature-text">Open to Grades 1-12, college students & educators — no prior experience needed</span>
            </div>
            
            <div className="feature-item">
              <Check size={18} className="feature-icon" />
              <span className="feature-text">Industry-aligned curriculum, expert mentorship & real-world exposure</span>
            </div>
          </div>

          <Link to="/courses" className="btn-explore">
            Explore Courses
            <ArrowRight size={20} />
          </Link>
        </div>

      </div>
    </div>
  );
}
