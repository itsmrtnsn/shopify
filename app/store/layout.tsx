import { PropsWithChildren } from 'react';
import NavBar from './components/NavBar';

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      {children}
    </div>
  );
};
export default layout;
