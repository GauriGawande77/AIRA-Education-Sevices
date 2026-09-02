import React from 'react';
import { Bot, BrainCircuit, Wifi, Navigation, Printer, Code2 } from 'lucide-react';

export default function Pillars() {
  const pillars = [
    {
      icon: Bot,
      title: 'Robotics & Mechatronics',
      desc: 'Design, wire, and program autonomous rovers, robotic arms, line followers, and bionic mechanisms with multi-sensor telemetry.',
      tags: ['ESP32', 'Arduino', 'Servo Kinematics', 'BLE Telemetry']
    },
    {
      icon: BrainCircuit,
      title: 'Artificial Intelligence & ML',
      desc: 'Deploy Edge AI computer vision models for object detection, speech processing, and gesture-driven robotics in real-time.',
      tags: ['Edge AI', 'OpenCV', 'Neural Nets', 'Python SDK']
    },
    {
      icon: Wifi,
      title: 'IoT & Smart Automation',
      desc: 'Build cloud-connected smart agriculture, weather stations, and home automation systems with real-time web telemetry.',
      tags: ['MQTT', 'Cloud Dashboards', 'Sensors', 'WiFi / BLE']
    },
    {
      icon: Navigation,
      title: 'Drone & Aerial Aviation',
      desc: 'Master aerodynamics, quadcopter assembly, 6-axis flight stabilization, autonomous waypoint navigation, and safety regulations.',
      tags: ['Quadcopters', 'Flight Dynamics', 'PID Tuning', 'Transmitters']
    },
    {
      icon: Printer,
      title: '3D Printing & Prototyping',
      desc: 'Turn digital concepts into physical engineering reality using 3D CAD modeling, slicing software, and precision filament printing.',
      tags: ['Tinkercad', 'Fusion 360', 'G-Code', 'PLA Prototyping']
    },
    {
      icon: Code2,
      title: 'Junior STEM & Coding',
      desc: 'Visual drag-and-drop block coding, interactive electronics, and problem-solving fundamentals crafted specifically for early learners.',
      tags: ['Blockly / Scratch', 'Logic Gates', 'DIY Mechanics', 'Gamified STEM']
    }
  ];

  return (
    <section className="section-padding" id="pillars">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Core Disciplines</span>
          <h2 className="section-title">
            Comprehensive <span className="gradient-text">STEM & Robotics</span> Ecosystem
          </h2>
          <p className="section-subtitle">
            From introductory block coding to advanced computer vision and rapid prototyping, our structured curriculum ignites curiosity at every grade level.
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="luxury-card">
                <div className="pillar-icon-box">
                  <Icon size={30} />
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
                <div className="pillar-tags">
                  {pillar.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
