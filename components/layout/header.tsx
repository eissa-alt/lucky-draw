import React from 'react';
import LangSwitcher from '../shared/langSwitcher';
import NProgress from 'nprogress';
import Router from 'next/router';
import useTranslate from '../../i18n/useTranslate';
// import Image from '../shared/image';

const MiniHeader = () => {
   NProgress.configure({
      showSpinner: false,
   });
   Router.events.on('routeChangeStart', () => {
      NProgress.start();
   });
   Router.events.on('routeChangeComplete', () => NProgress.done());
   Router.events.on('routeChangeError', () => NProgress.done());

   const { lang } = useTranslate();

   return (
      <header>
         <div className="container md:px-12">
            <div className="row py-8">
               <div className="col-6 self-center">
                  {/* <div className="h-[83px] w-[190px]">
                     <Image
                        src="/images/sec_logo.png"
                        alt="SSC logo"
                        // width="150"
                        // height="71"
                        layout="fill"
                        objectFit="cover"
                        className=""
                     />
                  </div>
                  <div></div> */}
               </div>
               <div className="col-6 self-center ltr:text-right rtl:text-left">
                  <ul className="">
                     <li className="my-auto">
                        {lang !== 'en' ? (
                           <LangSwitcher href="/en" text="English" />
                        ) : (
                           <LangSwitcher href="/ar" text="العربية" />
                        )}
                     </li>
                  </ul>
               </div>
            </div>
         </div>

         {/* <div className="container">
            <div className="row">
               <div className="px-0 md:col-12 ">
                  <div className="from-30%  via-10% h-1 bg-gradient-to-r from-light-green-500 via-light-blue-500 to-light-blue-100 "></div>
               </div>
            </div>
         </div> */}
      </header>
   );
};

export default MiniHeader;
