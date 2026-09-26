import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Brain, 
  Network, 
  Cpu, 
  Wifi, 
  Server, 
  Settings, 
  Gamepad2, 
  Trophy, 
  BadgeCheck, 
  Briefcase,
  ArrowRight 
} from 'lucide-react';
import './Nep2020.css';

export default function Nep2020() {
  const alignCards = [
    {
      number: "01",
      title: "Experiential Learning",
      desc: "80% practical, hands-on projects as recommended by NEP 2020 — developing critical thinking and problem-solving skills."
    },
    {
      number: "02",
      title: "Multidisciplinary Approach",
      desc: "Integrating AI, IoT & Robotics with STEM subjects, preparing students for complex real-world challenges."
    },
    {
      number: "03",
      title: "21st Century Skills",
      desc: "Developing computational thinking, creativity, collaboration, and digital literacy — essential skills for future-ready citizens."
    },
    {
      number: "04",
      title: "Local to Global Readiness",
      desc: "Globally relevant skills while solving local problems — embodying NEP's vision of \"Think Global, Act Local.\""
    }
  ];

  return (
    <div className="nep-page-container">
      
      {/* 1. Aligned with NEP Section */}
      <span className="nep-label">POLICY ALIGNED</span>
      <h1 className="nep-title">
        Aligned with <span>NEP 2020</span>
      </h1>
      <p className="nep-subtitle">
        Supporting India's National Education Policy 2020 vision for holistic, skill-based learning.
      </p>

      <div className="nep-cards-grid">
        {alignCards.map((card, index) => (
          <div className="nep-card" key={index}>
            <div className="nep-card-number">{card.number}</div>
            <h3 className="nep-card-title">{card.title}</h3>
            <p className="nep-card-desc">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* 2. Why Choose AIRA Section */}
      <section className="nep-section">
        <span className="nep-label">OUR EDGE</span>
        <h2 className="nep-title">
          Why Choose <span>AIRA</span>?
        </h2>
        
        <div className="why-aira-card">
          <p>
            <span className="highlight-text">AIRA Education & Services</span> is revolutionizing technology education in India by providing <span className="highlight-text">hands-on, project-based learning</span> in AI, IoT, and Robotics. Fully aligned with <span className="highlight-text">NEP 2020 guidelines</span>, we prepare students for the Industry 4.0 era with practical skills that truly matter in today's world.
          </p>
          <p>
            Our <span className="highlight-text">"Learn by Building"</span> approach means students don't just absorb theory — they actually build working prototypes. From smart cities to AI-powered robots, our students solve real-world problems and build both technical mastery and innovative thinking.
          </p>
        </div>
      </section>

      {/* 3. Technology Focus Section */}
      <section className="nep-section">
        <h2 className="nep-title">
          Our Technology <span>Focus</span>
        </h2>
        <p className="nep-subtitle">
          Master three pillars of future technology through immersive, project-based learning experiences.
        </p>

        <div className="tech-focus-grid">
          {/* Card 1 */}
          <div className="tech-card">
            <div className="tech-icon-wrapper">
              <Bot size={32} />
            </div>
            <h3>Robotics & Automation</h3>
            <p>Design, build, and program intelligent robots. Learn industrial robotics, automation, mechatronics, and control systems through real projects.</p>
            <div className="tech-tags">
              <span className="tech-tag">Arduino</span>
              <span className="tech-tag">Raspberry Pi</span>
              <span className="tech-tag">Automation</span>
            </div>
            <Link to="/courses" className="tech-link">
              Explore Robotics <ArrowRight size={16} />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="tech-card">
            <div className="tech-icon-wrapper">
              <Brain size={32} />
            </div>
            <h3>Artificial Intelligence</h3>
            <p>Develop smart systems that learn, reason, and solve complex problems. Master ML, neural networks, computer vision, and NLP.</p>
            <div className="tech-tags">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Machine Learning</span>
              <span className="tech-tag">Computer Vision</span>
            </div>
            <Link to="/courses" className="tech-link">
              Explore AI <ArrowRight size={16} />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="tech-card">
            <div className="tech-icon-wrapper">
              <Network size={32} />
            </div>
            <h3>Internet of Things</h3>
            <p>Connect physical devices for real-time data collection, remote control, and smart automation ecosystems from sensors to cloud.</p>
            <div className="tech-tags">
              <span className="tech-tag">ESP32</span>
              <span className="tech-tag">Cloud</span>
              <span className="tech-tag">Smart Devices</span>
            </div>
            <Link to="/courses" className="tech-link">
              Explore IoT <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Interactive Learning Tools Section */}
      <section className="nep-section">
        <span className="nep-label">HARDWARE</span>
        <h2 className="nep-title">
          Interactive <span>Learning Tools</span>
        </h2>
        <p className="nep-subtitle">
          State-of-the-art equipment to bring ideas to life.
        </p>

        <div className="hardware-grid">
          <div className="hardware-card">
            <div className="hw-icon"><Cpu size={24} /></div>
            <h4>Arduino Kits</h4>
            <p>Complete robotics kits with sensors, motors, and controllers for hands-on exploration.</p>
          </div>
          
          <div className="hardware-card">
            <div className="hw-icon"><Wifi size={24} /></div>
            <h4>Smart Sensors</h4>
            <p>Temperature, motion, light, and environmental sensors for real IoT projects.</p>
          </div>
          
          <div className="hardware-card">
            <div className="hw-icon"><Server size={24} /></div>
            <h4>Raspberry Pi</h4>
            <p>Mini computers for AI projects, programming, and advanced applications.</p>
          </div>
          
          <div className="hardware-card">
            <div className="hw-icon"><Settings size={24} /></div>
            <h4>Robotic Arms</h4>
            <p>Precision robotic arms for automation, manufacturing, and research simulation.</p>
          </div>
        </div>
      </section>

      {/* 5. Special Benefits for Students Section */}
      <section className="nep-section">
        <span className="nep-label">PERKS</span>
        <h2 className="nep-title">
          Special <span>Benefits</span> for Students
        </h2>
        <p className="nep-subtitle">
          Exclusive features designed to make learning engaging, rewarding, and career-focused.
        </p>

        <div className="nep-cards-grid">
          {/* Card 1 */}
          <div className="nep-card perks-card">
            <div className="nep-card-number">01</div>
            <div className="perks-icon"><Gamepad2 size={28} /></div>
            <h3 className="nep-card-title">Gamified Learning</h3>
            <p className="nep-card-desc">Earn points, badges, and level up as you complete projects. Compete on leaderboards and unlock achievements!</p>
          </div>

          {/* Card 2 */}
          <div className="nep-card perks-card">
            <div className="nep-card-number">02</div>
            <div className="perks-icon"><Trophy size={28} /></div>
            <h3 className="nep-card-title">National Competitions</h3>
            <p className="nep-card-desc">Participate in AIRA National Robotics Championship with prizes worth ₹5 Lakhs+ and industry recognition.</p>
          </div>

          {/* Card 3 */}
          <div className="nep-card perks-card">
            <div className="nep-card-number">03</div>
            <div className="perks-icon"><BadgeCheck size={28} /></div>
            <h3 className="nep-card-title">Industry Certifications</h3>
            <p className="nep-card-desc">Earn globally recognized certificates from AIRA in collaboration with industry partners.</p>
          </div>

          {/* Card 4 */}
          <div className="nep-card perks-card">
            <div className="nep-card-number">04</div>
            <div className="perks-icon"><Briefcase size={28} /></div>
            <h3 className="nep-card-title">Internship Opportunities</h3>
            <p className="nep-card-desc">Top performers get internship opportunities with our industry partners and real-world exposure.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
