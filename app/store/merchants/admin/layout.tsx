import { PropsWithChildren } from 'react';
import Header from './components/header';
import SideBar from './components/side-nav';

const MerchantLayOut = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      <section className='grid grid-cols-[13rem,1fr] gap-4'>
        <SideBar />
        {children}
      </section>
    </div>
  );
};
export default MerchantLayOut;
