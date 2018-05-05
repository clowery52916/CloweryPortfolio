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
  overflow: scroll;
`;
const HomeContainer = styled.div `
  text-align: center;
  overflow-y: scroll;
 height: 100vh;
 width: 100vw;
 background-repeat: no-repeat;

`;

const LandingText = styled.div `
  margin:margin-left;
  text-align: center;
  border-radius: 1px;
  padding: 40px;
  font-family: 'Cookie', cursive;
  font-size: 36px;
 background: -webkit-linear-gradient(#faff00, #ff0036);
 -webkit-background-clip: text;
-webkit-text-fill-color: transparent;
h2 {
  color: white;
}
`;
const LandingSubText = styled.div `
margin-left: auto;
  padding: 100px;
  text-align: center;
  font-family: 'Satisfy', cursive;
  font-size: 40px;
  color: white;

`
const BodyContent = styled.div `
  width: 75vw;
  height: 100vh;
  text-align: center;
  margin: 20px auto;

`;

class HomePage extends Component {

  render() {
    return (<HomeContainer>

      <div class="video-background">
    <div class="video-foreground">
      <iframe width="854" height="480" src="https://www.youtube.com/embed/pGbIOC83-So?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=pGbIOC83-So" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    </div>
    <div id="vidtop-content">
    <div class="vid-info">
      <LandingImage>
        <Fade left="left">
          <LandingText>
            <h1>
              Let's make something beautiful....<br/> together
            </h1>
          </LandingText>
        </Fade>
      </LandingImage>
    </div>
    </div>
    </HomeContainer>);
  }
}

export default HomePage;
