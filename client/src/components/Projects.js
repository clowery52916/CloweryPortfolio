import React, {Component} from "react";
import styled from "styled-components";
import {Button} from "semantic-ui-react";
import GridExampleCelled2 from "./GridExampleCelled2";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import '../App.css'


const LandingImage = styled.div `
  background-image: url("https://images.unsplash.com/photo-1483153597167-15375b89a20e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4c58a71f3c71525ceea94ee24c7d899e&auto=format&fit=crop&w=1053&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display: flex;
`;
const HomeContainer = styled.div `
  text-align: center;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #151515;
  color: #EAEAEA;
`;

const LandingText = styled.div `
  margin: auto;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  color: #EAEAEA;
  border-radius: 10px;
  ${'' /* font-family: 'Fira Sans', sans-serif, italic, ; */}


  LandingText.h1 {
    font-size: 40px;


  }
`;
const ButtonPadding = styled.div `
  margin: 5px;
`;
const BodyContent = styled.div `
  width: 75vw;
  height: 100vh;
  text-align: center;
  margin: 20px auto;

`;

class Projects extends Component {

  render() {
    return (<HomeContainer>
      <LandingImage>
        <LandingText>
          <h1>My Work</h1>
          <p>
          Take a look at some of my projects!
          </p>

          {/* <ButtonPadding>
            <Button type="submit">Sign Up</Button>
          </ButtonPadding>
          <ButtonPadding>
            <Button type="submit">Log In</Button>
          </ButtonPadding> */}
        </LandingText>
      </LandingImage>

      <BodyContent>
        <GridExampleCelled2/>
      </BodyContent>
    </HomeContainer>);
  }
}

export default Projects;
