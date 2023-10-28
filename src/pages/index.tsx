import BehindTheName from '@/components/BehindTheName';
import CTA from '@/components/CTA';
import Expertise from '@/components/Expertise';
import GetInTouch from '@/components/GetInTouch';
import Hero from '@/components/Hero';
import ScrollComponent from '@/components/ScrollComponent';
import ShortProfile from '@/components/ShortProfile';
import TheName from '@/components/TheName';
import TopNav from '@/components/TopNav';
import WorkTeaser from '@/components/WorkTeaser';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => (
  <Main
    meta={
      <Meta
        title="Crispin Mårtens - Digital Designer"
        description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
      />
    }
  >
    <ScrollComponent>
      <TopNav />
      {/* 
      <Preloader />
  */}
      <Hero />
      <WorkTeaser />
      <Expertise />
      <ShortProfile />
      <BehindTheName />
      <GetInTouch />
      <TheName />
      <CTA />
    </ScrollComponent>
  </Main>
);

export default Index;
