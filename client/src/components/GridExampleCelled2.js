import React, { Component } from 'react';

import { Grid, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const TextContainer = styled.div`
    font-family: 'Cookie', cursive;
`
const GridExampleCelled2 = () => (
  <Grid celled stackable>
    <Grid.Row>
      <Grid.Column computer={3}>
        <Image src='https://thumbs.dreamstime.com/t/humo-coloreado-en-un-fondo-negro-52593275.jpg' />
      </Grid.Column>
      <Grid.Column computer={13}>
        <TextContainer>
        <h1>About me</h1>
        {/* <Link to={`/cities/1`}><h3>See the city.</h3></Link> */}
        <p>Lorem Ispum is a choke artist. It chokes! I write the best placeholder text, and
I'm the biggest developer on the web by far... While that's mock-ups and this is
politics, are they really so different? I'm speaking with myself, number one,
because I have a very good brain and I've said a lot of things. Lorem Ispum is a
choke artist. It chokes! You’re disgusting.</p>
<p>I think my strongest asset maybe by far is my temperament. I have a
placeholding temperament. I’m the best thing that ever happened to placeholder
text. You have so many different things placeholder text has to be able to do,
and I don't believe Lorem Ipsum has the stamina.</p>
</TextContainer>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column computer={3}>
        <Image src='https://media.istockphoto.com/photos/colored-smoke-isolated-on-a-black-background-picture-id656383350?k=6&m=656383350&s=612x612&w=0&h=VwnrU-xvCVNzpgANxfDj92FWhKIxj3nUeOBVxTaxvm4=' />
      </Grid.Column>
      <Grid.Column computer={10}>
        <TextContainer>
        <h1>See the City</h1>
        <p>You could see there was text coming out of her eyes, text coming out of her
wherever. Lorem Ipsum's father was with Lee Harvey Oswald prior to Oswald's
being, you know, shot. You have so many different things placeholder text has to
be able to do, and I don't believe Lorem Ipsum has the stamina. I don't think
anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it
was. It could be Russia, but it could also be China. It could also be lots of
other people. It also could be some wordsmith sitting on their bed that weights
400 pounds. Ok?</p>
</TextContainer>
      </Grid.Column>
      <Grid.Column computer={3}>
        <Image src='http://holidayrewards.co/wp-content/uploads/2018/03/cool-colorful-pictures-cool-colorful-graphics-colorful-backgrounds-lg-wallpapers-free-download-colorful-pictures-of-elephants.jpg' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleCelled2
