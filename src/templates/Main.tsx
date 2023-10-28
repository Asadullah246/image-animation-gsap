import type { ReactNode } from 'react';

import Footer from '@/components/Footer';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full  text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto max-w-full">
      <main className="content  text-xl">{props.children}</main>

      <Footer />
    </div>
  </div>
);

export { Main };
