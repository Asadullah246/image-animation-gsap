import { gsap } from 'gsap';
import React, { useState } from 'react';

import LogoWhite from './atoms/LogoWhite';

const TopNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    // Toggle the menu state
    setIsMenuOpen((prev) => !prev);

    if (isMenuOpen) {
      // Close the menu
      gsap.to('#menuOverlay', {
        duration: 0.3,
        opacity: 0,
        pointerEvents: 'none',
      });
    } else {
      // Open the menu
      gsap.to('#menuOverlay', {
        duration: 0.3,
        opacity: 1,
        pointerEvents: 'all',
      });
    }
  };
  return (
    <nav className="fixed top-0 flex w-full items-center justify-between bg-transparent p-4 text-white">
      <div className="flex items-center">
        <LogoWhite />
      </div>

      <div
        className="block"
        onClick={toggleMenu}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            toggleMenu();
          }
        }}
        role="button"
        tabIndex={0}
      >
        <p>Lorem</p>
      </div>
      {isMenuOpen && (
        <div id="menuOverlay" className="fixed inset-0 z-40 bg-black">
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <ul>
                <li>Menu Item 1</li>
                <li>Menu Item 2</li>
                <li>Menu Item 3</li>
                <li>Menu Item 4</li>
                <li>Menu Item 5</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default TopNav;
