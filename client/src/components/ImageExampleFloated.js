import React from 'react'
import {Segment, Image} from 'semantic-ui-react'
import styled from 'styled-components'
import NavBar from './NavBar'
import Footer from './Footer'

const ImageOne = styled.img `
  height: 100%;
  width: 40vw;
  float: left;
  padding:none;
  border-collapse: separate;
  @media (max-width: 320px) {
     display: none;
   }

`
const HeadingConatiner = styled.div `
h1{
  text-align: center
  font-family: 'Cookie', cursive;
  font-size: 40px;
  background: -webkit-linear-gradient(#f02e9c, #faff00);
  -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;
 @media (max-width: 320px) {
    display: none;
  }
  h3{
font-size:20px;
  }
}
`
const BodyContainer = styled.div `
  font-family: 'The Girl Next Door', cursive;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color:black;
    text-align: center;
    padding: inherit;
    background: linear-gradient(to top, rgba(250, 255, 0, .5), rgba(240, 46, 156,1));
    font-weight: bold;
  justify-content:center;
  @media (max-width: 320px) {
     display: none;
   }
    span{
      font-size: 12px;
    }
    h4{
      font-family: 'Cookie', cursive;
      font-size: 25px;
      color: black;
  ${'' /* background: -webkit-linear-gradient( #faff00, rgb(240, 46, 156));
      -webkit-background-clip: text;
     -webkit-text-fill-color: transparent; */}

    }


`
const Main = styled.div `
    height: 100%;
`



const ImageExampleFloated = () => (  <div>
  <Main>


    <ImageOne src='https://i.imgur.com/7TQHKlD.jpg'/>
    <BodyContainer>

      <br/>
      <HeadingConatiner>

        <h1>Hello</h1>
        <h3>I am a full-stack Software Developer</h3>
      </HeadingConatiner>
      <h4>Who am I?</h4>
      <p>
        Hello there, I'm Courtney! I am a curious developer with a passion for learning. I love my life, I love to travel, I love my husband, and most of all, I want to make the world a better place through technology.<br/>
        I am a beer connoisseur. I enjoy going to beer festivals with my husband in my spare time along with shows at The Fox, concerts, movies, and going on new adventures. I love to create things, whether it be in the development world, or in my own backyard. I have a passion for building things, refinishing old furniture and just creating something unique. I am also an avid animal lover and nature lover! This is my prettiest girl, Roxy.</p>
      <Image src='https://i.imgur.com/YWNzG7Rt.jpg' size='small'/><br/>
      <span>(Is she not the cutest pup you have ever seen!)</span>
      <br/>
      <h4>Who am I as a developer?</h4>
      <p>
        I thoroughly enjoy back-end development, but I am proficient on the front-end side as well. I really love problem solving and breaking things down step by step. I love being a part of an industry that is a team. I love knowing that if there is a problem I am having trouble solving, someone has been there before me, and are always more than willing to guide me in the right direction. Currently I am using my skills as a developer, building websites for non-profit organizations, while working on some of my own passion projects. Please feel free to check them out on my project page. They are still a work in progress, but I am so excited to be building them and hope to make them into something truly amazing.
        <br/>
        I am looking for a full-time position with a company that I can call my forever home, so if you are interested and think I may be a good fit for your team, please reach out! I would love to hear from you. I am also willing to have a mentor, or work on some projects with my fellow devs, so if there is anything I can help with, give me a call!
        <br/>Thank you so much for visiting! I hope to hear from you soon! Have an amazing day!!
      </p>
      <h6>If you are a non-profit organization, in need of a developer, please email me or call me to discuss how I may be of service.
      </h6>
      {/* <ImageThree src='https://i.imgur.com/QDOBXiV.jpg' size='small' floated='right' /> */}

    </BodyContainer>

</Main>
</div>

)

export default ImageExampleFloated
