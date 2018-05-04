import React, { Component } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';


const FooterStyle = styled.div`
  height: 8vh;
  width: 100vw;
  background: -webkit-linear-gradient(#faff00, #ff0036);
  -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 auto;
  z-index: 1;
  margin-right: 20px;
    font-family: 'The Girl Next Door', cursive;
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
          <h2> ©</h2><h3>2018</h3>
          <SocialIcon url="https://www.linkedin.com/in/courtney-lowery52916" />
            <SocialIcon className='git' url="https://github.com/clowery52916" color='black'/>
              <SocialIcon url="https://mail.google.com/mail/u/0/"/>
                <SocialIcon  url="https://twitter.com/Clowery5183"/>
          <h3>Atlanta, GA</h3>
        </FooterStyle>
      </div>
    );
  }
}

export default Footer;
