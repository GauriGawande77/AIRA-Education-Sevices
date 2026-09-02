import React, { useState } from 'react';
import { Star, Heart, ShoppingBag } from 'lucide-react';

export const productsData = [
  {
    id: 'aira-kit-101',
    name: 'AIRA Autonomous 4WD AI Rover Kit',
    category: 'robotics',
    categoryLabel: 'Robotics & AI',
    level: 'All Ages / Grade 6-12',
    rating: 4.9,
    reviewsCount: 342,
    price: 3499,
    originalPrice: 4999,
    badge: '🔥 Bestseller',
    desc: 'Dual-core ESP32 rover equipped with ultrasonic obstacle avoidance, line-following sensors, Bluetooth mobile app & Python SDK.',
    iconColor: '#d97706',
    svgGraphic: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '120px', height: '120px' }}>
        <rect x="20" y="30" width="60" height="40" rx="8" fill="var(--bg-primary)" stroke="var(--accent-gold)" strokeWidth="3"/>
        <circle cx="28" cy="74" r="10" fill="var(--bg-secondary)" stroke="var(--accent-gold)" strokeWidth="3"/>
        <circle cx="72" cy="74" r="10" fill="var(--bg-secondary)" stroke="var(--accent-gold)" strokeWidth="3"/>
        <circle cx="28" cy="26" r="10" fill="var(--bg-secondary)" stroke="var(--accent-gold)" strokeWidth="3"/>
        <circle cx="72" cy="26" r="10" fill="var(--bg-secondary)" stroke="var(--accent-gold)" strokeWidth="3"/>
        <circle cx="50" cy="46" r="12" fill="var(--accent-gold)" fillOpacity="0.2" stroke="var(--accent-gold)" strokeWidth="2"/>
        <path d="M44 46h12M50 40v12" stroke="var(--accent-gold)" strokeWidth="2"/>
      </svg>
    )
  },
  {
    id: 'aira-kit-102',
    name: 'VisionAI Edge Computer Vision Kit',
    category: 'ai',
    categoryLabel: 'Artificial Intelligence',
    level: 'Intermediate / Grade 8+',
    rating: 4.85,
    reviewsCount: 198,
    price: 5299,
    originalPrice: 6999,
    badge: '⚡ AI-Powered',
    desc: 'Real-time object classification, face recognition, and gesture control kit with integrated 5MP HD camera module & neural accelerator.',
    iconColor: '#2563eb',
    svgGraphic: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '120px', height: '120px' }}>
        <rect x="18" y="20" width="64" height="60" rx="10" fill="var(--bg-primary)" stroke="var(--accent-sapphire-light)" strokeWidth="3"/>
        <circle cx="50" cy="50" r="18" fill="var(--bg-secondary)" stroke="var(--accent-sapphire-light)" strokeWidth="3"/>
        <circle cx="50" cy="50" r="8" fill="var(--accent-gold)"/>
        <circle cx="70" cy="30" r="3" fill="#ec4899"/>
        <path d="M28 80l44 0" stroke="var(--accent-sapphire-light)" strokeWidth="2" strokeDasharray="4"/>
      </svg>
    )
  },
  {
    id: 'aira-kit-103',
    name: 'Smart Agro & IoT Weather Lab Kit',
    category: 'iot',
    categoryLabel: 'IoT & Smart Tech',
    level: 'Beginner / Grade 5+',
    rating: 4.92,
    reviewsCount: 260,
    price: 2799,
    originalPrice: 3899,
    badge: '🌱 Eco STEM',
    desc: 'Build smart cloud-connected irrigation systems with soil moisture, DHT11 temp/humidity sensors, OLED telemetry & IoT dashboards.',
    iconColor: '#059669',
    svgGraphic: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '120px', height: '120px' }}>
        <path d="M50 15c-16 0-30 14-30 30 0 22 30 45 30 45s30-23 30-45c0-16-14-30-30-30z" fill="var(--bg-primary)" stroke="var(--accent-emerald)" strokeWidth="3"/>
        <circle cx="50" cy="45" r="10" fill="var(--bg-secondary)" stroke="var(--accent-emerald)" strokeWidth="2"/>
        <path d="M50 35v20M40 45h20" stroke="var(--accent-emerald)" strokeWidth="2"/>
      </svg>
    )
  },
  {
    id: 'aira-kit-104',
    name: 'AeroDrone Quad-Flight DIY Engineering Kit',
    category: 'drone',
    categoryLabel: 'Drone Aviation',
    level: 'Advanced / Grade 9-12',
    rating: 4.95,
    reviewsCount: 144,
    price: 6499,
    originalPrice: 8999,
    badge: '✈️ Flight Certified',
    desc: 'Carbon-fiber frame quadcopter with high-RPM coreless motors, 6-axis gyro flight stabilization, 2.4GHz transmitter and crash-resilient chassis.',
    iconColor: '#d97706',
    svgGraphic: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '120px', height: '120px' }}>
        <path d="M25 25L75 75M75 25L25 75" stroke="var(--accent-gold)" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="50" cy="50" r="14" fill="var(--bg-primary)" stroke="var(--accent-gold)" strokeWidth="3"/>
        <ellipse cx="25" cy="25" rx="14" ry="5" fill="var(--accent-gold)" fillOpacity="0.3" stroke="var(--accent-gold)" strokeWidth="2"/>
        <ellipse cx="75" cy="25" rx="14" ry="5" fill="var(--accent-gold)" fillOpacity="0.3" stroke="var(--accent-gold)" strokeWidth="2"/>
        <ellipse cx="25" cy="75" rx="14" ry="5" fill="var(--accent-gold)" fillOpacity="0.3" stroke="var(--accent-gold)" strokeWidth="2"/>
        <ellipse cx="75" cy="75" rx="14" ry="5" fill="var(--accent-gold)" fillOpacity="0.3" stroke="var(--accent-gold)" strokeWidth="2"/>
      </svg>
    )
  },
  {
    id: 'aira-kit-105',
    name: 'AIRA Neo 3D Printer & Prototyping Lab',
    category: '3d-printing',
    categoryLabel: '3D Prototyping',
    level: 'High School & Makers',
    rating: 4.88,
    reviewsCount: 92,
    price: 18499,
    originalPrice: 23999,
    badge: '🖨️ Precision Maker',
    desc: 'Silent stepper motor 3D printer with heated magnetic build plate, auto bed-leveling, eco-friendly PLA filament starter kit and CAD guide.',
    iconColor: '#ec4899',
    svgGraphic: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '120px', height: '120px' }}>
        <rect x="20" y="20" width="60" height="60" rx="6" fill="var(--bg-primary)" stroke="#ec4899" strokeWidth="3"/>
        <path d="M20 70h60" stroke="#f472b6" strokeWidth="3"/>
        <rect x="42" y="30" width="16" height="16" fill="#ec4899" stroke="#f472b6" strokeWidth="2"/>
        <path d="M50 46v14" stroke="var(--accent-gold)" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 'aira-kit-106',
    name: 'Bionic Junior STEM Hand & Mechatronics',
    category: 'stem',
    categoryLabel: 'STEM Juniors',
    level: 'Kids / Grade 3-7',
    rating: 4.97,
    reviewsCount: 410,
    price: 1899,
    originalPrice: 2699,
    badge: '🏆 Kid-Friendly',
    desc: 'Tension cable articulated mechanical hand teaching anatomy, mechanical levers, tension physics and DIY robotics without soldering.',
    iconColor: '#059669',
    svgGraphic: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '120px', height: '120px' }}>
        <rect x="35" y="55" width="30" height="30" rx="6" fill="var(--bg-primary)" stroke="var(--accent-emerald)" strokeWidth="3"/>
        <rect x="30" y="25" width="8" height="28" rx="4" fill="var(--bg-secondary)" stroke="var(--accent-emerald)" strokeWidth="2"/>
        <rect x="42" y="15" width="8" height="38" rx="4" fill="var(--bg-secondary)" stroke="var(--accent-emerald)" strokeWidth="2"/>
        <rect x="54" y="20" width="8" height="33" rx="4" fill="var(--bg-secondary)" stroke="var(--accent-emerald)" strokeWidth="2"/>
        <rect x="66" y="30" width="8" height="23" rx="4" fill="var(--bg-secondary)" stroke="var(--accent-emerald)" strokeWidth="2"/>
      </svg>
    )
  }
];

