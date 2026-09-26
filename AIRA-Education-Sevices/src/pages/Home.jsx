import React from 'react';
import Hero from '../components/Hero';
import LearningJourneyGrid from '../components/LearningJourneyGrid';
import JourneyGallery from '../components/JourneyGallery';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

export default function Home({ theme, playSound, handleAddToCart, wishlist, handleToggleWishlist, showToast }) {
  return (
    <main>
      <Hero theme={theme} onSoundPlay={playSound} />
      <LearningJourneyGrid />
      <JourneyGallery />
      <Testimonials />
      <FAQ onSoundPlay={playSound} />
    </main>
  );
}
