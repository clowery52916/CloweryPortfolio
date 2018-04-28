import React, { Component } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

const FooterStyle = styled.div`
  height: 15vh;
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
  h5, h4 {
    margin: 20px;
  }
`;

class Footer extends Component {
  render() {
    return (
      <div>
        <FooterStyle>
          <h5>Copyright 2018</h5>
          <Link to='https://www.celoweb.design'>Website</Link>
          <h4>Atlanta, GA</h4>
        </FooterStyle>
      </div>
    );
  }
}

export default Footer;
