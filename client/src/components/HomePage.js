import React, {Component} from "react";
import styled from "styled-components";
import {Button} from "semantic-ui-react";
import GridExampleCelled2 from "./GridExampleCelled2";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Carousel from 'nuka-carousel';

const LandingImage = styled.div `
  display: flex;
    background-image: url(https://i.imgur.com/BnXEhCk.jpg&auto=format&fit=crop&w=1950&q=80);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

  @media (max-width: 320px) {
     display: none;
       background-image: url(https://i.imgur.com/BnXEhCk.jpg&auto=format&fit=crop&w=1950&q=80);
   }
`;
const HomeContainer = styled.div `
  height: 100vh;
  width: 100vw;
  ${'' /* margin-left: 25em; */}
  background-size:contain;
  background-position: center;
  background-image: url(https://i.imgur.com/BnXEhCk.jpg&auto=format&fit=crop&w=150&q=80);
 background-repeat: no-repeat;
 @media (max-width: 220px) {
    display: none;
  }
`;

const LandingText = styled.div `

  width:100vw;
  padding:10px;
  font-family: 'Destain', cursive;
  font-size: 100px;
  text-align:center;
  background: -webkit-linear-gradient(#006C84, #FFCCBB);
 -webkit-background-clip: text;
-webkit-text-fill-color: transparent;
h2 {
  color: white;
}
`;
const image1 = "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/32683125_2146991755529808_6223058851969630208_o.jpg?_nc_cat=0&oh=aeb1a6e69ccc67edb0396387427e4c46&oe=5B822986&auto=format&fit=crop&w=800&q=60";
const image2 = "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/18623401_1971234419772210_5888313411426508302_o.jpg?_nc_cat=0&oh=8551ec1f6b0eade6eace9a1fcba17b4b&oe=5B8F0850&auto=format&fit=crop&w=800&q=60";
const image3 = "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10247413_1481550415407282_654150860472308275_n.jpg?_nc_cat=0&oh=8232141cedeb0fdf05d7d1335bbb1c52&oe=5B9809BF&auto=format&fit=crop&w=800&q=60";

class HomePage extends Component {

