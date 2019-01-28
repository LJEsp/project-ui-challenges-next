import React from "react";
import Link from "next/link";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import challenges from "../data/challenges";
import destyle from "../utils/destyle";

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
    grid-template-columns: 4em 1fr auto;
    grid-column-gap: 1em;

    &:not(:last-child) {
      margin-bottom: 1em;
    }

    @media (max-width: 37.4375em) {
      grid-template-rows: auto auto;
      grid-template-columns: 1fr auto;
      grid-row-gap: 0.5em;
    }
  }

  .day {
  }

  .link {
    @media (max-width: 37.4375em) {
      grid-column: 1 / -1;
    }
  }

  .date {
    @media (max-width: 37.4375em) {
      grid-column: 2 / -1;
      grid-row: 1 / 2;
    }
  }

  a {
    color: #2196f3;

    &:link {
      color: #2196f3;
    }

    &:hover {
      color: #1565c0;
    }

    &:active {
    }

    &:visited {
      color: #9c27b0;
    }
  }
`;

const index = () => {
  return (
    <StyledWrapper>
      <Head>
        <title>UI Challenges | LJEsp</title>
      </Head>

      <PageStyle />

      {/* >>> Content */}

      <h1>UI Challenges</h1>

      <nav>
        {challenges.map((link, index) => (
          <div key={index}>
            <span className="day">{link.day}</span>

            <Link prefetch key={link.href} href={link.href}>
              <a className="link" target="_blank">
                {link.challenge}{" "}
                {link.title ? <span>&mdash; "{link.title}"</span> : null}
              </a>
            </Link>

            <span className="date">{link.date}</span>
          </div>
        ))}
      </nav>
    </StyledWrapper>
  );
};

export default index;
