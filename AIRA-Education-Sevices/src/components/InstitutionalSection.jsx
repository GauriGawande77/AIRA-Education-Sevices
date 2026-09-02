import React, { useState } from 'react';
import { CheckCircle, Calculator, Send } from 'lucide-react';

export default function InstitutionalSection({ onToast }) {
  const [students, setStudents] = useState(150);
  const [tier, setTier] = useState('advanced');

  const ratePerStudent = tier === 'advanced' ? 3200 : tier === 'ai-center' ? 5500 : 1800;
  const totalQuote = students * ratePerStudent;

  const handleProposalSubmit = (e) => {
    e.preventDefault();
    if (onToast) onToast('Thank you! Our Educational Director will contact your institution within 2 hours. 🎓');
  };

  return (
    <section className="section-padding" id="institutions">
      <div className="container">
        <div className="institution-banner">
          <div className="institution-info">
            <span className="section-tag">For Schools & Colleges</span>
            <h2 className="section-title" style={{ fontSize: '2.3rem', marginTop: '12px' }}>
              Turnkey <span className="gradient-text">ATL & STEM Lab</span> Setup Across India
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '24px' }}>
              Equip your institution with complete Atal Tinkering Lab (ATL) hardware packages, continuous mentor support, teacher training workshops, and curriculum aligned with NEP 2020.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-gold)' }} />
                <span>100% compliant with NITI Aayog ATL guidelines</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-gold)' }} />
                <span>Faculty development & master trainer certification included</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle size={18} style={{ color: 'var(--accent-gold)' }} />
                <span>1-Year comprehensive hardware replacement warranty & GST invoices</span>
              </li>
            </ul>
          </div>

          {/* Instant Institutional Cost Calculator */}
          <div className="luxury-card" style={{ padding: '30px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calculator size={20} style={{ color: 'var(--accent-gold)' }} />
              <span>Instant Lab Cost Estimator</span>
            </h3>

            <div className="form-group">
              <label className="form-label">
                Student Cohort Size: <strong style={{ color: 'var(--accent-gold-dark)' }}>{students} Students</strong>
              </label>
              <input
                type="range"
                min="30"
                max="1000"
                step="10"
                value={students}
                onChange={(e) => setStudents(parseInt(e.target.value, 10))}
                style={{ width: '100%', accentColor: 'var(--accent-gold)' }}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="lab-tier">
                Lab Package Tier
              </label>
              <select
                id="lab-tier"
                className="form-control"
                value={tier}
                onChange={(e) => setTier(e.target.value)}
              >
                <option value="starter">Starter STEM Lab (Kits + Core Sensors)</option>
                <option value="advanced">Advanced ATL Robotics & IoT Hub</option>
                <option value="ai-center">Premier AI, Drone & 3D Prototyping Center</option>
              </select>
            </div>

            <div style={{ background: 'rgba(217, 119, 6, 0.08)', border: '1px solid var(--border-active)', borderRadius: 'var(--radius-sm)', padding: '16px', margin: '20px 0', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Estimated Package Value</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--accent-gold-dark)', marginTop: '4px' }}>
                ₹{totalQuote.toLocaleString('en-IN')}
              </div>
              <div style={{ fontSize: '0.74rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>Includes Hardware, Trainer Program & GST Invoices</div>
            </div>

            <button className="btn btn-luxury-gold btn-lg" style={{ width: '100%' }} onClick={handleProposalSubmit}>
              <Send size={16} />
              <span>Request Institutional Proposal</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
