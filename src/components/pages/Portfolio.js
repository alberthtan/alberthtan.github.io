import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import PortfolioSlider from '../Slider';

export default function Portfolio() {
  return (
    <>
      <h1 className='portfolio'>Portfolio</h1>;
      <PortfolioSlider />
      <Footer />
    </>
  );
}