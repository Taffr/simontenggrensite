import React from 'react';
import {AppBar, Toolbar, IconButton, Button} from '@material-ui/core/';
import {withTheme} from '@material-ui/core/styles/withTheme';
import MenuIcon from '@material-ui/icons/Menu';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import theme from './theme.js';
import About from './about.js';
import Repos from './repos.js';
import Media from './media.js';

function App() {
  const repos = () => <Repos/>;
  const about  = () => <About/>;
  return (
      <Router>
      <div>
            <AppBar style={theme} position="static">
                <Toolbar variant="dense">
                    <Link to="/" className="App-hitem">
                        <h1 className="App-hitem" align="left" margin="10px"> simontenggren.xyz </h1>
                    </Link>
                    <Link to="/about" className="App-hitem"> 
                        <Button variant="outlined"> About me </Button>
                    </Link>
                    <Link to="/repos" className="App-hitem"> 
                        <Button variant="outlined"> Repos </Button>
                    </Link>
                    <Link to="/media" className="App-hitem"> 
                        <Button variant="outlined">Media</Button>
                    </Link>
                    <Link to="/guestbook" className="App-hitem"> 
                        <Button variant="outlined">Say hi!</Button>
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
                <Route exact path="/media">
                    <Media/>
                </Route>
            </Switch>
        </div>
      </div>
      </Router>
  );
}

export default App;
