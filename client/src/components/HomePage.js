import React, {Component} from "react";
import styled from "styled-components";
import {Button} from "semantic-ui-react";
import GridExampleCelled2 from "./GridExampleCelled2";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Fade from 'react-reveal/Fade';
import NavBar from './NavBar'
import Footer from './Footer'

const LandingImage = styled.div `
  display: flex;
  @media (max-width: 320px) {
     display: none;
   }
`;
const HomeContainer = styled.div `
  height: 100vh;
  width: 100vw;
 background-repeat: no-repeat;
 @media (max-width: 320px) {
    display: none;
  }
`;

const LandingText = styled.div `

  width:100vw;
  padding:10px;
  font-family: 'Cookie', cursive;
  font-size: 36px;
  text-align:center;
  background: -webkit-linear-gradient(#faff00, #f02e9c);
 -webkit-background-clip: text;
-webkit-text-fill-color: transparent;
h2 {
  color: white;
}
`;

class HomePage extends Component {

  render() {
    return (<HomeContainer>

      {/* <div className="video-background">
    <div className="video-foreground">
      <iframe width="854" height="480" src="https://www.youtube.com/embed/pGbIOC83-So?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=pGbIOC83-So" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
    </div>
    </div>
    <div id="vidtop-content">
    <div className="vid-info"> */}
      <LandingImage>
        <Fade top="top">
          <LandingText>
            <h1>
              Let's make something beautiful....<br/> together
            </h1>
          </LandingText>
        </Fade>
      </LandingImage>
    {/* </div>
    </div> */}
    </HomeContainer>);
  }
}

export default HomePage;
