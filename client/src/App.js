import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import styled from "styled-components";
import Projects from './components/Projects';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const Flex = styled.div `
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  background-color: red;
  color: #EAEAEA;
`;

class App extends Component {
  render() {
    return (<Router>

      <div>
        <Flex>
            <Route exact="exact" path="/" componenet={HomePage}/>
            <Route exact="exact" path="/projects" component={Projects}/>

          <HomePage/>
        </Flex>
      </div>
    </Router>);
  }
}

export default App;
