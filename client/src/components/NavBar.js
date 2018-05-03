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
background-color: black;
color: white;
display: flex;
justify-content: space-between;
align-items: center;
flex: 1 0 auto;
z-index: 1;
margin-right: 20px;
  border-bottom: .9px solid white;
  font-family: 'The Girl Next Door', cursive;
  font-size: 22px;
a {
color: white;
  margin: auto;
    text-decoration: none;
}
`;

const LinkContainer = styled.div `
  display: flex;
  margin-right: 10px;
`;

const LinkMargin = styled.div `
  margin: 10px;

`;

const LogoFlex = styled.div `
display: flex;


`

class Navbar extends Component {
  render() {
    return (<Nav>
      {/* https://www.designfreelogoonline.com/wp-content/uploads/2014/12/00574-Industry-Gear-logo-design-free-logos-online-01.png */}
      <Logo src='https://i.imgur.com/Uyyc0sI.jpg' alt='logo'>
      {/* <Logo src='https://i.imgur.com/AT6oyJl.jpg' alt='logo'> */}
  </Logo> {/* site name goes here */}
      {/* <Flash>
        <h3>Website under construction</h3>
      </Flash> */}
      <div>

        <LinkContainer>
          <LinkMargin>
            <Link to="/">Home</Link>
          </LinkMargin>
          <LinkMargin>
            <Link to="/projects">Projects</Link>
            {/* link to map page */}
          </LinkMargin>
          <LinkMargin>
                <Link to='/about' > About</Link>
          </LinkMargin>
          <LinkMargin>
            <Link to='resume'>
              Resume</Link>
          </LinkMargin>
        </LinkContainer>

      </div>
    </Nav>);
  }
}

export default Navbar
