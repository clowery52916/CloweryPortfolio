import React, {Component} from "react";
import styled from "styled-components";
import {Button, Image} from "semantic-ui-react";
import GridExampleCelled2 from "./GridExampleCelled2";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Fade from 'react-reveal/Fade';
import NavBar from './NavBar'
import { Slide } from 'react-slideshow-image';
import Slider from 'react-styled-carousel';
import { Carousel } from 'react-responsive-carousel';

const LandingImage = styled.div `
  background-image: url("https://media.istockphoto.com/photos/paint-explosion-picture-id170955250?k=6&m=170955250&s=612x612&w=0&h=EdRJNMtUrKY9_lgnv3sCUrozMjs3Ys8g9EJfa12Jg4A=");
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  background-repeat: no-repeat;
  overflow: scroll;
  h1{
  font-family: 'Cookie', cursive;
 background: -webkit-linear-gradient(#faff00, #ff0036);
  -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;
  }
`;
const HomeContainer = styled.div `
  text-align: center;
  ${ ''/* overflow-y: scroll;
  background-color: black;
  color: hsl(353, 28%, 63%); */}
  color:white;

`;

const LandingText = styled.div `
  margin: left;
  padding: 100px;
  text-align: center;
  font-family: 'The Girl Next Door', cursive;
  font-size: 20px;
  color: white;
  float:right;



h2, a {
  color: white;
  text-decoration: none;
}

`;
const LandingSubText = styled.div `
  float: right;
  margin:right;
  padding: 100px;
  text-align: center;
  font-family: 'Vibur', cursive;
  font-size: 20px;
  background: -webkit-linear-gradient(#faff00, #ff0036);
   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

`
const Plug = styled.div `
  margin: right;
  padding: 100px;
  text-align: center;
  font-family: 'The Girl Next Door', cursive;
  font-size: 20px;
  background: -webkit-linear-gradient(#faff00, #ff0036);
   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  float:right;



h2, a {
  background: -webkit-linear-gradient(#faff00, #ff0036);
   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: black;
  text-decoration: none;
}
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
            <Carousel autoPlay>
              <div>
                <img src="https://i.imgur.com/7vBKuOs.jpg?3" />
                <a href="https://drinkdriver.herokuapp.com/">
                <p className="legend">Drink Driver</p>
              </a>
              </div>
              <div>
                <img src="https://i.imgur.com/4Z70NZB.jpg" />
                  <a href="https://squadboxfacialapp.herokuapp.com/">
                <p className="legend">SquadBox</p>
              </a>
              </div>
              {/* <div>
                <img src="https://i.imgur.com/NsNcK8Tm.jpg" />
                <p className="legend">Certification Letter</p>
              </div> */}
              {/* <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
                <p className="legend">Legend 3</p>
              </div>
              <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
                <p className="legend">Legend 4</p>
              </div>
              <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
                <p className="legend">Legend 5</p>
              </div>
              <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
                <p className="legend">Legend 6</p>
              </div>
              <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
                <p className="legend">Legend 7</p>
              </div>
              <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
                <p className="legend">Legend 8</p>
              </div>
              <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
                <p className="legend">Legend 9</p>
              </div>
              <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" />
                <p className="legend">Legend 10</p>
              </div>
              <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-11.jpg" />
                <p className="legend">Legend 11</p>
              </div>
              <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-12.jpg" />
                <p className="legend">Legend 12</p>
              </div>
              <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-13.jpg" />
                <p className="legend">Legend 13</p>
              </div>
              <div>
                <img src="http://lorempixel.com/output/cats-q-c-640-480-14.jpg" />
                <p className="legend">Legend 14</p>
              </div> */}
            </Carousel>
          );



          {/* <h4>
            <a href='https://drinkdriver.herokuapp.com/'>Drink Driver</a>
            <br/>
            <Image src='https://i.imgur.com/tkWVz1vt.png' alt='drinkdriver homepage'/>
          </h4>
          <h4>
            <a href='https://squadboxfacialapp.herokuapp.com/'>SquadBox</a>
            <br/>
            <Image src='https://i.imgur.com/biORAqqt.png' alt='squadbox homepage'/>
          </h4> */}
          {/* <Carousel>
                <div>
                    <img src="https://i.imgur.com/tkWVz1vt.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/biORAqqt.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> */}
          {/* <div class="squad">
      	  <a href="https://squadboxfacialapp.herokuapp.com/">
      		    <span>SquadBox
            </span>
      	  </a>
          </div>
          <br/>
          <div class='dd'>
          <a href="https://drinkdriver.herokuapp.com/">
             <span>DrinkDriver
            </span>
         </a>
         <br/>
         <br/>
      </div> */}

        </LandingText>
        <LandingSubText>
          <h1>Tech Stack</h1>
          <br/>
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
            <br/> {/* <Image src='https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png' alt='express logo'></Image> */}
            <Image src='https://blog-assets.risingstack.com/2016/Apr/Node_js_database_example_PostgreSQL-1461672928728.png' height={75} width={150} alt='postgreSQL logo'></Image>
            <span>{' '}</span>
            <span>{' '}</span>
            <span>{' '}</span>
            <Image alrt='html css js' src='https://cdn-images-1.medium.com/max/1600/1*JS6rHA65p0RKGVLwH2cC4A.png' height={75} width={150}/>
          </div>
          <span>{' '}</span>
          <span>{' '}</span>
          <span>{' '}</span>
        </LandingSubText>
        <Plug>
          <h1>Genba On The Go</h1>
          <Carousel autoPlay>
            {/* <div>
              <img src="https://i.imgur.com/NwVBd1St.jpg" />

              <p className="legend">Binder</p>
            </div> */}
            <div>
              <img src="https://i.imgur.com/SPKxdaMm.jpg" />
              <p className="legend">First Page</p>
            </div>
            <div>
              <img src="https://i.imgur.com/VY1f3Ebm.jpg" />
              <p className="legend">Legend 4</p>
            </div>
            <div>
              <img src="https://i.imgur.com/OKcgSg9m.jpg" />
              <p className="legend">Legend 9</p>
            </div>

            {/* <div>
              <img src="https://i.imgur.com/9vZjqy3m.jpg" />
              <p className="legend">Legend 7</p>
            </div> */}

            {/*










            <div>
              <img src="https://i.imgur.com/uyGSGXam.jpg" />
              <p className="legend">Legend 14</p>
            </div>
            <div>
              <img src="https://i.imgur.com/gQxBJWQm.jpg" />
              <p className="legend">Legend 14</p>
            </div>
            <div>
              <img src="https://i.imgur.com/arpHBItm.jpg" />
              <p className="legend">Legend 14</p>
            </div>
            <div>
              <img src="https://i.imgur.com/epZyhNXm.jpg" />
              <p className="legend">Legend 14</p>
            </div> */}
          </Carousel>
        </Plug>
      </LandingImage>
    </HomeContainer>);
  }
}

export default Projects;
