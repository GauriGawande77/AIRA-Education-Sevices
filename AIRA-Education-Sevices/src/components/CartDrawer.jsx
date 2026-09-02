import React, { useState } from 'react';
import { ShoppingBag, X, Trash2, ShieldCheck, Box } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onRemoveItem,
  discount,
  onApplyCoupon,
  onSoundPlay,
  onToast
}) {
  const [couponCode, setCouponCode] = useState('');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = 999;
  const shippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const grandTotal = Math.max(0, subtotal - discount);

  const handleApply = (e) => {
    e.preventDefault();
    if (onApplyCoupon(couponCode.trim().toUpperCase())) {
      if (onSoundPlay) onSoundPlay('success');
    } else {
      if (onSoundPlay) onSoundPlay('click');
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      if (onToast) onToast('Your cart is empty. Please add educational kits first!');
      return;
    }
    if (onSoundPlay) onSoundPlay('success');
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 }
    });
    if (onToast) onToast('🎉 Verified Order! Connecting to Indian Secure Payment Gateway (UPI / NetBanking)...');
  };

  return (
    <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <aside className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Cart Header */}
        <div className="cart-header">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={20} style={{ color: 'var(--accent-gold)' }} />
            <span>Your Cart ({cart.reduce((s, i) => s + i.quantity, 0)})</span>
          </h3>
          <button
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div style={{ background: 'var(--bg-secondary)', padding: '14px 24px', borderBottom: '1px solid var(--border-subtle)', fontSize: '0.82rem' }}>
          <div>
            {subtotal >= freeShippingThreshold ? (
              <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>🎉 You unlocked FREE Express Delivery across India!</span>
            ) : (
              <span>Add <strong>₹{(freeShippingThreshold - subtotal).toLocaleString('en-IN')}</strong> more for FREE Shipping!</span>
            )}
          </div>
          <div style={{ height: '6px', background: 'rgba(0,0,0,0.08)', borderRadius: '999px', marginTop: '6px', overflow: 'hidden' }}>
            <div
              style={{
                height: '100%',
                width: `${shippingProgress}%`,
                background: 'linear-gradient(135deg, #059669, #10b981)',
                transition: 'width 0.3s ease'
              }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="cart-items-list">
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '50px 20px', color: 'var(--text-muted)' }}>
              <Box size={48} style={{ color: 'var(--border-subtle)', margin: '0 auto 12px' }} />
              <p>Your educational kit cart is empty.</p>
              <button
                className="btn btn-luxury-gold btn-sm"
                style={{ marginTop: '16px' }}
                onClick={onClose}
              >
                Explore Robotics Kits
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item-row">
                <div style={{ width: '56px', height: '56px', borderRadius: '8px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)' }}>
                  <Box size={24} />
                </div>
                <div style={{ flexGrow: 1 }}>
                  <h4 style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '4px' }}>
                    {item.name}
                  </h4>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-gold-dark)', fontWeight: 700 }}>
                    ₹{item.price.toLocaleString('en-IN')}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                    <button
                      className="qty-btn"
                      onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', padding: '0 4px' }}>
                      {item.quantity}
                    </span>
                    <button
                      className="qty-btn"
                      onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => onRemoveItem(item.id)}
                  style={{ background: 'transparent', border: 'none', color: 'var(--text-dim)', cursor: 'pointer' }}
                  title="Remove item"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Cart Footer */}
        {cart.length > 0 && (
          <div className="cart-footer">
            <form onSubmit={handleApply} style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
              <input
                type="text"
                placeholder="Promo code (e.g. AIRAFIRST)"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="form-control"
                style={{ fontSize: '0.85rem', padding: '8px 12px', textTransform: 'uppercase' }}
              />
              <button type="submit" className="btn btn-luxury-outline btn-sm">Apply</button>
            </form>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.95rem' }}>
              <span>Subtotal:</span>
              <span style={{ color: 'var(--accent-gold-dark)', fontWeight: 700 }}>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>

            {discount > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.95rem', color: 'var(--accent-emerald)' }}>
                <span>Coupon Discount:</span>
                <span>-₹{discount.toLocaleString('en-IN')}</span>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '1.2rem', fontWeight: 800 }}>
              <span>Grand Total:</span>
              <span style={{ color: 'var(--text-main)' }}>₹{grandTotal.toLocaleString('en-IN')}</span>
            </div>

            <button
              className="btn btn-luxury-gold btn-lg"
              style={{ width: '100%' }}
              onClick={handleCheckout}
            >
              <ShieldCheck size={18} />
              <span>Proceed to Secure Payment (UPI/Card)</span>
            </button>

            <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '0.74rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <span>🔒 256-Bit SSL Encrypted</span>
              <span>•</span>
              <span>UPI / RuPay / NetBanking</span>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
