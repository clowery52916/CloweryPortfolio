import React, {Component} from "react";
import styled from "styled-components";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Flash from 'react-reveal/Flash';
import SidebarRightSlideOut from './SidebarRightSlideOut'


const Logo = styled.img `
  max-height: 50px;



`;

const Nav = styled.div `
height: 10vh;
width: 100vw;
${'' /* background: -webkit-linear-gradient(#faff00, #ff0036);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent; */}
${'' /* display: flex; */}
${'' /* justify-content: space-between; */}
align-items: center;


  border-bottom: .9px solid white;
  font-family: 'The Girl Next Door', cursive;
  font-size: 8px;
a {
color: black;
    text-decoration: none;
}
`;

const LinkContainer = styled.div `


`;

const LinkMargin = styled.div `


`;

const LogoFlex = styled.div `
display: flex;


`

class Navbar extends Component {
  render() {
    return (<Nav>
      <Logo src='https://i.imgur.com/Uyyc0sI.jpg' alt='logo'/>
      <div class="circle">
        <div class="content">
        <Link to="/">Home</Link>
        <br/>
        <Link to="/projects">Projects</Link>
        <br/>
            <Link to='/about' > About</Link>
            <br/>
        <Link to='resume'>Resume</Link>

  </div>
</div>
<img class="splatter" src="http://static.indigoimages.ca/2015/shop/orange-paint-splatter.png"/>
    </Nav>);
  }
}

export default Navbar
