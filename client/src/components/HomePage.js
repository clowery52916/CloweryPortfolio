import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";
import GridExampleCelled from "./GridExampleCelled";
import GridExampleCelled2 from "./GridExampleCelled2";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import NavBar from './NavBar'



const LandingImage = styled.div`
  background-image: url("https://www.walldevil.com/wallpapers/w05/colorful-smoke-black-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display: flex;
`;
const HomeContainer = styled.div`
  text-align: center;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: white;
  color: hsl(353, 28%, 63%);
`;

const LandingText = styled.div`
  margin:margin-left
  text-align: center;
  color: vec3(1.0, 1.0, 1.0);
  border-radius: 1px;
  padding: 20px;
  font-family: 'Satisfy', cursive;
  font-size: 30px;
h2 {
  color: white;
}
`;
const LandingSubText = styled.div`
margin-left: auto;
  padding: 100px;
  text-align: center;
  font-family: 'Satisfy', cursive;
  font-size: 20px;
  color: white;

`
const ButtonPadding = styled.div`
  margin: 5px;
`;
const BodyContent = styled.div`
  width: 75vw;
  height: 100vh;
  text-align: center;
  margin: 20px auto;

`;

class HomePage extends Component {

  render() {
    return (
      <HomeContainer>
        <NavBar/>
        <LandingImage>
          <Fade left>
          <LandingText>
            <h1>
            Let's make something beautiful,<br/>
             together.
          </h1>
          </LandingText>
          </Fade>
            {/* <LandingSubText>

            </LandingSubText> */}
            {/* <p>
              If Trump Ipsum weren’t my own words, perhaps I’d be dating it.{" "}
              <br />I was going to say something extremely rough to Lorem Ipsum,<br />{" "}
              to its family, and I said to myself, "I can't do it. <br /> I just
              can't do it. It's inappropriate. It's not nice."
            </p> */}

            {/* <ButtonPadding>
              <Button type="submit">Sign Up</Button>
            </ButtonPadding>
            <ButtonPadding>
              <Button type="submit">Log In</Button>
            </ButtonPadding> */}

        </LandingImage>
{/* <GridExampleCelled/> */}
        {/* <BodyContent> */}
          {/* <GridExampleCelled /> */}
        {/* </BodyContent> */}
      </HomeContainer>
    );
  }
}

export default HomePage;
