import React, { useState } from 'react';
import { Cpu, Send, Globe, Share2, Mail, Phone } from 'lucide-react';

export default function Footer({ onToast }) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    if (onToast) onToast('Thank you for subscribing to AIRA STEM Newsletter! 🚀');
    setEmail('');
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div>
            <div className="brand-logo" style={{ marginBottom: '18px' }}>
              <div className="brand-icon-box">
                <Cpu size={24} />
              </div>
              <div>
                <span className="brand-title">AIRA <span className="gradient-text">EDUCATION</span></span>
                <span className="brand-subtitle">Services & STEM Labs</span>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '24px', maxWidth: '340px' }}>
              Inspiring the next generation of engineers, roboticists, and innovators across India through hands-on educational technology and turnkey school lab solutions.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#" className="icon-button" aria-label="Global Web"><Globe size={18} /></a>
              <a href="#" className="icon-button" aria-label="Share"><Share2 size={18} /></a>
              <a href="mailto:support@airaedu.in" className="icon-button" aria-label="Email"><Mail size={18} /></a>
              <a href="tel:+919876543210" className="icon-button" aria-label="Call"><Phone size={18} /></a>
            </div>
          </div>

          {/* Disciplines */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-main)' }}>Disciplines</h4>
            <ul className="footer-links">
              <li><a href="#pillars">Robotics & Mechatronics</a></li>
              <li><a href="#pillars">AI & Computer Vision</a></li>
              <li><a href="#pillars">IoT & Smart Agro Labs</a></li>
              <li><a href="#pillars">Drone Aviation</a></li>
              <li><a href="#pillars">3D Rapid Prototyping</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-main)' }}>Institutions</h4>
            <ul className="footer-links">
              <li><a href="#institutions">Atal Tinkering Labs (ATL)</a></li>
              <li><a href="#institutions">NEP 2020 Curriculum</a></li>
              <li><a href="#institutions">Faculty Development</a></li>
              <li><a href="#institutions">School Robotics Leagues</a></li>
              <li><a href="#institutions">Bulk Institutional Orders</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-main)' }}>Innovation Hub</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '10px' }}>
              📍 AIRA Education & Services Innovation Centre,<br />
              Pune / Mumbai Tech Corridor, Maharashtra, India
            </p>
            <p style={{ color: 'var(--accent-gold-dark)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '16px' }}>
              📧 support@airaedu.in | 📞 +91 98765 43210
            </p>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                placeholder="Enter school email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                style={{ fontSize: '0.85rem', padding: '8px 12px' }}
                required
              />
              <button type="submit" className="btn btn-luxury-gold btn-sm" aria-label="Subscribe">
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>&copy; 2026 AIRA Education & Services. All Rights Reserved.</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>GST Verification</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
