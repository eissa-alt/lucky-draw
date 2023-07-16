// import Image from '~/components/shared/image';
// import Image from '~/components/shared/image';
import { Translate } from '~/i18n';
// import { publicUrl } from '~/utils/publicUrl';

/******************************************************************
 *
 *  THIS COMPONENT WAS GENERATED BY NEXTCRAZY-CLI
 *
 ******************************************************************/

const Section3 = () => {
   // const { lang } = useTranslate();
   // const stores = [
   //    {
   //       href: '',
   //       src: `/images/app/${lang}/app_store.png`,
   //       label: 'app store',
   //    },
   //    {
   //       href: '',
   //       src: `/images/app/${lang}/google_play.png`,
   //       label: 'google play',
   //    },
   // ];
   return (
      <section>
         <div className="relative text-center font-light">
            {/* <div className="absolute bottom-0  hidden w-full overflow-hidden    lg:block">
               <div className="relative -z-10 -mr-16 h-[250px] bg-hero-2 bg-contain bg-right-bottom bg-no-repeat"></div>
            </div> */}

            <div className="container md:px-12">
               <div className="row py-5">
                  {/* <div className="col-6 self-center">
                     <div className="h-[83px] w-[190px]">
                        <Image
                           src="/images/sec_logo.png"
                           alt="SEC logo"
                           layout="fill"
                           objectFit="cover"
                           className=""
                        />
                     </div>
                  
                  </div> */}
                  <div className="col-12 self-center">
                     <small className="text-sm text-white">
                        <Translate id="common:app_copyright" /> © {new Date().getFullYear()}
                     </small>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Section3;
