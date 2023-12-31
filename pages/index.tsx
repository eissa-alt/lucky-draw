import Head from 'next/head';
import { GetServerSideProps } from 'next';
import ssCookies from 'next-cookies';
import transConfig from '~/translation.json';
const { languages, defaultLanguage } = transConfig;

/**************************************************************
 *
 *  THIS PAGE IS ONLY RESPONSIBLE TO REDIRECT TO /[lang] PAGE
 *
 **************************************************************/
const IndexPage = () => {
   return (
      <Head>
         <meta name="robots" content="noindex, nofollow" />
      </Head>
   );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
   const { lang } = ssCookies(ctx);
   const aceeptLanguages = ctx.req.headers['accept-language']?.split(',');
   const highestPriority = String(aceeptLanguages?.[1]?.split(';')[0]);
   const fallback = Object.keys(languages).includes(highestPriority)
      ? highestPriority
      : defaultLanguage;

   ctx?.res?.writeHead(302, { Location: `/${lang || fallback}` });
   ctx?.res?.end();
   return {
      props: {},
   };
};

export default IndexPage;
