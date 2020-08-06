import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  path: string;
  isSigned: boolean;
}

export const PrivateRoute = (props: Props) => {
  return (
    <Route
      path={props.path}
      render={() =>
        props.isSigned ? (
          props.children
        ) : (
          <Redirect to={{ pathname: '/login' }}></Redirect>
        )
      }
    ></Route>
  );
};
