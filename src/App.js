import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Ride from './Components/Ride/Ride';
import SearchDestination from './Components/SearchDestination/SearchDestination';
import Login from './Components/Login/Login';
import SearchResult from './Components/SearchResult/SearchResult';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import SignUp from './Components/SignUp/SignUp';
import Error from './Components/Error/Error';

export const UserContext = createContext();
function App() {
  const [userInfo, setUserInfo] = useState({
    loggedInEmail: '',
    accessToken: '',
    start: '',
    end: '',
    by: ''
  });
  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      <Router>
        <Header></Header>
        <Switch>
          <PrivateRoute path="/Search/:rideType">
            <SearchDestination></SearchDestination>
          </PrivateRoute>
          <Route path="/searchResult">
            <SearchResult></SearchResult>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signUp">
            <SignUp></SignUp>
          </Route>
          <Route exact path="/">
            <Ride></Ride>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
