import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from 'styled-components';


const ProductsPage = React.lazy(() => import("app_products/ProductsPage"));
const BillingPage = React.lazy(() => import("app_billing/BillingPage"));
const StyledApp = styled.div`
border:1px solid skyblue;
padding:20px;
margin:20px;
`

const StyledProductsPage=styled.div`
border:1px solid red;
padding:20px;
margin:20px;
`

export function App() {
  return (
    <StyledApp>
      This is the host
      <Router>
      <br/>Routes list:
        <nav>
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/billing">Billing</Link>
            </li>
          </ul>
        </nav>
        <main>
          Components View:
          <Switch>
            <Route path="/billing">
              <React.Suspense fallback="loading">
                <BillingPage />
              </React.Suspense>
            </Route>
            <Route path="/">
              <React.Suspense fallback="loading">
                <StyledProductsPage><ProductsPage /></StyledProductsPage>
              </React.Suspense>
            </Route>
          </Switch>
        </main>
      </Router>
    </StyledApp>
  );

}
