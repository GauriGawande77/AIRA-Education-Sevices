import React from 'react';
import { MapPin, Phone, Mail, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstagramIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const LinkedinIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  return (
    <footer className="site-footer" style={{ background: '#111522', padding: '70px 0 50px', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>
          
          {/* Column 1: Brand Info */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <img 
                src="/aira-logo.png" 
                alt="AIRA Education Logo" 
                style={{ height: '48px', background: '#ffffff', padding: '6px 16px', borderRadius: '10px' }} 
              />
            </div>
            <p style={{ color: '#8B949E', fontSize: '0.95rem', marginBottom: '25px', lineHeight: '1.6' }}>
              Empowering Indian innovators with NEP 2020-aligned AI, IoT & Robotics STEM education.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={18} style={{ color: '#2563eb', flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Gaulkhed Road, Shegaon, Dist. Buldhana, Maharashtra — 444203
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={18} style={{ color: '#2563eb', flexShrink: 0 }} />
                <span style={{ color: '#d1d5db', fontSize: '0.9rem' }}>
                  +91 70206 76423 | +91 78210 84194
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} style={{ color: '#2563eb', flexShrink: 0 }} />
                <span style={{ color: '#d1d5db', fontSize: '0.9rem' }}>
                  airaeduandservices@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div style={{ paddingLeft: '10%' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '24px', color: '#ffffff' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li><Link to="/" style={{ color: '#8B949E', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color='#2563eb'} onMouseOut={(e) => e.target.style.color='#8B949E'}>Home</Link></li>
              <li><Link to="/nep2020" style={{ color: '#8B949E', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color='#2563eb'} onMouseOut={(e) => e.target.style.color='#8B949E'}>NEP 2020 Alignment</Link></li>
              <li><Link to="/courses" style={{ color: '#8B949E', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color='#2563eb'} onMouseOut={(e) => e.target.style.color='#8B949E'}>Technology Programs</Link></li>
              <li><Link to="/about" style={{ color: '#8B949E', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color='#2563eb'} onMouseOut={(e) => e.target.style.color='#8B949E'}>Student Benefits</Link></li>
              <li><Link to="/courses" style={{ color: '#8B949E', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color='#2563eb'} onMouseOut={(e) => e.target.style.color='#8B949E'}>Our Courses</Link></li>
              <li><Link to="/contact" style={{ color: '#8B949E', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color='#2563eb'} onMouseOut={(e) => e.target.style.color='#8B949E'}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Connect With AIRA */}
          <div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '24px', color: '#ffffff' }}>Connect With AIRA</h4>
            <div style={{ display: 'flex', gap: '14px', marginBottom: '32px' }}>
              <a href="#" style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.1)', border: '1px solid rgba(37, 99, 235, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.background='#2563eb'; e.currentTarget.style.color='#ffffff'; }} onMouseOut={(e) => { e.currentTarget.style.background='rgba(37, 99, 235, 0.1)'; e.currentTarget.style.color='#2563eb'; }}>
                <InstagramIcon size={18} />
              </a>
              <a href="#" style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.1)', border: '1px solid rgba(37, 99, 235, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.background='#2563eb'; e.currentTarget.style.color='#ffffff'; }} onMouseOut={(e) => { e.currentTarget.style.background='rgba(37, 99, 235, 0.1)'; e.currentTarget.style.color='#2563eb'; }}>
                <YoutubeIcon size={18} />
              </a>
              <a href="#" style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.1)', border: '1px solid rgba(37, 99, 235, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.background='#2563eb'; e.currentTarget.style.color='#ffffff'; }} onMouseOut={(e) => { e.currentTarget.style.background='rgba(37, 99, 235, 0.1)'; e.currentTarget.style.color='#2563eb'; }}>
                <LinkedinIcon size={18} />
              </a>
            </div>
            
            <button style={{ 
              background: '#2563eb', 
              color: '#ffffff', 
              border: 'none', 
              padding: '14px 28px', 
              borderRadius: '30px', 
              fontSize: '0.95rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(37, 99, 235, 0.25)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 12px 25px rgba(37, 99, 235, 0.4)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 8px 20px rgba(37, 99, 235, 0.25)'; }}
            >
              <Download size={18} />
              Download Brochure
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
