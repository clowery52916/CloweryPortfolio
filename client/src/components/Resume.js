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
  background-image: url('https://ak7.picdn.net/shutterstock/videos/13665977/thumb/4.jpg?i10c=img.resize(height:160)');
background-size: cover;
width:100vw;
height:100vh;
  background-repeat: no-repeat;

`

class Resume extends Component {

  render() {
    return (<div >
      <Main>

      {/* <Image src='https://i.imgur.com/QDOBXiV.jpg' width={400} height={400} alt='picture of me'/>
    <div>About me lksdlkajsljdalkjsldjaljsss</div> */
      }
      <LandingImage src='https://i.imgur.com/CKOE7MN.jpg' width={700} alt='resume'/>
</Main>
    </div>);
  }

}

export default Resume;
