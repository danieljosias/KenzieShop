import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Cart from '../pages/cart/index'
import Showcase from '../pages/showcase/index'

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
          <Route exact path='/'><Redirect to={{pathname: '/showcase'}}/></Route>
          <Route exact path='/showcase' component={Showcase}></Route>
          <Route exact path='/cart' component={Cart}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;