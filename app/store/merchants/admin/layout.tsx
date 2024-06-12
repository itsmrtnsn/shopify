import { PropsWithChildren } from 'react';
import Header from './components/header';
import SideBar from './components/side-nav';

const MerchantLayOut = ({ children }: PropsWithChildren) => {
  return (
    <div className='bg-white'>
      <section className='grid grid-cols-[15rem,1fr]'>
        <SideBar />
        <div>
          <article>
            <Header />
          </article>
          <article className='m-5'>{children}</article>
        </div>
      </section>
    </div>
  );
};
export default MerchantLayOut;
