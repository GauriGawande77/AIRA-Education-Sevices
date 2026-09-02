import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import ProductCatalog from './components/ProductCatalog';
import VirtualLab from './components/VirtualLab';
import LearningJourney from './components/LearningJourney';
import InstitutionalSection from './components/InstitutionalSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function App() {
  // Theme State: 'luxury-light' (default) or 'cyber-dark'
  const [theme, setTheme] = useState('luxury-light');

  // Shopping Cart State
  const [cart, setCart] = useState([
    {
      id: 'aira-kit-101',
      name: 'AIRA Autonomous 4WD AI Rover Kit',
      category: 'Robotics',
      price: 3499,
      originalPrice: 4999,
      quantity: 1
    }
  ]);

  const [wishlist, setWishlist] = useState(new Set());
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [toasts, setToasts] = useState([]);

  const audioCtxRef = useRef(null);

  // Sync theme with HTML attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', theme === 'luxury-light' ? '#fdfbf7' : '#060913');
    }
  }, [theme]);

  // Audio Synthesizer via Web Audio API
  const playSound = (type = 'click') => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current && (window.AudioContext || window.webkitAudioContext)) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioContext();
      }
      const ctx = audioCtxRef.current;
      if (!ctx) return;
      if (ctx.state === 'suspended') ctx.resume();

      if (type === 'click') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
      } else if (type === 'addCart') {
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(587.33, ctx.currentTime);
        gain1.gain.setValueAtTime(0.05, ctx.currentTime);
        gain1.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);
        osc1.connect(gain1);
        gain1.connect(ctx.destination);
        osc1.start();
        osc1.stop(ctx.currentTime + 0.08);

        setTimeout(() => {
          if (!ctx) return;
          const osc2 = ctx.createOscillator();
          const gain2 = ctx.createGain();
          osc2.type = 'sine';
          osc2.frequency.setValueAtTime(880, ctx.currentTime);
          gain2.gain.setValueAtTime(0.05, ctx.currentTime);
          gain2.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.15);
          osc2.connect(gain2);
          gain2.connect(ctx.destination);
          osc2.start();
          osc2.stop(ctx.currentTime + 0.15);
        }, 60);
      } else if (type === 'success') {
        [523.25, 659.25, 783.99].forEach((freq, i) => {
          setTimeout(() => {
            if (!ctx) return;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            gain.gain.setValueAtTime(0.05, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.18);
          }, i * 70);
        });
      }
    } catch (err) {
      // Ignore audio synthesis errors
    }
  };

  // Toast Notification System
  const showToast = (message) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  // Cart Handlers
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          category: product.categoryLabel,
          price: product.price,
          originalPrice: product.originalPrice,
          quantity: 1
        }
      ];
    });
    showToast(`Added "${product.name}" to cart! 🛒`);
    setIsCartOpen(true);
  };

  const handleUpdateQty = (id, newQty) => {
    if (newQty <= 0) {
      setCart((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCart((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const handleRemoveItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    showToast('Removed item from cart');
  };

  const handleApplyCoupon = (code) => {
    if (code === 'AIRAFIRST') {
      setDiscount(500);
      showToast('Coupon "AIRAFIRST" applied! Saved ₹500 🎉');
      return true;
    } else {
      showToast('Invalid Coupon. Try code "AIRAFIRST" for ₹500 OFF');
      return false;
    }
  };

  // Wishlist Toggle
  const handleToggleWishlist = (productId) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(productId)) {
        next.delete(productId);
        showToast('Removed from Wishlist');
      } else {
        next.add(productId);
        showToast('Added to Wishlist! ❤️');
      }
      return next;
    });
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app-root">
      {/* Ambient Luxury Background Orbs */}
      <div className="luxury-ambient-bg" aria-hidden="true">
        <div className="luxury-orb orb-gold-1" />
        <div className="luxury-orb orb-sapphire-2" />
        <div className="luxury-orb orb-emerald-3" />
        <div className="luxury-mesh-overlay" />
      </div>

      {/* Toast Notifications */}
      <div className="toast-container" aria-live="polite">
        {toasts.map((t) => (
          <div key={t.id} className="toast-message">
            <CheckCircle2 size={18} style={{ color: 'var(--accent-gold)' }} />
            <span>{t.message}</span>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <Navbar
        cartCount={totalCartItems}
        onOpenCart={() => setIsCartOpen(true)}
        theme={theme}
        onToggleTheme={() => {
          const nextTheme = theme === 'luxury-light' ? 'cyber-dark' : 'luxury-light';
          setTheme(nextTheme);
          playSound('click');
          showToast(`Switched to ${nextTheme === 'luxury-light' ? '👑 Luxury Light' : '🌌 Cyber Dark'} Theme`);
        }}
        soundEnabled={soundEnabled}
        onToggleSound={() => {
          setSoundEnabled(!soundEnabled);
          showToast(!soundEnabled ? 'Sound FX Enabled 🔊' : 'Sound FX Muted 🔇');
        }}
      />

      {/* Main Content */}
      <main>
        <Hero theme={theme} onSoundPlay={playSound} />
        <Pillars />
        <ProductCatalog
          onAddToCart={handleAddToCart}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onSoundPlay={playSound}
        />
        <VirtualLab onSoundPlay={playSound} onToast={showToast} />
        <LearningJourney />
        <InstitutionalSection onToast={showToast} />
        <Testimonials />
        <FAQ onSoundPlay={playSound} />
      </main>

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        discount={discount}
        onApplyCoupon={handleApplyCoupon}
        onSoundPlay={playSound}
        onToast={showToast}
      />

      {/* Footer */}
      <Footer onToast={showToast} />
    </div>
  );
}
