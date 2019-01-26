import React from "react";
import Link from "next/link";
import Head from "next/head";

import styled from "styled-components";
import { Spring } from "react-spring";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const links = [
  {
    href: "/challenges/017-email-receipt",
    title: "Email Receipt"
  },

  {
    href: "/challenges/018",
    title: "18"
  }
];

const index = () => {
  return (
    <div>
      <Head>
        <title>Test</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {links.map(link => (
        <Link key={link.href} href={link.href}>
          <a>{link.title}</a>
        </Link>
      ))}

      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => <Title style={props}>Test</Title>}
      </Spring>
    </div>
  );
};

export default index;
