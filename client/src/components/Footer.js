import React, { Component } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

const FooterStyle = styled.div`
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
    border-top: .9px solid white;
    font-family: 'Satisfy', cursive;
  a {
  color: white;
    margin: auto;
      text-decoration: none;
  }
  h5, h4, h2 {
    margin: 20px;
  }
  h2{
    font-family: monospace;
  }
`;

class Footer extends Component {
  render() {
    return (
      <div>
        <FooterStyle>
          <h2> ©</h2><span>2018</span>
          <Link to='https://www.celoweb.design'>Website</Link>
          <h4>Atlanta, GA</h4>
        </FooterStyle>
      </div>
    );
  }
}

export default Footer;
