import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const LandingImage = styled.img `
  overflow: scroll;
  height:100vh;
  width: 100vw;
  object-fit: contain;
  display: flex;
  align-items:center;
`;

const Main = styled.div`
  background-image: url(https://media.istockphoto.com/photos/paint-splash-on-a-white-background-picture-id578561164?k=6&m=578561164&s=612x612&w=0&h=ZaghNzVXkcTQmoByFzmfHoSZJF1Tx8jlUr3yKVS9T-o=);
  background-size: cover;
  width:100vw;
  height:100vh;
  background-repeat: no-repeat;

`

class Resume extends Component {

  render() {
    return (<div >
      <Main>
      <LandingImage src='https://i.imgur.com/CKOE7MN.jpg' width={700} alt='resume'/>
</Main>
    </div>);
  }

}

export default Resume;
