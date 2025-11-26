import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="Content-Security-Policy" content="frame-src 'self' https: http: data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; connect-src 'self' https:;" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
