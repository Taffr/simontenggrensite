import React from 'react';
import {AppBar, Toolbar, Button} from '@material-ui/core/';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import theme from './theme.js';
import About from './about.js';
import Repos from './repos.js';
import Home from './home.js';

function App() {
  return (
      <Router>
      <div>
            <AppBar style={theme} position="static">
                <Toolbar>
                    <Link to="/" className="App-hitem">
                        <h1 className="App-hitem" align="left" margin="10px"> simontenggren </h1>
                    </Link>
                    <Link to="/about" className="App-hitem"> 
                        <Button variant="outlined"> About me </Button>
                    </Link>
                    <Link to="/repos" className="App-hitem"> 
                        <Button variant="outlined"> Repos </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        <div>
            <Switch>
                <Route exact path="/repos">
                    <Repos/>
                </Route>
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
           </Switch>
        </div>
      </div>
      </Router>
  );
}

export default App;
