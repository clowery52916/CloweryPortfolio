import React, {Component} from "react";
import styled from "styled-components";
import {Button} from "semantic-ui-react";
import GridExampleCelled2 from "./GridExampleCelled2";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Fade from 'react-reveal/Fade';
import NavBar from './NavBar'


const LandingImage = styled.div `
  background-image: url("https://www.walldevil.com/wallpapers/w05/colorful-smoke-black-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  image-resolution: from-image;
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow: scroll;
`;
const HomeContainer = styled.div `
  text-align: center;
  overflow-y: scroll;
  background-color: black;
  color: hsl(353, 28%, 63%);


`;

const LandingText = styled.div `
  margin:margin-left
  text-align: center;
  color: vec3(1.0, 1.0, 1.0);
  border-radius: 1px;
  padding: 20px;
  font-family: 'Cookie', cursive;
  font-size: 40px;
h2 {
  color: white;
}
`;
const LandingSubText = styled.div `
margin-left: auto;
  padding: 100px;
  text-align: center;
  font-family: 'Satisfy', cursive;
  font-size: 20px;
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
      <LandingImage>
        <Fade left="left">
          <LandingText>
            <h1>
              Let's make something beautiful,<br/>
              together.
            </h1>

          </LandingText>
        </Fade>
      </LandingImage>
    </HomeContainer>);
  }
}

export default HomePage;
