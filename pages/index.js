import React from "react";
import Link from "next/link";

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
