import { PropsWithChildren } from 'react';
import Header from './components/header';

const MerchantLayOut = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      <section>{children}</section>
    </div>
  );
};
export default MerchantLayOut;
