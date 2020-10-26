import React from "react";
import { Helmet } from "react-helmet";

function SEO({ title, description, canonical }) {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>{title}</title>
        <meta
          name="description"
          content={description ?? "Sai Sandeep Vaddi's blog posts."}
        />
        <meta name="author" content="Sai Sandeep Vaddi" />
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          href="/assets/android-chrome-192x192.png"
          sizes="192x192"
        />
        <link
          rel="icon"
          type="image/png"
          href="/assets/android-chrome-512x512.png"
          sizes="512x512"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/assets/apple-touch-icon.png"
        />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>
    </React.Fragment>
  );
}

export default SEO;
