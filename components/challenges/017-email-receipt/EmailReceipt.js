import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import destyle from "../../../utils/destyle";

const PageStyle = createGlobalStyle`
  ${destyle}    
`;

const StyledEmailReceipt = styled.div``;

const EmailReceipt = () => {
  return (
    <StyledEmailReceipt>
      <PageStyle />

      {/* >>> Content */}

      <span>EmailReceipt</span>
    </StyledEmailReceipt>
  );
};

export default EmailReceipt;
