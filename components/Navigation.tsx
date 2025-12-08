import React from 'react';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
];

export const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 bg-white/30 backdrop-blur-md px-6 py-3 rounded-full border border-white/40 shadow-sm hidden md:block">
      <ul className="flex gap-8">
        {links.map((link) => (
          <li key={link.name}>
            <a 
              href={link.href} 
              className="font-serif text-morandi-charcoal hover:text-morandi-clay transition-colors text-lg italic tracking-wide"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};