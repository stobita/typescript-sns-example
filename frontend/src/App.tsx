import React, { useState, Dispatch, SetStateAction } from 'react';
import './App.css';
import { PostList } from './components/PostList';
import { Login } from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { Signup } from './components/Signup';

type UserContextProps = {
  token: string;
  isSigned: boolean;
  setToken: Dispatch<SetStateAction<string>>;
  setIsSigned: Dispatch<SetStateAction<boolean>>;
};
export const UserContext = React.createContext<UserContextProps>({
  token: '',
  isSigned: false,
  setToken: () => {},
  setIsSigned: () => {},
});

function App() {
  const [isSigned, setIsSigned] = useState(false);
  const [token, setToken] = useState('');
  return (
    <div className="App">
      <UserContext.Provider value={{ isSigned, setIsSigned, token, setToken }}>
        <Router>
          <Switch>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <PrivateRoute path="/" isSigned={isSigned}>
              <PostList></PostList>
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
