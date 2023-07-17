import { GetServerSideProps } from 'next';
import { Fragment } from 'react';
import { NextSeo } from 'next-seo';
import useTranslate from '../../../i18n/useTranslate';
import DrawSections from '~/components/draw/draw-sections';

type DrawProps = {
   id: string;
};
const Draw = ({ id }: DrawProps) => {
   const { translate } = useTranslate();

   return (
      <Fragment>
         <NextSeo
            title={translate({ id: 'meta:title' })}
            description={translate({ id: 'meta:desc' })}
         />
         <DrawSections id={id} />
      </Fragment>
   );
};

/*******************************************************************
 *
 *  THIS PAGE IS USING SERVER SIDE RENDERING WITH getServerSideProps
 *
 *******************************************************************/

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
   // It's better to use getServerSideProps than statically generating pages for not found :O
   // const query = context?.query;
   // const { lang, category, token } = context.params as IParams;

   return {
      props: {
         // category: query.category || null,
         id: query.id || null,
      },
   };
};
export default Draw;
