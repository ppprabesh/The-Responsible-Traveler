"use client";

import React, { useState, useEffect } from 'react';
import { FaCampground, FaFire, FaTint, FaHotTub, FaHiking } from 'react-icons/fa';
import { motion } from "framer-motion";

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState([]);

  const options = [
    { title: "Luxury Tent", description: "Cozy glamping under the stars", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", icon: <FaCampground size={24} className="text-white" /> },
    { title: "Campfire Feast", description: "Gourmet s'mores & stories", image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80", icon: <FaFire size={24} className="text-white" /> },
    { title: "Lakeside Retreat", description: "Private dock & canoe rides", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", icon: <FaTint size={24} className="text-white" /> },
    { title: "Mountain Spa", description: "Outdoor sauna & hot tub", image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80", icon: <FaHotTub size={24} className="text-white" /> },
    { title: "Guided Adventure", description: "Expert-led nature tours", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80", icon: <FaHiking size={24} className="text-white" /> }
  ];

  const handleOptionClick = (index) => { if (index !== activeIndex) setActiveIndex(index); };

  useEffect(() => {
    const timers = [];
    options.forEach((_, i) => {
      const timer = setTimeout(() => setAnimatedOptions(prev => [...prev, i]), 180 * i);
      timers.push(timer);
    });
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div className="relative flex flex-col  pt-8 items-center justify-center min-h-screen bg-[#bbbac2] font-sans text-black  px-4 md:px-8">
      {/* Header Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">Our Trip Styles</h2>
        <p className="mx-auto max-w-2xl text-gray-700 leading-relaxed">
          Comprehensive adventure services designed to give you the most authentic and memorable Himalayan experience.
        </p>
      </motion.div>

      {/* Options Container */}
      <div className="options flex flex-col md:flex-row w-full max-w-[900px] gap-4">
        {options.map((option, index) => (
          <div
            key={index}
            className={`option relative flex flex-col justify-end overflow-hidden rounded-2xl transition-all duration-700 ease-in-out cursor-pointer`}
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-20px)',
              boxShadow: activeIndex === index ? '0 20px 60px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.3)',
              // **Desktop (md+) layout**: flex-grow active card
              flexGrow: activeIndex === index ? 7 : 1,
              minWidth: '60px',
              height: '400px',
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Shadow effect */}
            <div className="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
              style={{
                bottom: activeIndex === index ? '0' : '-40px',
                height: '120px',
                boxShadow: activeIndex === index
                  ? 'inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000'
                  : 'inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000'
              }}
            ></div>

            {/* Label */}
            <div className="label absolute left-0 right-0 bottom-5 flex items-center justify-start h-12 z-2 pointer-events-none px-3 gap-2 w-full">
              <div className="icon min-w-[40px] max-w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[rgba(32,32,32,0.85)] backdrop-blur-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.18)] border-2 border-[#444] flex-shrink-0 flex-grow-0 transition-all duration-200">
                {option.icon}
              </div>
              <div className="info text-white whitespace-pre relative text-sm sm:text-base">
                <div style={{ opacity: activeIndex === index ? 1 : 0, transform: activeIndex === index ? 'translateX(0)' : 'translateX(15px)', transition: 'all 0.5s ease-in-out' }}>
                  <span className="font-bold">{option.title}</span>
                </div>
                <div style={{ opacity: activeIndex === index ? 1 : 0, transform: activeIndex === index ? 'translateX(0)' : 'translateX(15px)', transition: 'all 0.5s ease-in-out' }}>
                  <span className="text-gray-300">{option.description}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive adjustments */}
      <style jsx>{`
        @media (max-width: 768px) {
          .options { flex-direction: column; }
          .option {
            height: 200px !important;
            flex-grow: 1 !important;
            min-width: auto !important;
          }
        }
        @media (max-width: 480px) {
          .option { height: 180px !important; }
          .label { bottom: 1.5rem !important; }
        }
      `}</style>
    </div>
  );
};

export default InteractiveSelector;
