import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Create from './components/create.component';
import Index from './components/index.component';
import Edit from './components/edit.component';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link exact to={'/'} className="navbar-brand">React Crud App</Link>
            <div className="collapse navbar-collapse" id="navabarSupportContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link  to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link  to={'/create'} className="nav-link">Create</Link>
                </li>
                 
              </ul>
            </div>
        </nav><br/>
        <Switch>
          <Route exact  path="/" component= {Index} />
          <Route path="/create" component={Create} />
          <Route path="/edit/:id" component={Edit} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
