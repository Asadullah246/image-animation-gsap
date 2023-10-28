import Image from 'next/image';
import React from 'react';

import ExperienceDesign from '@/public/assets/images/experience_design.png';
import Frontend from '@/public/assets/images/frontend_development.png';
import Data from '@/public/assets/images/ml_data.png';

function Expertise() {
  return (
    <div>
      <section className="light-content top-row-padding bottom-row-padding mx-8 md:mx-24">
        <div className="text-center">
          <p>02</p>
          <h1>Areas of Expertise</h1>
        </div>

        <div className="grid grid-cols-1 gap-24 pt-32 md:grid-cols-3">
          <div>
            <Image
              src={ExperienceDesign}
              alt="Crispin Mårtens"
              className="mb-5"
            />
            <h2 className="text-black">Experience Design</h2>
            <p>
              End-to-end design of user experiences: from ideation through
              workshops and design thinking methodologies, to prototyping and
              designing high fidelity UI systems and interaction patterns.
            </p>
          </div>
          <div>
            <Image src={Frontend} alt="Crispin Mårtens" className="mb-5" />
            <h2 className="text-black">Frontend Development</h2>
            <p>
              Building responsive web applications, interactive websites and
              functional prototypes with web technologies such as Angular, Vue
              and React.
            </p>
          </div>
          <div>
            <Image src={Data} alt="Crispin Mårtens" className="mb-5" />
            <h2 className="text-black">Data & Machine Learning</h2>
            <p>
              Leveraging data and machine learning to individualize user
              experience, visualize complex data and automate workflows.
            </p>
          </div>
          <div />
        </div>
      </section>
    </div>
  );
}

export default Expertise;
