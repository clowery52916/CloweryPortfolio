import React, {Component} from "react";
import styled from "styled-components";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
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
  font-size: 20px;
a {
color: black;
    text-decoration: none;
}
`;

class Navbar extends Component {
  render() {
    return (<Nav>
      <Menu>


        <a  onClick={this.showSettings} className="menu-item--small" href=""></a>
        <Link to="/">Home</Link>
        <span>{' '}</span>
        <Link to='/about'>
          About</Link>
        <span>{' '}</span>
        <Link to="/projects">Projects</Link>
        <span>{' '}</span>
        <Link to='resume'>Résumé</Link>
        {/* <span>{' '}</span>
        <a to='genba-on-the-go'>Scrum</a> */}
        <span>{' '}</span>
        <Link to='calendar'>Calendar</Link>
      </Menu>
    </Nav>);
  }
}

export default Navbar
