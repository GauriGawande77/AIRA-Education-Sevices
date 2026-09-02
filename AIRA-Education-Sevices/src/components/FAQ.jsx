import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ({ onSoundPlay }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What age groups are AIRA educational kits suitable for?',
      a: 'Our kits are organized by tier: Junior STEM kits are crafted for Grade 3-6 (Ages 8-11), Intermediate Robotics & IoT kits are suited for Grade 6-10 (Ages 11-15), and Advanced AI, Drones, & 3D Prototyping kits serve Grade 10-12, college students, and makers.'
    },
    {
      q: 'Do students need prior coding or soldering experience?',
      a: 'No prior experience is necessary. All beginner and intermediate kits are 100% solder-free with modular quick-connect jumper cables. We provide intuitive block coding environments that smoothly bridge into standard Python and C++.'
    },
    {
      q: 'What is your delivery timeframe and shipping policy across India?',
      a: 'We provide express door-to-door delivery across all major Indian PIN codes within 2-5 business days. Orders above ₹999 qualify for 100% FREE express shipping.'
    },
    {
      q: 'What warranty and part replacement support is provided?',
      a: 'Every AIRA kit comes with a 6-Month Hassle-Free Replacement Warranty on all electronic microcontrollers, sensors, and actuators. Institutional school labs receive a 1-Year comprehensive maintenance plan.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
    if (onSoundPlay) onSoundPlay('click');
  };

  return (
    <section className="section-padding" id="faq" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Got Questions?</span>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about our kits, delivery across India, and school partnerships.
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="luxury-card"
                style={{ padding: '0', overflow: 'hidden', cursor: 'pointer' }}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    padding: '22px 26px',
                    textAlign: 'left',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      color: 'var(--accent-gold)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </button>
                {isOpen && (
                  <div style={{ padding: '0 26px 22px', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
