import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { IconContext } from 'react-icons';

export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <link
              rel='apple-touch-icon'
              sizes='180x180'
              href='/apple-touch-icon.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='/favicon-32x32.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='16x16'
              href='/favicon-16x16.png'
            />
            <link rel='manifest' href='/site.webmanifest' />
            <link
              rel='mask-icon'
              href='/safari-pinned-tab.svg'
              color='#5bbad5'
            />
            <meta name='msapplication-TileColor' content='#da532c' />
            <meta name='theme-color' content='#ffffff' />

            <script
              async
              src='https://www.googletagmanager.com/gtag/js?id=G-GH9Z9P5D9P'
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-GH9Z9P5D9P');`
              }}
            ></script>
          </Head>

          <body>
            <script src='noflash.js' />

            <Main />

            <NextScript />
          </body>
        </Html>
      </IconContext.Provider>
    );
  }
}
