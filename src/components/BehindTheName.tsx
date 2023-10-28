import Image from 'next/image';
import React from 'react';

import Crispin from '@/public/assets/images/crispin.png';

import FadeInUp from './FadeInUp';

function BehindTheName() {
  return (
    <div>
      <section className="top-row-padding bottom-row-padding">
        <div className="mx-auto max-w-7xl">
          <div className="md:flex">
            <div className="w-full md:w-8/12">
              <p>04</p>
              <FadeInUp>
                <h1>Behind the Name</h1>
                <p>
                  Starting as a hands-on craftsman for user experience and
                  interaction design in 2009 has allowed me to evolve into a
                  multidisciplinary designer for large-scale digital
                  transformation projects.
                </p>
                <p>
                  Leveraging data, technology, and user-centered design at the
                  crossroads of business and strategy, I work with stakeholders
                  to navigate complex challenges to reshape markets and shift
                  culture.
                </p>
              </FadeInUp>
              <h2>Previously:</h2>
              <p>Lorem</p>
              <p>+5 years at</p>
            </div>
            <div className="w-full md:w-8/12">
              <Image src={Crispin} alt="Crispin Mårtens" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BehindTheName;
