import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Spinner from "./components/spinner";

const Home = React.lazy(() => import("./pages/home"));
const Cart = React.lazy(() => import("./pages/cart"));
const Checkout = React.lazy(() => import("./pages/checkout"));
const Error = React.lazy(() => import("./pages/error"));

export default function Routes() {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/checkout' exact component={Checkout} />
        <Route path='*' exact component={Error} />
      </Switch>
    </Suspense>
  );
}
