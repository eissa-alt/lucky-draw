import React, { FC } from 'react';
// import Header from './header';
// import Footer from './footer';
// import Main from './main';
import { Toaster } from 'react-hot-toast';
// import Main from './main';

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                                 MAIN LAYOUT                                */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

interface LayoutProps {
   isMiniHeaderFooterLayout?: boolean;
}

const Layout: FC<LayoutProps> = ({ children }) => {
   return (
      <React.Fragment>
         <Toaster toastOptions={{ duration: 4000 }} reverseOrder={true} position="top-center" />
         <div className="test flex h-screen">
            <div className="relative flex w-full flex-1 flex-col">
               {/* hero bg */}
               {/* <Header /> */}
               <main>
                  <div>{children}</div>
               </main>
               {/* <Footer /> */}
            </div>
         </div>
      </React.Fragment>
   );
};

export default Layout;
