import React from 'react';
import { Star, Clock, Award, Trophy, Users, Rocket } from 'lucide-react';
import CourseGrid from '../components/CourseGrid';
import './Courses.css';

export default function Courses() {
  return (
    <main>
      <section className="courses-hero-section">
        <div className="courses-particles"></div>
        
        <div className="courses-hero-content">
          <div className="courses-label">
            <span className="dot"></span> NEP 2020 ALIGNED Â· ALL LEVELS
          </div>
          
          <h1 className="courses-title">
            Explore Our <span>Courses</span>
          </h1>
          
          <p className="courses-subtitle">
            Hands-on, project-based programs in AI, IoT & Robotics — designed for every level from beginner to advanced. Start building your future today.
          </p>

          <div className="courses-stats-bar">
            <div className="stat-item">
              <span className="stat-value">12</span>
              <span className="stat-label">Total Courses</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">150+</span>
              <span className="stat-label">Students Enrolled</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">4.9â˜…</span>
              <span className="stat-label">Avg. Rating</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Hands-on</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Mega Bootcamp Section */}
      <section className="mega-bootcamp-section">
        <div className="container">
          <div className="mega-bootcamp-card">
            
            {/* Left Content */}
            <div className="mbc-content">
              <div className="mbc-badge">
                <Star size={14} className="mbc-badge-icon" fill="currentColor" />
                Featured Program
              </div>
              
              <h2 className="mbc-title">AI + Robotics<br/>Mega Bootcamp</h2>
              
              <p className="mbc-desc">
                Our flagship 100-hour intensive program combining AI, IoT & Robotics. Build real projects, earn an industry certificate, and compete in the National Championship.
              </p>
              
              <div className="mbc-pills">
                <div className="mbc-pill"><Clock size={14} style={{ color: '#2563eb' }}/> 100 Hours</div>
                <div className="mbc-pill"><Award size={14} style={{ color: '#2563eb' }}/> Certificate</div>
                <div className="mbc-pill"><Trophy size={14} style={{ color: '#2563eb' }}/> Competition Ready</div>
                <div className="mbc-pill"><Users size={14} style={{ color: '#2563eb' }}/> Grades 6-12</div>
              </div>
              
              <button className="mbc-enroll-btn">
                <Rocket size={18} />
                Enroll Now
              </button>
            </div>
            
            {/* Right Content */}
            <div className="mbc-visuals">
              <div className="mbc-image-wrapper">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="Student working on electronics" className="mbc-image" />
              </div>
              
              <div className="mbc-stats-grid">
                <div className="mbc-stat-box">
                  <span className="mbc-stat-num">50+</span>
                  <span className="mbc-stat-text">Projects Built</span>
                </div>
                <div className="mbc-stat-box">
                  <span className="mbc-stat-num">10</span>
                  <span className="mbc-stat-text">Expert Mentors</span>
                </div>
                <div className="mbc-stat-box">
                  <span className="mbc-stat-num">â‚¹5L+</span>
                  <span className="mbc-stat-text">Prize Pool</span>
                </div>
                <div className="mbc-stat-box">
                  <span className="mbc-stat-num">100%</span>
                  <span className="mbc-stat-text">Practical</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Main Course Grid Section */}
      <CourseGrid />
    </main>
  );
}
