import React from 'react';
import { PackageOpen, Wrench, Code, Award } from 'lucide-react';

export default function LearningJourney() {
  const steps = [
    {
      num: 1,
      phase: 'Phase 01 • Onboarding',
      title: 'Discover & Unbox Precision Hardware',
      desc: 'Unpack color-coded modular sensors, microcontrollers, laser-cut frames, and pre-crimped wire harnesses engineered for zero-frustration assembly.',
      icon: PackageOpen,
      iconColor: 'var(--accent-gold)'
    },
    {
      num: 2,
      phase: 'Phase 02 • Kinematics',
      title: 'Build, Tinker & Solder-Free Prototyping',
      desc: 'Follow step-by-step interactive 3D instructional guides to assemble chassis, calibrate motors, and route power buses safely.',
      icon: Wrench,
      iconColor: 'var(--accent-sapphire-light)'
    },
    {
      num: 3,
      phase: 'Phase 03 • Intelligence',
      title: 'Code, Calibrate & Train Neural Models',
      desc: 'Write logic in Block coding or Python. Deploy obstacle avoidance algorithms, PID stabilization, and cloud IoT telemetry streams.',
      icon: Code,
      iconColor: 'var(--accent-emerald)'
    },
    {
      num: 4,
      phase: 'Phase 04 • Mastery',
      title: 'Compete, Certify & Showcase Inventions',
      desc: 'Participate in national robotics leagues, earn certified STEM credentials, and present capstone projects to industry mentors.',
      icon: Award,
      iconColor: 'var(--accent-gold)'
    }
  ];

  return (
    <section className="section-padding" id="journey">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Pedagogy & Journey</span>
          <h2 className="section-title">
            The AIRA <span className="gradient-text">Learning Pathway</span>
          </h2>
          <p className="section-subtitle">
            How we guide students from initial excitement to national competition-level engineering prowess.
          </p>
        </div>

        <div className="timeline-track">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="timeline-step">
                <div className="timeline-marker">{step.num}</div>
                <div className="step-content">
                  <div className="luxury-card">
                    <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-gold-dark)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
                      {step.phase}
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '10px' }}>{step.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{step.desc}</p>
                  </div>
                </div>
                <div className="step-media" style={{ display: 'flex', justifyContent: 'center' }}>
                  <Icon size={64} style={{ color: step.iconColor, filter: 'drop-shadow(0 4px 15px rgba(217, 119, 6, 0.25))' }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
