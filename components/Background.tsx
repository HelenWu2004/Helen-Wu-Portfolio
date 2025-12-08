import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-morandi-base pointer-events-none">
      {/* Abstract Monet-esque blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-morandi-dustyBlue/30 rounded-full blur-[100px] animate-float delay-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-morandi-sage/20 rounded-full blur-[120px] animate-float delay-1000" />
      <div className="absolute top-[40%] right-[10%] w-[40%] h-[40%] bg-morandi-clay/20 rounded-full blur-[80px] animate-float delay-2000" />
      <div className="absolute bottom-[10%] left-[20%] w-[30%] h-[30%] bg-morandi-lavender/40 rounded-full blur-[60px] animate-float delay-3000" />
      
      {/* Texture Overlay for Canvas feel */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
    </div>
  );
};