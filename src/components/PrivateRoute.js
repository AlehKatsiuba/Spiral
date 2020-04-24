import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function PrivateRoute({ redirectTo = '/login', ...rest }) {
  const isLoggedIn = useSelector(store => store.authorisation.loggedIn);
  return isLoggedIn ? <Route {...rest} /> : <Redirect to={redirectTo} />
}