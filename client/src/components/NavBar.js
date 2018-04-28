import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Logo = styled.img`
  max-height: 70px;
  border-radius: 30px;
  margin: 14px;

`;

const Nav = styled.div`
  height: 10vh;
  width: 100vw;
  background-color: #f6fcff;
  color: #020478;
  display: flex;
    font-family: 'Satisfy', cursive;
    font-size: 20px;
  ${'' /* font-family: 'League Script', cursive; */}



  justify-content: space-between;
  align-items: center;
  z-index: 1;
  border-bottom: .9px solid #020478;
  a {
  color: #020478;
    margin: auto;
      text-decoration: none;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  margin-right: 10px;
`;

const LinkMargin = styled.div`
  margin: 10px;

`;

const LogoFlex = styled.div`
display: flex;
margin-left: 10px;
font-family: 'Montserrat', sans-serif;

`

class Navbar extends Component {
  render() {
    return (
      <Nav>
        {/* https://www.designfreelogoonline.com/wp-content/uploads/2014/12/00574-Industry-Gear-logo-design-free-logos-online-01.png */}

<Logo src='https://i.imgur.com/AT6oyJl.jpg' alt='logo'/>
        {/* site name goes here */}
        <div>
          <LinkContainer>
            <LinkMargin>
              <Link to="/projects">Projects</Link>
              {/* link to map page*/}
            </LinkMargin>
            <LinkMargin>
              {/* link to home page*/}
            </LinkMargin>
            <Link to="/">About Me</Link>
            <LinkMargin>
              {/* link to home page*/}
            </LinkMargin>
            <LinkMargin>
              <Link to='/contact'>Contact</Link>
            </LinkMargin>
          </LinkContainer>
        </div>
      </Nav>
    );
  }
}



export default Navbar
