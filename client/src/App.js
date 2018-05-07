import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import styled from "styled-components";
import Projects from './components/Projects';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Resume from './components/Resume'
import About from './components/About'
import Genba from './components/Genba'
import Contact from './components/Contact'

const Flex = styled.div `
  flex-direction:column;
`;

class App extends Component {
  render() {
    return (<Router>
        <Flex>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/genba-on-the-go' component={Genba}/>
        </Switch>
        <Footer/>
        </Flex>
      </Router>);
  }
}

export default App;
