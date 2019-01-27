import React, { Fragment } from "react";
import EmailReceipt from "../../../components/challenges/017-email-receipt/EmailReceipt";
import Head from "next/head";

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>Email Receipt — UI Challenges | LJEsp</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
        />
      </Head>

      <EmailReceipt />
      {/* <EmailReceipt /> */}
    </Fragment>
  );
};

export default index;
