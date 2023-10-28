import Lenis from '@studio-freight/lenis';
import type { ReactNode } from 'react';
import React, { useEffect } from 'react';

interface ScrollComponentProps {
  children: ReactNode;
}

const ScrollComponent = ({ children }: ScrollComponentProps) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.2,
      easing: (t) => (t === 1 ? 1 : 1 - 2 ** (-10 * t)),
      smoothTouch: false,
      touchMultiplier: 2,
    });

    const handleScroll = () => {
      // Your scroll event code here
    };

    lenis.on('scroll', handleScroll);

    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      // Cleanup event listener and any resources if needed
      lenis.off('scroll', handleScroll);
    };
  }, []); // Run this effect only once

  return <div>{children}</div>;
};

export default ScrollComponent;
