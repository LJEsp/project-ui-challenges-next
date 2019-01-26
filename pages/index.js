import React from "react";
import Link from "next/link";
import Head from "next/head";

import styled, { createGlobalStyle } from "styled-components";
import { Spring } from "react-spring";
import destyle from "../utils/destyle";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const links = [
  {
    href: "/challenges/017-email-receipt",
    title: "Email Receipt",
    date: "January 26, 2019"
  }
];

const PageStyle = createGlobalStyle`
  ${destyle}
  
  body { 
    font-family: 'Montserrat', sans-serif;  
    font-size: 1rem;
    padding: 2em;
  }
`;

const StyledWrapper = styled.div`
  h1 {  
    font-size: 3em;
    margin-bottom: 1em;
  }

  nav div {
    width: 100%;
    max-width: 50em;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-column-gap: 1em;
  }

  a {
    color: #2196F3;
  }
`;

const index = () => {
  return (
    <StyledWrapper>
      <Head>
        <title>Test</title>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
        />
      </Head>

      <PageStyle />

      {/* >>> Content */}

      <h1>UI Challenges</h1>

      <nav>
        {links.map((link, index) => (
          <div>
            <span>Day {index + 1}</span>

            <Link key={link.href} href={link.href}>
              <a>{link.title}</a>
            </Link>

            <span>{link.date}</span>
          </div>
        ))}
      </nav>
    </StyledWrapper>
  );
};

export default index;
