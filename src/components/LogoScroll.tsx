import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'Archana', url: '/logos/archana.png' },
  { name: 'Aida', url: '/logos/aida.png' },
  { name: 'GIF', url: '/logos/GIF.png' },
  { name: 'Coldmonk', url: '/logos/coldmonk.png' },
  { name: 'das', url: '/logos/das.png' },
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
              duration: 25, 
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={index} 
              /* Fixed dimensions to prevent gaps and keep sizes consistent */
              className="flex-shrink-0 flex items-center justify-center w-48 h-24 mx-10"
            >
              <img 
                src={logo.url} 
                alt={logo.name} 
                /* REMOVED: 'grayscale' and 'opacity-60' 
                   ADDED: Full color is now visible at all times 
                */
                className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-300 hover:scale-110" 
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