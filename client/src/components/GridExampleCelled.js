import React, {Component} from 'react';
import styled from 'styled-components'
import {Grid, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const TextContainer = styled.div`
    font-family: 'Satisfy', cursive;
`
const LandingImage = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const GridExampleCelled = () => (<Grid celled="celled" stackable="stackable">
  <Grid.Row>

    <Grid.Column computer={13}>
      <TextContainer>
      <h1>I'm a full-stack software developer</h1>
      {/* <Link to={`/cities/1`}><h3>See the city.</h3></Link> */}
      {/* <h2>I am a genuinely happy person who loves to drink cold beer and hang out with my husband!
        <br/>
        I love sitting in my hammock, coding and watching nature. I love bird watching.
        <br/>
      I love to travel and explore the world, weather it be in my own back yard or a far off country.
        <br/>
        I have a thirst for knowlege and I am always striving to be the best me I can be.
        <br/>I am not afraid of working hard or taking on new challanges. I once had a job as a crabber. No lie! Best. Job. Ever.
        <br/>I love everything
        <br/>
        I am aware of strengths and I do not get discouraged from weaknesses,
        <br/>
        as they will only lead to future success.
        <br/>I'm so excited to be in an industry where I have the ability to continue to
        <br/>grow and learn new languages and frameworks and build off the skills I have already gained.
        <br/>Let's grab a coffee and discuss how we can can work together.</h2>
      <p>Call me! 470-259-5099 </p> */}
      </TextContainer>
      <Grid.Column computer={3}>

      </Grid.Column>
    </Grid.Column>
  </Grid.Row>
<LandingImage>

  {/* <Image src='https://media.istockphoto.com/photos/colored-smoke-isolated-on-a-black-background-picture-id656386200?k=6&m=656386200&s=612x612&w=0&h=83jjlhSBXp1vY94qcNSh5zNHdqwt8aoK0fWk7jg_vqQ=' width={600} height={600}/> */}

  {/* <Image src='https://i.imgur.com/kmfup2k.jpg' width={400} height={600}/> */}
</LandingImage>
  {/* <Grid.Row> */}
    {/* <Grid.Column computer={3}>
      <LandingImage src='https://images.unsplash.com/photo-150488950631-d557a48f0d30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3e0bbe98f30034814a40c517f9d261b9&auto=format&fit=crop&w=638&q=800'/>
    </Grid.Column>
    <Grid.Column computer={10}> */}
      
    {/* </Grid.Column> */}
    <Grid.Column computer={3}>
      {/* <Image src='https://images.unsplash.com/photo-1506834032040-36f9dcabe7ba?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e7a9c1961a9020d95af82bd7e10dbf93&auto=format&fit=crop&w=500&q=60'/> */}
    </Grid.Column>
  {/* </Grid.Row> */}
</Grid>)

export default GridExampleCelled
