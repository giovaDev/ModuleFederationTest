import React from "react";
import styled from 'styled-components';

const StyledBillingPage = styled.div`
border:1px solid red;
padding:20px;
margin:20px;
`

export default function BillingPage() {
  return (
    <StyledBillingPage>
      <h1>this is the Billing Page</h1>
    </StyledBillingPage>
  );
}
