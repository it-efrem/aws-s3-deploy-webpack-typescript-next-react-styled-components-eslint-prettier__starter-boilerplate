import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=0"
        />
      </Head>

      <Component {...pageProps} />

      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
               [analytics_js_code]
            `,
        }}
      />
    </>
  );
}
