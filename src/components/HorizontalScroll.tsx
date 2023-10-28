import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollComponent: React.FC = () => {
  const sectionPinRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => { 
  //   const sectionPin = sectionPinRef?.current;

  //   if (sectionPin) {
  //     const containerAnimation = gsap.to(sectionPin, {
  //       scrollTrigger: {
  //         trigger: sectionPin,
  //         start: 'top top',
  //         end: () => `+=${sectionPin.offsetWidth}`,
  //         pin: true,
  //         scrub: true,
  //       },
  //       x: () =>
  //         `-${sectionPin.scrollWidth - document.documentElement.clientWidth}px`,
  //       ease: 'none',
  //     });

  //     return () => {
  //       containerAnimation.kill();
  //     };
  //   }

  // }, []);



  return (
    <div className="flex h-screen flex-col">
      <div
        id="section_to-pin"
        className="flex h-screen items-center justify-center bg-gray-200"
      >
        Scroll down to trigger horizontal scrolling
      </div>
      <div
        id="section_pin"
        ref={sectionPinRef}
        className="flex-none overflow-x-scroll whitespace-nowrap"
      >
        <div className="h-screen w-screen bg-blue-400">Image 1</div>
        <div className="h-screen w-screen bg-red-400">Image 2</div>
        <div className="h-screen w-screen bg-green-400">Image 3</div>
        {/* Add more image divs with Tailwind CSS classes as needed */}
      </div>
    </div>
  );
};

export default HorizontalScrollComponent;
