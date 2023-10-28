import gsap from 'gsap';
import React, { useEffect, useState } from 'react';

const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';

    // Calculate the time for each percentage increment (5 seconds / 100)
    const timePerPercent = (5 * 1000) / 100;

    // Update progress every timePerPercent milliseconds
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => Math.min(prevProgress + 1, 100));
    }, timePerPercent);

    // Clear the progress interval after 5 seconds
    setTimeout(() => {
      clearInterval(progressInterval);
    }, 5000);

    // GSAP animation to move the h1 tag out of viewport 2 seconds before preloader animation
    const preloader = document.getElementById('preloader');
    const h1 = preloader?.querySelector('h1');

    if (h1) {
      gsap.to(h1, {
        y: '-900',
        opacity: 0,
        duration: 1.8,
        ease: 'power3.out',
        delay: 3, // Move h1 2 seconds before preloader animation (5 - 2 = 3 seconds)
      });
    }

    if (preloader) {
      gsap.to(preloader, {
        y: '-100%',
        duration: 0.8,
        ease: 'power1.out',
        delay: 5, // Delay before preloader animation starts (5 seconds in this case)
        onComplete: () => {
          // Enable scrolling and remove preloader from DOM
          document.body.style.overflow = 'visible';
          preloader.remove();
        },
      });
    }
  }, []);

  return (
    <div
      id="preloader"
      className="preloader dark-content fixed inset-0 flex flex-col items-center justify-center bg-black"
    >
      {/* Your preloader content here */}
      <h1>Loading</h1>
      <h1>{progress}%</h1>
    </div>
  );
};

export default Preloader;
