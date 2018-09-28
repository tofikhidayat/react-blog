import React, { Component , Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link , BrowserRouter as Router , Route , Switch  } from 'react-router-dom';
import   "./main.js";

class App extends Component {
  render() {
    return (
      <div className="cotainer">
        <Router>
            <Fragment>
            <header className="header">
              <nav className="navbar-parent-row">
                <ul className="navbar-parent">
                  <li className="navbar-list">
                    <Link to="/" className="navbar-link">Home</Link>
                  </li>
                  <li className="navbar-list">
                    <Link to="/about" className="navbar-link">About</Link>
                  </li>
                  <li className="navbar-list">
                    <Link to="/blog" className="navbar-link">Blog</Link>
                  </li>
                </ul>
              </nav>
            </header>
            <Switch>
              <div className="main container">
                <Route    exact path="/"  component={Home}/>
                <Route    path="/about"  component={About}/>
                <Route    path="/blog"  component={Blog}/>
              </div>
            </Switch>
            </Fragment>
        </Router>
      </div>
    );
  }
}

const Home = () =>(
<div>
  <h1 className="text-center">Home</h1>
    <p className="text-center desc-text"> 
     Ini halama home  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
)

const About = () => (
<div>
  <h1 className="text-center">About Page</h1>
  <p className="text-center desc-text"> 

      Ini halaman about Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis noston
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.rud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat n</p>
  </div>
)
const Blog = () => (
  <div>
  <h1 className="text-center">Blog Page</h1>
    <p className="text-center desc-text"> 
     Ini halaman Blog Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum Ini halaman Blog Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
  </div>
  
)

export default App;
