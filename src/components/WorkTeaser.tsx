/* eslint-disable */
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Placeholder from '@/public/assets/images/pf.png';

import SliceAnimation from './SliceAnimation';

function WorkTeaser() {

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const sectionRef2 = useRef(null);
  const triggerRef2 = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);
  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef2.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef2.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);
  return (
    <div>
      {/* new added */}
      <section className="scroll-section-outer">

        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner">
            <div className="scroll-section">
              <Image src={Placeholder} alt="Crispin Mårtens - Portfolio" />
            </div>
            <div className="scroll-section">
              <Image src={Placeholder} alt="Crispin Mårtens - Portfolio" />
            </div>
            <div className="scroll-section">
              <Image src={Placeholder} alt="Crispin Mårtens - Portfolio" />
            </div>
            <div className="scroll-section">
              <Image src={Placeholder} alt="Crispin Mårtens - Portfolio" />
            </div>
          </div>
        </div>
      </section>
      <div className="py-72 md:text-center">
        <div className="mx-auto max-w-7xl">
          <SliceAnimation>
            <h1>
              Designer and Frontend Developer with +10 years of experience
              at the crossroads of design, technology and business.
            </h1>
          </SliceAnimation>
        </div>
      </div>

      <section className="scroll-section-outer">

        <div ref={triggerRef2}>
          <div ref={sectionRef2} className="scroll-section-inner">
            <div className="scroll-section">
              <Image src={Placeholder} alt="Crispin Mårtens - Portfolio" />
            </div>
            <div className="scroll-section">
              <Image src={Placeholder} alt="Crispin Mårtens - Portfolio" />
            </div>
            <div className="scroll-section">
              <Image src={Placeholder} alt="Crispin Mårtens - Portfolio" />
            </div>
            <div className="scroll-section">
              <Image src={Placeholder} alt="Crispin Mårtens - Portfolio" />
            </div>
          </div>
        </div>
      </section>

      {/* end of new added  */}
      {/* <section className="dark-content bottom-row-padding overflow-hidden bg-cmgray">
        <div className="md:mx-48">
          <div className="flex gap-48">
            <Image src={Placeholder} alt="Crispin Mårtens - Portfolio" />
            <Image src={Placeholder} alt="Crispin Mårtens - Portfolio" />
            <Image src={Placeholder} alt="Crispin Mårtens - Portfolio" />
            <Image src={Placeholder} alt="Crispin Mårtens - Portfolio" />
          </div>
          <div className="py-72 md:text-center">
            <div className="mx-auto max-w-7xl">
              <SliceAnimation>
                <h1>
                  Designer and Frontend Developer with +10 years of experience
                  at the crossroads of design, technology and business.
                </h1>
              </SliceAnimation>
            </div>
          </div>
          <div className="flex gap-48">
            <Image src={Placeholder} alt="Crispin Mårtens - Portfolio" />
            <Image src={Placeholder} alt="Crispin Mårtens - Portfolio" />
            <Image src={Placeholder} alt="Crispin Mårtens - Portfolio" />
            <Image src={Placeholder} alt="Crispin Mårtens - Portfolio" />
          </div>
        </div>
      </section> */}


    </div>
  );
}

export default WorkTeaser;
