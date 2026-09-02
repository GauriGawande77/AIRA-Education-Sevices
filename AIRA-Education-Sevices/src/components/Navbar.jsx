import React, { useState, useEffect } from 'react';
import { Cpu, ShoppingCart, Volume2, VolumeX, Sparkles, Sun, Moon, Crown } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, theme, onToggleTheme, soundEnabled, onToggleSound }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Brand Logo */}
          <a href="#hero" className="brand-logo">
            <div className="brand-icon-box">
              <Cpu size={24} />
              <span className="brand-badge-pulse" />
            </div>
            <div>
              <span className="brand-title">AIRA <span className="gradient-text">EDUCATION</span></span>
              <span className="brand-subtitle">Services & STEM Labs</span>
            </div>
          </a>

          {/* Nav Links */}
          <ul className="nav-links">
            <li><a href="#hero" className="nav-link">Home</a></li>
            <li><a href="#pillars" className="nav-link">Pillars</a></li>
            <li><a href="#kits" className="nav-link">STEM Kits</a></li>
            <li><a href="#simulator" className="nav-link">3D Virtual Lab</a></li>
            <li><a href="#journey" className="nav-link">Learning Path</a></li>
            <li><a href="#institutions" className="nav-link">Schools & ATL</a></li>
            <li><a href="#faq" className="nav-link">FAQ</a></li>
          </ul>

          {/* Actions: Theme Toggle, Sound Toggle, Cart Drawer, Demo CTA */}
          <div className="nav-actions">
            {/* Theme Toggle (Luxury Light / Cyber Dark) */}
            <button
              className="icon-button"
              onClick={onToggleTheme}
              title={`Switch to ${theme === 'luxury-light' ? 'Cyber Dark' : 'Luxury Light'} Theme`}
              aria-label="Toggle Theme"
            >
              {theme === 'luxury-light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Sound Toggle */}
            <button
              className="icon-button"
              onClick={onToggleSound}
              title={soundEnabled ? 'Mute Sound FX' : 'Enable Sound FX'}
              aria-label="Toggle Sound"
            >
              {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>

            {/* Shopping Cart Drawer Trigger */}
            <button
              className="icon-button"
              onClick={onOpenCart}
              title="Open Shopping Cart"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={18} />
              {cartCount > 0 && <span className="cart-count-badge">{cartCount}</span>}
            </button>

            {/* Book Demo CTA */}
            <a href="#institutions" className="btn btn-luxury-gold btn-sm">
              <span>Book Free Demo</span>
              <Sparkles size={15} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
