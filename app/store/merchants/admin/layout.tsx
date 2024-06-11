import { PropsWithChildren } from 'react';
import Header from './components/header';
import SideBar from './components/side-nav';

const MerchantLayOut = ({ children }: PropsWithChildren) => {
  return (
    <div className='bg-gray-50'>
      <section className='grid grid-cols-[15rem,1fr]'>
        <SideBar />
        <article>
          <Header />
        </article>
        <article>{children}</article>
      </section>
    </div>
  );
};
export default MerchantLayOut;
