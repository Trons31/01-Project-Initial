import { NextPage } from 'next';
import { AppProps } from 'next/app';
import '../styles/globals.css'



type NextPageWihtLayout = NextPage & {
  GetLoyout?: (page : JSX.Element) => JSX.Element;
}

type AppPropsWhitLayout = AppProps & {
  Component: NextPageWihtLayout
}

function MyApp({ Component, pageProps }: AppPropsWhitLayout) {
  
  const GetLoyout = Component.GetLoyout || ((page) => page);

  // return <Component {...pageProps} />
  
  return GetLoyout( <Component {...pageProps} /> )

}

export default MyApp
