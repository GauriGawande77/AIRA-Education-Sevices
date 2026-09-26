import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/" className="brand-logo" style={{ textDecoration: 'none' }}>
            <img 
              src="/aira-logo.png" 
              alt="AIRA Education Logo" 
              style={{ height: '90px', width: 'auto', objectFit: 'contain' }} 
            />
          </Link>

          {/* Nav Links */}
          <ul className="nav-links">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/nep2020" className="nav-link">NEP 2020</Link></li>
            <li><Link to="/courses" className="nav-link">COURSES</Link></li>
            <li><Link to="/product" className="nav-link">PRODUCT</Link></li>
            <li><Link to="/gallery" className="nav-link">GALLERY</Link></li>
            <li><Link to="/contact" className="nav-link">CONTACT US</Link></li>
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

            {/* Login CTA */}
            <Link to="/login" className="btn btn-sm" style={{ backgroundColor: 'transparent', border: '1px solid var(--accent-gold)', color: 'var(--text-main)' }}>
              <span>Login</span>
            </Link>

            {/* Book Demo CTA */}
            <Link to="/contact" className="btn btn-luxury-gold btn-sm">
              <span>Book Free Demo</span>
              <Sparkles size={15} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
