import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect
  } from "react-router-dom";
import { UserContext } from '../../App';

const PrivateRoute =({ children, ...rest }) =>{
    const [userInfo, setUserInfo] = useContext(UserContext);
    
    return (
      <Route
        {...rest}
        render={({ location }) =>
          userInfo.loggedInEmail ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute;