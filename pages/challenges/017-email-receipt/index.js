import React, { Component, Fragment } from "react";
import EmailReceipt from "../../../components/challenges/017-email-receipt/EmailReceipt";
import Head from "next/head";

export class index extends Component {
  render() {
    return (
      <Fragment>
        <Head>
          <title>Email Receipt — UI Challenges | LJEsp</title>
        </Head>

        <EmailReceipt />
      </Fragment>
    );
  }
}

export default index;
