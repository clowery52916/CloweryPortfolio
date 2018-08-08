import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const LandingImage = styled.img `
  overflow: scroll;
  height:80vh;
  width: 100vw;
  object-fit: contain;
  display: flex;
  align-items:center;
  @media (max-width: 320px) {
     display: none;
   }
`;

const Main = styled.div `
  background-image: url(https://media.istockphoto.com/photos/paint-splash-on-a-white-background-picture-id578561164?k=6&m=578561164&s=612x612&w=0&h=ZaghNzVXkcTQmoByFzmfHoSZJF1Tx8jlUr3yKVS9T-o=);
  background-size: cover;
  width:100vw;
  height: 100vh;
  background-repeat: no-repeat;
  @media (max-width: 320px) {
     display: none;
   }

`
const TextContainer = styled.div `
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  padding-top: 70px;
  padding-bottom: 30px;
`

class Resume extends Component {

  render() {
    return (<div>
      <Main>
        <TextContainer>Click to Download my Resume</TextContainer>

        <a id='thumbnail' href="https://files.acrobat.com/a/preview/04586ebd-cdd4-4811-9ff1-4f2a1ae9226d" target="_blank" title="Application for Assistance">
          <LandingImage src="https://i.imgur.com/wlEOIH6h.png" width={700} padding={40} alt='resume'/>
        </a>
      </Main>
    </div>);
  }

}

export default Resume;
