import React, { FC } from 'react';
import Header from './header';
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
               {/* <div className="absolute inset-0  hidden w-full overflow-hidden lg:block">
                  <div className="relative -z-10 -mr-16 h-[450px] bg-lines-top bg-contain bg-left-top bg-no-repeat"></div>
               </div>
               <div className="absolute bottom-0  hidden w-full overflow-hidden    lg:block">
                  <div className="relative -z-10 -mr-16 h-[250px] bg-lines-bottom bg-contain bg-right-bottom bg-no-repeat"></div>
               </div> */}
               <Header />
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