export default function ProductCatalog({ onAddToCart, wishlist, onToggleWishlist, onSoundPlay }) {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tech Kits' },
    { id: 'robotics', label: 'Robotics' },
    { id: 'ai', label: 'AI & Vision' },
    { id: 'iot', label: 'IoT & Smart Tech' },
    { id: 'drone', label: 'Drone Aviation' },
    { id: '3d-printing', label: '3D Printing' },
    { id: 'stem', label: 'STEM Juniors' }
  ];

  const filteredProducts = filter === 'all' ? productsData : productsData.filter((p) => p.category === filter);

  return (
    <section className="section-padding" id="kits" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Shop & Equip</span>
          <h2 className="section-title">
            Industry-Grade <span className="gradient-text">Educational Kits</span>
          </h2>
          <p className="section-subtitle">
            Precision engineering components, comprehensive video manuals, and Python/C++ libraries included with every kit.
          </p>
        </div>

        {/* Category Filters */}
        <div className="store-filter-bar" role="tablist">
          {categories.map((c) => (
            <button
              key={c.id}
              className={`filter-pill ${filter === c.id ? 'active' : ''}`}
              onClick={() => {
                setFilter(c.id);
                if (onSoundPlay) onSoundPlay('click');
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="products-grid">
          {filteredProducts.map((product) => {
            const isWished = wishlist.has(product.id);
            return (
              <article key={product.id} className="product-card">
                <div className="product-media-box">
                  <span className="product-badge">{product.badge}</span>
                  <button
                    className="product-wish-button"
                    onClick={() => {
                      onToggleWishlist(product.id);
                      if (onSoundPlay) onSoundPlay('click');
                    }}
                    aria-label="Wishlist"
                  >
                    <Heart
                      size={17}
                      fill={isWished ? 'var(--accent-rose)' : 'none'}
                      color={isWished ? 'var(--accent-rose)' : 'var(--text-muted)'}
                    />
                  </button>
                  <div>{product.svgGraphic}</div>
                </div>

                <div className="product-details">
                  <span className="product-category-label">
                    {product.categoryLabel} • {product.level}
                  </span>
                  <h3 className="product-title">{product.name}</h3>

                  <div className="product-rating">
                    <Star size={15} fill="#f59e0b" color="#f59e0b" />
                    <strong>{product.rating}</strong>
                    <span style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>({product.reviewsCount} reviews)</span>
                  </div>

                  <p className="product-desc">{product.desc}</p>

                  <div className="product-footer">
                    <div className="product-price-box">
                      <span className="price-original">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                      <span className="price-current">₹{product.price.toLocaleString('en-IN')}</span>
                    </div>

                    <button
                      className="add-cart-btn"
                      onClick={() => {
                        onAddToCart(product);
                        if (onSoundPlay) onSoundPlay('addCart');
                      }}
                    >
                      <ShoppingBag size={16} />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
