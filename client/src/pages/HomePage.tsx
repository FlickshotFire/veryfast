
import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import WorkAreas from '../components/sections/WorkAreas';
import JholaGallery from '../components/sections/JholaGallery';
import Testimonials from '../components/sections/Testimonials';
import PledgeSystem from '../components/sections/PledgeSystem';
import Blog from '../components/sections/Blog';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <WorkAreas />
      <JholaGallery />
      <Testimonials />
      <PledgeSystem />
      <Blog />
    </div>
  );
};

export default HomePage;
