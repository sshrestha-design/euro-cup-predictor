import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import MatchList from './components/MatchList';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Auth setUser={setUser} />
        </Route>
        <Route path="/">
          {user ? <MatchList /> : <Auth setUser={setUser} />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
