import Image from 'next/image';
import React from 'react';

import Crispin from '@/public/assets/images/crispin_martens.png';

import FadeInUp from './FadeInUp';

function Hero() {
  return (
    <div>
      <section className="dark-content bottom-row-padding bg-cmgray">
        <div className="flex h-screen">
          <div className="m-auto">
            <div className="gap-48 md:flex">
              <div className="w-full md:w-3/12">
                <FadeInUp>
                  <h1 className="text-5xl md:text-9xl">Crispin Mårtens</h1>

                  <p>
                    Is a designer solving problems through technology and data.
                  </p>
                </FadeInUp>
              </div>
              <div className="w-full md:w-9/12">
                <div className="flex items-center justify-center">
                  <Image src={Crispin} alt="Crispin Mårtens" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
