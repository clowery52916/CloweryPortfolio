import React, {Component} from "react";
import styled from "styled-components";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Flash from 'react-reveal/Flash';
import SidebarRightSlideOut from './SidebarRightSlideOut'
import { stack as Menu } from 'react-burger-menu'

const Nav = styled.div `
width: 100vw;
@media (max-width: 320px) {
   display: none;
 }
${'' /* // ${ ''/* background: -webkit-linear-gradient(#faff00, #f437b9);
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
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a  className="menu-item" href="/projects">Projects</a>
        <a  className="menu-item" href="/resume">Résumé</a>
        <a  className="menu-item" href="/contact">Contact</a>
        <a  className="menu-item" href="/genba-on-the-go">Genab On The Go</a>
        <a onClick={ this.showSettings } className="menu-item--small" href=""></a>
      </Menu>
      {/* <Logo src='https://i.imgur.com/Uyyc0sI.jpg' alt='logo'/> */}
      {/* <div class="circle">
        <div class="content">
          <Link to="/">Home</Link>
          <span>{' '}</span>
          <Link to='/about'>
            About</Link>
          <span>{' '}</span>
          <Link to="/projects">Projects</Link>
          <span>{' '}</span>
          <Link to='resume'>Résumé</Link>
          <span>{' '}</span> */}
          {/* <Link to='genba-on-the-go'>Scrum</Link> */}


        {/* </div>
      </div>
      <img class="splatter" src="http://static.indigoimages.ca/2015/shop/orange-paint-splatter.png"/> */}
    </Nav>);
  }
}

export default Navbar
