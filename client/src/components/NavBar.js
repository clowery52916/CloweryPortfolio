import React, {Component} from "react";
import styled from "styled-components";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Flash from 'react-reveal/Flash';
import SidebarRightSlideOut from './SidebarRightSlideOut'
import {stack as Menu} from 'react-burger-menu'
import FontAwesomeIcon from 'react-fontawesome'
import {Icons} from 'material-ui'

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


        <a  onClick={this.showSettings} className="menu-item--small" href="/"></a>
        <a href="/">
        <FontAwesomeIcon className="far fa-home"></FontAwesomeIcon><span>{' '}</span>Home</a>
        <span>{' '}</span>
        <a href='/about'>
        <FontAwesomeIcon className="far fa-user"></FontAwesomeIcon><span>{' '}</span>About me</a>
        <span>{' '}</span>
        <a href="/projects"><FontAwesomeIcon className="fas fa-code"></FontAwesomeIcon><span>{' '}</span>Apps</a>
        <span>{' '}</span>
        <a href='resume'><FontAwesomeIcon className="far fa-paperclip"></FontAwesomeIcon><span>{' '}</span>Resume</a>
        {/* <span>{' '}</span>
        <a to='genba-on-the-go'>Scrum</a> */}
        <span>{' '}</span>
        <a href='calendar'><FontAwesomeIcon className="far fa-calendar"></FontAwesomeIcon><span>{' '}</span>Calendar</a>
        {/* <Link to='https://mail.google.com/mail/u/0/#inbox/FMfcgxmZVZDmmSdNCjCflfdpQPdHrklZ?compose=sJwlqpKPQhzgVdHNdQqrzhsHzXncppxPZxRqfPdJTfmhFhZNMhqcgHlbcsNJltfPPrDqBttkrZJlgZXJSQskpCQXCCLxnMqhPTcwndxnBZCCjjjfxtklWmXnRFMbsGxWhpdLcVXmqHXXghrVBJnprQHkLZRJdXsDQ'><FontAwesomeIcon className="far fa-google"><span>{' '}</span>Email me</FontAwesomeIcon></Link> */}
        <a href ='tel:470-259-5099'><FontAwesomeIcon className="far fa-mobile"></FontAwesomeIcon><span>{' '}</span>Call me</a>
        <a href ='sms:470-259-5099'><FontAwesomeIcon className="far fa-comment"></FontAwesomeIcon><span>{' '}</span>Text me</a>
      </Menu>
    </Nav>);
  }
}

export default Navbar
