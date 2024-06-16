import { PropsWithChildren } from 'react';
import Header from './components/header';
import SideBar from './components/side-nav';

const MerchantLayOut = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <section className='grid grid-cols-[15rem,1fr]'>
        <SideBar />
        <div className='m-5'>{children} </div>
      </section>
    </div>
  );
};
export default MerchantLayOut;
