import { DefaultSeo } from 'next-seo'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps}>
      <DefaultSeo {...SEO} />
    </Component>
  )
}
export default MyApp
