import React from 'react';
import { Cpu, Crown, Wrench, GraduationCap } from 'lucide-react';
import heroCenter from '../assets/hero_center.jpg';
import heroClass1 from '../assets/hero_class1.jpg';
import heroClass2 from '../assets/hero_class2.jpg';
import './FloatingHeroImages.css';

export default function FloatingHeroImages() {
  return (
    <div className="floating-hero-container">
      {/* Background network dots */}
      <div className="network-bg"></div>
      
      {/* Central Image */}
      <div className="hero-img-main-wrapper">
        <img src={heroCenter} alt="Students building robot" className="hero-img-main" />
      </div>

      {/* Floating images */}
      <div className="float-img float-img-1">
        <img src={heroClass1} alt="Classroom" />
      </div>
      <div className="float-img float-img-2">
        <img src={heroClass2} alt="Hands on learning" />
      </div>

      {/* Floating Badges */}
      <div className="float-badge float-badge-ai">
        <div className="badge-icon purple"><Cpu size={20} color="#6e56cf" /></div>
        <div className="badge-text">
          <div className="title">AI Lab Active</div>
          <div className="sub">10 Schools</div>
        </div>
      </div>

      <div className="float-badge float-badge-projects">
        <div className="badge-icon yellow"><Wrench size={20} color="#b56e0f" /></div>
        <div className="badge-text">
          <div className="title">90+ Projects</div>
          <div className="sub">Hands-on Learning</div>
        </div>
      </div>

      <div className="float-badge float-badge-stem">
        <div className="stem-icon"><GraduationCap size={16} color="white" /></div> 
        <span>STEM • Grades 1–12</span>
      </div>
    </div>
  );
}
