import React, {Component} from "react";
import styled from "styled-components";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Flash from 'react-reveal/Flash';
import SidebarRightSlideOut from './SidebarRightSlideOut'
import {stack as Menu} from 'react-burger-menu'

const Nav = styled.div `
width: 100vw;
@media (max-width: 320px) {
   display: none;
 }
${ ''/* // ${ ''/* background: -webkit-linear-gradient(#faff00, #f437b9);
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent; */} */}
${ ''/* display: flex; */}
${ ''/* justify-content: space-between; */}
align-items: center;
  font-family: 'The Girl Next Door', cursive;
  font-size: 8px;
a {
color: black;
    text-decoration: none;
}
`;

class Navbar extends Component {
  render() {
    return (<Nav>
      <Menu>
        <br/>
        <br/>
        <br/>
        <a  onClick={this.showSettings} className="menu-item--small" href=""></a>
        <a href="/">Home</a>
        <span>{' '}</span>
        <a href='/about'>
          About</a>
        <span>{' '}</span>
        <a href="/projects">Projects</a>
        <span>{' '}</span>
        <a href='resume'>Résumé</a>
        <span>{' '}</span>
        <a href='genba-on-the-go'>Scrum</a>
      </Menu>
    </Nav>);
  }
}

export default Navbar
