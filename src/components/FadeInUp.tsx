import gsap from 'gsap';
import { useEffect, useRef } from 'react';

interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
}

const FadeInUp: React.FC<FadeInUpProps> = ({ children, delay = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return () => {}; // Return an empty function if !container
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.from(container.children, {
              opacity: 0,
              rotate: 3,
              y: 100,
              duration: 1.8,
              ease: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
              stagger: 0.2, // Adjust stagger for smoother staggered animation
              delay,
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, [delay]);

  return <div ref={containerRef}>{children}</div>;
};

export default FadeInUp;
