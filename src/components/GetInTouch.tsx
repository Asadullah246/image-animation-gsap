import Image from 'next/image';
import React from 'react';

import ContactImage from '@/public/assets/images/contact.png';

import FadeInUp from './FadeInUp';

function GetInTouch() {
  return (
    <div>
      <section className="top-row-padding bottom-row-padding">
        <div className="text-center">
          <FadeInUp>
            <h1>Get in Touch</h1>
            <p>
              For the first time of getting in touch with me, I am reachable via
              <a href="https://de.linkedin.com/in/crispin-m%C3%A5rtens-16b3963b">
                <mark>LinkedIn</mark>
              </a>
              or an old fashioned
              <a href="mailto:crispin@crispinmartens.ch">
                <mark>Email</mark>
              </a>
              .
            </p>
          </FadeInUp>
        </div>
        <div className="flex items-center justify-center">
          <Image src={ContactImage} alt="Crispin Mårtens" />
        </div>
      </section>
    </div>
  );
}

export default GetInTouch;
