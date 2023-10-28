import Image from 'next/image';
import React from 'react';

import SaintCrispin from '@/public/assets/images/saint_crispin.png';

import FadeInUp from './FadeInUp';

function TheName() {
  return (
    <div>
      <section className="dark-content top-row-padding bottom-row-padding bg-cmgray">
        <h1 className="medieval text-red-800">
          Crispin was a roman family name derived
        </h1>
        <h1 className="medieval text-red-800">
          from the latin Crispus or the merry one.
        </h1>

        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <FadeInUp>
              <h1>The Name</h1>
            </FadeInUp>

            <div className="flex items-center justify-center py-32">
              <Image src={SaintCrispin} alt="Crispin Mårtens" />
            </div>
            <FadeInUp>
              <p>
                The most famous bearer of the name was Saint Crispin, a
                3rd-century Roman who along with his brother Crispinian is the
                patron of shoemakers. Both were popular saints in England during
                the Middle Ages.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TheName;
