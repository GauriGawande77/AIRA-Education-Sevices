import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      text: "AIRA Education revamped our school's ATL lab completely. The autonomous rover and AI vision modules gave our 9th graders the confidence to compete and win at the state science olympiad!",
      name: "Rajesh Deshmukh",
      role: "Principal, Pune Model High School",
      initials: "RD"
    },
    {
      text: "My 12-year-old daughter assembled the ESP32 IoT weather kit over the weekend. The visual manuals and video tutorials made complex electronics effortless and intuitive.",
      name: "Pooja Sharma",
      role: "Parent & STEM Mentor, Bengaluru",
      initials: "PS"
    },
    {
      text: "The quality of the sensors and motors is far superior to generic components. Plus, the Python library documentation is rock solid for our engineering freshmen.",
      name: "Prof. Amit Kulkarni",
      role: "Robotics Lab Head, Tech Institute Mumbai",
      initials: "AK"
    }
  ];

  return (
    <section className="section-padding" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">
            Trusted by Educators, <span className="gradient-text">Loved by Students</span>
          </h2>
          <p className="section-subtitle">
            Read how AIRA's hands-on robotics kits have transformed learning across India.
          </p>
        </div>

        <div className="pillars-grid">
          {reviews.map((rev, idx) => (
            <div key={idx} className="luxury-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '0.98rem', marginBottom: '24px', lineHeight: '1.65' }}>
                "{rev.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'var(--grad-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#fff' }}>
                  {rev.initials}
                </div>
                <div>
                  <h5 style={{ fontSize: '1rem', fontWeight: 700 }}>{rev.name}</h5>
                  <p style={{ fontSize: '0.8rem', color: 'var(--accent-gold-dark)', fontFamily: 'var(--font-mono)' }}>{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