  render() {
    return (


<div>
  <HomeContainer>
<LandingImage/>
</HomeContainer>
      {/* <div id="parallax-container">
        <section>
          <div class="parallax-one">
            <Fade top="top">
              <LandingText>
                <h2>
                <a href='/projects'>APPLICATIONS
                </a></h2>
              </LandingText>
            </Fade>
          </div>

        <br/>
        <div id="parallax-container">

            <div class="parallax-two">
              <h2><a href='/about'>GET TO KNOW ME</a></h2>
            </div>

        </div>
        <br/>
        <br/>
        <div id="parallax-container">

            <div class="parallax-three">
              <h2><a href='/genba-on-the-go'>PRODUCT</a></h2>
            </div>

        </div>
        <br/>
        <br/>
        <div id="parallax-container">

            <div class="parallax-four">
              <h2><a href='/contact'>CONNECT</a></h2>
            </div>
          </div>
          </section>
        </div> */}
        {/* <div id="parallax-container">
        <section>
          <div class="block">
            <p>
              <span class="first-character atw">F</span>orrest Gump G.I. Joe Walker, Texas Ranger I did not have sexual relations with that woman. The south will rise again Uncle Sam roll that beautiful bean footage. Manifest destiny unilateral military action trail of tears 187 on an undercover cop. Tea party Santorum Thomas Jefferson ask not what your country can do for you, ask what you can do for your country. Philly cheese steak this is what we call the Muppet Show tombstone piledriver. John Wayne war of northern aggression bleed red white and blue Oprah. Coalition of the willing climate change denial day that will live in infamy. Grassy knoll y’all Japanese internment git ‘er done blonde haired, blue eyed Jesus. Nothing to fear but fear itself in god we trust crippling obesity epidemic.</p>
            <p class="line-break margin-top-10"></p>
            <p class="margin-top-10">Stars and stripes Liberty Bell Richard “Tricky Dick” Nixon Forrest Gump ain't my first rodeo. Tom Cruise Marlboro if the glove don’t fit you must acquit coalition of the willing. That dog’ll hunt slavery smallpox blanket trail of tears Santorum freedom isn’t free. Dwayne “The Rock” Johnson I did not have sexual relations with that woman Uncle Sam. Walker, Texas Ranger Fox News live free or die hard climate change denial security council veto. G.I. Joe John Wayne yes we can didn’t inhale Budweiser little bighorn free market war of northern aggression. Who shot JR? y’all come back now, hear Oprah propane and propane accessories CNN’s ratings are down.</p>

          </div>
        </section>
      </div>
        <section>
          <div class="block">
            <p>
              <span class="first-character atw">B</span>ulk data collection Kentucky bourbon roll that beautiful bean footage Buddy Christ Uncle Sam. Who shot JR? ain't my first rodeo don’t mess with Texas if you dont like it you can git out. Mama grizzly landed on the moon Tippecanoe and Tyler too this is what we call the Muppet Show. The south will rise again if the glove don’t fit you must acquit Jerry Springer NASA Japanese internment. Trix are for kids Fox Mulder didn’t inhale tombstone piledriver freedom fries day that will live in infamy.</p>
            <p class="line-break margin-top-10"></p>
            <br/>
 */
        }

        {/*

           <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/15304150_1882746025287717_2896792020856309222_o.jpg?_nc_cat=0&oh=08f537b59ad3f524ab5778658e94dda2&oe=5B826BA9&text=Our Ranch" onClick='/home' />
           <img src="https://images.unsplash.com/photo-1519941970202-b1883164af02?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c793cdd74995ec35bcd03fe19e2db8c5&auto=format&fit=crop&w=800&q=60" />
           <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
           <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
           <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
           <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
         </Carousel>
         <Paper square elevation={0}>
           <Typography>{tutorialSteps.label}</Typography>
         </Paper>  */
        }
        {/* <br/>
            <p class="line-break margin-top-10"></p>
            <p class="margin-top-10">
              <span class="first-character atw">I</span>McDonalds coalition of the willing It's only half time NASCAR tea party propane and propane accessories. Day that will live in infamy series of tubes I am not a crook nothing to fear but fear itself Harriet Tubman. Santorum smallpox blanket mama grizzly Philly cheese steak deep-dish trail of tears liberty American justice. Yes we can Supreme Commander Allied Forces Europe Eisenhower bleed red white and blue Richard “Tricky Dick” Nixon. Wardrobe malfunction KFC Double Down slavery hot dog who shot JR? safe for democracy apple pie 40 acres and a mule. Can you hear me now? tombstone piledriver Fox News Fox Mulder Dwayne “The Rock” Johnson unilateral military action. Marlboro vast right-wing conspiracy Japanese internment roll that beautiful bean footage don’t mess with Texas. Live free or die hard Uncle Sam truck nutz Harriet Tubman Kentucky bourbon Brett Favre John Wayne. Freedom fries yes we can mama grizzly I wanna be like Mike little bighorn if you dont like it you can git out. Walker, Texas Ranger y’all moonshine Dwayne “The Rock” Johnson Philly cheese steak tea party git ‘er done. Freedom isn’t free Fox Mulder that dog’ll hunt 187 on an undercover cop security council veto. Crippling obesity epidemic unconstitutional I did not have sexual relations with that woman Mr. Gorbachev, tear down this wall. Marlboro the south will rise again NASA 40 acres and a mule Westboro Baptist Church these colors don’t run. Who shot JR? United we stand Jerry Springer don’t mess with Texas this is what we call the Muppet Show.</p>
          </div>
        </section> */
        } {/* </div>
    </div> */
        }
          </div>
        );
  }
}

export default HomePage;
