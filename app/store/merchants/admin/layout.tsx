import { PropsWithChildren } from 'react';
import Header from './components/header';
import SideBar from './components/side-nav';

const MerchantLayOut = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <section className='grid grid-cols-[15rem,1fr]'>
        <SideBar />
        <div>
          <article>
            <Header />
          </article>
          <article className='mx-5 my-3'>{children}</article>
        </div>
      </section>
    </div>
  );
};
export default MerchantLayOut;
