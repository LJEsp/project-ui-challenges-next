import React, { Fragment } from "react";
import EmailReceipt from "../../../components/challenges/017-email-receipt/EmailReceipt";
import Head from "next/head";

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>Email Receipt — UI Challenges | LJEsp</title>
      </Head>

      <EmailReceipt />
    </Fragment>
  );
};

export default index;
