import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import styled from "styled-components";
import Projects from './components/Projects';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Resume from './components/Resume'

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
        </Switch>
        <Footer/>
        </Flex>
      </Router>);
  }
}

export default App;
