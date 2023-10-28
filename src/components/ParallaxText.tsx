import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

interface ParallaxTextProps {
  children: React.ReactNode;
}

const ParallaxText: React.FC<ParallaxTextProps> = ({ children }) => {
  const [progress, setProgress] = useState<number>(0);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const boundingBox = h1Ref.current?.getBoundingClientRect();
      if (boundingBox) {
        const elementOffset = boundingBox.top + scrollY;
        const windowHeight = window.innerHeight;
        const progressValue = (elementOffset - scrollY) / windowHeight;

        setProgress(progressValue);
      }
    };

    const moveText = () => {
      const tl = gsap.timeline();
      const distance = 900; // Adjust this value to control the amount of movement

      tl.to(h1Ref.current, {
        x: -progress * distance,
        ease: 'power2.out',
      });
    };

    window.addEventListener('scroll', () => {
      updateProgress();
      moveText();
    });

    updateProgress(); // Initial update
    moveText(); // Initial animation

    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, [progress]);

  return (
    <div className="relative overflow-hidden">
      <h1 ref={h1Ref} className="text-5xl font-bold">
        {children}
      </h1>
    </div>
  );
};

export default ParallaxText;
