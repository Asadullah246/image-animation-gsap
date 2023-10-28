import Image from 'next/image';
import React from 'react';

import Studio from '@/public/assets/images/studio.jpg';

function ShortProfile() {
  return (
    <div>
      <section className="top-row-padding bottom-row-padding">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1>Behind The Name</h1>
            <p>Lorem Ipsum Dolor Sit Amet Dolor Sit</p>
          </div>
          <div className="py-24">
            <Image src={Studio} alt="Crispin Mårtens" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShortProfile;
