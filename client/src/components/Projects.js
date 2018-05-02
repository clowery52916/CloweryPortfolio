import React, {Component} from "react";
import styled from "styled-components";
import {Button, Image } from "semantic-ui-react";
import GridExampleCelled2 from "./GridExampleCelled2";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Fade from 'react-reveal/Fade';
import NavBar from './NavBar'


const LandingImage = styled.div `
  background-image: url("https://images.unsplash.com/photo-1513005862547-c6071dd39fa9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd31a4d729941131c32432fffb7e1bf3&auto=format&fit=crop&w=3000&q=1000&h=1600");
  background-size: cover;
  background-repeat: no-repeat;
  overflow: scroll;
`;
const HomeContainer = styled.div `
  text-align: center;
  ${'' /* overflow-y: scroll;
  background-color: black;
  color: hsl(353, 28%, 63%); */}
  color:white;

`;

const LandingText = styled.div `
margin-right: auto;
  padding: 100px;
  text-align: center;
  font-family: 'Satisfy', cursive;
  font-size: 20px;
  color: white;
float:right;

h2, a {
  color: white;
  text-decoration: none;
}
`;
const LandingSubText = styled.div `
margin-left: auto;
  padding: 100px;
  text-align: center;
  font-family: 'Satisfy', cursive;
  font-size: 20px;
  color: white;
float: left;

`
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
        <br/>
        <h4>
          <a href='https://drinkdriver.herokuapp.com/'>Drink Driver</a>
          <br/>

          <a href='https://squadboxfacialapp.herokuapp.com/'>SquadBox</a>      </h4>
    </LandingText>
<br/>
<LandingSubText>
          <h1>Tech Stack</h1>

          <div>
            <div>
              <Image alt='react logo' src='https://spin.atomicobject.com/wp-content/uploads/20171016145535/ReactJS.png' height={50} width={150}/> {/* //AngularJS: 'https://lh6.googleusercontent.com/-TlY7amsfzPs/T9ZgLXXK1cI/AAAAAAABK-c/Ki-inmeYNKk/w800-h800/AngularJS-Shield-large.png', */}
              <Image alt='Redux' src='https://i1.wp.com/technoetics.in/wp-content/uploads/2016/11/reduxlogo.png?fit=500%2C206' height={60} width={200}></Image>
            </div>
            <br/>
            <div>
              <Image alt='ruby on rails logo' src='http://www.codercaste.com/wp-content/uploads/2013/03/railslogo.png' height={100} width={100}/>
              <Image alt='Ruby' src='http://www.goldenowl.asia/assets/banner-ruby-6a3952edc79e76c5f76fe43de54ca98a6f4df3db7e423c5886902f72d25b80f4.png' height={100} width={150}></Image>
              <Image alt='Rails' src='http://jmyersdev.com/images/rails.png' height={100} width={100}></Image>
            </div>
            <br/>
            <div>
            <Image alt='mongoDB' src='https://webassets.mongodb.com/_com_assets/cms/MongoDB-Logo-5c3a7405a85675366beb3a5ec4c032348c390b3f142f5e6dddf1d78e2df5cb5c.png' height={75} width={100}></Image>
            <span>{' '}</span>
            <span>{' '}</span>
            <span>{' '}</span>
            <span>{' '}</span>
            <span>{' '}</span>
            <Image alt='express logo' src='http://mean.io/wp-content/themes/twentysixteen-child/images/express.png' height={50} width={100}/>
            <span>{' '}</span>
            <span>{' '}</span>
            <span>{' '}</span>
            <span>{' '}</span>
            <span>{' '}</span>
            <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2000px-Node.js_logo.svg.png' height={50} width={100} alt='nodejs logo'></Image>
            <span>{' '}</span>
            <span>{' '}</span>
            <span>{' '}</span>
            </div>
            <br/>
            {/* <Image src='https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png' alt='express logo'></Image> */}
            <Image src='https://blog-assets.risingstack.com/2016/Apr/Node_js_database_example_PostgreSQL-1461672928728.png' height={75} width={150} alt='postgreSQL logo'></Image>
            <span>{' '}</span>
            <span>{' '}</span>
            <span>{' '}</span>
            <Image alrt='html css js' src='https://cdn-images-1.medium.com/max/1600/1*JS6rHA65p0RKGVLwH2cC4A.png' height={75} width={150} />
          </div>
          <span>{' '}</span>
          <span>{' '}</span>
          <span>{' '}</span>
          </LandingSubText>


      </LandingImage>
    </HomeContainer>);
  }
}

export default Projects;
