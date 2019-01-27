import React from "react";
import Link from "next/link";
import Head from "next/head";

import styled, { createGlobalStyle } from "styled-components";
import destyle from "../utils/destyle";

const links = [
  {
    href: "https://ljesp-project-ui-challenges-1.netlify.com/001/login",
    day: "Day 1",
    challenge: "Sign Up",
    title: "Sentiment",
    date: "December 26, 2018"
  },
  {
    href: "https://ljesp-project-ui-challenges-1.netlify.com/002",
    day: "Day 2",
    challenge: "Credit Card Checkout",
    title: "Orbital Skies",
    date: "January 3, 2019"
  },
  {
    href: "https://ljesp-project-ui-challenges-1.netlify.com/003",
    day: "Day 3",
    challenge: "Landing Page",
    title: "Blind Box",
    date: "January 4, 2019"
  },
  {
    href: "https://ljesp-project-ui-challenges-1.netlify.com/004",
    day: "Day 4",
    challenge: "Calculator",
    title: "Calculatey",
    date: "January 4, 2019"
  },
  {
    href: "https://ljesp-project-ui-challenges-1.netlify.com/005/login",
    day: "Day 5",
    challenge: "App Icon",
    title: "Trevert",
    date: "January 5, 2019"
  },
  {
    href: "https://ljesp-project-ui-challenges-1.netlify.com/006",
    day: "Day 6",
    challenge: "User Profile",
    title: "Elecy",
    date: "January 6, 2019"
  },
  {
    href: "https://ljesp-project-ui-challenges-1.netlify.com/007",
    day: "Day 7",
    challenge: "Settings",
    title: "",
    date: "January 8, 2019"
  },
  {
    href: "https://ljesp-project-ui-challenges-1.netlify.com/008",
    day: "Day 8",
    challenge: "404",
    title: "Payapa",
    date: "January 10, 2019"
  },
  {
    href: "https://ljesp-project-ui-challenges-1.netlify.com/009",
    day: "Day 9",
    challenge: "Music Player",
    title: "Granite",
    date: "January 10, 2019"
  },
  {
    href: "https://ljesp-project-ui-challenges-1.netlify.com/010",
    day: "Day 10",
    challenge: "Social Share",
    title: "",
    date: "January 13, 2019"
  },
  {
    href: "https://ljesp-project-ui-challenges-1.netlify.com/011/login",
    day: "Day 11",
    challenge: "Flash Message",
    title: "",
    date: "January 14, 2019"
  },
  {
    href: "https://ljesp-project-ui-challenges-1.netlify.com/012",
    day: "Day 12",
    challenge: "E-Commerce Shop",
    title: "Ample",
    date: "January 17, 2019"
  },
  {
    href: "https://ljesp-project-ui-challenges-1.netlify.com/013",
    day: "Day 13",
    challenge: "Direct Messaging",
    title: "Dusk",
    date: "January 21, 2019"
  },
  {
    href: "https://ljesp-project-ui-challenges-1.netlify.com/014",
    day: "Day 14",
    challenge: "Countdown Timer",
    title: "Game of Thrones Season 8 Countdown",
    date: "January 23, 2019"
  },
  {
    href: "https://ljesp-project-ui-challenges-1.netlify.com/015",
    day: "Day 15",
    challenge: "On/Off Switch",
    title: "",
    date: "January 23, 2019"
  },
  {
    href: "https://ljesp-project-ui-challenges-1.netlify.com/016",
    day: "Day 16",
    challenge: "Pop-Up/Overlay",
    title: "",
    date: "January 24, 2019"
  },
  {
    href: "/challenges/017-email-receipt",
    day: "Day 17",
    challenge: "Email Receipt",
    title: "Moonglide",
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
        {links.map((link, index) => (
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
