import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import MovieList from './MovieList'
import MovieDetail from './MovieDetail'


const App = () => {

  return (

    <Router>
      <div className="App">
        <header className="App-header">
          <Link to='/'>
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>

        <Switch>
          <Route path='/' component={MovieList} exact/>
          <Route path='/:id' component={MovieDetail} exact/>
        </Switch>
      </div>

    </Router>
  );

}

export default App;


