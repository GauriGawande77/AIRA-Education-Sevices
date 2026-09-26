import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './JourneyGallery.css';

export default function JourneyGallery() {
  const scrollRef = useRef(null);

  const images = [
    { title: "Niryo One Robot Arm", subtitle: "Industrial robotic arm exploration session.", url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" },
    { title: "Bambu Lab 3D Printing", subtitle: "Students operating precision 3D printers.", url: "https://images.unsplash.com/photo-1631557876878-a4613c2f0fcd?auto=format&fit=crop&q=80&w=800" },
    { title: "Drone Technology", subtitle: "Drone assembly and flight technology session.", url: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&q=80&w=800" },
    { title: "AI & Neural Networks", subtitle: "Training vision models for autonomous tasks.", url: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800" },
    { title: "IoT Smart City", subtitle: "Building cloud-connected miniature cities.", url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
    { title: "Robotics Hackathon", subtitle: "Annual nationwide student robotics challenge.", url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" },
    { title: "STEM Workshop", subtitle: "Hands-on basic electronics for beginners.", url: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=800" }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 412; // approximate width of one card + gap (380 + 32)
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="journey-gallery-section">
      <div className="journey-header">
        <span className="journey-label">MOMENTS</span>
        <h2 className="journey-title">
          Our Journey <span>Across India</span>
        </h2>
        <p className="journey-subtitle">
          Moments from workshops and training sessions in schools and colleges nationwide.
        </p>
      </div>

      <div className="journey-carousel-wrapper">
        <button className="carousel-btn left-btn" onClick={() => scroll('left')}>
          <ChevronLeft size={24} />
        </button>

        <div className="journey-row-container" ref={scrollRef}>
          {images.map((item, index) => (
            <div className="journey-card" key={index}>
              <img src={item.url} alt={item.title} className="journey-image" />
              <div className="journey-overlay">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-btn right-btn" onClick={() => scroll('right')}>
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
