import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'Archana', url: '/logos/archana.png' },
  { name: 'Aida', url: '/logos/aida.png' },
  { name: 'GIF', url: '/logos/GIF.png' },
  { name: 'Coldmonk', url: '/logos/coldmonk.png' },
  { name: 'DAS Energy', url: '/logos/das-energy.svg' },
  { name: 'gentize', url: '/logos/gentize.png' },
  { name: 'rajacater', url: '/logos/rajacater.png' },
  { name: 'reboot', url: '/logos/reboot.png' },
];

const LogoScroll = () => {
  // Triple the array to ensure there's no "empty gap" during the loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="py-10 bg-white overflow-hidden border-y border-zinc-100">
      <div className="container mx-auto px-4 mb-10 text-center">
        <p className="text-zinc-400 font-bold uppercase tracking-[0.3em] text-sm">
          Trusted by Industry Leaders
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex items-center whitespace-nowrap"
          animate={{
            x: [0, -1000], 
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30, 
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 flex items-center justify-center w-56 h-56 mx-6 bg-white border-2 border-zinc-100 rounded-3xl shadow-sm hover:border-primary hover:shadow-md transition-all duration-300 p-8 group cursor-pointer"
            >
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-110" 
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoScroll;