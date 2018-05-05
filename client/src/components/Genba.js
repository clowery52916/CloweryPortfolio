import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components'

const Conatiner = styled.div`
overflow-y: scroll;
height: 100vh;
width: 100vw;
background-repeat: no-repeat;
`
const Plug = styled.div `
height:50vh;
width: 50vw;
align-self:flex-end;

  text-align: center;
  font-family: 'The Girl Next Door', cursive;
  font-size: 20px;
  h1{
font-family: 'The Girl Next Door', cursive;
    background: -webkit-linear-gradient(#faff00, #ff0036);
     -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }


`
const Text = styled.div`
float: right;
`


export default class Genba extends Component {

  render() {
    return (
<Conatiner>
              <Plug>
                <h1>Genba On The Go</h1>
                <Carousel autoPlay>
                  <div>
                    <img src="https://i.imgur.com/YTAEVlUm.jpg" />
        <p className="legend">Legend 1</p>
                  </div>
                  <div>
                    <img src="https://i.imgur.com/j1hlczNm.jpg" />
        <p className="legend">Legend 2</p>
                  </div>
                  <div>
                    <img src="https://i.imgur.com/Y7H2Aflm.jpg" />
        <p className="legend">Legend 3</p>
                  </div>
                  <div>
                    <img src="https://i.imgur.com/2SD0Pa2m.jpg" />
        <p className="legend">Legend 4</p>
                  </div>
                  <div>
                    <Image src="https://i.imgur.com/KpH7tt4m.jpg" />
        <p className="legend">Legend 5</p>
                  </div>
                </Carousel>
              </Plug>
              <Text>
              <h2>$150</h2>
              <p>dEfficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar.
<br/>Jelly-o sesame snaps halvah croissant oat cake cookie. Cheesecake bear claw topping. Chupa chups apple pie carrot cake </p>
              </Text>
              </Conatiner>
    );
  }

}
