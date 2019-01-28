import React, { Component, Fragment } from "react";
import AnalyticsChart from "../../components/challenges/018-analytics-chart/AnalyticsChart";
import Head from "next/head";

export class index extends Component {
  render() {
    return (
      <Fragment>
        <Head>
          <title>Analytics Chart — UI Challenges | LJEsp</title>
        </Head>

        <AnalyticsChart />
      </Fragment>
    );
  }
}

export default index;
