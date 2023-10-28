import { gsap } from 'gsap';
import type { ReactNode } from 'react';
import React, { useLayoutEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface SliceAnimationProps {
  children: ReactNode;
}

const SliceAnimation: React.FC<SliceAnimationProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useLayoutEffect(() => {
    if (inView && ref.current) {
      const parentElement = ref.current;
      const lineElements = parentElement.querySelectorAll('div');

      gsap.from(lineElements, {
        opacity: 0,
        y: 20,
        stagger: 0.5,
        ease: 'power2.inOut',
      });
    }
  }, [inView]);

  return (
    <div
      ref={(element) => {
        ref.current = element;
        inViewRef(element);
      }}
    >
      {children}
    </div>
  );
};

export default SliceAnimation;
