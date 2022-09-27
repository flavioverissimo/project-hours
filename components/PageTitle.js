import React from "react";
import Head from "next/head";

const PageTitle = ({ title }) => {
  return (
    <Head>
      <link rel="shortcut icon" href="/logo.png" />
      <title>{title} - Project Hours</title>
    </Head>
  );
};

export default PageTitle;
