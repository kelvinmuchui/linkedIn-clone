import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNetwork from './components/MyNetwork';
import Jobs from './components/Jobs';
function App() {

 
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/login">
            {/* <Login /> */}
          </Route>
          <Route path="/myNetwork">
            <Header />
            <MyNetwork />
          </Route>
          <Route path="/jobs">
            <Header />
            <Jobs />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
