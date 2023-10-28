import React from 'react';

import FadeInUp from './FadeInUp';

function CTA() {
  return (
    <div>
      <section className="dark-content top-row-padding bottom-row-padding flex bg-cmgray md:h-screen">
        <div className="m-auto">
          <div className="grid grid-cols-1 gap-72 text-center md:gap-24">
            <FadeInUp>
              <h1 className="text-4xl md:text-9xl">UX Design</h1>
              <h1 className="text-4xl md:text-9xl">Frontend Development</h1>
              <h1 className="text-4xl md:text-9xl">AI Experiments</h1>
            </FadeInUp>
            <p>What is your next goal?</p>
            <div className="flex items-center justify-center">
              <button type="submit">Get in Touch</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CTA;
